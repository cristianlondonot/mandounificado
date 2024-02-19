import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanBenito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.84 59.92">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN BENITO', municipio.toUpperCase())}
              className="cls-1"
              d="M42.6,19.12c-.3-1.1-.8-2.1-1.2-3.2s-.5-2.2-.8-3.2a7.25,7.25,0,0,0-1.5-2.5,51.15,51.15,0,0,1-3.6-4.3,3.48,3.48,0,0,0-1.1-1.3A4.38,4.38,0,0,0,32.1,4c-1.6-.1-3.3.3-4.5-1-.8-1-.9-2.5-2.3-2.9-3-.8-4.6,2.7-6.4,4.4-1.4,1.3-3,2.4-4.3,3.8s-2,3.1-3.2,4.5c-1.9,2.4-5,3.6-6.4,6.6-.7,1.5-1.6,2.9-2.4,4.5a5.19,5.19,0,0,0-.1,4.7c.6,1.1,1.4,1.9,2,3a4.76,4.76,0,0,1,.3,3.7,8.49,8.49,0,0,1-2.1,3.2,10,10,0,0,0-2.3,2.7c-.8,1.7.1,3.2.4,4.9.3,1.9-.7,3.7-.8,5.6.2,0,.5-.1.7-.1a1.61,1.61,0,0,1,1.1.5l1.5,1.2c2.8,2.2,5.5,4.7,9,5.4,3.3.7,6.6.4,9.9,1.2a1.52,1.52,0,0,1,.7-1.2c.2-.1.5-.2.7-.3a9.12,9.12,0,0,1-1.7-2.3c-1.9-3.8,1.5-7.7,3.4-10.8a7.59,7.59,0,0,0,1.1-3.6c.2-1.2.5-2.3.8-3.5a30.27,30.27,0,0,0,.5-6.7,51.15,51.15,0,0,1,.3-5.6c.2-1.3.5-3.6,2-4,.7-.2,1.2.2,1.7.7a6.09,6.09,0,0,0,2.4,1.8c2.1.8,4.3-.6,6.1-1.5a13.38,13.38,0,0,1,2.6-.9A9,9,0,0,0,42.6,19.12Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanBenito