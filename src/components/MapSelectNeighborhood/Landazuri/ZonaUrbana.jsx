import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.81 46.5">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
              className="cls-1"
              d="M47.41,6.5a22.18,22.18,0,0,1-3.8-3.7A10.31,10.31,0,0,1,41.81,0h-.1a23.46,23.46,0,0,0-4.3,1.9,8.23,8.23,0,0,1-4.1.6c-2.4-.3-4.7-1-7.1-.9a5.65,5.65,0,0,0-4.6,3.1c-.5.9-.7,2-1.7,2.5s-2.1-.1-3.1,0-1.7,1.3-2.5,2a5.19,5.19,0,0,1-2.9,1.1c-2,.3-4.2-.1-6.1.3a2.31,2.31,0,0,0-1.4,1c-.6.9-1,1.8-1.7,2.7a9.85,9.85,0,0,0-2,3c-.2,1,.5,1.8.9,2.7a19.73,19.73,0,0,1,.7,2.6,4.17,4.17,0,0,0,.8,1.8c1.8,1.8,4.8.7,7,.9a.71.71,0,0,1,.6,1c-2,4.3-5.9,7.3-8.6,11.1A7.67,7.67,0,0,0,0,40.5c-.1.8.7,1.4,1.2,1.9a7.72,7.72,0,0,1,1.6,4.1h1.5v-5l1.3-1.3H13l1.3,1.3h1.3l1.3-1.3V38.9L18,36.5h1.3l1.3-1.3H23l1.3-1.3V32.8h1.3V31.5h5l1.3-1.3L33,28.9h11.2l2.4-1.3V26.3l1.3-1.1h2.6v1.1h1.1l2.6,2.6h1.3l1.3-1.3V26.3l1.1-1.1,1.3-1.3h.6a16.35,16.35,0,0,0-4-10A82.41,82.41,0,0,0,47.41,6.5Z"
            />
          </g>
        </g>
      </svg>
  </div>
  )
}

export default ZonaUrbana