import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactSlice';
import { ContactItem } from 'components/OneContact/OneContact';

const Contact = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const contactShow = () => {
    const toLower = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLower)
    );
  };

  return (
    <ul>
      {contactShow().map(({ id, name, number }) => (
        <ContactItem id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export { Contact };
