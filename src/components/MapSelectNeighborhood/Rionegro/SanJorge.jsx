import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanJorge = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 77.46 95.11"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN JORGE', municipio.toUpperCase())}
              className="cls-1"
              d="M5,0c1.7.8,3.2,1,4,1.9,3.8,4.4,8.1,3.8,12.5,1.2,4.8-2.8,8.4-2.3,10.6,3.2,1.4,3.6,4.1,4.7,7.8,4.6,7.2-.2,14.5-.1,21.7-.1,4.9,0,11,6.1,11.7,11.7.2,1.7.2,3.6,1.1,4.9,3.3,5,4.7,9.1.4,15-2.5,3.4-1.8,9.3-2.4,14.1a3,3,0,0,0,1.2,2.5c2.7.9,4.4,2.5,3,5.3a75.71,75.71,0,0,1-7,10.7c-.2.3-3.3-1.5-4.9-2.6-1.21-.9-2-3.1-3.21-3.2s-3.2,1.1-4.2,2.3c-3.3,4.3-4.7,8.7-1.8,14.1,1.1,2.1.6,7.5,0,7.7-3.5.8-7.5,3.9-10.7-.5-2.9-3.9-6.4-3.9-10.09-1.3s-6.21,1.4-9.8-.9c-11-7.1-10-18.5-10.41-28.9-.4-10.6-2.9-19.5-12.09-25.5C-1,34-.32,31,1.68,28.9c6.7-7.1,5.9-15.1,3.79-23.4C5.28,3.9,5.28,2.1,5,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanJorge