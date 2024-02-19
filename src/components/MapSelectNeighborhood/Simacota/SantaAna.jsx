import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaAna =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.34 64.99" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA ANA', municipio.toUpperCase())}
              className="cls-1"
              d="M13.12,39.48l-.2.2c2.6-2.5,5.4-4.7,7.7-7.5,6.2-7.4,10.6-16,15.1-24.6,3.2-6.2,13.2-9.2,19.2-6.7,1.3.5,2.5,2.9,2.6,4.4.2,7,3.2,10.5,10.3,8.9,2.6,9-5.2,11.5-8.9,16.3-4.1,5.1-8.7,9.8-13.3,14.5-6.3,6.6-12.5,13.3-19.4,19.3-1.6,1.4-5.9.4-8.7-.3-4.4-1-8.7-2.9-13-4.1-5.1-1.4-5.9-4.3-2.3-8.2S9.42,43.58,13.12,39.48Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaAna