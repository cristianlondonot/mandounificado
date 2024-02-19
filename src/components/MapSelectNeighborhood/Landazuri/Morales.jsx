import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Morales = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.21 86.41">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MORALES', municipio.toUpperCase())}
              className="cls-1"
              d="M120.62.91c-2.5.3-4.7,1.6-7,2.8a32.39,32.39,0,0,1-3.2,1.7,7.48,7.48,0,0,0-2.4,1.5c-.9,1-.8,2.5-1.1,3.8a8,8,0,0,1-2.6,4.3c-2.8,2.3-6.5,3.1-9.6,4.8a12.7,12.7,0,0,0-4.8,4.1c-1.3,2-1.3,4.3-2,6.5a6.76,6.76,0,0,1-3.3,4.1,8.44,8.44,0,0,1-4.7.4c-1.7-.3-3.3-.9-5-1.3-2.1-.6-4.3-.5-6.4-1a10.3,10.3,0,0,1-5-3.2,11,11,0,0,0-4.8-3.7c-2-.7-4.2-.9-6.2-1.7a9,9,0,0,1-4-3c-.9-1.3-1.6-2.8-2.5-4.1a7.69,7.69,0,0,0-1.8-1.8,5.94,5.94,0,0,0-2.6-.7c-1.6-.2-3.6-.7-3.8-2.7-.1-.8.3-1.6-.1-2.4a4.1,4.1,0,0,0-1.6-1.6A13.11,13.11,0,0,0,31.32,6a24.37,24.37,0,0,0-5.4,0,11.62,11.62,0,0,1-5.5-.9,24.49,24.49,0,0,1-5-3.4A7.67,7.67,0,0,0,10.32,0a35.72,35.72,0,0,0-5.6.7c-2,.5-3.6,1.4-4.4,3.4s0,3.9,1.1,5.6S4,13,5,14.71s1.5,3.8,2.4,5.6c1,2,2.5,3.6,3.6,5.5a12.4,12.4,0,0,1,1.7,6.5,40.55,40.55,0,0,1-.8,7,16.85,16.85,0,0,0-.4,5.5c.5,3.3,3.2,5.8,5.5,8.1,2.9,2.9,6.7,5.4,8.7,9.1a8.48,8.48,0,0,1,.6,5.2,44.23,44.23,0,0,1-1,5l.9.5h1.3l3.7,3.7,2.4,2.6,1.3,2.4,2.6,1.3,2.4,1.3,2.6,2.4H47a7.35,7.35,0,0,0-.1-3.9c-.3-.8-.8-1-1.5-1.5a3.18,3.18,0,0,1-1.3-1.5c-1.3-2.9,1.7-5.8.8-8.8a.66.66,0,0,1,.5-.8,7.57,7.57,0,0,1,3,0c.9.1,2.1.4,3-.1a5.75,5.75,0,0,0,1.9-1.9,11.19,11.19,0,0,1,4-3.8c3.4-1.6,7,.3,10.5.2a4.65,4.65,0,0,0,2.3-.6,7.11,7.11,0,0,0,1.5-1.5,10.59,10.59,0,0,1,2.3-1.9,14.15,14.15,0,0,0,2.9-1.8c.7-.7,1.1-1.7,1.9-2.4a7.68,7.68,0,0,1,2.5-1.4,5.87,5.87,0,0,0,3.3-3.6c.9-2.7,1.6-6.8,5.3-6.8,1.8,0,3.6.9,5.3,1.4a7.69,7.69,0,0,0,3,.3,9.17,9.17,0,0,1,2.7-4.9,4.32,4.32,0,0,1,2.6-.9c.9,0,1.7.2,2.6.2a2.41,2.41,0,0,0,1.6-1.2c.6-.9,1.3-1.9,1.9-2.8a12.66,12.66,0,0,0,1.5-3.1,6,6,0,0,1,1-2.5c1.1-1.3,2.9-1.9,3.5-3.7s.2-3.9,1.1-5.6a5.46,5.46,0,0,1,1.8-1.9,4.64,4.64,0,0,0,1.6-1.8c.6-1.2,1.2-2.5,1.8-3.7.9-1.7,2.5-4.9,4.8-5.1v-.2c0-.1.1-.2.1-.3a18.06,18.06,0,0,0,.2-7.3A19.34,19.34,0,0,0,120.62.91Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Morales