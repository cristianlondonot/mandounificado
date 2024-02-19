import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.11 57.96" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA ROSA', municipio.toUpperCase())}
              className="cls-1"
              d="M39.11.9c-.8,4.5-2.1,9-2.3,13.5-.4,8.1-.2,16.2-.3,24.4,0,1.1-.2,3-.9,3.3-4.8,2.5-9.7,4.7-14.5,7.1-3.4,1.7-7.3,3-10,5.5-2.5,2.4-5.3,4.5-7.7,2.4-2.1-1.9-3.5-5.8-3.4-8.9.1-7.2,4.7-12.3,9.4-17.5,2.7-3,3.8-8,4.4-12.2.4-3.4,1.4-5.7,4.6-6.1C26.81,11.3,33,6.9,37.91,0A12.49,12.49,0,0,0,39.11.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaRosa