import React from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useDeleteContactMutation } from 'redux/contactSlice';
import { LoaderDelete } from 'components/Loader/Loader';
import { ListItem, ListButton } from './OneContact.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      Notiflix.Notify.info(`Contact has been deleted`);
    }
  }, [isSuccess]);

  return (
    <ListItem key={id}>
      {name}: {number}
      {isLoading ? (
        <LoaderDelete />
      ) : (
        <ListButton onClick={() => deleteContact(id)}>Delete</ListButton>
      )}
    </ListItem>
  );
};

export { ContactItem };

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
