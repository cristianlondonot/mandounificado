import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const TrochasAlMedioBajo =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.85 61.4" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TROCHAS AL MEDIO BAJO', municipio.toUpperCase())}
              className="cls-1"
              d="M38.16.4c2.5,14.1-2.1,25.2-9.2,35.6-.5.8-1.6,1.9-2.4,1.8-5.8-.4-6.4,3.3-7.3,7.7-.6,2.6-3.2,4.9-5.2,7-1.5,1.6-3.7,2.5-5.2,4.1-1.3,1.4-2,3.3-4.2,4.8C3.46,53.8,2.46,46.3,1,38.7a42.45,42.45,0,0,1,.9-21.5C3.46,12,3.26,6.2,4,.7c7.3-1.5,12.3-1.2,16.6,7,1.8,3.4,10,2.5,12.9-1.3C34.76,4.6,36.26,2.8,38.16.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default TrochasAlMedioBajo