import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guayabal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.46 27.97">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUAYABAL', municipio.toUpperCase())}
              className="cls-1"
              d="M24.8,17c-.5,5.3-7.5,11-13.4,11a86.17,86.17,0,0,1-8.8-.2A4.71,4.71,0,0,1,0,25.86c2.6-5-2.5-12.1,4.3-16,.9-.5,1.4-2,2.1-3,5.9-8.2,5.9-8.3,15-4.2a87.21,87.21,0,0,1,11.8,6c2.7,1.7,3.4,4.4-.3,6C30.4,15.66,27.6,16.16,24.8,17Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Guayabal