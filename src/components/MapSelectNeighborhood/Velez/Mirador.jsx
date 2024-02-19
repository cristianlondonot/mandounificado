import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Mirador = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.58 56.25" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MIRADOR', municipio.toUpperCase())}
              className="cls-1"
              d="M39.58,13.15c-.6,4.4-.5,9-1.9,13.2a31.09,31.09,0,0,1-6.1,9.7c-2.4,2.9-6.3,5-2.9,9.9,2.5-.5,5-1.1,7.5-1.6a10.63,10.63,0,0,0,.9,1.1c-3.2,2.1-6.4,4.2-9.5,6.4-1.4,1-2.4,2.5-4.1,4.4-1.7-.6-4.6-.4-4.8-5.1-.1-2.2-3.2-4.5-5.1-6.5-3.6-3.7-7.8-7-11.1-11-5.4-6.5-1.4-15.6,6.3-19a40.27,40.27,0,0,0,14.6-11.3c3.7-4.5,7.6-3.2,11.7-3.1.3,0,1.3,4,.6,5.4C32.68,12.15,32.48,12.05,39.58,13.15Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Mirador