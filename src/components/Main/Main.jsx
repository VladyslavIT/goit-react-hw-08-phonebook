import React from 'react';
import { useGetContactsQuery } from 'redux/contactSlice';
import { Form } from '../Form/Form';
import { Contact } from '../Contacts/Contacts';
import { FilterName } from '../Filter/Filter';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Section,
  Title,
  TitleContacts,
  WrapperForm,
  WrapperContatcts,
  Text,
} from './Main.styled';


export default function Main() {
  const { data: contacts = [] } = useGetContactsQuery();

  return (
    <>    <Container>
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
      <Outlet />
      </>

  );
};

