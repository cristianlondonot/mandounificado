import React, { useState } from 'react';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom';
import MapSelectNeighborhood from '../../components/MapSelectNeighborhood/MapSelectNeighborhood';
import BreadcrumbsMaps from '../../components/BreadcrumbsMaps/breadcrumbsMaps';
import TabTableInfoMapVereda from '../../components/TableInfoMapVereda/TabTableInfoMapVereda';
import InfoVereda from '../../components/InfoVereda/InfoVereda';
import FilterDpto from '../../components/FilterDpto/FilterDpto';

const Vereda = () => {

  const [markerCoordinates, setMarkerCoordinates] = useState(null);

  const handleMarkerClick = (coordinates) => {
    // Actualizar el estado con las coordenadas del marcador al hacer clic en un botón
    setMarkerCoordinates(coordinates);
  };

  //console.log(markerCoordinates)


  const navigate = useNavigate();
  const location = useLocation();
  const vereda = location.pathname.split('/').pop(); // Obtener el último segmento de la URL
  const {municipio, departamento} = useParams()

  const formatVeredaBarrio = vereda.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const handlePathClick = (pathId) => {
    navigate(`/vereda/${pathId}`);
  };



  return (
    <div className="drawer lg:drawer-open  pt-[72.5px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative flex flex-col items-center justify-center">
        
        <div className="px-3 pb-0 pt-3 w-full">
          <BreadcrumbsMaps municipio={municipio} departamento={departamento} vereda={vereda}/>
        </div>
        <div className='title mb-5 w-full px-3 py-2'>
          <h2 className='text-3xl font-semibold'>Factor detallado de inestabilidad: <span className=' text-green-50 px-2 py-1 rounded bg-green-800 text-2xl'> {formatVeredaBarrio} </span></h2>
        </div>
        <div className="px-3 w-full">
          <FilterDpto />
        </div>
        
        <div className="p4 w-full h-full relative">
          <InfoVereda />
          <MapSelectNeighborhood 
            municipio={municipio}
            vereda={vereda} 
            markerCoordinates={markerCoordinates}
            onNavigateToDepartamento={() => handlePathClick('Departamento')}
            onNavigateToVereda={() => handlePathClick('Vereda')}
          />
          
        </div>
          
          <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        {/* <div className="w-full pe-5">
          <FactoresDataCity />
        </div> */}
        <div className="p-5 w-full">
          <TabTableInfoMapVereda municipio={municipio} onMarkerFactor={handleMarkerClick} vereda={vereda}/>
        </div>
      </div>
      <div className="drawer-side">
        <MenuLeftDefault />
      </div>
    </div>
  );
}

export default Vereda;
