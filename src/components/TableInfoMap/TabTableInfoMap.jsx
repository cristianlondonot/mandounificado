import React from 'react'
import TableInfoMap from './TableInfoMap';
import { useParams } from 'react-router-dom';
import TableInfoMapEconomico from './TableInfoMapEconomico';
import TableInfoMapInfraestructura from './TableInfoMapInfraestructura';
import TableInfoMapAmbiental from './TableInfoMapAmbiental';
import TableInfoMapSeguridad from './TableInfoMapSeguridad';
import TableInfoMapSocial from './TableInfoMapSocial';
import TableInfoMapPolitico from './TableInfoMapPolitico';
import './TableInfoMap.sass'

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

  return (
    
    <div className={`tabsTables content w-full  bg-white relative  ${!municipio ? 'hidden' : ''}`}>
      <div  className="tabs tabs-lifted">
        
        {/* <a role="tab" className="tab">Tab 1</a> */}
        <input type="radio" name="my_tabs_2" role="tab" className={`tab `} aria-label='Todos los factores'/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMap municipio={municipio} titleDb='Todos los factores' departamento={departamento} />
        </div>
        
        <input type="radio" name="my_tabs_2" role="tab" className={`tab `} aria-label='Económico'/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapEconomico municipio={municipio} titleDb='Económico' departamento={departamento} />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Social y cultural"  />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapSocial municipio={municipio} titleDb='Social y cultural' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Político Intitucional" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapPolitico municipio={municipio} titleDb='Político Intitucional' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Infraestructura" defaultChecked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapInfraestructura municipio={municipio} titleDb='Infraestructura' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ambiental" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapAmbiental municipio={municipio} titleDb='Ambiental' departamento={departamento}/>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Seguridad" /> 
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <TableInfoMapSeguridad municipio={municipio} onMarkerClick={handleMarkerClick} titleDb='Seguridad' departamento={departamento}/>
        </div>
      </div>
    </div> 
  )
}

export default TabTableInfoMap