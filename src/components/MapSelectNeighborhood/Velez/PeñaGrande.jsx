import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PeñaGrande = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.19 36.63">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PEÑA GRANDE', municipio.toUpperCase())}
              className="cls-1"
              d="M9.11,36.53c.4.3,0-.1-.5-.4-3-2-7.6-3.4-8.5-6s3.1-6.2,3.5-9.6c.6-4.1-.3-8.3-.4-12.5,0-2.6,0-7.4.5-7.5,3.9-.5,8.2-1,11.7.3,2.1.8,3.6,4.6,4.2,7.3a26,26,0,0,1,.1,10.4c-.6,2.9-2.7,5.5-4.3,8.1C13.51,29.93,11.41,33,9.11,36.53Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PeñaGrande