import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanLorenzo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 212.24 179.92"
      >
        <path
          fill={getColorByCarencias('SAN LORENZO', municipio.toUpperCase())}
          className="cls-1"
          d="M176.2,155.3c1.6-.9,3.2-2.1,5-2.2a12.91,12.91,0,0,1,1.1-4.7c.6-1.6,1.3-3.2,2-4.8a12.94,12.94,0,0,1,2.3-3.9c.3-.3,1-.9,1-1.4s-.5-.6-.8-.7a20.29,20.29,0,0,1-2.6-1.1,4.87,4.87,0,0,1-2.3-2.4,8.2,8.2,0,0,1-.1-4.4c.3-1.5,1-3,1.2-4.5.1-.8-.1-1.6.8-2,1.2-.5,2.6.1,3.6.7,2.5,1.6,4.9,3.9,7.8,4.9a3.9,3.9,0,0,0,3,0,6.79,6.79,0,0,0,2.3-3.2c.3-.7.5-1.3.8-2a7,7,0,0,1,1.3-1.7c.5-.6,1.1-1.1,1.7-1.7a18.48,18.48,0,0,1,1.4-1.4c.9-.7,2.2-.8,3.1-1.5a7,7,0,0,0,2.3-3.5,14.21,14.21,0,0,0,.9-7.9,20.28,20.28,0,0,1-4.9-.4,5.63,5.63,0,0,1-3.8-3.4c-1.5-3.7.1-7.7-.8-11.5a5.72,5.72,0,0,0-2.8-3.8,33.83,33.83,0,0,0-4.4-1.8,13.38,13.38,0,0,1-4.5-2.9,27.94,27.94,0,0,1-3.4-4.3c-1.2-1.9-2.6-3.7-3.7-5.7a29.47,29.47,0,0,1-2-5.2c-.1,0-.1-.1-.2-.2-.9-1.7-1.9-3.4-2.6-5.1a6.34,6.34,0,0,0-1.2-2.1,10.7,10.7,0,0,0-1.6-1.4c-1.1-.7-2.3-1.2-3.4-1.9a37.16,37.16,0,0,0-3.9-2.1c-2.7-1.3-5.5-2.6-7.4-5-.5-.6-.9-1.3-1.4-1.8a11.8,11.8,0,0,0-1.8-1.3c-1.3-.8-2.7-1.6-4.1-2.3-2.9-1.5-6.1-2.7-9.1-4-.1-.1-.2-.1-.2-.2a5.12,5.12,0,0,1-2.6-2,17,17,0,0,0-1-1.4,11.51,11.51,0,0,0-1.7-1.4c-1.2-.8-2.6-1.4-3.8-2.2-1.5-.9-2.9-1.8-4.4-2.8-2.5-1.6-5-3.2-7.7-4.7s-5.2-2.8-7.7-4.3-4.7-3.1-7.1-4.7a23.82,23.82,0,0,0-6.8-3.3c-2.4-.7-4.9-.8-7.3-1.5a15.43,15.43,0,0,1-6.1-3.7c-1.9-1.8-3.3-4.1-5.3-5.8C82.6,1.1,81.9.6,81.1,0V3.1H78.2L75,6.3H71.8l-9.3,9.3-3.2,3.2L56.1,22l-2.9,6.1H50l-6.4,6.4-2.9,6.1-3.2,3.2L34.3,47H31.1v2.9l-2.9,3.2L25,59.5l-3.2,6.1-3.2,3.2H6.1L3.2,72,0,78.1V88c2,1.3,3.9,2.6,5.8,4s3.7,2.5,5.5,3.7a12.42,12.42,0,0,1,2.3,1.7,12,12,0,0,0,1.2,1.1.64.64,0,0,1,.6,0c4.6,3.6,9.3,7.2,13.2,11.7,1.7,1.9,3.1,4,4.9,5.8a28.18,28.18,0,0,0,5.5,4.3,98.12,98.12,0,0,0,12.6,6.2,47.36,47.36,0,0,0,7.4,2.9,74.77,74.77,0,0,0,8.2,1.8,7.33,7.33,0,0,1,3.2,1.2,6.59,6.59,0,0,1,2.1,2.3c.7,1.4,1.2,3.8,3.1,4.2.4.1.4.5.2.8a13.55,13.55,0,0,1,.2,2c.4,2.8,1,5.8,2.7,8.1a8.58,8.58,0,0,0,3.3,2.7c1.3.7,2.7,1.2,4,2a8.34,8.34,0,0,1,3,2.9c.8,1.6,2.1,2.8,3,4.4s1.6,3.4,2.5,5a43.54,43.54,0,0,0,3.2,4.3c1,1.3,2,2.6,2.9,4a10.73,10.73,0,0,0,2.9,3.1,13.57,13.57,0,0,0,5.5,1.7,5.91,5.91,0,0,0,4.4-1.3,9.24,9.24,0,0,0,2.1-3.4,18.11,18.11,0,0,1,2.3-4.1,10.41,10.41,0,0,1,3.8-3.1,39,39,0,0,0,4.9-2.8,40.66,40.66,0,0,1,4.9-3.1c1.7-.8,3.6-1.5,5.2-2.4,1.3-.7,2.4-1.6,3.7-2.4a5.57,5.57,0,0,1,3.7-1.1h.1a.76.76,0,0,1,.5-.2c3,.6,5.9,1.1,8.9,1.5a51,51,0,0,0,15.6-.1A17.86,17.86,0,0,0,176.2,155.3Z"
        />
      </svg>
    </div>
  )
}

export default SanLorenzo