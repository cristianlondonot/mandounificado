import React, {useState} from 'react'
import TableInfoMap from './TableInfoMap';
import { useParams } from 'react-router-dom';
import TableInfoMapEconomico from './TableInfoMapEconomico';
import TableInfoMapInfraestructura from './TableInfoMapInfraestructura';
import TableInfoMapAmbiental from './TableInfoMapAmbiental';
import TableInfoMapSeguridad from './TableInfoMapSeguridad';
import TableInfoMapSocial from './TableInfoMapSocial';
import TableInfoMapPolitico from './TableInfoMapPolitico';
import './TableInfoMap.sass'
import Seguridad from '../Icons/Seguridad';
import Ambiental from '../Icons/Ambiental';
import Infraestructura from '../Icons/Infraestructura';
import PoliticoInstitucional from '../Icons/PoliticoInstitucional';
import SocialYCultural from '../Icons/SocialYCultural';
import Economico from '../Icons/Economico';

const TabTableInfoMap = ({municipio, onMarkerFactor}) => {

  /* const [markerTableInfo, setMarkerTableInfo] = useState(null); */
  const {departamento} = useParams();

  const handleMarkerClick = (coordinates) => {
    if (onMarkerFactor && typeof onMarkerFactor === 'function') {
      onMarkerFactor(coordinates);
    } else {
      console.error("onMarkerClick is not a valid function");
    }
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (

    <div className="tabsTables tabs content w-full  bg-white relative ">
      <div className="join join-vertical lg:join-horizontal pt-3" role="tablist">
        <div
          className={`indicator  tab btn join-item ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Todos los factores
          {/* <span className="indicator-item indicator-top indicator-center badge badge-secondary text-[10px] px-[6px] py-[0px]">99+</span> */}
          {/* <span className="indicator-top indicator-center indicator-item badge">99+</span>  */}
        </div>
        <div
          className={`tab indicator btn economico join-item ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <Economico />
          Económico
          {/* <span className="indicator-item indicator-top indicator-center badge badge-secondary text-[10px] px-[6px] py-[0px]">99+</span> */}
        </div>
        <div
          className={`tab indicator btn socialycultural join-item ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <SocialYCultural />
          Social y cultural
        </div>
        <div
          className={`tab btn politicoinstitucional join-item ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          <PoliticoInstitucional />
          Político Intitucional
        </div>
        <div
          className={`tab btn infraestructura join-item ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
          <Infraestructura />
          Infraestructura
        </div>
        <div
          className={`tab btn ambiental join-item ${activeTab === 6 ? 'active' : ''}`}
          onClick={() => handleTabClick(6)}
        >
          <Ambiental />
          Ambiental
        </div>
        <div
          className={`tab btn seguridad join-item ${activeTab === 7 ? 'active' : ''}`}
          onClick={() => handleTabClick(7)}
        >
          <Seguridad />
          Seguridad
        </div>
      </div>
      <div className="">
        {/* Contenido de la pestaña 1 */}
        {activeTab === 1 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMap municipio={municipio} titleDb='Todos los factores' departamento={departamento} /></div>}
        {/* Contenido de la pestaña 2 */}
        {activeTab === 2 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapEconomico municipio={municipio} titleDb='Económico' departamento={departamento} /></div>}
        {/* Contenido de la pestaña 3 */}
        {activeTab === 3 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapSocial municipio={municipio} titleDb='Social y cultural' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 4 */}
        {activeTab === 4 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapPolitico municipio={municipio} titleDb='Político Intitucional' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 5 */}
        {activeTab === 5 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapInfraestructura municipio={municipio} titleDb='Infraestructura' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 6 */}
        {activeTab === 6 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapAmbiental municipio={municipio} titleDb='Ambiental' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 7 */}
        {activeTab === 7 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapSeguridad municipio={municipio} onMarkerClick={handleMarkerClick} titleDb='Seguridad' departamento={departamento}/></div>}
      </div>
    </div>
  )
}

export default TabTableInfoMap