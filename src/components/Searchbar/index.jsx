import styles from "./index.module.css";
import { Search, X } from "lucide-react";

const Searchbar = ({ value, placeholder, onChange, flex }) => {
  return (
    <div className={styles.searchbar} style={{ maxWidth: flex ? "100%" : undefined }}>
      <Search className={styles.searchIcon} size={20} color={"var(--light-grey)"} />
      <input className={styles.searchbarInput} type="text" placeholder={placeholder} value={value} onChange={onChange} />
      {value && <button className={styles.searchbarButton}>
        <X className={styles.cancelIcon} size={20} color={"var(--light-grey)"} onClick={() => onChange({ target: { value: "" } })} />
      </button>}
    </div>
  )
}

export default Searchbar
