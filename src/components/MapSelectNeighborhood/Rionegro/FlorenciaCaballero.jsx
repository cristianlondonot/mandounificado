import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const FlorenciaCaballero = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.9 82.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('FLORENCIA CABALLERO', municipio.toUpperCase())}
              className="cls-1"
              d="M61.9,64.8c-2.1,1.8-5.7,5.1-9.1,8.2-7.1-3.8-14.4-4.2-22-2.9-.6.1-1.7,1-1.7,1.5,0,4.4-3.9,5.4-6.4,7.6-.6.5-.7,1.7-1.1,3-1.6-1-3.1-2-4.8-3.1,1.6-1.7,3.2-3.3,4.7-5-.1-.5-.2-1.1-.3-1.6-2.6.2-5.3.4-8.9.7a69.11,69.11,0,0,0-2.6-8.3,4.89,4.89,0,0,0-3.8-2.2c-2,.1-3.8,1.3-5.9,2.1C.8,60.3,1.6,56.1,2.2,53c3.1-1.6,7.7-3.4,7.5-4-1.4-5.4,2.6-12.1-4-16.3,1.8-8.1,8.4-15.4,4.6-25,4.5-2.6,9-5.1,13.4-7.7.4.2.9.5,1.3.7-4.9,5.8-1.1,8.4,2.4,12.4,2.3,2.6,2,8.3,1.3,12.4-.8,5.1.6,7,5.3,8.7s8.5,5.2,13,7.4c5,2.4,10.3,4.2,14.9,6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default FlorenciaCaballero