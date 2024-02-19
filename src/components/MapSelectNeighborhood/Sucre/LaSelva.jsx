import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaSelva = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.7 76.11" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA SELVA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,37.6C14.1,25.2,28.2,12.9,42.9,0c1.3,2.1,2.6,4.5,4.2,6.7,5.3,7.1,9.8,14.7,19.8,16.7,5.3,1.1,9,5.5,10.5,11.3,1,3.8,1.6,8.1,3.9,10.9,2,2.5,6.1,3.4,9.4,5-3.3,1.1-6.4,2.3-9.6,3.3-4.8,1.5-9.3,2.5-14.1-.9-1.9-1.3-6.5-.7-8.6.8-3.1,2.3-4.8,6.4-7.5,9.3-2.2,2.3-4.8,4.9-7.7,5.9A185.77,185.77,0,0,1,19,76c-2.6.6-5.8-1.4-8.6-2.1,2.6-6.7,5.3-13,7.5-19.5s-2.2-5-5-5.3C9.1,45.5,5.1,42,0,37.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaSelva