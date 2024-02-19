import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRita = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.56 115.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA RITA', municipio.toUpperCase())}
              className="cls-1"
              d="M1,99.2c-.4-2.1-.7-3.7-1-5.4,10.4-4.4,10.5-14.9,13.1-23.7,1.5-5,.9-10.5,1.4-15.8.2-1.6.3-3.6,1.3-4.7C24.1,39.3,26.3,27.4,26,14.7c-.1-7.3.4-7.3,7.6-8.1,4.8-.5,9.5-2.1,14.2-3.4,3-.8,6-1.9,10.1-3.2V27.3c4.9-3.6,8.2-6.1,11.6-8.4,5.2-3.5,6.7-2.6,8.8,3.2,1.8,5.1,4.6,9.8,6.9,14.7.5,1,1.4,2,1.3,2.9-.8,7.7-1.4,15.4-2.8,23-.8,4.2-.6,7.1,2,11.1,3.9,6.1,10.3,12.4,4.6,21.3-1.4,2.2-.7,5.9-.9,8.6-5.5,0-10.8-.3-16,.1-2.4.2-4.6,1.9-6.9,2.8-3.4,1.3-6.9,2.6-10.4,3.6-5,1.4-10.3,2.2-15.2,3.9-9.8,3.4-16.6-1.6-22.9-7.7C13.1,101.9,8.3,98.2,1,99.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaRita