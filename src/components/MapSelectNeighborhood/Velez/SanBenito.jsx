import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanBenito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.72 61.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN BENITO', municipio.toUpperCase())}
              className="cls-1"
              d="M35.12,61.1c-1.6-1.5-3.6-2.8-4.7-4.7-3.5-6.1-5.9-12.8-10-18.4-3-4-7.6-7-12.1-9.6-7.9-4.5-10.2-11-6.8-18.9C2.62,7,2,3.9,2.32,0,4,6.9,8.22,3.7,11,4.7c2.9,1.7,5.7,4.7,8.7,4.9,6.1.3,7.8,7.5,13.8,7.8.5,0,2.2,6.5,1,7.7-5.9,6.2-2.7,12.7-1.6,19,.8,5.2,2.5,10.2,3.8,15.3A12.88,12.88,0,0,1,35.12,61.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanBenito