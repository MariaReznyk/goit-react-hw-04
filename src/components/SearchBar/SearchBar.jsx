import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const searchInput = event.target.elements.search.value;
    if (searchInput.trim() === '') {
      window.alert('Type what you want to find');
    } else {
      onSubmit(searchInput);
    }
    event.target.reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        autoFocus
        placeholder="Search images and photos"
        name="search"
      />
      <button className={styles.button} type="submit">
        <FiSearch size="20px" />
      </button>
    </form>
  );
}
