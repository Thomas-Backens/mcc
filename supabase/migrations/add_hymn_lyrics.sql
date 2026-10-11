-- Hymn lyrics: run this once in the Supabase SQL editor.

-- 1. Columns on Hymns to point at the uploaded lyrics file
alter table public."Hymns"
  add column if not exists lyrics_path text,
  add column if not exists lyrics_file_type text;

-- 2. Public storage bucket for lyrics files (anyone can view, 25MB max per file)
insert into storage.buckets (id, name, public, file_size_limit)
values ('hymn-lyrics', 'hymn-lyrics', true, 26214400)
on conflict (id) do update set public = true, file_size_limit = 26214400;

-- 3. Storage policies: anyone can read, only admins can upload / replace / delete
create policy "Anyone can view hymn lyrics"
  on storage.objects for select
  using (bucket_id = 'hymn-lyrics');

create policy "Admins can upload hymn lyrics"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'hymn-lyrics'
    and exists (select 1 from public."Admins" a where a.id = auth.uid())
  );

create policy "Admins can update hymn lyrics"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'hymn-lyrics'
    and exists (select 1 from public."Admins" a where a.id = auth.uid())
  );

create policy "Admins can delete hymn lyrics"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'hymn-lyrics'
    and exists (select 1 from public."Admins" a where a.id = auth.uid())
  );

-- 4. Allow admins to update Hymns rows (needed to set / clear lyrics_path).
--    Skip this if an update policy for admins already exists on Hymns.
create policy "Admins can update hymns"
  on public."Hymns" for update to authenticated
  using (exists (select 1 from public."Admins" a where a.id = auth.uid()))
  with check (exists (select 1 from public."Admins" a where a.id = auth.uid()));
