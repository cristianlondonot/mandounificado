import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaVictoria = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.09 20.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA VICTORIA', municipio.toUpperCase())}
              className="cls-1"
              d="M63.09,20.7c-14.4-.5-28.7-1.1-43.1-1.6a27.66,27.66,0,0,0-5,.1C3.29,21-2.31,14.7.89,2.9c.4-1.4,3.7-3,5.5-2.9a25.87,25.87,0,0,1,9.4,2.6c3.7,1.8,8.1,1.3,11.1,2.5,6.8,2.7,13,5.8,20.7,6.4,4.4.3,8.7,3.8,12.8,6.1C61.69,18.2,62.39,19.9,63.09,20.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaVictoria