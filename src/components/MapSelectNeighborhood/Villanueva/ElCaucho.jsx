import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCaucho = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 137.04 174.2"
      >
        <path
          fill={getColorByCarencias('EL CAUCHO', municipio.toUpperCase())}
          className="cls-1"
          d="M126.8,98.3a49.4,49.4,0,0,0,1.9-4.9,12.34,12.34,0,0,0,.3-4.3c-.1-3.1-.5-6.4.5-9.4a9.24,9.24,0,0,1,2.3-3.6,30.63,30.63,0,0,1,2.9-2.1c.9-.6,2.1-1.4,2.3-2.6a2.36,2.36,0,0,0-1.3-2.4,18.2,18.2,0,0,0-6.9-1.9,59.34,59.34,0,0,1-8.3-2.1c-6.9-2.3-12.9-6.9-18.5-11.5A44.67,44.67,0,0,1,97.9,50c-1.1-1.1-2-2.5-3-3.7-1.8-2.1-5.1-2.2-6.7-4.7-1.1-1.8-.6-3.8.5-5.5s2.8-3.3,2.9-5.3A4.34,4.34,0,0,0,90,27.6a21.14,21.14,0,0,0-3.7-3,32.69,32.69,0,0,1-3.7-2.8c-1.2-1.1-2.3-2.4-3.8-3-3.2-1.4-6.4,1.1-9.7.4a7.4,7.4,0,0,1-3.2-1.9,12,12,0,0,0-4.4-2.5c-3.2-1-6.6-1.2-9.9-2-1.9-.5-3.9-1-5.7-1.6a31.78,31.78,0,0,1-5.3-2.4c-1.8-.9-3.5-1.9-5.2-2.8a41.72,41.72,0,0,1-4.6-2.6A27.23,27.23,0,0,0,24.5,0L22.7,2.1,19.4,5H16.1V8.3l-3.3,6.5L9.9,21.3,6.6,30.7V34L3.3,37.3,0,43.5v9.4l3.3,6.5,6.5,6.2,2.9,3.3H16l3.3,3.3h6.2v3.3H32v2.9h3.3v9.4l2.9,3.3,3.3,3.3,3.3,3.3v2.9l-3.3,3.3H38.2v3.3H32v3.3l-3.3,2.9v12.7l-3.3,3.3v12.7l-2.9,3.3v3.3l2.9,2.9v6.5H22.5v3.3l-3.3,3.3V168h3.3v2.9H35.2v3.3h2.9v-3.3H40c0-.3.2-.5.6-.5a11.13,11.13,0,0,0,6-2.3,43.83,43.83,0,0,1,5.8-3.7c2-1,4.2-1.7,6.2-2.8,4.1-2.2,7.1-6.1,11.1-8.4,2-1.2,4.1-2.2,6-3.6a38.73,38.73,0,0,0,5.2-4.7c3.3-3.6,6.5-7.2,10.5-10.1s7.7-5.9,10.4-10.1a53.39,53.39,0,0,1,4-5.7,35,35,0,0,1,5.4-4.8c2-1.6,4-3,5.9-4.7,1.7-1.5,3.3-3,5.1-4.5,1.2-1,2.4-2,3.6-2.9C126.2,100.3,126.5,99.3,126.8,98.3Z"
        />
      </svg>
    </div>
  )
}

export default ElCaucho