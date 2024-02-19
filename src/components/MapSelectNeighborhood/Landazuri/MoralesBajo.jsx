import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MoralesBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.27 45.44" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MORALES BAJO', municipio.toUpperCase())}
              className="cls-1"
              d="M29.8,35.24a29.26,29.26,0,0,0-4.6-4.7c-2.8-2.5-5.9-5.1-7.8-8.4-1.8-3-1.3-6.3-.7-9.6a33.53,33.53,0,0,0,.7-7.1h0a21.66,21.66,0,0,1-9.7-1.7c-1.5-.6-2.3-1.9-3.5-2.9A6.06,6.06,0,0,0,0,0V4l1.1,1.3,1.3,1.3V9l1.3,1.3v1.3L5,12.94V14l-1.3,1.3L5,16.64l1.1,1.3H7.4v9.9l1.3,1.1,1.3,1.3,1.1,1.3v2.4l1.3,1.3v1.3l1.3,1.3,1.1,1.1h1.3l2.6,1.3v1.3h1.1l2.6,1.3h2.4l1.3,1.1h2.6v1.3H30l.3.2a27,27,0,0,0,.9-4.8,13.1,13.1,0,0,0,0-2.8A8,8,0,0,0,29.8,35.24Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MoralesBajo