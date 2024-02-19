import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoTesorito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.71 78.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path 
              fill={getColorByCarencias('ALTO TESORO', municipio.toUpperCase())}
              className="cls-1"
              d="M35,78.5C24.5,73,12.4,66.6.3,60.2c-.1-1-.2-1.9-.3-2.9,2.1-1.3,4.2-2.6,6.2-4.1,1.1-.8,3-2.4,2.8-2.7-2.8-5.2,2.3-8.4,2.9-12.7.2-1.7.5-3.6,0-5.1-1.8-5.5.5-9.7,6.3-9.6,4.2.1,7-1.4,9.8-4.3,1.6-1.6,4.3-2.2,6.2-3.5a42,42,0,0,0,6.3-5.6,22.68,22.68,0,0,0,2.9-4.8C44.3,3.3,45.1,1.6,46,0c2.1,8.2,4.6,16.3,6.2,24.5.9,4.2.1,8.8.6,13.1a97.32,97.32,0,0,0,3.4,16.9c2.1,6.6-2.5,17-9.1,19.2C43.5,75,40,76.5,35,78.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltoTesorito