import React, {useState} from 'react';
import dataFactor from '../../../data-factor.json';  
import Pagination from '../Pagination/Pagination';
import SearchInputTable from '../SearchInputTable/SearchInputTable';
import { Tooltip } from 'react-tooltip';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ModalEditFactor from '../Modal/ModalEditFactor';

const TableInfoMap = ({ departamento, titleDb, onMarkerClick }) => {
  
  const departamentoUpper = departamento.toUpperCase();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Resetear la página a 1 cuando se realiza una nueva búsqueda
  };

  const filteredData = dataFactor.filter(
    (item) =>
      item.DEPARTAMENTO === departamentoUpper &&
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
  ]

  const animatedComponents = makeAnimated();
  
  return (
    <div className="content w-full p-10">
      <div className="overflow-x-auto h-full">
        <div className="title">
          <h2 className='text-5xl font-bold mb-10'>{departamento.charAt(0).toUpperCase() + departamento.slice(1).toLowerCase()} | <span className='text-3xl'> Base de datos General</span></h2>
        </div>
        <div className="pb-4">
          <SearchInputTable onSearch={handleSearch}/>

        </div>
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
              <th>Actor a suplir carencia</th>
              <th>Acción</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input 
                      type="checkbox"
                      className="checkbox"
                      id={`viewMarker-${index}-${item.FACTOR_SIMPLIFICADO}`}
                      name={`viewMarker-${index}-${item.FACTOR_SIMPLIFICADO}`}
                      onChange={(e) =>
                      handleButtonClick({ lat: Number(item.LATITUD), lng: Number(item.LONGITUD) }, e.target.checked)}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {/* Icono según el tipo de factor */}
                      <div className={`mask mask-squircle w-12 h-12 bg-slate-600 p-3`}>
                        <img src={`/img/vector/icon-${item.FACTOR_SIMPLIFICADO.toLowerCase()}.svg`} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.CARENCIA.charAt(0).toUpperCase() + item.CARENCIA.slice(1).toLowerCase()} | {item.NOMBRE_GRUPO_ARMADO.charAt(0).toUpperCase() + item.NOMBRE_GRUPO_ARMADO.slice(1).toLowerCase()} </div>
                      <div className="text-sm opacity-50">{item.GESTION.charAt(0).toUpperCase() + item.GESTION.slice(1).toLowerCase()}</div>
                    </div>
                  </div>
                </td>
                <td className='text-center'>
                  1
                </td>
                <td>
                  {/* Información de ubicación */}
                  {`${item.VEREDA_BARRIO.charAt(0).toUpperCase() + item.VEREDA_BARRIO.slice(1).toLowerCase()}: ${item.NOMBRE.charAt(0).toUpperCase() + item.NOMBRE.slice(1).toLowerCase()}`} <br />
                  <span className="badge badge-ghost badge-sm">{`${item.DEPARTAMENTO.charAt(0).toUpperCase() + item.DEPARTAMENTO.slice(1).toLowerCase()}, ${item.MUNICIPIO.charAt(0).toUpperCase() + item.MUNICIPIO.slice(1).toLowerCase()}`}</span>
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
                    {/* <select className="select select-bordered w-full max-w-xs" 
                      disabled={!checkedItems[index]}
                      defaultValue={item.ACTOR_A_EJECUTAR.charAt(0).toUpperCase() + item.ACTOR_A_EJECUTAR.slice(1).toLowerCase()}>
                      <option value={item.ACTOR_A_EJECUTAR.charAt(0).toUpperCase() + item.ACTOR_A_EJECUTAR.slice(1).toLowerCase()}>{item.ACTOR_A_EJECUTAR.charAt(0).toUpperCase() + item.ACTOR_A_EJECUTAR.slice(1).toLowerCase()}</option>
                      <option>Gobierno</option>
                      <option>Alcaldía</option>
                    </select> */}
                  </div>
                </td>
                <th>
                  <div className="btnAction flex gap-2">
                    <Tooltip id={`tooltipBtnAction-${index}-${item.FACTOR_SIMPLIFICADO}`}/>
                    <label htmlFor={`viewMarker-${index}-${item.FACTOR_SIMPLIFICADO}`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-${index}-${item.FACTOR_SIMPLIFICADO}`} data-tooltip-content='Eliminar' >
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                      </svg>
                    </label>
                    <div className="btn" data-tooltip-id={`tooltipBtnAction-${index}-${item.FACTOR_SIMPLIFICADO}`} data-tooltip-content='Editar Factor' onClick={()=>document.getElementById('my_modal_4').showModal()}>
                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                      </svg>
                    </div>
                    <ModalEditFactor />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>

        </table>

        <Pagination
          currentPage={currentPage}
          totalItems={filteredData.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );

  
}

export default TableInfoMap;
