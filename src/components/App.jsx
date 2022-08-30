import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Container, Section, Title, TitleContact } from "./App.styled";

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const exploredContacts = JSON.parse(contacts);

    if (exploredContacts) {
      this.setState({ contacts: exploredContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (data) => {
    const { name, number } = data;
    const { contacts } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onChangeFilter = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  deteleContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {

    const { contacts, filter } = this.state;
    const normaliseLowerCase = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normaliseLowerCase));

    return (
      <Container>
        <Title>Phonebook</Title>
        <Section>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section>
          <TitleContact>Contacts</TitleContact>
          <Filter value={this.state.filter} onChangeFilter={this.onChangeFilter} />
          <ContactList contacts={visibleContacts} del={this.deteleContact} />
        </Section>
      </Container>
    )
  }
};

export default App;
