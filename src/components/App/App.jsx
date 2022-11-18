import React from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { addContact, deleteContact } from 'redux/contactSlice';

import { Form } from '../Form/Form';
import { Contact } from '../Contacts/Contacts';
import { FilterName } from '../Filter/Filter';

import {
  Container,
  Section,
  Title,
  TitleContacts,
  WrapperForm,
  WrapperContatcts,
  Text,
} from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const formSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const stateName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (stateName) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      Notiflix.Notify.success(`Contact added successfully`);
    }
  };

  const contactShow = () => {
    const toLower = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLower)
    );
  };

  const filterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const deleteContactItem = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.info(`Contact has been deleted`);
  };

  const contactItem = contactShow();

  return (
    <Container>
      <Section>
        <WrapperForm>
          <Title>Phonebook</Title>
          <Form onSubmit={formSubmit} />
        </WrapperForm>
        <WrapperContatcts>
          <TitleContacts>Contacts</TitleContacts>
          {contacts.length > 0 ? (
            <>
              {' '}
              <FilterName value={filter} onChange={filterChange} />
              <Contact
                contactList={contactItem}
                deleteItem={deleteContactItem}
              />{' '}
            </>
          ) : (
            <Text>You don't have contacts</Text>
          )}
        </WrapperContatcts>
      </Section>
    </Container>
  );
};

export { App };
