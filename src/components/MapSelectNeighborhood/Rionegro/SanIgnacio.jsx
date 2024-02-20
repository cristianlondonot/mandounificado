import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanIgnacio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74.3 57.01"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN IGNACIO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,28c8.9,1.4,9.5-7.2,14.6-9.5.6-.3-.6-4.8-1.2-8.2,1.5-1.6,5.3-4.1-.3-7.2,3.5-4.7,6.2-3.6,9.8,0,2.4,2.3,6.1,4.4,9.3,4.5,8.6.3,16.3,1.3,22.5,8.3,2.3,2.6,6.1,3.8,9,5.8,1.2.9,2.9,2.4,2.8,3.6-.3,6.6,2.9,10.8,7.8,13.2-3,5.1-6.4,9.7-8.5,14.9-1.5,3.8-3.3,4.3-6.4,2.8a34.31,34.31,0,0,1-7.2-4.7C42,42.63,29.1,39,17,34.13,11.9,32,6.6,30.43,0,28Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanIgnacio