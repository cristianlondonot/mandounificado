import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPalmar = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.45 83.3" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL PALMAR', municipio.toUpperCase())}
              className="cls-1"
              d="M92.19,72.7c-6.1-9.6-15.6-8.1-23.2-6.2-8.5,2.1-17.7,4.7-23.5,13.4-1.8,2.7-7.8,2.7-10.4,3.4-6.9-8.2-13.1-15.6-19.3-23.1a17.83,17.83,0,0,1-2.4-3.2c-1.7-3.6-3.5-6.4-7.9-7.9-6.4-2.1-6.6-4.5-3.7-10.9.8-1.7,1.9-4.9,1.1-5.6-4.6-4.4-.4-6,1.9-8.9,1.9-2.3,3.5-5.8,3.1-8.6-1-8.2,1.3-11.8,9.7-12.8a39.83,39.83,0,0,0,6-1.2c1.8-.5,3.5-1.1,3.6-1.1,6.5,4.6,11.7,9.2,17.6,12.3,5.5,2.9,10.9,5.2,11.1,12.3.2,7.3,4.9,10.1,11,10.9,6.5.9,13.1.9,21.9,1.5C100.59,47.4,98.89,60.3,92.19,72.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElPalmar