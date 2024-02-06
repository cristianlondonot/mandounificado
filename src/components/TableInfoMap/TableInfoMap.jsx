import React, { useState } from 'react';
import dataFactor from '../../../data-factor.json';
import Pagination from '../Pagination/Pagination';
import SearchInputTable from '../SearchInputTable/SearchInputTable';
import './TableInfoMap.sass';
import { Tooltip } from 'react-tooltip';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const TableInfoMap = ({ departamento, municipio, titleDb, onMarkerClick }) => {
  const departamentoUpper = departamento.toUpperCase();
  const municipioUpper = municipio.toUpperCase();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const filteredData = dataFactor.filter(
    (item) =>
      item.DEPARTAMENTO === departamentoUpper &&
      item.MUNICIPIO === municipioUpper &&  // Asegurarse de que los nombres coincidan exactamente (mayúsculas/minúsculas)
      (searchTerm.trim() === '' ||
        item.CARENCIA.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.FACTOR_SIMPLIFICADO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.VEREDA_BARRIO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.NOMBRE.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.DEPARTAMENTO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.NOMBRE_GRUPO_ARMADO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.MUNICIPIO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ACTOR_A_EJECUTAR.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Crear un objeto para almacenar la cantidad de cada carencia en Barrancabermeja
  const carenciasTotales = filteredData
  .filter(item => item.MUNICIPIO.toUpperCase() === municipioUpper) // Filtrar solo los datos de Barrancabermeja
  .reduce((accumulator, item) => {
    const carencia = item.CARENCIA; // Solo necesitas la carencia aquí
    accumulator[carencia] = (accumulator[carencia] || 0) + 1;
    return accumulator;
  }, {});

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.entries(carenciasTotales).slice(indexOfFirstItem, indexOfLastItem);

  const uniqueCarencias = [...new Set(filteredData.map(item => item.CARENCIA))];

  const handlePageChange = (page) => {
  setCurrentPage(page);
  };

  const [checkedItems, setCheckedItems] = useState(Array(dataFactor.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = checkedItems.map((item, i) => (i === index ? !item : false));
    setCheckedItems(updatedCheckedItems);
  };

  const [selectedCoordinates, setSelectedCoordinates] = useState([]);

  const handleButtonClick = (coordinates, isChecked) => {
    let updatedCoordinates;

    if (isChecked) {
      // Agregar las coordenadas al array si el checkbox está marcado
      updatedCoordinates = [...selectedCoordinates, coordinates];
    } else {
      // Eliminar las coordenadas del array si el checkbox se desmarca
      updatedCoordinates = selectedCoordinates.filter(
        (coord) => coord.lat !== coordinates.lat || coord.lng !== coordinates.lng
      );
    }

    // Actualizar el estado con el nuevo array de coordenadas
    setSelectedCoordinates(updatedCoordinates);

    // Llamar a onMarkerClick con el array de coordenadas actualizado
    onMarkerClick(updatedCoordinates);

    // Imprimir el array actualizado en la consola
    console.log('Selected Coordinates:', updatedCoordinates);
  };

  const dataSelectActor = [
    { value: 'Gobernador', label: 'Gobernador' },
    { value: 'Alcaldía', label: 'Alcaldía' },
    { value: 'Presidencia', label: 'Presidencia' },
    { value: 'Claro', label: 'Claro' },
    { value: 'Movistar', label: 'Movistar' },
    { value: 'Privado1', label: 'Privado1' },
    { value: 'Privado2', label: 'Privado2' },
  ];

  const animatedComponents = makeAnimated();

  return (
    <div className="content w-full">
      <div className="overflow-x-auto h-full">
        <div className="title">
          <h2 className='text-xl underline font-bold mb-10'>{municipio} | {titleDb}</h2>
        </div>
        <SearchInputTable onSearch={handleSearch} />
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Carencia o factor</th>
              <th className='text-center'>Unds</th>
              <th>Ubicación</th>
              <th>Acción</th>
              <th>Actor a suplir carencia</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(([carencia, cantidad], index) => {
              // Encuentra el objeto correspondiente en dataFactor para asegurarte de que es del municipio correcto
              const item = dataFactor.find(
                (dataItem) => dataItem.CARENCIA === carencia && dataItem.MUNICIPIO.toUpperCase() === municipioUpper
              );

              if (!item) {
                console.error(`No se encontró el objeto correspondiente para la carencia: ${carencia} en el municipio: ${municipioUpper}`);
                return null; // O manejar este caso de alguna otra manera
              }

              return (
              <tr key={index}>
                <th>
                  <label>
                    <input 
                      type="checkbox"
                      className="checkbox"
                      id={`viewMarker-${index}-${carencia}`}
                      name={`viewMarker-${index}-${carencia}`}
                      
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {/* Icono según el tipo de factor */}
                      <div className={`mask mask-squircle w-12 h-12 bg-slate-600 p-2`}>
                        <img src={`/img/vector/icon-${item.FACTOR_SIMPLIFICADO.toLowerCase()}.svg`} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{carencia.charAt(0).toUpperCase() + carencia.slice(1).toLowerCase()} | {item.NOMBRE_GRUPO_ARMADO.charAt(0).toUpperCase() + item.NOMBRE_GRUPO_ARMADO.slice(1).toLowerCase()}</div>
                      <div className="text-sm opacity-50">{item.GESTION.charAt(0).toUpperCase() + item.GESTION.slice(1).toLowerCase()}</div>
                    </div>
                  </div>
                </td>
                <td className='text-center'>
                  {cantidad}
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{`${item.DEPARTAMENTO.charAt(0).toUpperCase() + item.DEPARTAMENTO.slice(1).toLowerCase()}, ${item.MUNICIPIO.charAt(0).toUpperCase() + item.MUNICIPIO.slice(1).toLowerCase()}`}</span>
                </td>
                <td>
                  {item.FACTOR_SIMPLIFICADO.toLowerCase() === 'seguridad' && (
                    <a href="https://experience.arcgis.com/experience/e343b19a00544755a4b422a6323085d3/" className='btn' target="_blank">
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      </svg>
                    </a>
                  )}
                </td>
                <td>
                  <div className="selectActorEject flex gap-2 items-center">
                    <input
                      className='hidden'
                      type="checkbox"
                      name={`lockedInput-${index}-${item.FACTOR_SIMPLIFICADO}-${titleDb}`}
                      id={`lockedInput-${index}-${item.FACTOR_SIMPLIFICADO}-${titleDb}`}
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <Tooltip id={`tooltipLocked-${index}-${item.FACTOR_SIMPLIFICADO}`}/>
                    <label htmlFor={`lockedInput-${index}-${item.FACTOR_SIMPLIFICADO}-${titleDb}`} data-tooltip-id={`tooltipLocked-${index}-${item.FACTOR_SIMPLIFICADO}`} data-tooltip-content={` ${checkedItems[index] ? 'Bloquear' : 'Desbloquear'}`} >
                      <svg className={`w-6 h-6`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path className={` ${checkedItems[index] ? 'opacity-100' : 'opacity-0'}`} strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        <path className={` ${checkedItems[index] ? 'opacity-0' : 'opacity-100'}`} strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </label>
                    <Select
                      isDisabled={!checkedItems[index]}
                      isMulti
                      name="actor"
                      options={dataSelectActor}
                      className="select-actor-carencia select-bordered w-full max-w-xs"
                      classNamePrefix="select"
                      isClearable={false}
                      placeholder='Seleccione uno o varios actores...'
                      components={animatedComponents}
                    />
                  </div>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalItems={uniqueCarencias.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default TableInfoMap;
