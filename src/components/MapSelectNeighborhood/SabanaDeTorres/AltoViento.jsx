import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoViento = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.62 65.1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTO VIENTO', municipio.toUpperCase())}
              className="cls-1"
              d="M24.05,65.1c-2.4-.8-6.2-2-9.8-3.4a4.94,4.94,0,0,1-2.5-2.8C8.85,49.1,7.55,38.4,3,29.5-2,19.7.75,10.7,1.05,0c6.3,3.7,13.7,3.5,17.7,11.1,1.9,3.6,6.6,5.7,10.1,8.3,1.9,1.4,5.4,1.9,6.1,3.7,1.6,4,3,8.6,2.6,12.7a18.1,18.1,0,0,1-6.3,13C27.15,52.2,26.35,59.4,24.05,65.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltoViento