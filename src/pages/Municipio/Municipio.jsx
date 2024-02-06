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
import FilterDpto from '../../components/FilterDpto/FilterDpto';
//import FilterDpto from '../../components/FilterDpto/FilterDpto';

const Municipio = () => {
  
  const {departamento, municipio} = useParams()

  const formatMunicipio = municipio.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [botonPresionado, setBotonPresionado] = useState('default');

  const handleBotonPresionadoChange = (boton) => {
    setBotonPresionado(boton);
  };

  const { getColorByCarencias } = UseCarenciasPorVereda();

  return (
    <>
      {/* <div className="p-2 w-full filterDpto pt-[288.5px] lg:pt-[168.5px]"> */}
      <div className="p-2 w-full filterDpto pt-[72.5px] lg:pt-[82.5px]">
        <FilterDpto />
      </div>
    
      <div className="drawer lg:drawer-open">
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
          
          <div className='p4 w-full municipio-map-sec relative'>
            
            
            <div className="map lg:min-h-96 w-full lg:w-[70%]">
              <MapSelectCity 
                departamento={departamento} 
                municipio={municipio} 
                getColorByCarencias={getColorByCarencias()}
                filterMap={botonPresionado}
              />
            </div>
            <InfoCity municipio={municipio}/>
            
          </div>
          <div className="p-5 w-full">
            <TabTableInfoMap municipio={formatMunicipio}/>
          </div>
        </div>
        <div className="drawer-side pt-[288.5px] z-20 lg:pt-0">
          <MenuLeftDefault 
            onBotonPresionadoChange={handleBotonPresionadoChange} 
          />
        </div>
      </div>
    </>
  );
}

export default Municipio;
