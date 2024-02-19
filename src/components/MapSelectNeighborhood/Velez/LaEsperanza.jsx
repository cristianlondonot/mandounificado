import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsperanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.15 21.73" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA ESPERANZA', municipio.toUpperCase())}
              className="cls-1"
              d="M28.15.75C18.65,5,15.75,11.65,17.05,21c-3.9.4-7.9,2.8-9.7-3.5-.3-1.1-4.7-1.1-7.3-1.7C-1,7.85,17.55-2.95,28.15.75Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaEsperanza