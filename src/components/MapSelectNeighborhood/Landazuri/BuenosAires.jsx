import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BuenosAires = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 41.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BUENOS AIRES', municipio.toUpperCase())}
              className="cls-1"
              d="M8.6,0A4.94,4.94,0,0,1,6.7,1.6,23.88,23.88,0,0,1,3,3.1C2.2,3.4.8,3.7.3,4.4a4.43,4.43,0,0,0-.3,2A7.15,7.15,0,0,0,.3,8.9c.5,1.2,1.8,1.9,2.6,2.9A6.49,6.49,0,0,1,4,16.1c.1,1.9,0,3.8.8,5.6a12.25,12.25,0,0,0,2.4,3.1,34.75,34.75,0,0,0,7.2,4.8,73.38,73.38,0,0,1,7.5,4.8Q24,36.05,26.1,38c.6.6,1.2,1.2,1.7,1.8a2.16,2.16,0,0,0,1.4.9,10.18,10.18,0,0,0,3.5.3,2.14,2.14,0,0,0,1.7-1.6c.6-2-.2-4.4-.5-6.4s-.3-4.3,1.3-5.8a.62.62,0,0,1,.7-.1c1.3-2.8,5.5-3.5,6.5-6.5a2,2,0,0,0-.3-2.1,2.39,2.39,0,0,1-.4-2c.5-2.5,2.5-3.7,4.3-5.1a43,43,0,0,0-7.5-3.6,22.47,22.47,0,0,0-8.1-1.6c-2.7,0-5.1,1.3-7.7,1.7-2.8.4-5.1-.8-7.4-2.1A34.1,34.1,0,0,1,8.6,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BuenosAires