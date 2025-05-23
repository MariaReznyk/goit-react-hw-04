import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
