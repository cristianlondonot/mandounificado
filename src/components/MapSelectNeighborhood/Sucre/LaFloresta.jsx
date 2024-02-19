import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaFloresta = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.54 61.61" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA FLORESTA', municipio.toUpperCase())}
              className="cls-1"
              d="M86.5,15.6c-.5,1-1.4,2-1.4,3,.2,2.6,2,5.7,1,7.6C83.2,32,84.5,37.9,84,43.8a12.07,12.07,0,0,1-3.2,6.6,146.54,146.54,0,0,1-11,9.7c-.9.7-2.2,1.6-3.3,1.5-6.2-.5-12.4-1.4-18.6-2.1C46.6,54.7,46,50,44,46.2c-1.4-2.8-4.6-6.1-7.4-6.5-7.8-1.1-11.4-7.9-17.1-11.6C13,23.9,9.9,22.9,3.3,26.6c-1.1-3.4-2.2-7-3.3-10.9,4-4,17.3-.9,11.8-13.6C16.3,1.5,20.6.8,26.4,0,33.8,2.7,43,6.1,52.2,9.2c1.4.5,3.2-.3,4.8-.6,1.4-.2,2.9-1.1,4.1-.8,7.7,2.4,15.3,5.1,22.9,7.6a25,25,0,0,0,2.5.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaFloresta