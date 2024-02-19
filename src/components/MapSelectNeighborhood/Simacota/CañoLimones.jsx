import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoLimones =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.5 73.4">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO LIMONES', municipio.toUpperCase())}
              className="cls-1"
              d="M62.2,12.4c-.7,3.4-1.3,6.8-2.1,10.2-.7,3.1,3.2,12.3,6,13.4,2,.8,4.4.8,6.5,1.5,3,1.1,5.9,2.5,9.9,4.3-6.5,2.5-11.8,3.7-16.3,6.3C55.6,54,54.8,56.4,57.3,66.6c.8,3.3,0,5.3-4.1,5.5-5.5.2-10.9.9-14.9,1.3.2-3.8.3-8.2.7-12.6a24.15,24.15,0,0,1,1.3-5.3c2.1-5.6,5-11,6.1-16.8.5-2.8-1.6-7.1-3.9-9.2s-5.8-3.8-9.5-1.1c-4.1,3-8.6,5.5-12.8,8.6-1,.7-1.1,2.6-1.8,4.4-6.1-.6-6.9,4.2-7.7,10.1-2.2-1-4.1-1.5-5.6-2.7C3.4,47.5,2.2,45.6,0,43.2c2.3-2.7,5-5.9,7.8-8.9C14,27.5,20.3,20.6,26.6,13.9c3.9-4.2,7.9-8.4,12.1-12.3,1-1,2.9-1.1,4.5-1.6C44.2,5.6,52.1,10.7,62.2,12.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoLimones