import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MantelinaAlta = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.09 34.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MANTELINA ALTA', municipio.toUpperCase())}
              className="cls-1"
              d="M17,0a66.54,66.54,0,0,0,4.2,5.9C30.5,17,30.5,17,20.5,27.4c-2.4,2.5-4.6,5-6.4,7.1C9.8,33.2,5.4,32,.1,30.4-.7,26.6,3.6,17,8.2,14.5,13.4,11.8,17.2,8.1,17,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MantelinaAlta