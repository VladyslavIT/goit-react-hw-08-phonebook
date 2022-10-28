import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FormEl, Label, Input, ButtonForm } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmit({ name, number });
    reset();
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Form };
