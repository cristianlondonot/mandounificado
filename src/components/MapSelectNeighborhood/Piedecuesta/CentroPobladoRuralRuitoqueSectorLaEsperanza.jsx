import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPobladoRuralRuitoqueSectorLaEsperanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.36 37.42" {...props}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M0,33.05c2.9-5.9,2.1-12.7,2-19.3,0-1.1,0-1.7,1.2-1.9,5-1,3.3-3.5,1-5.6C2.3,4.55,3,3,3.3,1.15c1.5.3,3.5.1,4.5.9,3.9,3.5,6.9,4.3,10-1.1.8-1.4,5.6-1.1,5.6-.1.3,3.5,4.8,7.4,2.1,9.9-7.9,7.4-13.6,16.4-20.3,24.7-1.1,1.4-2.3,2.5-4.1,1.7C-.5,36.55.4,34.75,0,33.05Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CentroPobladoRuralRuitoqueSectorLaEsperanza