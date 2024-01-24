import React from 'react'
import CardCityState from './CardCityState'

const CityState = ({municipio}) => {
  return (
    <div className={`collapse bg-base-200 w-full`}>
      <input type="checkbox" /> 
      <div className="collapse-title text-xl font-medium">
        <h1 className='text-2xl font-bold'>Información Veredas {municipio}</h1>
      </div>
      <div className="collapse-content"> 
        <div className="flex gap-5">
          <CardCityState title={`Estado Veredas ${municipio} 2021`} itemVeredafilter='5' municipio={municipio}/>
          <CardCityState title={`Estado Veredas ${municipio} 2022`} itemVeredafilter='6' municipio={municipio}/>
        </div>
      </div>
    </div>
  )
}
export default CityState