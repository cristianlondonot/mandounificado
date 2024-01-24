import React from 'react'
import TableInfoMap from './TableInfoMap';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react'
import TableInfoMapEconomico from './TableInfoMapEconomico';
import TableInfoMapInfraestructura from './TableInfoMapInfraestructura';
import TableInfoMapAmbiental from './TableInfoMapAmbiental';
import TableInfoMapSeguridad from './TableInfoMapSeguridad';
import TableInfoMapSocial from './TableInfoMapSocial';
import TableInfoMapPolitico from './TableInfoMapPolitico';

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
    
    <div className={`content w-full  bg-white relative  ${!municipio ? 'hidden' : ''}`}>
      {/* <Tab.Group >
        <Tab.List as={'div'} className='tabs tabs-lifted'>
          <Tab as={'a'} className='tab'>
            Todos los factores
          </Tab>
          <Tab as={'a'} className='tab'>
            Económico
          </Tab>
          <Tab as={'a'} className='tab'>
            Social y cultural
          </Tab>
          <Tab as={'a'} className='tab'>
            Político Intitucional
          </Tab>
          <Tab as={'a'} className='tab'>
            Infraestructura
          </Tab>
          <Tab as={'a'} className='tab'>
            Ambiental
          </Tab>
          <Tab as={'a'} className='tab'>
            Seguridad
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel as={'div'} className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMap municipio={municipio} titleDb='Todos los factores' departamento={departamento} />
          </Tab.Panel>
          <Tab.Panel as={'div'} className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMapEconomico municipio={municipio} titleDb='Económico' departamento={departamento} />
          </Tab.Panel>
          <Tab.Panel as={'div'} className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMapSocial municipio={municipio} titleDb='Social y cultural' departamento={departamento}/>
          </Tab.Panel>
          <Tab.Panel as={'div'} className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMapPolitico municipio={municipio} titleDb='Político Intitucional' departamento={departamento}/>
          </Tab.Panel>
          <Tab.Panel as={'div'} className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMapInfraestructura municipio={municipio} titleDb='Infraestructura' departamento={departamento}/>
          </Tab.Panel>
          <Tab.Panel as={'div'} className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMapAmbiental municipio={municipio} titleDb='Ambiental' departamento={departamento}/>
          </Tab.Panel>
          <Tab.Panel as={'div'} className=' bg-base-100 border-base-300 rounded-box p-6'>
            <TableInfoMapSeguridad municipio={municipio} onMarkerClick={handleMarkerClick} titleDb='Seguridad' departamento={departamento}/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}
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