import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanVicente = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.43 37.07" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN VICENTE', municipio.toUpperCase())}
              className="cls-1"
              d="M1.63,35.27c-5-7.8,2.9-12,5.1-17.8,1.5-3.9,4.1-7.5,6.4-11.1,1.2-1.9,2.6-4.4,4.5-5.1,3-1.2,7.2-3.3,7.7,3.5.2,2.9,2.9,5.6,5.1,9.4-8.7,6.5-17.6,13.1-26.6,19.8l3.1,3.1c-1.9-.7-3.7-1.4-5.6-2C1.43,35.07,1.63,35.27,1.63,35.27Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanVicente