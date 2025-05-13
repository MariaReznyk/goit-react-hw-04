import styles from './SearchBox.module.css';

export default function SearchBox({ value, handleSearch }) {
  return (
    <div className={styles.searchWrapper}>
      <label className={styles.label} htmlFor="searchInputId">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        name="searchInput"
        id="searchInputId"
        value={value}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
}
