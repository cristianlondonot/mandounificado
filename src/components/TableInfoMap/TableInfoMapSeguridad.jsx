import React, {useState} from 'react';
import dataFactor from '../../../data-factor.json';  // Asegúrate de proporcionar la ruta correcta al archivo JSON
import Pagination from '../Pagination/Pagination';
import SearchInputTable from '../SearchInputTable/SearchInputTable';
import './TableInfoMap.sass'
import { Tooltip } from 'react-tooltip';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const TableInfoMapSeguridad = ({departamento, municipio, titleDb, onMarkerClick}) => {

  const departamentoUpper = departamento.toUpperCase();
  const municipioUpper = municipio.toUpperCase();

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
      item.MUNICIPIO === municipioUpper &&
      (searchTerm.trim() === '' ||
        item.CARENCIA.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.FACTOR_SIMPLIFICADO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.VEREDA_BARRIO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.NOMBRE.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.GESTION.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.DEPARTAMENTO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.NOMBRE_GRUPO_ARMADO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.MUNICIPIO.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ACTOR_A_EJECUTAR.toLowerCase().includes(searchTerm.toLowerCase())
      ) &&
      item.FACTOR_SIMPLIFICADO.toLowerCase() === 'seguridad'
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
    <div className="content w-full">
      <div className="overflow-x-auto h-full">
        <div className="title">
          <h2 className='text-xl underline font-bold mb-10'>{municipio} | {titleDb}</h2>
        </div>
        <SearchInputTable onSearch={handleSearch}/>
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
              {/* <th>Acción</th> */}
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
                      <div className={`mask mask-squircle w-12 h-12 bg-slate-600 p-2`}>
                        <img src={`/img/vector/icon-${item.FACTOR_SIMPLIFICADO.toLowerCase()}.svg`} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.CARENCIA.charAt(0).toUpperCase() + item.CARENCIA.slice(1).toLowerCase()} | {item.NOMBRE_GRUPO_ARMADO.charAt(0).toUpperCase() + item.NOMBRE_GRUPO_ARMADO.slice(1).toLowerCase()}</div>
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
                  </div>

                </td>
                {/* <th>
                  <div className="btnAction flex gap-2">
                    <Tooltip id={`tooltipBtnAction-${index}-${item.FACTOR_SIMPLIFICADO}`}/>
                    <label htmlFor={`viewMarker-${index}-${item.FACTOR_SIMPLIFICADO}`} className="btn font-normal" data-tooltip-id={`tooltipBtnAction-${index}-${item.FACTOR_SIMPLIFICADO}`} data-tooltip-content='Ver en mapa satelital' >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                      </svg>
                    </label>
                    <div className="btn" data-tooltip-id={`tooltipBtnAction-${index}-${item.FACTOR_SIMPLIFICADO}`} data-tooltip-content='Descargar último informe'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                      </svg>
                    </div>
                  </div>
                </th> */}
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
  )
}

export default TableInfoMapSeguridad