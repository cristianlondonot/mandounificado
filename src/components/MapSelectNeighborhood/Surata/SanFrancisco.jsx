import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanFrancisco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 142.91 99.7"
      >
        <path
          fill={getColorByCarencias('SAN FRANCISCO', municipio.toUpperCase())}
          className="cls-1"
          d="M141.81,25.9c-2.9-1.2-5.9-2.2-8.8-3.5-5.8-2.8-11.7-5.4-17.6-7.7-5.7-2.2-11.6-3.6-17.4-5.2-3-.8-6-1.7-8.9-2.7s-5.6-2.2-8.4-3C75,2.1,69.11,1.3,63.31.3L61.61,0a19.92,19.92,0,0,1-1.2,1.9c-2.8,3.8-6.7,6.4-10.2,9.4a20.73,20.73,0,0,0-4.6,5.2,34.71,34.71,0,0,0-3.1,8.1c-.4,1.5-.9,3-1.4,4.5s-1.3,2.7-1.9,4.1c-1.3,2.8-1.3,6-2.3,8.9a49.34,49.34,0,0,1-4.3,8.6c-1.5,2.7-3.3,5.3-4.3,8.2-1.4,4.4-1.6,9.9-5.9,12.6-3.5,2.2-8.1,1.8-11.9,1a31.21,31.21,0,0,1-5.9-1.9c-.9,2.8-2.1,5.4-3.1,8.1A20.31,20.31,0,0,0,0,86.4a25.31,25.31,0,0,0,1.1,6V84.8h1.7v1.7h1.7V88h3.2l1.7,1.7h14.9V88h1.5V86.5h3.4V88h1.7v1.7h1.5v1.7h1.7v1.7h13.2L49,94.8l1.7,1.7h3.2V98h8.3v1.7h6.6V98h9.8l1.7,1.7h3.4l1.5-1.7h4.9v1.7h3.4l1.7-1.7V94.8h1.7V93.1l1.5-1.7h1.7V89.7h1.7V88h1.7l1.5-1.5h1.7V84.8l1.7-1.7V74.8h1.5V73.3h1.7V71.6h1.7V63.3l1.7-1.7,1.7-1.5h1.5l3.4-3.4h8.3l1.5-1.7h1.7V53.5h1.7V51.8l1.5-1.7V48.4H138V45.2l1.7-1.7V40.3l1.7-3.4V32l1.5-3.4V26.1A2.68,2.68,0,0,1,141.81,25.9Z"
        />
      </svg>
    </div>
  )
}

export default SanFrancisco