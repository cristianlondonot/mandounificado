import React, {useState} from 'react';
import MapSelectCity from '../../components/MapSelectCity/MapSelectCity';
import { useParams } from 'react-router-dom';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import CityState from '../../components/CityState/CityState';
import InfoCity from '../../components/InfoCity/InfoCity';
import TabTableInfoMap from '../../components/TableInfoMap/TabTableInfoMap';
import BreadcrumbsMaps from '../../components/BreadcrumbsMaps/breadcrumbsMaps';
import './Municipio.sass'
import UseCarenciasPorVereda from '../../components/UseCarenciasPorVereda/UseCarenciasPorVereda';
//import FilterDpto from '../../components/FilterDpto/FilterDpto';

const Municipio = () => {
  
  const {departamento, municipio} = useParams()

  const [botonPresionado, setBotonPresionado] = useState('default');

  const handleBotonPresionadoChange = (boton) => {
    setBotonPresionado(boton);
  };

  const { getColorByCarencias } = UseCarenciasPorVereda();

  return (
    <div className="drawer lg:drawer-open pt-[288.5px] lg:pt-[168.5px]">
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
          
          <div className="map lg:min-h-96">
            <MapSelectCity 
              departamento={departamento} 
              municipio={municipio} 
              getColorByCarencias={getColorByCarencias()}
              filterMap={botonPresionado}
            />
          </div>
          
        </div>
        <div className="p-5 w-full">
          <TabTableInfoMap municipio={municipio}/>
        </div>
      </div>
      <div className="drawer-side pt-[288.5px] z-20 lg:pt-0">
        <MenuLeftDefault 
          onBotonPresionadoChange={handleBotonPresionadoChange} 
        />
      </div>
    </div>
  );
}

export default Municipio;
