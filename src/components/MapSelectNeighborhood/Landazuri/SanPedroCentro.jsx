import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPedroCentro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.93 57.11" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PEDRO CENTRO', municipio.toUpperCase())}
              className="cls-1"
              d="M45.63,17.51a.61.61,0,0,1-.3-.7,30.88,30.88,0,0,1-4.3.1c-1.6-.1-3.6-.5-4.4-2.1-.9-1.9.2-3.9,1.2-5.5.5-.8,1.6-2.1,1.4-3.1s-1.7-.5-2.3-.5c-2.3.2-5.2,1.1-7.1-.7a.75.75,0,0,1-.1-.8c.3-.7,1-1.7.3-2.3a6.7,6.7,0,0,0-1.8-.7c-1.3-.4-2.6-.7-4-1a5.72,5.72,0,0,0-2.6-.1,2.42,2.42,0,0,0-1.4,1.4c-.6,1.2-1,2.7-2.1,3.6-2,1.5-5,1.4-7.3,1.3-1.1-.1-2.2-.2-3.4-.4-1.6,3.1-4.3,5.6-5.8,8.8a25.16,25.16,0,0,0-1.3,4.7,9.23,9.23,0,0,0-.3,2.9,6.5,6.5,0,0,0,.9,2.3c1.8,3.1,5,5.3,7.7,7.6a29,29,0,0,1,7.2,8,15.55,15.55,0,0,1,2.3,8.3l1.8.9h1.3l1.3,1.1,1.3,1.3,1.1,1.3,1.3-1.3h2.4v2.6l1.3,1.3,1.3,1.3h3.7l.6-.6a13.84,13.84,0,0,1,2.6-5.3,18.71,18.71,0,0,1,3.5-2.8,5.12,5.12,0,0,0,2.1-4.2c0-.3.3-.7.6-.6,2.2,0,3.8-1.6,5-3.3a21,21,0,0,0,2.7-6.1,21.14,21.14,0,0,0,.9-5.6,11.1,11.1,0,0,0-1.8-6.7A20.91,20.91,0,0,0,45.63,17.51Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPedroCentro