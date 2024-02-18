import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Palmar = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16.19 63.3"
      >
        <path
          fill={getColorByCarencias('PALMAR', municipio.toUpperCase())}
          className="cls-1"
          d="M16.19,48.8h-4.7V47.2H8.29V45.6l-1.6-1.4V39.5h1.6V37.9l1.6-1.6V34.7h1.6V33.3h1.4V31.7l1.6-1.6V9.6L16.09,8V4.3c-1-.6-2.1-1.1-3.1-1.8A18.72,18.72,0,0,0,8.89,0c-.7,2.3-.2,4.6-.4,7a37.64,37.64,0,0,1-2,7.3c-.7,2.1-1.6,4.1-2.4,6.1a44.71,44.71,0,0,0-2.5,6C.39,30.3.29,34.5.19,38.6c-.1,4.3-.3,8.6-.1,12.9a38.73,38.73,0,0,1,0,5.9,8.85,8.85,0,0,0,0,2.3c0,.6.1,1.4.6,1.7a.43.43,0,0,1,.1.7c.9.1,1.9.1,2.8.2a25.9,25.9,0,0,1,6.2,1v-.1A14.83,14.83,0,0,1,16,57l-.1-.1V48.8Z"
        />
      </svg>
    </div>
  )
}

export default Palmar