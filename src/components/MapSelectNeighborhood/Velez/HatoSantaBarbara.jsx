import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const HatoSantaBarbara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.1 24.32" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('HATO SANTA BARBARA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,7.39c2.4-1.1,6.4-2,9.3-4.3,5.1-4,9.1-4.5,13.4.8,1.1,1.3,3,2,5.4,3.6-5.5,4.2-13.7,6.4-10.7,15.6-2.3.5-4.3,1.4-6.2,1.2-3.1-.3-6.4-.6-5.8-5.6C6.1,13.19,3.8,8.69,0,7.39Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default HatoSantaBarbara