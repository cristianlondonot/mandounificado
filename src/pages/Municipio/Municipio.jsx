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
import MenuLeftPruebas from '../../components/MenuLeftDefault/MenuLeftPruebas';

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
    
      <div className="drawer municipio lg:drawer-open pt-[72.5px] lg:pt-[82.5px]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative">
          <div className="p-2 w-full lg:flex ">
            <FilterDpto />
          </div>

          <div className="p-0 w-full block lg:flex justify-between gap-5">
            <div className='w-full'>
              <div className="px-3 pb-0 pt-0 w-full">
                <BreadcrumbsMaps municipio={municipio} departamento={departamento} vereda={''}/>
              </div>
              <div className="p-3 w-full hidden">
                <CityState municipio={municipio}/>
              </div>
              <div className="map w-full">
                <MapSelectCity 
                  departamento={departamento} 
                  municipio={municipio} 
                  getColorByCarencias={getColorByCarencias()}
                  filterMap={botonPresionado}
                />
              </div>
            </div>
            <div className="p-2 m-auto lg:m-0 max-w-[310px] w-full">
              <InfoCity municipio={municipio}/>
            </div>
          </div>

          <div className="p-5 w-full">
            <TabTableInfoMap municipio={formatMunicipio}/>
          </div>
        </div>
        <div className="drawer-side pt-[72.5px] z-20 lg:pt-0">
          <div className="p-4 bg-white">
            <MenuLeftPruebas 
              onBotonPresionadoChange={handleBotonPresionadoChange} 
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Municipio;
