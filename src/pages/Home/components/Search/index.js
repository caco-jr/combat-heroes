import React, { useState } from 'react';

import { SearchWrapper, SearchInput } from './index.style';

const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <SearchInput name="search" value={value} onChange={handleChange} />
    </SearchWrapper>
  );
};

export default Search;
