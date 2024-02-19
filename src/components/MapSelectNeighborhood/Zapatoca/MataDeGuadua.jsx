import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MataDeGuadua = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53.5 59.8"
      >
        <path
          fill={getColorByCarencias('MATA DE GUADUA', municipio.toUpperCase())}
          className="cls-1"
          d="M1.7,18.9,3.5,24l1.8,3.5v3.3l3.3,3.3v3.5l1.8,1.8,1.8,1.8L14,44.5h3.3v8.7l-1.8,3.3,1.6,3.3c4,0,7.4-1.9,11.1-3.1a.76.76,0,0,1,.8.3c.8,1.5,2.5.8,3.7.1a26.52,26.52,0,0,0,4.2-3.3c1.2-1.1,2.4-2.7,4-3.1s2.6,1,3.3,2.2c2.5-1.7,5.1-3.2,7.7-4.7.5-.3,1.1-.6,1.6-.9V46.2H51.7V44.4l-1.8-1.8h1.8V39.3H49.9V25.5h1.8V20.2l-1.8-1.6V8.2H48.3L46.5,6.6V4.8H41.4V3.4H39.6L37.8,1.6V0H36.1L34.5,1.6h-.6a24.18,24.18,0,0,1-1,3.6A9.1,9.1,0,0,1,31,8.1a15.46,15.46,0,0,0-2.4,2.7c-1.4,2.4-.6,5.5-1.6,8-.7,1.8-2.1,3.7-4.3,3.7a4.32,4.32,0,0,1-2.8-1.3,2,2,0,0,1-.6-1.3c0-.4.1-1.1-.3-1.3s-1-.1-1.5-.4a4,4,0,0,1-1.3-1.3c-.9-1-1.6-2.1-2.5-3.1a33.76,33.76,0,0,0-5-5A28.07,28.07,0,0,0,.5,4L0,5.1v5.1L1.6,12v6.9Z"
        />
      </svg>
    </div>
  )
}

export default MataDeGuadua