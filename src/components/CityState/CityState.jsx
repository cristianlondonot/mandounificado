import React from 'react'
import CardCityState from './CardCityState'

const CityState = ({municipio}) => {
  const municipioFormateado = municipio.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return (
    <div className={`collapse bg-base-200 w-full`}>
      <input type="checkbox" /> 
      <div className="collapse-title text-xl font-medium">
        <h1 className='text-2xl font-bold'>Información Veredas {municipioFormateado}</h1>
      </div>
      <div className="collapse-content"> 
        <div className="flex gap-5">
          <CardCityState title={`Estado Veredas ${municipioFormateado} 2021`} itemVeredafilter='5' municipio={municipioFormateado}/>
          <CardCityState title={`Estado Veredas ${municipioFormateado} 2022`} itemVeredafilter='6' municipio={municipioFormateado}/>
        </div>
      </div>
    </div>
  )
}
export default CityState