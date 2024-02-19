import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanIsidro =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.74 69.78" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN ISIDRO', municipio.toUpperCase())}
              className="cls-1"
              d="M7.54,0c10.5.2,12,7.8,13.9,13.6,3.7,11.1,12.1,16.8,22.3,22.4-1.1,5-2.4,10.5-3.7,16-.3,1.1-1.2,2.2-1,3.1,1.1,6.5-2.2,9.4-8,11.2-4.6,1.4-8.5,5.9-13.8,1.8a10.67,10.67,0,0,0-3.7-1.1C3.34,64.8-1.56,56.6.44,46.2c1.7-8.9,2.2-18.1,3.5-27.1C4.94,12.6,6.34,6.1,7.54,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanIsidro