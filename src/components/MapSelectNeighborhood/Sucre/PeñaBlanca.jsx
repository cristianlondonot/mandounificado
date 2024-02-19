import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PeñaBlanca = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 102.21 113.33"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PEÑA BLANCA', municipio.toUpperCase())}
              className="cls-1"
              d="M79.81,19.13c4.6,5,7,14,17.1,11.8.4-1.1,1-2.6,1.7-4.3,1.4,2.9,2.5,5.3,3.6,7.6a19,19,0,0,0-2.8,2.4c-3.4,3.8-6.4,7.1-12.6,7.1-5.7,0-7.8,5.5-4.9,10.6,6.1,10.6,9.5,21.6,6.4,34.1-.6,2.4,1.6,5.5,2.9,9.3-.5.8-1.7,2.8-3.1,4.9-2.3-.5-5.1-.4-7.1-1.5-5.8-3.2-10.7-.1-15.5,2.1-3.8,1.8-6.8,3.8-11.5,2.1-5.2-1.8-10.7,1.6-15.5,8-7.2-5.2-12.4-25.7-7.7-29.7-.9-1.2-2.4-2.3-2.6-3.6-1-7.6-5.8-13.8-7.4-21.5-1.4-6.5-9.2-11.7-14.4-17.2-1.7-1.8-5.5-2.8-5.8-4.7-.7-4.2-1.1-9.2.5-13,3.1-7.7,7.5-14.8,11.6-22,1.5-2.7,6.1-1.9,8,1.3,10.1,16.8,25,25,44.5,22.9C70.11,25.43,74.41,21.73,79.81,19.13Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PeñaBlanca