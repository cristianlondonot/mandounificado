import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CuatroBocas =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.83 82.23" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUATRO BOCAS', municipio.toUpperCase())}
              className="cls-1"
              d="M10.13,66c-3.1-2.2-6-4.1-8.7-6.1C.83,59.4-.17,58.2,0,58c.5-.8,1.6-1.8,2.2-1.7,9,1.5,11-7.6,16.6-11.3,1.4-.9.5-7.1-1-9.9C16,31.7,12,30.6,8,32.6a46.36,46.36,0,0,0-4.2,2.5c3.8-8.5,13.1-15.2,8.8-26.8,1.1,1.3,2.1,2.6,3.2,3.9,2.1,2.4,6.2,2,7.3-.8,1.3-3.2,2.4-6.6,4.2-11.4,2.7,4.5,4.2,8,6.5,10.7a57.35,57.35,0,0,0,9.6,8.8c4.8,3.7,10.1,6.6,14.7,10.5a11.79,11.79,0,0,1,4.4,10.9,38.55,38.55,0,0,0,0,9.6,47.87,47.87,0,0,0,1.3,7.2c-2.3,3.7-3.6,7.5-6.2,9.4-4.9,3.6-6.5,9.5-10.6,13.4-3.4,3.2-9.7,1.8-16.1-2.9,1.7-9.6-.7-16.1-7-18.4C18.33,57.1,14,59.4,10.13,66Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CuatroBocas