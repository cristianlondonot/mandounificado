import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AguasBlancasAltao=  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.68 108.7">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('AGUAS BLANCAS ALTO', municipio.toUpperCase())}
              className="cls-1"
              d="M3.58,66.6c-.1-.1-.4-.2-.4-.4C2.08,62.1-.92,57.3.28,54s6.9-4.7,9.8-7.7c8-8.1,15.1-17.2,23.6-24.8,6.7-6,4.6-15.8,12.8-21.5.6.7,2.5,1.9,2.9,3.5,1.2,4.7,2.1,8.6,8.2,10.1,2.9.7,5.6,5.8,6.7,9.5s2.2,5.5,5.9,6.2c4.7,1,10.9.7,9.6,8.7-.1.6,1.2,2,1.8,1.9,7.4-.4,5.8,8.2,10.6,10.4.4.2.3,2.1-.1,3.1-2.4,6.3-1.4,9.4,4.1,12.7,3.4,2,3.2,4.2.2,6.4-8,6.2-15.7,12.9-20.4,22.1-1.9,3.6-2.9,7.6-4.6,11.3-.6,1.2-2.5,2.9-3.5,2.8-8.8-1.3-17.5-2.9-26.2-4.6-.8-.1-1.3-1.3-2-1.8-3.4-2.2-6-4.9-10.9-5.1-7.9-.5-11.8-8.2-9.2-16.1,2.5-7.6,2.4-7.7-6-9.3-1-.2-1.8-1.1-2.8-1.7C8.48,68.7,6.28,67.4,4,66A1.54,1.54,0,0,0,3.58,66.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AguasBlancasAltao