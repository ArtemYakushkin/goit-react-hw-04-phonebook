import { nanoid } from "nanoid";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Container, Section, Title, TitleContact } from "./App.styled";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    setContacts(prevState => [newContact, ...prevState]);
  };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  }

  const deteleContact = id => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== id)
    );
  };

  const normaliseLowerCase = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normaliseLowerCase));

  return (
    <Container>
      <Title>Phonebook</Title>
      <Section>
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section>
        <TitleContact>Contacts</TitleContact>
        <Filter value={filter} onChangeFilter={onChangeFilter} />
        <ContactList contacts={visibleContacts} del={deteleContact} />
      </Section>
    </Container>
  );
};

export default App;
