import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElLimon = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.39 47.79" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL LIMON', municipio.toUpperCase())}
              className="cls-1"
              d="M3.7,14.8c1.3-1.9,2.2-3.4,2.7-4.2C4.1,7.2,2,4.2,0,1.3A15.93,15.93,0,0,0,1.3,0C8.1,2.7,13.6,7.5,18.4,12.8c2.5,2.8,4.9,3.5,8.3,3.9a73,73,0,0,1,14.5,3.5c5.8,2,6.6,5.9,3.1,10.8-3.2,4.5-6.4,9-9.3,13.7-2.2,3.5-4.7,3.7-8.2,2.2-4.5-1.9-10.1-2.3-10.6-9-.1-1.2-2-2.1-2.6-3.3-.8-1.5-1.9-3.3-1.8-5C12.7,19.5,12.6,19.1,3.7,14.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElLimon