import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsperanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45.5 83.84"
      >
        <path
          fill={getColorByCarencias('LA ESPERANZA', municipio.toUpperCase())}
          className="cls-1"
          d="M3.2,18.8A17.55,17.55,0,0,1,4.4,22c1.2,4.1,1,8.4,1,12.6,0,2.7-.1,5.3-.3,7.9s-.6,5.4-.9,8.1a56.22,56.22,0,0,0-.3,8.2A14.6,14.6,0,0,0,5.1,65c1.4,2.8,4.3,4.4,6.7,6.3A13.88,13.88,0,0,1,15,74.5a11.18,11.18,0,0,1,1.7,4.6,9.77,9.77,0,0,1,0,4.5c3.9.1,7.7-.4,11.5-.6a40.27,40.27,0,0,1,9.8.4c1.4.3,3.2.7,4.6.2.3-.1.4-.1.2-.4a5.72,5.72,0,0,0-.7-.8,9.44,9.44,0,0,1-1.8-2.1,8.62,8.62,0,0,1-.9-3.4V75.2H39l-1.3,1.2H35l-1.2-1.2v-4l-1.3-2.5-1.3-1.3V66.1l1.3-1.2V62.2h1.3L35,59.7h2.7V58.4H39l1.3-3.9V51.8l1.2-2.5V42.8l1.3-1.3V39l2.7-2.7V35H44.2l-1.3-1.2-1.3-1.3H40.4l1.2,1.3L40.4,35H37.7V33.8l-1.3-1.3H35.1l-1.2-1.3H30l-1.3-1.3L26,28.7l2.7-4,3.9-5.2,2.5-3.9,1.3-2.7,1.3-1.3H39l1.3-1.2V9.1L39,6.4H37.7V5.2L39,2.5V1.2L37.7,0H35L33.8,1.2,32.5,2.5V3.8H30L28.7,5.1,27.4,6.3V9l-1.3,1.3-2.5,1.2H22.3l-2.5-1.2L18.5,9H5.5L4.3,10.3H3L1.7,9H0a52.39,52.39,0,0,0,2,6.4A7.34,7.34,0,0,0,3.2,18.8Z"
        />
      </svg>
    </div>
  )
}

export default LaEsperanza