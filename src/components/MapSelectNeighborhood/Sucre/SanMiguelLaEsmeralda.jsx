import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanMiguelLaEsmeralda = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.8 116.15" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN MIGUEL LA ESMERALDA', municipio.toUpperCase())}
              className="cls-1"
              d="M112.4,70.55a65.57,65.57,0,0,1-3.2,7.7c-1,1.8-2.6,3.2-3.9,4.8,1.8,1.3,3.7,2.5,5.5,3.8.7-.1,1.3-.3,2-.4-1.3,6.8-2.3,13.7-4.3,20.3-.6,2-3.8,4.2-6.1,4.5-5,.7-10.8,1.8-14.9-.2-8.6-4.1-16.3-.8-24.1,1.1-6.9,1.6-13.3,3.9-20.3.9-1.8-.8-4.9-1-6.1,0-8.8,6.9-16.4.4-24.3-1.6-3.7-1-7.4-2.1-12.7-3.7,1.4-5.7,3.1-12.1,4.8-19,1.7-.1,3.5-.3,5.3-.3,9.5-.1,13.8-6.3,10.3-15-1.9-4.6-4.3-8.9-6.6-13.3-2.2-4.1-.8-8.8,3.8-9.3,8.8-1.1,10.1-8.8,13-14.5,2.2-4.3-2.8-9-8.9-9.2-4.6-.1-14.7-5.3-17.8-9.1C15.5,10,16.6,8.45,17.3.35c5.4,0,11,.7,16.4-.2,7.5-1.3,7.8,6,11.8,8.7-1.1,2.7-2.3,5.4-3.6,8.4-1.3-.3-2.9-.7-4.6-1.1,9.7,3.9,4,12.3,5.3,18.2.9,4,.2,8.4.2,12.6,0,7.7,7.7,13.1,15.4,12.5,11.4-1,23-1,34.5-.9,2,0,4,2.5,6,3.8C103.2,65,107.8,67.75,112.4,70.55Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanMiguelLaEsmeralda