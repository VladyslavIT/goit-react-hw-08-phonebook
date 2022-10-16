import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FilterThumb, FilterLabel, FilterInput } from './Filter.styled';

const FilterName = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <FilterThumb>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        value={value}
        onChange={onChange}
      />
    </FilterThumb>
  );
};

export { FilterName };

FilterName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
