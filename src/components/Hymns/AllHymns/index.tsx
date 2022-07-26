import React, {
  useState,
  ReactElement,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Box } from "@material-ui/core";
import Hymn from "./Hymn";
import EditModal from "./Hymn/Edit";
import PinModal from "./Hymn/Pin";
import QuickAddModal from "./Hymn/QuickAdd";
import { mutate } from "swr";
import fetcher from "../../../Utils/fetcher";

interface EditValues {
  name: string;
  number: number;
}

interface PasswordValues {
  password: string;
}

interface QuickAddValues {
  name: string;
  date: string;
}

interface HymnValues {
  name: string;
  number: number;
}

interface LogValues {
  id: number;
  logged: string;
  bywho: string;
}

interface AllHymnsProps {
  filter: string;
  hymnData: HymnValues[];
  logData: LogValues[];
  setHymns: Dispatch<SetStateAction<HymnValues[]>>;
  setLogs: Dispatch<SetStateAction<LogValues[]>>;
}

const AllHymns: React.FC<AllHymnsProps> = ({
  filter,
  hymnData,
  logData,
  setHymns,
  setLogs,
}: AllHymnsProps): ReactElement => {
  const [data, setData] = useState<HymnValues>({
    name: "",
    number: 0,
  });
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [pinModalOpen, setPinModalOpen] = useState<boolean>(false);
  const [quickAddModalOpen, setQuickAddModalOpen] = useState<boolean>(false);

  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/hymn")
      .then((response) => response.json())
      .then((hymn_data) => setHymns(hymn_data.hymns));
    fetch("/api/log")
      .then((response) => response.json())
      .then((log_data) => setLogs(log_data.logs));
  }, [setHymns, setLogs]);

  const openEditModal = (values: HymnValues) => {
    setEditModalOpen(true);
    setPinModalOpen(true);
    setData(values);
  };
  const openQuickAddModal = (values: HymnValues) => {
    setQuickAddModalOpen(true);
    setPinModalOpen(true);
    setData(values);
  };

  const editHymn = (values: EditValues) => {
    mutate("/api/hymn", async () => {
      const editedHymn = await fetcher("/api/hymn", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: data.number,
          newNumber: values.number,
          newName: values.name,
        }),
      });

      let newLogs = logData.filter((log) => log.id === data.number);

      if (values.number === data.number) {
        editedHymn.number = data.number;
      } else {
        newLogs.forEach((newLog) => {
          newLog.id = values.number;
        });
      }

      editedHymn.name = values.name;
      setHymns([
        ...hymnData.filter((hymn) => hymn.number !== data.number),
        editedHymn,
      ]);
      setLogs([...logData.filter((log) => log.id !== data.number)]);
    });
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };

  const quickAddHymn = (values: QuickAddValues) => {
    mutate("/api/log", async () => {
      const addedLog = await fetcher("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data.number,
          bywho: values.name,
          logged: values.date,
        }),
      });

      setLogs([...logData, addedLog]);
    });
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  if (hymnData[0].number === 999 || logData[0].id === 999) {
    return (
      <>
        <EditModal
          open={editModalOpen}
          handleClose={() => setEditModalOpen(false)}
          data={data}
          editMutation={editHymn}
        />
        <QuickAddModal
          open={quickAddModalOpen}
          handleClose={() => setQuickAddModalOpen(false)}
          quickAddMutation={quickAddHymn}
        />
      </>
    );
  }

  const filteredHymns = hymnData.filter(
    (hymn) =>
      hymn.name.toLowerCase().includes(filter.toLowerCase()) ||
      hymn.number.toString().includes(filter)
  );

  const filteredLogs = (hymnId: number) => {
    const flogs = logData.filter((log) => log.id === hymnId);

    return flogs;
  };

  const checkPassword = (values: PasswordValues) => {
    setIsPasswordCorrect(values.password === "rahab" ? true : false);
    setPinModalOpen(false);
  };

  const closeEdit = () => {
    setPinModalOpen(false);
    setEditModalOpen(false);
    setIsPasswordCorrect(false);
  };
  const closeQuickAdd = () => {
    setPinModalOpen(false);
    setQuickAddModalOpen(false);
    setIsPasswordCorrect(false);
  };

  return (
    <>
      <EditModal
        open={editModalOpen && isPasswordCorrect}
        handleClose={closeEdit}
        data={data}
        editMutation={editHymn}
      />
      <PinModal
        open={pinModalOpen}
        handleClose={() => setPinModalOpen(false)}
        isCorrect={(values) => checkPassword(values)}
      />
      <QuickAddModal
        open={quickAddModalOpen && isPasswordCorrect}
        handleClose={closeQuickAdd}
        quickAddMutation={quickAddHymn}
      />
      <Box display="flex" justifyContent="center" flexDirection="column">
        {filteredHymns.sort().map((hymn) => (
          <Hymn
            name={hymn.name}
            number={hymn.number}
            logs={filteredLogs(hymn.number)}
            handleEdit={() => openEditModal(hymn)}
            handleQuickAdd={() => openQuickAddModal(hymn)}
            key={hymn.number}
          />
        ))}
      </Box>
    </>
  );
};

export default AllHymns;
