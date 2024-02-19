import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuenteTierra = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.7 79.03" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUENTE TIERRA', municipio.toUpperCase())}
              className="cls-1"
              d="M34.3,0c1.8,8.4,8.5,5.8,13.9,6.6.4,6.2,4.4,8.9,10.1,10.2,1.5.3,2.9,1.7,4,2.9,5.7,6.1,10.8,12.8,17,18.4,3.3,3,8.3,4.1,12.6,5.9,1.3.6,2.8.9,4.8,1.6a33.46,33.46,0,0,1-3,4.6c-10.6,11-19.2,24.4-35.5,28.4-6.3,1.5-10.4-.9-9.8-7.2.9-9.3-6.4-13.6-11.1-19.5-3-3.7-6.9-6.9-9.3-11-4.2-7.2-17.1-13-23.8-9.3a64.37,64.37,0,0,1-4-7.3c-.4-1-.2-3.2.5-3.7C11.7,13.8,22.8,7.1,34.3,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuenteTierra