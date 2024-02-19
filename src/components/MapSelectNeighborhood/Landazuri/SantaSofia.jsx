import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaSofia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.76 69.6">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA SOFIA', municipio.toUpperCase())}
              className="cls-1"
              d="M48.76,6.5a10.1,10.1,0,0,1-3.3-1.2,21.12,21.12,0,0,0-3.3-1.8,27.61,27.61,0,0,0-4-.6c-1.3-.2-2.5-.6-3.8-.8L33,2.4c-3,.4-5.6,1.8-8.5,2.4a7,7,0,0,1-3.8-.1,12.59,12.59,0,0,1-3.6-2.4A6,6,0,0,0,14.56.7a13.5,13.5,0,0,0-3.4-.6A17,17,0,0,0,8.86,0V.1a73.75,73.75,0,0,1-.4,10.5,22.85,22.85,0,0,1-3.4,9.1c-1.3,2-2.9,3.8-3.8,6C.16,28.4.16,31.4.06,34.3A18.34,18.34,0,0,0,.26,39a9.4,9.4,0,0,0,1.8,3.6,9,9,0,0,1,1.6,3.6A10.53,10.53,0,0,0,5,49.7c1.6,2.3,4.3,3.5,6.1,5.6s2.2,5,2.2,7.7c.1,2.1-.4,4.8,1.1,6.6l.7-.7h1.3V66.5l1.3-2.6V61.5H19l1.1-2.6,1.3-1.3,1.3-2.4V53.9L24,51.3l2.4-2.4,2.4-5,2.6-3.8,1.3-2.4h1.1V35.1h1.3V33.9l1.3-1.3V31.3L35.06,30h1.3V28.9l1.3-1.3h2.4l2.6-1.3h1.1V25.2l1.3-1.3V21.3l2.6-1.1h1.1l1.3-1.3,2.6-1.3,1.1-2.4,1.3-1.3V10.1h1.3l1.3-2.4,1.1-1.3V5.2C55.36,5.6,52.06,7,48.76,6.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaSofia