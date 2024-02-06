import React, { useState, useEffect } from 'react';
import dataFactor from '../../../data-factor.json';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchInput = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('');

  useEffect(() => {
    // Limpiar el campo de búsqueda y los resultados al cambiar de ruta
    setSearchTerm('');
    setSearchResults([]);
  }, [location.pathname]);

  const handleSearch = (term, type) => {
    setSearchTerm(term);
    setSearchType(type);

    // Mostrar resultados solo a partir del cuarto caracter
    if (term.length >= 4) {
      // Filtrar resultados basados en el término de búsqueda y el tipo seleccionado
      const filteredResults = dataFactor.filter(item => {
        const nombreFormatted = item.NOMBRE.toLowerCase().replace(/\s+/g, '-');
        const municipioFormatted = item.MUNICIPIO.toLowerCase().replace(/\s+/g, '-');

        if (type === 'Municipio') {
          return municipioFormatted.includes(term.toLowerCase());
        } else if (type === 'Vereda') {
          return nombreFormatted.includes(term.toLowerCase());
        }

        return false;
      });

      // Agrupar resultados por nombre de municipio o vereda
      const groupedResults = groupResultsByType(filteredResults, type);

      setSearchResults(groupedResults);
    } else {
      // Limpiar los resultados si el término de búsqueda tiene menos de cuatro caracteres
      setSearchResults([]);
    }

    onSearch(term);
  };

  const groupResultsByType = (results, type) => {
    const groupedResults = new Map();

    results.forEach(result => {
      const key = type === 'Municipio' ? result.MUNICIPIO : result.NOMBRE;
      if (!groupedResults.has(key)) {
        groupedResults.set(key, result);
      }
    });

    return Array.from(groupedResults.values());
  };

  const handleResultClick = (result) => {
    const departamento = "departamento/santander"; // Departamento fijo

    if (result.NOMBRE) {
      const vereda = result.NOMBRE.toLowerCase().replace(/\s+/g, '-');
      const municipio = result.MUNICIPIO.toLowerCase().replace(/\s+/g, '-');

      // Construir la URL
      const url = `/departamento/santander/municipio/${municipio}/vereda/${vereda}`;

      // Redirigir a la página correspondiente
      navigate(url);
    } else if (result.MUNICIPIO) {
      // Construir la URL para municipio
      const municipio = result.MUNICIPIO.toLowerCase().replace(/\s+/g, '-');
      const url = `/departamento/santander/municipio/${municipio}`;

      // Redirigir a la página correspondiente
      navigate(url);
    } else if (typeof result === 'string') {
      // Caso especial para el home
      const formattedResult = result.toLowerCase().replace(/\s+/g, '-');
      const url = `/${departamento}/municipio/${formattedResult}`;

      // Redirigir a la página de búsqueda del municipio o vereda
      navigate(url);
    }

    // Limpiar el campo de búsqueda y los resultados después de hacer clic
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="search-input-container relative">
      <div className="join">
        <select
          className="select select-bordered join-item"
          onChange={(e) => handleSearch(searchTerm, e.target.value)}
          defaultValue='default'
        >
          <option disabled value='default'>Seleccione</option>
          <option>Municipio</option>
          <option>Vereda</option>
        </select>
        <div>
          <div>
            <input
              id='searchPrimary'
              type="text"
              placeholder="Buscar municipio o vereda..."
              className={`search-input input input-bordered join-item min-w-96 ${searchType === '' ? 'disabled' : ''}`}
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value, searchType)}
              disabled={searchType === ''}
            />
          </div>
        </div>
      </div>
      {searchResults.length > 0 && (
        <ul className="search-results bg-white bordered p-2 absolute">
          {searchResults.map((result, index) => (
            <li key={index} onClick={() => handleResultClick(result)}>
              {searchType === 'Municipio' ? result.MUNICIPIO : `${result.NOMBRE} | ${result.MUNICIPIO}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
