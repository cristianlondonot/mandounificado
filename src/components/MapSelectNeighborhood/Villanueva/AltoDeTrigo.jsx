import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoDeTrigo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 115.2 103.1"
      >
        <path
          fill={getColorByCarencias('ALTO DE TRIGO', municipio.toUpperCase())}
          className="cls-1"
          d="M69.3,98.8c2.7-2.7,5.3-5.5,6.7-9.1a25.94,25.94,0,0,0,1.2-4.8,13.89,13.89,0,0,1,1.4-4.5,4.36,4.36,0,0,1,3.3-1.9c.7-.1,1.8.4,2.4-.2A7,7,0,0,0,85.4,76c.2-.8.4-1.5.6-2.3.4-1.7.8-3.5,1.3-5.2a17.31,17.31,0,0,1,5.1-9c2.3-1.9,5-2.5,8-2.9,2.8-.3,5.9-.4,8.4-1.6a5.65,5.65,0,0,0,2.8-2.7,11.44,11.44,0,0,0,.6-5.5,28.12,28.12,0,0,1,.1-5.8c.4-2.3,1.2-4.4,1.8-6.7.9-3.3,1.8-7.4.3-10.6-1.1-2.4-3.6-3.8-5.9-5-3.2-1.6-6.5-2.8-9.6-4.7-3.3-2.1-6.4-4.7-10-6.4S81,6,78,3.1C76.7,1.9,75.3,0,73.4,0a4.45,4.45,0,0,0-2.7,1.4c-.8.7-1.5,1.4-2.3,2a20.25,20.25,0,0,1-4.8,3c-1.7.8-3.7,1-5.4,1.9-2.9,1.4-3.7,4.6-4.9,7.4a11.63,11.63,0,0,1-1.8,3.5,3.52,3.52,0,0,1-2.9.9c-3.7-.3-7-2.4-10-4.3-2.5-1.6-5.1-3.4-8-4.2-4.5,9-9.9,17.6-13.3,27.1a43.34,43.34,0,0,0-2.4,10.2l-2,1L10,53.2v3.3H6.7V72.1H3.4v3.3H.1l-.1.2c.2.1.5.2.7.3a32.53,32.53,0,0,1,4.5,2.5c1.5.9,2.9,1.8,4.5,2.6,3.6,1.9,7.2,4.3,11.1,5.6a66.79,66.79,0,0,0,10.9,2.7c3.3.5,6.6,1.1,9.2,3.3a6.76,6.76,0,0,0,3.4,2.1c1.7.3,3.5-.3,5.1-.7a8.21,8.21,0,0,1,4.9.4,12.08,12.08,0,0,1,3.6,2.8c2.3,2.2,5.3,3.6,7.5,5.9A41.79,41.79,0,0,1,69.3,98.8Z"
        />
      </svg>
    </div>
  )
}

export default AltoDeTrigo