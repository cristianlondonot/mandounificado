import React, { useState } from 'react';
import MapSelectCity from '../../components/MapSelectCity/MapSelectCity';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import CityState from '../../components/CityState/CityState';
import InfoCity from '../../components/InfoCity/InfoCity';
import TabTableInfoMap from '../../components/TableInfoMap/TabTableInfoMap';
import BreadcrumbsMaps from '../../components/BreadcrumbsMaps/breadcrumbsMaps';
import FilterDpto from '../../components/FilterDpto/FilterDpto';

const Municipio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const municipio = location.pathname.split('/').pop(); // Obtener el último segmento de la URL
  const {departamento} = useParams()
  
  const lengthFactor = 50;


  const handlePathClick = (pathId) => {
    navigate(`/municipio/${pathId}`);
  };

  const tipoDeMapa = 'Municipio';

  //console.log('Departamento:', departamento);

  return (
    <div className="drawer lg:drawer-open  pt-[72.5px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative flex flex-col items-center justify-center">
        <div className="px-3 pb-0 pt-3 w-full">
          <BreadcrumbsMaps municipio={municipio} departamento={departamento} vereda={''}/>
        </div>
        <div className="px-3 w-full">
          <FilterDpto />
        </div>
        <div className="p-3 w-full">
          <CityState municipio={municipio}/>
        </div>
        
        <div className='p-4 w-full relative'>
          <InfoCity municipio={municipio}/>
          {tipoDeMapa === 'Municipio' && (
            <MapSelectCity 
              departamento={departamento}
              municipio={municipio} 
              onNavigateToDepartamento={() => handlePathClick('Departamento')}
              onNavigateToVereda={() => handlePathClick('Vereda')}
              lengthFactor={lengthFactor}
            />
          )}
        </div>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        {/* <div className="w-full pe-5">
          <FactoresDataCity />
        </div> */}
        <div className="p-5 w-full">
          <TabTableInfoMap municipio={municipio}/>
        </div>
      </div>
      <div className="drawer-side">
        <MenuLeftDefault />
      </div>
    </div>
  );
}

export default Municipio;
