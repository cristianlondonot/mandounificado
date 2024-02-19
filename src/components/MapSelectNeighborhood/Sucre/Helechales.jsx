import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Helechales = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.47 47.13" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('HELECHALES', municipio.toUpperCase())}
              className="cls-1"
              d="M3.74,3.22c12-3,23.7-5.8,34,.9v16.4c0,6.9,3.9,10.7,10.7,10.9,8.6.2,9.8,2.3,5.9,10.1-1,2-2,4.1-2.8,5.6-3.5,0-6.6-.1-9.6,0-4.4.1-7.2-1.4-9.2-5.7-.9-2-3.8-3.5-6.1-4.3-8.1-2.8-16.4-5-24.5-7.9-3.4-1.2-2.6-5.9,1.3-8.9C9.64,15.52,9.84,7.92,3.74,3.22Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Helechales