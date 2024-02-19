import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaColorada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64.2 61.54"
      >
        <path
          fill={getColorByCarencias('LA COLORADA', municipio.toUpperCase())}
          className="cls-1"
          d="M60.5,25.44c.1-.2.2-.5.3-.7-.3-.8-.6-1.5-.9-2.2a10.2,10.2,0,0,1-.4-4.6,8.9,8.9,0,0,1,1.4-3.5,26.4,26.4,0,0,0,1.8-3.8,22.43,22.43,0,0,0,1.5-7.7,3.07,3.07,0,0,0-.6-2.1A3.26,3.26,0,0,0,61.8,0a11.87,11.87,0,0,0-5.3.9A19.15,19.15,0,0,0,51.9,3a76,76,0,0,1-7.2,4.3A16.57,16.57,0,0,1,41,8.74a35.4,35.4,0,0,1-4.5.8,51.58,51.58,0,0,1-10.4.9,14.33,14.33,0,0,1-4.1-.9c-1.2-.5-2.4-1.2-3.6-1.7a21,21,0,0,0-.8,5.6c-.1,2.8.2,5.8-.5,8.5-.7,2.5-2.3,4.5-3.4,6.8-2.5,5-4,10.5-6.8,15.4-1.8,3.2-4.5,5.7-6.9,8.4l1.8,1.2,3.9,2.7,2.7,1.3v1.2l1.2,1.3,1.3,1.3h1.3l1.3-1.3h1.2l1.3-1.3h1.3l2.5-1.2H25l1.3-1.3H29l2.5-1.3,2.5-1.3h5.2l2.7-2.5L44.6,50l1.2-1.3h7.9l2.5-1.2h2.2v-.1q-.15-3.45,0-6.9A42.18,42.18,0,0,1,60.5,25.44Z"
        />
      </svg>
    </div>
  )
}

export default LaColorada