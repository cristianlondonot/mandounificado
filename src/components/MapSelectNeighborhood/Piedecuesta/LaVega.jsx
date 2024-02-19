import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaVega = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.06 105.51" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA VEGA', municipio.toUpperCase())}
              className="cls-1"
              d="M53.53,0c2.7,4.9-3.7,7.2-2.2,11.5.6,1.7-1,4,1.1,5.1s3.3-1,4.9-2c1.8-1.1,3.7-2,4.4-4.2a44.44,44.44,0,0,1,8.4,26.8A8.91,8.91,0,0,0,72,42.3c4.7,5.9,4,11-2.6,14.5-2.7,1.4-2.4,3.7-2.4,6.1-.4,13.7-9.7,22.8-23.5,23.9-6.5.5-13.5,1.6-13.7,10.7a1.84,1.84,0,0,1-.4,1.3c-4.3,7-20.5,8.9-27.4,3.9-4.4-3.2-.4-6.9.5-7,12.1-1.3,15-12.5,21.5-19.6a16.13,16.13,0,0,0,4.5-12.9,10.41,10.41,0,0,1,4.3-9.9c3.2-2.4,3.6-5.7,2.7-8.9-4.1-15.2.1-27.6,11.9-37.8C49.53,4.8,51.23,2.5,53.53,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaVega