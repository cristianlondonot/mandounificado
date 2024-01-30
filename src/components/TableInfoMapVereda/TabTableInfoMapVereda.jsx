import React from 'react'
import { useParams } from 'react-router-dom';
import TableInfoMapEconomicoVereda from './TableInfoMapEconomicoVereda';
import TableInfoMapInfraestructuraVereda from './TableInfoMapInfraestructuraVereda';
import TableInfoMapAmbientalVereda from './TableInfoMapAmbientalVereda';
import TableInfoMapSeguridadVereda from './TableInfoMapSeguridadVereda';
import TableInfoMapVereda from './TableInfoMapVereda';
import TableInfoMapSocialVereda from './TableInfoMapSocialVereda';
import TableInfoMapPoliticoVereda from './TableInfoMapPoliticoVereda';

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

  return (
    <div className={`content w-full  bg-white relative  ${!municipio ? 'hidden' : ''}`}>
      <div role="tablist" className="tabs tabs-lifted">

        <input
          id="item1"
          type="radio"
          name="my_tabs_2"
          role="tab"
          className={`tab `}
          aria-label="Todos los factores"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapVereda municipio={municipio} vereda={vereda} titleDb='Todos los factores' departamento={departamento}/>
        </div>
        
        <input type="radio" name="my_tabs_2" role="tab" className={`tab `} aria-label='Económico'/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapEconomicoVereda municipio={municipio} vereda={vereda} titleDb='Económico' departamento={departamento} />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Social y cultural"  />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapSocialVereda municipio={municipio} vereda={vereda} titleDb='Social y cultural' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Político Intitucional" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapPoliticoVereda municipio={municipio} vereda={vereda} titleDb='Político Intitucional' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Infraestructura" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapInfraestructuraVereda municipio={municipio} vereda={vereda} titleDb='Infraestructura' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ambiental" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapAmbientalVereda municipio={municipio} vereda={vereda} titleDb='Ambiental' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Seguridad" /> 
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapSeguridadVereda municipio={municipio} onMarkerClick={handleMarkerClick} titleDb='Seguridad' vereda={vereda} departamento={departamento}/>
        </div>
      </div>
    </div>
  )
}

export default TabTableInfoMap