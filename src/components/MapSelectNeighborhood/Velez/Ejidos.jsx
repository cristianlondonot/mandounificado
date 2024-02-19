import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Ejidos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.02 28.48">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EJIDOS', municipio.toUpperCase())}
              className="cls-1"
              d="M0,9H7.6C7,6.4,6.5,3.9,5.9,1.3c4.9,0,10.2.1,15.6-.1,2.1-.1,4.2-.9,6.3-1.1a26.59,26.59,0,0,1,6.3.2c.7.1,1.3,1,2,1.4C39.3,3.1,44.8,4,45.2,6c1.2,5.9.9,12.3.3,18.4-.3,3.3-7.9,5.5-10.7,3-6.1-5.4-13.1-7.1-20.9-6.3a4.83,4.83,0,0,1-3.4-.8C6.7,16.2,2.9,12,0,9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Ejidos