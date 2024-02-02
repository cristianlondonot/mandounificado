import React from 'react';

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const pageButtons = [];
  const itemsPerPage = 10; // Asegúrate de definir este valor según tu lógica de paginación

  const handleClick = (page) => {
    onPageChange(page);
  };

  // Calcula el número total de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Muestra hasta 5 botones antes y después de la página actual
  const startPage = Math.max(1, currentPage - 5);
  const endPage = Math.min(totalPages, currentPage + 5);

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`join-item btn-sm btn ${i === currentPage ? 'btn-disabled' : ''}`}
        onClick={() => handleClick(i)}
      >
        {i}
      </button>
    );
  }

  // Agrega botones "..." si no se muestran todas las páginas
  if (startPage > 1) {
    pageButtons.unshift(
      <button key="ellipsis-start" className="join-item btn-sm btn btn-disabled" onClick={() => handleClick(startPage - 1)}>
        ...
      </button>
    );
  }
  if (endPage < totalPages) {
    pageButtons.push(
      <button key="ellipsis-end" className="join-item btn-sm btn btn-disabled" onClick={() => handleClick(endPage + 1)}>
        ...
      </button>
    );
  }

  return (
    <div className='flex justify-center mt-7'>
      <div className="join">
        {pageButtons}
      </div>
    </div>
  );
};

export default Pagination;
