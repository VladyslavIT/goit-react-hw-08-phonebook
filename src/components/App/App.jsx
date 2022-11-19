import React from 'react';
import { useSelector } from 'react-redux';

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
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <Section>
        <WrapperForm>
          <Title>Phonebook</Title>
          <Form />
        </WrapperForm>
        <WrapperContatcts>
          <TitleContacts>Contacts</TitleContacts>
          {contacts.length > 0 ? (
            <>
              {' '}
              <FilterName />
              <Contact />{' '}
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
