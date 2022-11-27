import React from 'react';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useGetContactsQuery } from 'redux/contactSlice';
import { useAddContactMutation } from 'redux/contactSlice';

import { FormEl, Label, Input, ButtonForm } from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const numberInputId = nanoid();
  const nameInputId = nanoid();

  const inputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };

    const stateName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (stateName) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    } else {
      addContact(newContact);
      Notiflix.Notify.success(`Contact added successfully`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name </Label>
      <Input
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        onChange={inputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor={numberInputId}>Phone </Label>
      <Input
        type="tel"
        name="number"
        id={numberInputId}
        value={number}
        onChange={inputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ButtonForm type="submit">Add Contact</ButtonForm>
    </FormEl>
  );
};

export { Form };
