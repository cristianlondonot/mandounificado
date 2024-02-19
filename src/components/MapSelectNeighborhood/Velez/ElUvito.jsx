import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElUvito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 22.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL UVITO', municipio.toUpperCase())}
              className="cls-1"
              d="M65,3.66c-2.2,2.7-3.3,3.9-4.4,5.3-.8,1-2.2,2.1-2.3,3.2-.3,8.3-4.4,12.1-12.4,10.3-8.3-1.8-16.4-4.2-24.7-6.1-6.6-1.6-13.4-2.9-21.2-4.5a67.87,67.87,0,0,0,5.9-3.4c2-1.5,4.9-3.1,5.4-5.1,1.2-4.8,3.4-3.4,6.3-2.2,4.3,1.8,9.4,5.5,13,4.5,4.6-1.3,8.7-.6,13.1-.8C50.1,4.56,56.4,4.16,65,3.66Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElUvito