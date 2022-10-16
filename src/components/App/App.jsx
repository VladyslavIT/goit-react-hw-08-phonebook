import React from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

import { Form } from '../Form/Form';
import { Contact } from '../Contacts/Contacts';
import { FilterName } from '../Filter/Filter';

import { Container, Section, Title, TitleContacts, WrapperForm, WrapperContatcts, Text } from './App.styled';


class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const stateName = this.state.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());
    if (stateName) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
      Notiflix.Notify.success(`Contact added successfully`);
    }
  };

  contactShow = () => {
    const { contacts, filter } = this.state;
    const toLower = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLower)
    );
  };

  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notiflix.Notify.info(`Contact has been deleted`);
  };
  render() {
    const contactItem = this.contactShow();
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Section>
          <WrapperForm>
        <Title>Phonebook</Title>
          <Form onSubmit={this.formSubmit} /></WrapperForm>
          <WrapperContatcts>
          <TitleContacts>Contacts</TitleContacts>
          {contacts.length > 0 ?  ( <> <FilterName value={filter} onChange={this.filterChange} />
          <Contact contactList={contactItem} deleteItem={this.deleteContact} /> </>) : (<Text>You don't have contacts</Text>) }
      </WrapperContatcts>
          </Section>
      </Container>
    );
  }
}

export { App };
