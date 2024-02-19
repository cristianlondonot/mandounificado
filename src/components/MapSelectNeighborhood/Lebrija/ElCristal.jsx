import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCristal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.95 66.02">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL CRISTAL', municipio.toUpperCase())}
              className="cls-1"
              d="M5.63,61.92c1.1.6,2.1,1.5,3.2,2.2A6.74,6.74,0,0,1,11,66a21.83,21.83,0,0,0,2.1-2.2,12.27,12.27,0,0,0,1.2-2.6,11.34,11.34,0,0,1,.9-2.59c.9-1.3,2.4-2,3.7-2.91a3.75,3.75,0,0,0,1.6-1.7,19.06,19.06,0,0,0,1-3.4,50.31,50.31,0,0,1,2.4-7.5c.4-1,1.3-3.9,2.9-3.2.7.3,1.2,1.1,1.7,1.6a9.2,9.2,0,0,0,2.5,1.9,21.84,21.84,0,0,0,7.1,1.8c2.5.4,5.1.7,7.6,1.1a45.6,45.6,0,0,1,7.5,1.8,21.69,21.69,0,0,1,3.5,1.5,28.08,28.08,0,0,0,3.5,1.7,24.75,24.75,0,0,0,5.2,1.3,2.68,2.68,0,0,0,2.3-.5,24.26,24.26,0,0,0,1.4-2,4.15,4.15,0,0,1,4.9-1,20.68,20.68,0,0,1,2.5,1.5,10.93,10.93,0,0,0,1.5.8.82.82,0,0,0,.7.1c.3-.2.2-1.3.2-1.6a7,7,0,0,1,.5-2.5c.2-.5.5-1,.7-1.6a11.27,11.27,0,0,0,.3-1.8c.1-1.3.3-2.5.5-3.8a17.6,17.6,0,0,0,.2-4,3.81,3.81,0,0,1,.8-2.9c1.2-1.5,3.1-2.3,4.4-3.8a2.41,2.41,0,0,0,.6-.8c.1-.3-.1-.7-.2-1-.4-1.2-1.2-2.1-1.7-3.3-1-2.3.2-4.3.7-6.6,0-.1.1-.1.1-.2a2.92,2.92,0,0,0-.4-2,2.61,2.61,0,0,1-.7-1.7c-.1-1.7,1.1-3,1.3-4.7a7.35,7.35,0,0,0-1-4.1,10.46,10.46,0,0,0-2.4-3.4c-.1-.1-.1-.2-.2-.3a1.88,1.88,0,0,1-.8.2c-1.2.3-2.3.7-3.5.9a30,30,0,0,1-4.3.5,17.83,17.83,0,0,1-4,0c-1.2-.09-2.4-.3-3.7-.5-2.5-.3-5.1-.8-7.6-.2-2.1.5-3.9,2-6.2,1.9-2.8-.09-5.3-1.5-8-1.79-.7-.1-.7-1.1-.1-1.1h-.1L39,.43a20.69,20.69,0,0,0-9.3.2,13.75,13.75,0,0,0-4.6,2.5c-1.3.9-2.8,1.59-4.1,2.5-3.1,2.2-3.9,6.4-4,10-.2,4,.6,7.9-.3,11.9a7.81,7.81,0,0,1-1.8,3.9,4.72,4.72,0,0,1-2.5,1.1,11,11,0,0,0-3.5,1.1A12.47,12.47,0,0,0,6.13,36a5.3,5.3,0,0,1-2.8,1.6,5.4,5.4,0,0,1-1.2.09c-.2,1.41-.8,2.8-.7,4.3a10.79,10.79,0,0,0,1.7,4.3,32.31,32.31,0,0,1,2,4.2,4.06,4.06,0,0,1,.2,3.41c-1,1.7-3.5,1.9-4.9,3.09C-1.67,59,4.63,61.42,5.63,61.92Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElCristal