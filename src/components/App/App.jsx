import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/store';


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
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  console.log(filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      setContacts([...contacts, newContact]);
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

  const deleteContact = id => {
    setContacts(() => {
      return contacts.filter(contact => contact.id !== id);
    });
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
                deleteItem={deleteContact}
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
