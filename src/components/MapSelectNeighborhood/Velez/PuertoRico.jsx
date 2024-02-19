import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoRico = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.2 100" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUERTO RICO', municipio.toUpperCase())}
              className="cls-1"
              d="M10.2,3.2c3,1,6,2.1,10.3,3.6,1-1.4,2.8-3.9,4.9-6.8,3.9.7,3.1,4.1,2.6,6.9-1.4,7.5-3.2,15-4.7,22.6-1,5,3.1,8.4,8.3,7.1S42.1,34.1,47.4,33c7-1.4,12,1.1,16.5,6.8,1.8,2.3,5.1,3.4,7.3,4.7,1.6,3.8,2.2,9.2,5.1,10.9s8.1-.1,12.9-.4C78.8,76.7,60,88.4,40.1,100c-.4-2.6-1.2-5.5-1.2-8.5-.1-6.1-1.8-7.1-7.8-7C21,84.6,14.6,91.8,5.5,96c-1.3-6.9-2.2-13.9-4-20.6-1.8-5.8-2.4-10.6.6-16.6,2.7-5.6,2.3-12.7,3.2-19.2C6.8,28,8.4,16.4,10.2,3.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuertoRico