import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltosDePaloNegro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.85 34.91" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTO DE PALO NEGRO', municipio.toUpperCase())}
              className="cls-1"
              d="M21.69,14a5.12,5.12,0,0,1,.4-3.2,12.66,12.66,0,0,0,1.5-3.1c.4-2.2-1.4-4.1-3.2-5.2a10.11,10.11,0,0,0-3-1.3,11.7,11.7,0,0,1-2.5-.7,2.18,2.18,0,0,1-.8-.5.67.67,0,0,1-.4,1,2,2,0,0,0-1.9,2.1.65.65,0,0,1-.6.6,8.67,8.67,0,0,1-3.1-1c-.4-.1-1-.4-1.4-.3s-.4.6-.6.8a5.19,5.19,0,0,0-.7,2.7c.1.8,1.2,1,1.8,1.3a2.92,2.92,0,0,1,1.9,1.7,5.25,5.25,0,0,1,0,3.5,9.78,9.78,0,0,0-.6,3.8,6.13,6.13,0,0,1-.2,3.3,5.2,5.2,0,0,1-2,2.4,2.6,2.6,0,0,1-1.5.4,6.53,6.53,0,0,0-1.4,0c-.9.2-.8,1.6-.7,2.3.1.5.1.5.4.8a1.39,1.39,0,0,1,.5,1c0,.9-1,1.7-1.5,2.4a8.8,8.8,0,0,0-1.6,2.8c-.2.6-.2,1.2-.4,1.7a1.26,1.26,0,0,0,.2,1.3c.8.6,2.2.2,3-.1A7.61,7.61,0,0,0,6.09,33,8.27,8.27,0,0,1,9,31.4a11.92,11.92,0,0,1,6.2.6,7.65,7.65,0,0,1,2.1-4.2,19.48,19.48,0,0,1,4.6-4,19.65,19.65,0,0,0,2.5-1.3c.9-.8.3-1.9-.3-2.6A11.58,11.58,0,0,1,21.69,14Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltosDePaloNegro