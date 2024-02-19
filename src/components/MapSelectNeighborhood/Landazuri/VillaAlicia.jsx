import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VillaAlicia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.8 48.21" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VILLA ALICIA', municipio.toUpperCase())}
              className="cls-1"
              d="M30.9,16.11a6.33,6.33,0,0,1-1.9-5c.3-1.9,1.2-3.9,1-5.9a14.91,14.91,0,0,1-6.9-1.3C19,2.21,14.9-.59,10.3.11c-4,.6-9,3.5-9.4,8,0,.3-.3.5-.5.6a5.94,5.94,0,0,0-.4.8l.1.1,1.3,1.3v3.7L.1,15.91V22H1.4L.1,24.61l1.3,1.3L2.7,27v9.9l1.1,1.3v1.3H6.4l1.3,1.1h2.4l2.6,2.6,2.4,1.3,1.3,1.3,2.4,1.1,2.6,1.3h5l-1.3-3.7v-3.8l1.3-2.4V37l1.3-1.3V33l1.1-1.3h5l1.3-1.1,1.3-1.3v-2.6l.4-.4a11,11,0,0,0-1.3-5.1A55.72,55.72,0,0,0,30.9,16.11Z"
            />
          </g>
        </g>
      </svg>
  </div>
  )
}

export default VillaAlicia