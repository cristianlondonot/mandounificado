import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Astilleros = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.76 83.71" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ASTILLERO', municipio.toUpperCase())}
              className="cls-1"
              d="M1.9,72.1C1.4,69.9.8,67.7.5,65.5c-.8-6.6-1.6-12.3,5.9-17.1,5.1-3.3,11.4-7.1,12.9-15.1.5-2.7,7.1-5.7,11.2-6,11.6-.9,14.8-10.1,19.8-17.9,2.3-3.6,5-7.1,6.6-9.4C61.9,1.6,66,2.8,70,4.2a9,9,0,0,1,3.4,2c6.8,7,13.2,14.3,20.2,21.1,3.1,3,2.6,5.1.2,7.9-4.5,5.2-8.3,11-13.2,15.7-4.1,4-9.6,6.4-13.9,10.2-9.9,8.8-23.3,11.1-33.9,18.5a22.38,22.38,0,0,1-10.7,4.1c-2.5.2-5.3-2.1-7.7-3.8C10.5,77.1,6.8,74,3.1,71A6.75,6.75,0,0,0,1.9,72.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Astilleros