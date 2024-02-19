import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPire = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.62 89.05" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL PIRE', municipio.toUpperCase())}
              className="cls-1"
              d="M126.32,89.05c-14.1-5-27.5-8.8-42.3-4.6a97,97,0,0,1-24.5,3.8c-12.4.4-24.8-.6-37.2-1a8.06,8.06,0,0,1-3.3-1.1c-9.5-4.3-9.5-4.3-17.7-.5-3.2-5.3,0-9.6,3.3-12.7,5.5-5.2,6.5-9.5,2.5-15.8a20.53,20.53,0,0,1-2.5-7.7c-1.3-7.3-2.6-14.6-3.3-22-.3-3.2.7-6.6,1.2-9.9a4.59,4.59,0,0,1,.7-1.6c3.7-4.3.4-12.9,8.4-14.3A138,138,0,0,1,28.52.05c6.8-.4,12.8,1.7,18.5,5.4a8.84,8.84,0,0,0,6.4.8c6.8-1.7,12.6.5,18.8,2.7,10.9,3.9,21.6,8.6,33.3,9.5,4.4.3,6.6,2.9,8,6.8,1.9,5.2,5.5,8.5,11.1,9a2.54,2.54,0,0,1,1.2.2c6.3,3,12,7.8,19.8,4.3C143.92,58,134.62,73.35,126.32,89.05Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElPire