import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.18 7.98" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
              className="cls-1"
              d="M3.18,5V8c3-1,3-2,6,0-1-1,1-3-1-3,2,0,3-1,5-1A9,9,0,0,0,5.54,0c1.37.13-.29,1.05.64,2C3.47,1.08,2.39,3.43,0,3.9V6.4C1.34,6.93,2.6,7.31,3.18,5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ZonaUrbana