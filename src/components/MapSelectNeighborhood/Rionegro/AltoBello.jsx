import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoBello = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72.21 88.94"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTO BELLO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,29.3C13,25,24.1,16.6,34.6,7.4,41.5,1.4,49.5.3,57.9,0c1.3,0,3.7,1.9,3.9,3.3C63.3,11,64,18.8,65.6,26.5c1.2,5.6,3.5,10.9,5,16.5a40.47,40.47,0,0,1,.9,8.6c.3,7.8.8,15.6.7,23.4-.1,3.8-.2,9-2.5,11s-7.4.9-11.2.5a15.1,15.1,0,0,1-6.3-2.6c-6.8-4.4-13.1-3.2-19.2,1.4-.9.7-2,1.2-2.9,1.9-3.9,2.8-6.8,2.4-8.2-2.5C19.5,76,12.7,68.8,13.5,59a4.07,4.07,0,0,0-1.1-3.2C6.7,51.2,8.9,43.6,5.5,38.2,3.8,35.3,2,32.4,0,29.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltoBello