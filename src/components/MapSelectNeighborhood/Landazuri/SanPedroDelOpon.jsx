import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPedroDelOpon = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.11 38.82" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PEDRO DEL OPON', municipio.toUpperCase())}
              className="cls-1"
              d="M37.31,10.2a18.48,18.48,0,0,0-14.2-7.6c-2-.1-4.1.1-6.1.1a9.31,9.31,0,0,1-5.2-1.2A5,5,0,0,1,10.41,0c-.3,1-.6,1.9-1,2.9a22,22,0,0,1-2,4.4,22.2,22.2,0,0,1-2.8,3.3,34.4,34.4,0,0,0-3,3.5c-.7,1.1-1.7,2.6-1.6,4,.1,1,.9,1.5,1.6,2.1a18,18,0,0,1,2.9,2.6,2.39,2.39,0,0,1,.6,2.4,8.08,8.08,0,0,0-1,3.1c0,1.8,1.4,3.2,1.9,4.8a1.71,1.71,0,0,1-.2,1.6c.7.1,1.4.3,2.1.4,1.3.3,2.7.2,4.1.6,2.4.7,4.1,2.6,6.6,3s4.9-.3,7.3-.8a21.66,21.66,0,0,1,2.5-.4V32.6l1.3-1.3L31,30V28.9h1.3l2.4-1.4L36,25.1h1.3l2.4-1.3L41,22.5l1.3-1.1,1.8-1C41.31,17.4,39.71,13.5,37.31,10.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPedroDelOpon