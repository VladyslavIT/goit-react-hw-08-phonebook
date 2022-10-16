import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FormEl, Label, Input, ButtonForm } from './Form.styled';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  numberInputId = nanoid();
  nameInputId = nanoid();

  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormEl onSubmit={this.handleSubmit}>
        
        <Label htmlFor={this.nameInputId}>
          Name </Label>
          <Input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          
          />
          
        
        <Label htmlFor={this.numberInputId}>
          Phone  </Label>
          <Input
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
       
        <ButtonForm type="submit">Add Contact</ButtonForm>
      </FormEl>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Form };
