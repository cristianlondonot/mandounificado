import React, {useState} from 'react';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import { useParams } from 'react-router-dom';
import MapSelectNeighborhood from '../../components/MapSelectNeighborhood/MapSelectNeighborhood';
import BreadcrumbsMaps from '../../components/BreadcrumbsMaps/breadcrumbsMaps';
import TabTableInfoMapVereda from '../../components/TableInfoMapVereda/TabTableInfoMapVereda';
import InfoCity from '../../components/InfoCity/InfoCity';
import UseCarenciasPorVereda from '../../components/UseCarenciasPorVereda/UseCarenciasPorVereda';
import './Vereda.sass'
import FilterDpto from '../../components/FilterDpto/FilterDpto';
import MenuLeftPruebas from '../../components/MenuLeftDefault/MenuLeftPruebas';

const Vereda = () => {

  const {departamento, municipio,  vereda} = useParams()

  const [botonPresionado, setBotonPresionado] = useState('default');
  
  const formatVeredaBarrio = vereda.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const formatMunicipio = municipio.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  
  
  const handleBotonPresionadoChange = (boton) => {
    setBotonPresionado(boton);
  };
  
  const { getColorByCarencias } = UseCarenciasPorVereda();
  return (
    <>
      {/* <div className="p-2 w-full filterDpto pt-[288.5px] lg:pt-[168.5px]"> */}
    
      <div className="drawer lg:drawer-open vereda pt-[72.5px] lg:pt-[82.5px]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative ">
          <div className="p-2 w-full lg:flex">
            <FilterDpto />
          </div>
          <div className="px-3 pb-0 pt-0 w-full">
            <BreadcrumbsMaps municipio={municipio} departamento={departamento} vereda={''}/>
          </div>
          
    
          
          <div className="p-0 w-full">
            <div>
              <div className='title mb-5 w-full px-3 py-2'>
                <h2 className='text-3xl font-semibold'>Factor detallado de inestabilidad: <span className={`text-green-50 px-2 py-1 rounded bg-green-800 text-2xl`}> {formatVeredaBarrio} </span></h2>
              </div>
              <div className="py-3 w-full pe-2">
                <InfoCity municipio={municipio}/>
              </div>
              <div className="map w-full ">
                <MapSelectNeighborhood 
                  municipio={municipio}
                  vereda={vereda} 
                  carenciaColor={getColorByCarencias(formatVeredaBarrio.toUpperCase(), municipio.toUpperCase())}
                  filterMap={botonPresionado}
                />
              </div>
            </div>
            
          </div>
          
          <div className="p-5 w-full">
            <TabTableInfoMapVereda municipio={formatMunicipio} vereda={formatVeredaBarrio}/>
          </div>
        </div>
        <div className="drawer-side pt-[72.5px] lg:pt-0">
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

export default Vereda;
