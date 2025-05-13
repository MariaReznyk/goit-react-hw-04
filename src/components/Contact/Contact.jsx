import styles from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';

export default function Contact({ id, name, number, onClickDelete }) {
  return (
    <li className={styles.contactItem}>
      <div>
        <p className={styles.contactString}>
          <IoPersonSharp /> {name}
        </p>
        <p className={styles.contactString}>
          <FaPhone /> {number}
        </p>
      </div>
      <button
        className={styles.btnDelete}
        type="button"
        onClick={() => onClickDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}
