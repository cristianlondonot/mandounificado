import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Clavellinos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.56 34.8" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CLAVELLINOS', municipio.toUpperCase())}
              className="cls-1"
              d="M5.1,0c7.6.7,15,1.1,22.4,2.1,2.8.4,6.6,1.4,7.8,3.5.9,1.5-.7,6.1-2.5,7.6C26,18.4,23.3,25,24,33.3c0,.5-.7,1-1,1.5-4.7-1.9-9.3-3.8-14-5.5-1.4-.5-3.2-.5-4.5-1.1C2.8,27.3,0,26,0,24.9c.1-4.1,1.1-8.2,1.9-12.3C2.9,8.3,4.1,4.1,5.1,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Clavellinos