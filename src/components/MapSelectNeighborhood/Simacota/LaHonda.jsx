import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaHonda =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.3 68.41">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA INDIA', municipio.toUpperCase())}
              className="cls-1"
              d="M1.6,11.41c.3-3.6.7-7.1,1-11.3,6,0,13.7-.3,21.3.1,7.8.4,15.6,1.6,24.1,2.5-1,10.1-3.3,21.3-2.9,32.4.4,10.9,3.7,21.8,5.2,33.3C32.6,53.61,16.2,37.31,0,21.61c.6-3.7,1.2-7,1.8-10.3A.35.35,0,0,0,1.6,11.41Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaHonda