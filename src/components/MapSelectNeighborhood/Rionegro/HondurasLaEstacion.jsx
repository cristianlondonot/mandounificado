import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const HondurasLaEstacion = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 137 126.17"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('HONDURAS LA ESTACION', municipio.toUpperCase())}
              className="cls-1"
              d="M80.5,126.17c-8.6-15.9-21.5-26.9-32.8-38.3-9.5,2.5-14,8.8-17.8,16.3-1.7,3.3-5.8,5.3-9.4,8.4-1.6-9.6-2.9-18.4.3-27.4a34.38,34.38,0,0,0,1.5-9.6c.7-9.2,1.5-18.4,1.8-27.6a103.17,103.17,0,0,0-.9-18.4c-.4-2.4-2.9-4.9-5.1-6.5-5.6-4-11.5-7.5-18.1-11.6,2.9-.6,5.2-1,7.5-1.6s5.7-1,6.8-2.6C17.7,2.07,23,2.37,28,.87s8.9-1.3,12.6,1.7c5.1,4.1,11,3.9,17,3.9a145.32,145.32,0,0,1,16.1,1.2c6.8.7,13.6,1.9,20.5,2.2,7.5.3,13.9,3.8,15.8,10.3,2.9,9.6,10.8,14,16.7,20.6,2.4,2.7,5.1,5.7,6.4,9,7.3,18.3,3.7,35.6-5.4,52.3-2.9,5.3-7.5,6-12.4,2.2-5.2-4.1-14.2-1.6-17.5,4.9C93.9,117.27,86.1,121.27,80.5,126.17Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default HondurasLaEstacion