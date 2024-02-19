import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanIgnacio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.4 50.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN IGNACIO', municipio.toUpperCase())}
              className="cls-1"
              d="M38.2,37.8c-3.7,1.1-7.8,1.3-10.4,3.4-2.3,1.9-2.9,5.8-4.3,9C16.4,45.6,8.4,40.4,0,34.9,13.3,27.3,19,15.9,10.9,0c7.7,1,15.2,2.3,22.8,2.8,4,.3,4.5,2.2,4.7,5.6.2,3.8,1.1,7.6,2,12.9C36.2,24.5,35.8,30.6,38.2,37.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanIgnacio