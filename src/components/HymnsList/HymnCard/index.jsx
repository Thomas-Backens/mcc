import styles from './index.module.css';
import { Clock, ChevronRight } from 'lucide-react';
import moment from 'moment';

const HymnCard = ({ hymn, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.hymnInfo}>
        <div className={styles.hymnNumber}>
          <h2>{hymn.id}</h2>
        </div>
        <div className={styles.hymnTitle}>
          <h2>{hymn.title}</h2>
          <div className={styles.lastSang}>
            <h4>Last sang: {hymn.lastSang ? moment(hymn.lastSang).format("MMM Do YYYY") : 'Never'}</h4>
            {hymn.logHistory.length > 0 && <div className={styles.pill}>
              <h4>{hymn.logHistory.length} time{hymn.logHistory.length > 1 ? 's' : ''}</h4>
            </div>}
          </div>
        </div>
      </div>
      <div className={styles.hymnActions}>
        {hymn.lastSang && moment().diff(moment(hymn.lastSang), 'months') < 1 && (
          <div className={styles.errorPill}>
            <Clock
              size={16}
              color={"var(--error)"}
            />
            <h5>Sang recently</h5>
          </div>
        )}
        <ChevronRight
          className={styles.chevron}
          size={20}
          color={"var(--light-grey)"}
        />
      </div>
    </div>
  )
}

export default HymnCard
