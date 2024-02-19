import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPacho = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48.87" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PACHO', municipio.toUpperCase())}
              className="cls-1"
              d="M6.9,48.1a35.93,35.93,0,0,0,4.6.5,14.26,14.26,0,0,0,3.6.2V48c0-.2.1-.4.2-.4a17,17,0,0,1-.5-2.4,3,3,0,0,1,1.4-2.4,4.15,4.15,0,0,0,1.2-1.1c.3-.4.6-.9.9-1.3A3.34,3.34,0,0,1,20.7,39a10.73,10.73,0,0,1,3.1,0c1.2,0,2.4.1,3.6.1,2.6.1,5.2,0,7.7,0h0a23,23,0,0,1,1.2-3.4c.4-1.2.6-2.5,1-3.8a14.35,14.35,0,0,0,.4-2.2,10.87,10.87,0,0,1,.1-1.8,10.11,10.11,0,0,1,1.3-3,10.61,10.61,0,0,0,.9-5,13.11,13.11,0,0,0-.7-5.2,3.12,3.12,0,0,0-1.5-1.5,3.32,3.32,0,0,1-1.7-1.6,5.78,5.78,0,0,1,.2-3.2,6.6,6.6,0,0,0,0-2.8c-.3-1.7-1.1-3.8-2.9-4.5Q33.1,1,33.1.8L33,.7c-.1,0-.1-.1-.1-.2V.4c0-.1-.1-.1-.1-.2V0a9,9,0,0,0-2.7.7c-.2.1-.1,0-.1.2a3.08,3.08,0,0,1-.3,1.3,13,13,0,0,1-1.9,3.7A6.16,6.16,0,0,1,25,8.4c-.8.4-1.9.4-2.3,1.3a5,5,0,0,0-.1,2.1,4.19,4.19,0,0,1-.4,1.5,7.32,7.32,0,0,1-5.4,3.2c-2.1.3-4-.5-6-1.1-.3,1.2-.6,2.5-.9,3.7a9.37,9.37,0,0,1-1.1,3.2,4.66,4.66,0,0,1-2.7,1.8,3.81,3.81,0,0,1-1.5.1A9.36,9.36,0,0,0,3,23.8c-1.2.1.8,2.8,1.1,3.3a2.8,2.8,0,0,1,0,2.2,7.46,7.46,0,0,0-.7,1.2,1.42,1.42,0,0,0,.4,1.4c.7,1.1,2.7,3.2,1.4,4.6-.5.6-1.5.6-2.2.9s-.8.9-1,1.6c-.3,1.2-.7,2.4-1,3.5a14.58,14.58,0,0,1-.7,1.9l-.3.3C1,45,1.8,46,2.8,46.5A11,11,0,0,0,6.9,48.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPacho