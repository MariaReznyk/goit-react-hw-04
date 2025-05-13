import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './data/contacts.json';
import PageHeader from './components/PageHeader/PageHeader';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [contactList, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactList));
  }, [contactList]);

  function handleAdd(newContact) {
    setContactList(prev => [
      ...prev,
      {
        id: nanoid(),
        name: newContact.contactName,
        number: newContact.phoneNumber,
      },
    ]);
  }

  function handleDelete(id) {
    setContactList(prev => prev.filter(prev => prev.id !== id));
  }

  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Section>
      <Container>
        <PageHeader task={'Phonebook'}>Homework #3</PageHeader>
      </Container>

      <Container>
        <ContactForm onClickSubmit={handleAdd} />
      </Container>

      <Container>
        <SearchBox value={filter} handleSearch={setFilter} />
      </Container>

      <Container>
        <ContactList
          contactList={filteredContacts}
          onClickDelete={handleDelete}
        ></ContactList>
      </Container>
    </Section>
  );
}

export default App;
