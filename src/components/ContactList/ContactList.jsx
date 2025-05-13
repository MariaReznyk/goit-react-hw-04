import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contactList, onClickDelete }) {
  return (
    <ul>
      {contactList.map(contact => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClickDelete={onClickDelete}
          />
        );
      })}
    </ul>
  );
}
