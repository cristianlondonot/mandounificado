import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPedro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.51 57.41" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PEDRO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,48.44c2.1-4.9,3.9-8.5,5.3-12.3,2.1-6.1,5.8-12.5,5.2-18.4a21.66,21.66,0,0,1,3.8-15.2c.9-1.4,3.6-2.8,5.1-2.5A52.18,52.18,0,0,1,42,12l.9.9c2.4,2.5,6.4,4.8,6.6,7.4s-3.5,5.5-5.6,8.2c-3.4,4.3-6.8,8.6-10.6,12.6-1.5,1.7-4.1,2.3-5.8,3.9-2,2-4.1,4.2-5,6.7-2.3,6.4-3.7,7-9.6,3.7-2.1-1.1-4.8-1.1-6.9-2.2S2.2,50.24,0,48.44Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPedro