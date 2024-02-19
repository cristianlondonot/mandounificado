import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PiedrasNegras = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.1 51.63">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PIEDRAS NEGRAS', municipio.toUpperCase())}
              className="cls-1"
              d="M50.4,51.63c1.1-1.3,2.2-2.6,1.5-4.2a22.45,22.45,0,0,1-1.3-2.7,15.72,15.72,0,0,1-.4-2.3c-.2-2.8.1-6.7,2.2-8.8a6,6,0,0,1,4.7-1.5,29.31,29.31,0,0,1-2.9-.5.59.59,0,0,1-.1-1.1,2,2,0,0,0,.9-1.1,9.87,9.87,0,0,0,.3-4.2c-.1-1.6-.4-3.2-.5-4.7a11.48,11.48,0,0,1-.1-1.9,6,6,0,0,1,.6-2.3c.3-1-.3-1.2-1.1-1.6a1.89,1.89,0,0,1-1.2-1.4c-.2-1.6,1.7-3.7-.1-4.9a4.14,4.14,0,0,0-1.9-.5,22.6,22.6,0,0,0-2.6-.1,13.75,13.75,0,0,1-4.9-.6,43.82,43.82,0,0,1-6.4-3.4A61.55,61.55,0,0,0,31.6.53,4.68,4.68,0,0,0,29,0c-.6.1-.7.4-1,.9-.8,1.8-2.2,3.5-2.3,5.5a5.28,5.28,0,0,0,1,3.2A5,5,0,0,0,28.2,11a1.37,1.37,0,0,1,.6,1.3,2.65,2.65,0,0,1-1.7,1.4,5,5,0,0,1-2.7,0,6.1,6.1,0,0,0-3,.1,29.19,29.19,0,0,0-6.3,2.7,19.16,19.16,0,0,0-4.8,3.2c-2.5,2.6-2.6,6.3-4.7,9.1-1.3,1.7-3,3.1-4.5,4.7-.4.4-.7.9-1.1,1.3l.8.7H16.6l2.2,1.2,1.2,1.2h3.3l1.2,1.2h3.3l5.7,1H38l1,1.2,2.3,1.2h1.2v1.2h1l1.2,1,3.5,3.5,1,2.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PiedrasNegras