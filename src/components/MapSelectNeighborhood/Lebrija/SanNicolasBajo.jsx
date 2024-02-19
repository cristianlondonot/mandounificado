import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanNicolasBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.17 71.64" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN NICOLAS BAJO', municipio.toUpperCase())}
              className="cls-1"
              d="M51.9,65.71a14,14,0,0,1-.1-4.1,3.52,3.52,0,0,1,2.1-3.3c1.6-.7,3.4-.8,4.6-2.2,1.6-1.9,0-3.7-1.3-5.2-.8-.9-1.8-1.6-2.5-2.5s-.6-1.8-1.3-2.5a.6.6,0,0,1,0-.8.76.76,0,0,1,.1-.4,12.62,12.62,0,0,0,1.6-3.3,9.31,9.31,0,0,0,.3-3.7c-.1-2.4-.5-5.1.4-7.4.8-1.9,2.8-3.1,3.2-5.2a2.43,2.43,0,0,0-.8-2.4,6.54,6.54,0,0,0-3-.9,8.45,8.45,0,0,1-2.7-1.3,5.31,5.31,0,0,0-3.3-.6c-2.5.1-4.9.3-7.3-.7-1.6-.7-2.8-1.9-2.5-3.7.2-1,1.2-2.4.6-3.4-.4-.7-1.1-1.2-1.2-2a5.39,5.39,0,0,1,.3-2.5c.2-.7.6-1.7.2-2.4s-1.7-.5-2.3-.9c-.9-.5-1.3-1.7-1.7-2.6-.1-.1,0-.3,0-.4a5.33,5.33,0,0,1-2.8-.4A7.34,7.34,0,0,0,29.3,0c-2,.1-2.8,2.3-4.1,3.5.7.7,1.5,1.2,2.2,1.8a6.3,6.3,0,0,1,2,2.6,9.23,9.23,0,0,0,1.8,3,7.72,7.72,0,0,1,1.7,1.9,7.44,7.44,0,0,1,.1,5.3c-.6,1.9-1.8,3.5-2.3,5.4-.4,1.7-.9,3.8-2.8,4.4a3.26,3.26,0,0,0-1.3.4c-.3.3-.3.8-.5,1.2a4.69,4.69,0,0,1-1.8,1.9,11.87,11.87,0,0,1-5.1,2c-.9.1-2-.1-2.3-1-.6-1.6.5-3.4.3-5.1a23.58,23.58,0,0,0-5.9,2.4,6,6,0,0,0-2.2,2,6.46,6.46,0,0,1-1.8,2.2c-.9.6-2,.8-2.9,1.5a6.11,6.11,0,0,0-1.8,2.1c-.6,1.6,0,3.5-.2,5.2A12.75,12.75,0,0,1,0,48.31c.4.2.7.4,1.1.6A8.76,8.76,0,0,1,4.6,52c.7,1.4.8,3,1.4,4.4.2.5.6,1.3,1.2,1.3.4,0,.6-.8.7-1.1A4,4,0,0,1,8.7,55a2.88,2.88,0,0,1,2-.7,8.73,8.73,0,0,1,4.7,1.5,6.49,6.49,0,0,1,1.9,1.8,17,17,0,0,1,.9,2.4v.2c.1,0,.2-.1.4-.1a1.7,1.7,0,0,1,1.4.2c.8.5.7,1.7.6,2.5a10.33,10.33,0,0,0-.2,3.5c.5,1.4,2,1.8,3.2,2.2,1.6.4,3.2.6,4.7,1.1a19.63,19.63,0,0,1,3.9,1.8c.4.2.9.4,1.1,0s.2-.7.4-1.1.6-.4.8-.7.2-.4.4-.6a1.94,1.94,0,0,1,1.1-.9,6.24,6.24,0,0,1,3.3.3c1.2.3,2.3.6,3.5.8a32,32,0,0,0,5.4.3,34,34,0,0,0,4.5-.3C52.9,68.11,52.2,67,51.9,65.71Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanNicolasBajo