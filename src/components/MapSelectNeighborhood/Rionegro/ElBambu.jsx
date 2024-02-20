import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElBambu = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46.29 42.43"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL BAMBU', municipio.toUpperCase())}
              className="cls-1"
              d="M0,5.3C1.1,3.1,2,1.2,2.6,0,9.9,2.1,16.9,3.9,23.9,6.1c1.1.3,1.8,1.9,2.7,2.7,1.1,1,2.8,2.9,3.5,2.6,5.9-2.3,6.2,2.7,7.8,5.7,2.6,5,5.4,9.9,7.4,15.2,2.2,5.9.8,8.2-5,9.8-5.5,1.5-14.2-2.4-18.3-6.5-2.6-2.6-7-3.5-10.6-4.8C8.1,29.6,6.3,28.4,7,23.9,8.8,12.7,7.9,11.2,0,5.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElBambu