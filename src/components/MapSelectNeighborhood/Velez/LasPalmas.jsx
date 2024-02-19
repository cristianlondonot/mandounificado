import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasPalmas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.09 62.4" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LAS PALMAS', municipio.toUpperCase())}
              className="cls-1"
              d="M29.9,62.4C20.1,52.9,10.4,43.4,0,33.3.3,27.2,6.8,18,13.7,15.6A30,30,0,0,0,30,2.3C31.5-.2,38.4,0,42.8,0,55.1.1,55.1,11.3,59,18.9c.3.6-.2,1.8-.6,2.7-2.3,6-4.6,11.9-6.9,17.8a5.24,5.24,0,0,0-.6,2.9c1.6,7.1-2.9,9.6-8.2,12.1C38.2,56.6,34.1,59.7,29.9,62.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LasPalmas