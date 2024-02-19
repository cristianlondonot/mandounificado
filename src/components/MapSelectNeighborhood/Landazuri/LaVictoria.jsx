import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaVictoria = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.01 66.51" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA VICTORIA', municipio.toUpperCase())}
              className="cls-1"
              d="M42.91,31.5a10.36,10.36,0,0,0-3.2-4.3c-2.9-2-6.8-1.7-10.1-1.3-2.9.3-6.9,1-9.3-1.1A4.39,4.39,0,0,1,19,21.7a40.48,40.48,0,0,0-.9-4.8,25.07,25.07,0,0,0-3.8-8.3,25.88,25.88,0,0,0-7.1-6.5C6.11,1.4,4.81.8,3.71,0a19.13,19.13,0,0,1-1.5,7,24.36,24.36,0,0,0-.8,8.5,39.71,39.71,0,0,1-.3,7.7c-.4,2.6-.8,5.2-1,7.9a56.12,56.12,0,0,0,.1,8.2c.2,2.7.5,5.4.5,8.1s-.3,5.2.8,7.6a28.69,28.69,0,0,0,3.7,5.4,12.54,12.54,0,0,1,1.6,2.4,22.5,22.5,0,0,0,.8,2.4c.8,1.9,3,1.2,4.7,1.1,3.9-7,8.6-13.7,16.2-16.8a6,6,0,0,1,1.9-.6,6.46,6.46,0,0,0,1.9-.4,8.39,8.39,0,0,0,3.3-2.9c1.9-2.3,3.9-4.6,5.9-6.8a17.22,17.22,0,0,1,3.4-3.2H45A17.68,17.68,0,0,1,42.91,31.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaVictoria