import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPablo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.92 20.51">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PABLO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,6.6C10.4,8.7,17.7,5,24.4,0c2.1,5.3,3.2,10.9-4.8,13.4-.2.1-.3.3-.4.4C8.5,23.3,8.5,23.3,2,10A19.4,19.4,0,0,1,0,6.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPablo