import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaSoledad = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.31 48.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA SOLEDAD', municipio.toUpperCase())}
              className="cls-1"
              d="M8.4,48.2c-.1-5.7-3.5-7.9-8.4-7.7C4.6,26.6,9.2,13,13.5,0c6.6,2.1,12,4.5,17.6,5.4,8.7,1.4,12.7,8,16.1,14.4.9,1.8-3.9,6.6-6.3,10-1.1,1.6-3.4,2.8-3.8,4.5-1.8,7.2-6.2,12-13.3,10.9-4.9-.8-8.2,1-12,2.6C10.9,48.2,9.8,48,8.4,48.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaSoledad