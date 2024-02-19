import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPradera = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.41 45.99" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PRADERA', municipio.toUpperCase())}
              className="cls-1"
              d="M43.8,30.69c-5.1-.9-11.6-.5-16.2-3.2-8.2-4.8-16.5-5.8-27.6-5,3.9-3.9,6.2-7.8,9.6-9.4,9.3-4.6,19-8.3,28.6-12.2,4.5-1.9,7-.9,8.5,4.5,1.1,3.9,4.5,7.1,6.3,9.7-1.2,3.7-2.2,6.6-3.2,9.5.5.2,1,.4,1.4.6.9-2,1.8-4,3.1-7,1.1,1.9,2.2,3,2,3.9-1,6,2.2,10.3,5.2,14.8,3.7,5.6,2,9.1-4.9,9.1-4.8.1-9.6-.9-15.2-1.5C42.5,38.69,43.3,34.19,43.8,30.69Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPradera