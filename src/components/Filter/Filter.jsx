import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { FilterThumb, FilterLabel, FilterInput } from './Filter.styled';

const FilterName = () => {
  const filterId = nanoid();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterThumb>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        value={filter}
        onChange={filterChange}
      />
    </FilterThumb>
  );
};

export { FilterName };

