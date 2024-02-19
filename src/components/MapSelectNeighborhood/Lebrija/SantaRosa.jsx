import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.46 53.4" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA ROSA', municipio.toUpperCase())}
              className="cls-1"
              d="M70.6,7.6a2.15,2.15,0,0,0-1.1.2l-1.4.3a4.57,4.57,0,0,1-2.6-.2,3.34,3.34,0,0,1-1.7-1.8A20.94,20.94,0,0,1,63,3.8c-.2-.4-.1-.4-.5-.3a6.12,6.12,0,0,0-1.2.5,22.56,22.56,0,0,1-2.2,1.1,8.1,8.1,0,0,1-3.8.2c-1.1-.2-2.3-.4-3.4-.5a22.6,22.6,0,0,0-2.6-.1c-3.1-.1-7.1-.3-8.5-3.5-1.7.1-3.7.4-5.2-.7C35.4.3,35.2.2,35,0a8.79,8.79,0,0,0-.6,1,12.56,12.56,0,0,1-1.3,2.3A5.49,5.49,0,0,1,31,4.5c-.4.2-.9.4-1.3.6-.1.1-.4.2-.5.4l.1.1c.9,1.1.7,3.1.4,4.4A2.62,2.62,0,0,1,27,12.3c-2.1.1-4.2-.1-6.2.7a4.68,4.68,0,0,1-2.3.4c-.3,0-.6-.1-.9-.1H17v.1c-.1.7.1,1.3,0,2a3.46,3.46,0,0,1-.8,1.6,9.51,9.51,0,0,1-2,1.5L11.8,20c-1.8.9-3.7,1.5-5.4,2.4a60.61,60.61,0,0,0-5.3,3.5.64.64,0,0,1-.6,0,1.93,1.93,0,0,1-.5.9,13.81,13.81,0,0,1,4.9,5C5.6,33,7,33.7,7.5,35a13.36,13.36,0,0,1,.6,4,35.8,35.8,0,0,0,1.5,7.8c.6,1.9,2.1,4.7,4.5,4.1a8.32,8.32,0,0,0,3-2A5.42,5.42,0,0,0,18.6,46c.6-2,2.1-3.8,4.4-3.4a9.93,9.93,0,0,1,3,1.2,8.94,8.94,0,0,0,3.5,1.1c1.3.1,2.6,0,4,.2a7.52,7.52,0,0,1,3.3,1.4,5.31,5.31,0,0,0,1.7.8,7.57,7.57,0,0,0,1.5.1,3.3,3.3,0,0,1,2.4,1.2,12.76,12.76,0,0,1,1.5,4,9,9,0,0,0,2.1.8,3.12,3.12,0,0,1,3-2.6c.2,0,.3,0,.4.1a7.35,7.35,0,0,1-1.7-3.8c-.4-2.1-.6-4.2-.8-6.3-.5-4,3.4-6,6.1-8.2a15.88,15.88,0,0,0,3.3-4.4A7.32,7.32,0,0,1,61,25.3a32,32,0,0,1,4.2-1l1.4-.3a14.77,14.77,0,0,0,0-4.2c-.3-1.3-1-2.5-.8-3.8.3-1.7,1.8-2.6,3.2-3.4,1-.6,2.4-1.2,2.4-2.6C71.6,9.1,71.3,7.7,70.6,7.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaRosa