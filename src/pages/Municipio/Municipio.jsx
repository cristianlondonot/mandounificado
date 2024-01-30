import React from 'react';
import MapSelectCity from '../../components/MapSelectCity/MapSelectCity';
import { useParams } from 'react-router-dom';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import CityState from '../../components/CityState/CityState';
import InfoCity from '../../components/InfoCity/InfoCity';
import TabTableInfoMap from '../../components/TableInfoMap/TabTableInfoMap';
import BreadcrumbsMaps from '../../components/BreadcrumbsMaps/breadcrumbsMaps';
//import FilterDpto from '../../components/FilterDpto/FilterDpto';

const Municipio = () => {
  
  const {departamento, municipio} = useParams()

  return (
    <div className="drawer lg:drawer-open  pt-[168.5px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative">
        <div className="px-3 pb-0 pt-3 w-full">
          <BreadcrumbsMaps municipio={municipio} departamento={departamento} vereda={''}/>
        </div>
        {/* <div className="px-3 w-full">
          <FilterDpto />
        </div> */}
        <div className="p-3 w-full">
          <CityState municipio={municipio}/>
        </div>
        
        <div className='p-4 w-full relative'>
          <InfoCity municipio={municipio}/>
          
          <div className="map min-h-96">
            <MapSelectCity departamento={departamento} municipio={municipio} />

          </div>
          
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
