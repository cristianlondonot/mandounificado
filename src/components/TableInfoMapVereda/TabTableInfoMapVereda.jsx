import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import TableInfoMapEconomicoVereda from './TableInfoMapEconomicoVereda';
import TableInfoMapInfraestructuraVereda from './TableInfoMapInfraestructuraVereda';
import TableInfoMapAmbientalVereda from './TableInfoMapAmbientalVereda';
import TableInfoMapSeguridadVereda from './TableInfoMapSeguridadVereda';
import TableInfoMapVereda from './TableInfoMapVereda';
import TableInfoMapSocialVereda from './TableInfoMapSocialVereda';
import TableInfoMapPoliticoVereda from './TableInfoMapPoliticoVereda';
import './TableInfoMapVereda.sass'
import Seguridad from '../Icons/Seguridad';
import Ambiental from '../Icons/Ambiental';
import Infraestructura from '../Icons/Infraestructura';
import PoliticoInstitucional from '../Icons/PoliticoInstitucional';
import SocialYCultural from '../Icons/SocialYCultural';
import Economico from '../Icons/Economico';

const TabTableInfoMap = ({municipio, onMarkerFactor, vereda}) => {

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
      <div className="join join-horizontal pt-3" role="tablist">
        {/* <div
          className={`indicator  tab btn join-item ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Todos los factores
          
        </div> */}
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
        {activeTab === 1 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapVereda municipio={municipio} vereda={vereda} titleDb='Todos los factores' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 2 */}
        {activeTab === 2 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapEconomicoVereda municipio={municipio} vereda={vereda} titleDb='Económico' departamento={departamento} /></div>}
        {/* Contenido de la pestaña 3 */}
        {activeTab === 3 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapSocialVereda municipio={municipio} vereda={vereda} titleDb='Social y cultural' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 4 */}
        {activeTab === 4 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapPoliticoVereda municipio={municipio} vereda={vereda} titleDb='Político Intitucional' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 5 */}
        {activeTab === 5 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapInfraestructuraVereda municipio={municipio} vereda={vereda} titleDb='Infraestructura' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 6 */}
        {activeTab === 6 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapAmbientalVereda municipio={municipio} vereda={vereda} titleDb='Ambiental' departamento={departamento}/></div>}
        {/* Contenido de la pestaña 7 */}
        {activeTab === 7 && <div className='bg-base-100 border-base-300 rounded-box p-6' role="tabpanel"><TableInfoMapSeguridadVereda municipio={municipio} onMarkerClick={handleMarkerClick} titleDb='Seguridad' vereda={vereda} departamento={departamento}/></div>}
      </div>
    </div>
  );
}

export default TabTableInfoMap