import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SaladoNegro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.47 78.36" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SALADO NEGRO', municipio.toUpperCase())}
              className="cls-1"
              d="M15.25,36.7c1.9,4.3,4.4,4.6,7.6,1.4s7.1-5.5,9.5-9.1c6-8.7,15-12.3,24.3-15.3a25.24,25.24,0,0,1,10.6-.9c6.9.8,19.1-5.7,22.1-12.8a46.07,46.07,0,0,1,4.3,2.9c6,4.8,12.2,9.5,18,14.6,3.3,2.8,4.4,5.7-.6,8.8-3.4,2.1-5.7,5.8-7.4,7.6-5.2-.3-9.6-.3-14-.8-2.2-.3-4.9-.9-6.4-2.4-6.5-6.6-14.4-7.7-23.2-7.2-4.6.3-6.3,2.1-7,6.3-.5,2.8-1.1,6.3-3,8.1-7.5,7.2-10,16.9-13.6,25.9C31.55,76.2,24,80.6,10.65,77.3c-.4-.1-.7-.3-1.1-.4-11.1-2.2-12.1-5.4-5.2-14,1.4-1.7,2.1-5.3,1.3-7.2C.55,43.6,5.55,40,15.25,36.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SaladoNegro