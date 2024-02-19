import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuenteOpon =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.2 121.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUENTE OPON', municipio.toUpperCase())}
              className="cls-1"
              d="M109.2,113.2c-.7,2.9-1.4,5.5-2.2,8.4H84.9c-1.1-9-9.5-11.7-17.3-15,2.2-9.5-2.1-13.8-11.9-11.4-5.1,1.2-8.1.5-9.3-4.8a4.11,4.11,0,0,0-1.8-2.7c-6.1-2.4-12.3-4.5-19.5-7.1-1.1-3.9-2.4-9.3-4-14.6-1.5-5-2.8-10.1-5.1-14.7-1-1.9-4.2-3-6.7-3.7-2.1-.6-4.5-.1-6.6-.1C1.8,43.8,1,40.3,0,36c3.7-3.4,5-7.9.8-12.9C.4,22.7.5,21.6.7,21,3.3,14.2,5.5,6.8,11.5,2.2,14.1.2,18.5.3,22.2,0c.8-.1,2.4,2.3,2.7,3.7,1.4,8.3,4.9,13.7,13.9,16.7,5.7,1.9,9.9,8.6,14.9,12.9,2.4,2.1,4.9,4.4,7.8,5.6,5,2.1,6.7,5.7,5,10.3-2.5,7.1,1.1,12.2,4.4,17.5a32.09,32.09,0,0,0,6.3,7.4,36.63,36.63,0,0,0,8.5,4.6c5,2.2,10.1,4.1,15,6.5.7.3.5,3.3,0,4.8A20.06,20.06,0,0,0,109.2,113.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuenteOpon