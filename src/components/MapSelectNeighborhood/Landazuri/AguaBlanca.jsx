import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AguaBlanca = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.88 46.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('AGUA BLANCA', municipio.toUpperCase())}
              className="cls-1"
              d="M33.4,1.2c-.6-.7-1.8.5-2.3.9-.8.6-1.7,1.5-2.7,1.6a.62.62,0,0,1-.8-.5,5.82,5.82,0,0,1-.3-1.9c-.1-.1-.1-.2-.1-.4a2.77,2.77,0,0,0-.1-.9c-1,.2-1.9,1.6-2.4,2.3a32.09,32.09,0,0,0-2.4,4.5,7.89,7.89,0,0,1-2,3.1c-.7.6-1.6,1-2.1,1.9a6.18,6.18,0,0,0-.5,2.7,8,8,0,0,1-1.8,4.9c-.6.6-1.2,1-1.8,1.5a3.74,3.74,0,0,0-1.2,2,15.63,15.63,0,0,1-3,5.7c-.8,1.2-1.6,2.7-3.2,2.8s-3.1-.6-4.5.5A6.92,6.92,0,0,0,0,35.8H.3a16,16,0,0,1,4.9.1,3.21,3.21,0,0,1,2.3,3,24.67,24.67,0,0,1-.2,4.7,8.13,8.13,0,0,0,.1,2.2.52.52,0,0,0,.2.4l.1-.1c4.2-2.7,7.4-6.5,10.5-10.4a68.23,68.23,0,0,1,4.9-5.8,19.86,19.86,0,0,1,2.7-2.2,8.07,8.07,0,0,0,2.6-2.6h0c.1-.7.3-1.5.4-2.2.3-1.7.5-3.4.7-5.1a27.34,27.34,0,0,1,.6-4.9c.5-2.2,1.7-3.9,2.6-5.9a19.17,19.17,0,0,0,1.1-3.1C33.9,3,34,1.8,33.4,1.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AguaBlanca