import React, { useState } from 'react';

const SearchInputTable = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search-input">
      
      <input
        className="input input-bordered input-sm w-full max-w-xs"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInputTable;
