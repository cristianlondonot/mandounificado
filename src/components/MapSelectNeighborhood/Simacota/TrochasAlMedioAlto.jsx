import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const TrochasAlMedioAlto =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.4 59" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TROCHAS AL MEDIO ALTO', municipio.toUpperCase())}
              className="cls-1"
              d="M58.4,4.1c-3.7,13-7.2,25.4-11,38.7-9.8.7-15.5,8.6-20,16.2C18.4,52.3,9.6,45.7,0,38.5c.9-1.7,2.6-4.9,4.2-8.1C8.1,22.9,9.1,14.9,8.8,6.6c-.1-1.8.6-5.1,1.5-5.4,3-.9,7.1-1.9,9.3-.5,6.6,4.1,12.3,6.9,20.7,3.8C45.7,2.5,52.4,4.1,58.4,4.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default TrochasAlMedioAlto