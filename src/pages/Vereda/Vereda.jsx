import React from 'react';
import MenuLeftDefault from '../../components/MenuLeftDefault/MenuLeftDefault';
import { useParams } from 'react-router-dom';
import MapSelectNeighborhood from '../../components/MapSelectNeighborhood/MapSelectNeighborhood';
import BreadcrumbsMaps from '../../components/BreadcrumbsMaps/breadcrumbsMaps';
import TabTableInfoMapVereda from '../../components/TableInfoMapVereda/TabTableInfoMapVereda';
import InfoCity from '../../components/InfoCity/InfoCity';
import UseCarenciasPorVereda from '../../components/UseCarenciasPorVereda/UseCarenciasPorVereda';
import './Vereda.sass'

const Vereda = () => {

  const {departamento, municipio,  vereda} = useParams()
  
  const formatVeredaBarrio = vereda.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const formatMunicipio = municipio.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  
  const { getColorByCarencias } = UseCarenciasPorVereda();

  return (
    <div className="drawer lg:drawer-open  pt-[168.5px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative ">
        
        <div className="px-3 pb-0 pt-3 w-full">
          <BreadcrumbsMaps departamento={departamento} municipio={formatMunicipio}  vereda={formatVeredaBarrio}/>
        </div>
        <div className='title mb-5 w-full px-3 py-2'>
          <h2 className='text-3xl font-semibold'>Factor detallado de inestabilidad: <span className={`text-green-50 px-2 py-1 rounded bg-green-800 text-2xl`}> {formatVeredaBarrio} </span></h2>
        </div>
        
        <div className="p4 w-full vereda-map-sec relative">
          <InfoCity />
          <div className="map min-h-96">
            <MapSelectNeighborhood 
              municipio={municipio}
              vereda={vereda} 
              carenciaColor={getColorByCarencias(formatVeredaBarrio.toUpperCase())}
            />
          </div>
          
        </div>
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label> */}
        <div className="p-5 w-full">
          <TabTableInfoMapVereda municipio={formatMunicipio} vereda={formatVeredaBarrio}/>
        </div>
      </div>
      <div className="drawer-side pt-[288.5px] lg:pt-0">
        <MenuLeftDefault />
      </div>
    </div>
  );
}

export default Vereda;
