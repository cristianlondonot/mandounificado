import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const DoctrinaPortachuelos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.05 45.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DOCTRINA PORTACHUELOS', municipio.toUpperCase())}
              className="cls-1"
              d="M23.65,9.3c-10.1,10.9,2.6,15.2,3.4,24.4-2.6,2.7-6.6,6.8-11.1,11.4-1.4-2.5-2.5-4.9-3.9-6.9-1.2-1.8-2.7-4.1-4.4-4.6-5.5-1.4-4.8-7.1-7.6-10.2-.3-.3.9-2.7,1.9-3.3,3.8-2.1,7.9-3.8,11.3-5.4-1-5.4-1.8-9.9-2.7-14.5.5-.1,1-.1,1.5-.2C15.85,3,19.65,6.1,23.65,9.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default DoctrinaPortachuelos