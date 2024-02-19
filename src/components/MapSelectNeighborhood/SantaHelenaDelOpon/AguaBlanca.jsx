import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AguaBlanca = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41.71 51.68"
      >
        <path
          fill={getColorByCarencias('AGUA BLANCA', municipio.toUpperCase())}
          className="cls-1"
          d="M41.41,26.3a21.16,21.16,0,0,1-2-1.2,4.71,4.71,0,0,0-2.4-.5,32.87,32.87,0,0,1-5.4-.5c-3-.7-4.6-3.1-6.2-5.5-.9-1.3-2-2.5-2.9-3.9a22.68,22.68,0,0,1-2.1-4.1A21.8,21.8,0,0,0,14.91,4a65.4,65.4,0,0,0-5.2-4V4.7a16,16,0,0,0-3.3,3.1C2.31,13.2-.49,19.4.71,26.2c-.2,1.7-.4,3.3-.5,5a54,54,0,0,0,.1,10.6,51.71,51.71,0,0,1,6.4,2.8,78.23,78.23,0,0,1,7.2,4.5,13.72,13.72,0,0,0,6.3,2.5,23.48,23.48,0,0,0,6.5-.4,17.87,17.87,0,0,0,10.2-5.8c3-3.4,4-7.9,4.2-12.3a46,46,0,0,1,.5-6.4c0-.1.1-.3.1-.4Z"
        />
      </svg>
    </div>
  )
}

export default AguaBlanca