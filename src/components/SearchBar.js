import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Найти трек..."
      value={query}
      onChange={handleChange}
      className="border border-gray-300 p-2 rounded w-full mb-4"
    />
  );
};

export default SearchBar;
