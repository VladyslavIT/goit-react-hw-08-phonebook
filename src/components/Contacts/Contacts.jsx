import React from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

import { List, ListItem, ListButton } from './Contacts.styled';

const Contact = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const contactShow = () => {
    const toLower = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLower)
    );
  };

  const deleteItem = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.info(`Contact has been deleted`);
  };

  const contactList = contactShow();

  return (
    <List>
      {contactList.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <ListButton onClick={() => deleteItem(id)}>Delete</ListButton>
        </ListItem>
      ))}
    </List>
  );
};

export { Contact };
