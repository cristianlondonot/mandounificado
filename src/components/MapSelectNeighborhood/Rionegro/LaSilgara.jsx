import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaSilgara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48.8 55.09"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA SILGARA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,30.1c1-3.5,2.1-6.3,2.4-9.2.5-4.2-.7-8.9,1-12.5S9.2-.1,12.2,0C19,.1,26.3,1.5,31.6,7.3a14.37,14.37,0,0,0,6.2,4.1C45.3,13.6,46.5,20,48.4,26c1.6,5.3-1.9,9.2-4.5,13.1-2.8,4.4-6,8.6-9.2,12.7a6.88,6.88,0,0,1-3.8,1.9c-3.4.6-6.9,1-10.4,1.3-3.2.2-6.5,0-9.7,0a13.45,13.45,0,0,1,0-2.3c5.5-6.5,5.2-9.8-2.1-16.2C5.9,33.8,2.5,31.9,0,30.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaSilgara