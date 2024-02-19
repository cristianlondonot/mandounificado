import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PaloBlanco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.6 36.88" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PALO BLANCO', municipio.toUpperCase())}
              className="cls-1"
              d="M3.4,36.88C1.7,34.48.4,32.48,0,32c2.1-5.4,4.4-10,5.8-14.9,1.9-6.9,4.4-14.3,11.6-15.9,8.1-1.8,17.3-2.5,23.2,5.2-2.8,6.2-5.5,11.9-7.9,17.7-1.4,3.5-3.1,4.2-6.5,2.2-1.5-.8-4.9-.9-5.7.1-4.1,4.9-8.5,8.9-15.3,9C4.6,35.48,4,36.38,3.4,36.88Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PaloBlanco