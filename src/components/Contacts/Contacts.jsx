import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, ListButton } from './Contacts.styled';

const Contact = ({ contactList, deleteItem }) => {
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

Contact.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export { Contact };
