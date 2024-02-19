import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const RioNegroCarcajero = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.57 95.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('RIO NEGRO CARCAJERO', municipio.toUpperCase())}
              className="cls-1"
              d="M5.65,0c2.9,3.2,6.3,6,8.5,9.6,4,6.4,7.2,12.1,14.8,16.7,7.9,4.8,17.8,11,19.9,22.4.8,4.3,2.2,7.9,7.1,9.7,4.2,1.5,4.7,8.5,1.7,12.8-.8,1.2-1.6,2.6-2.8,3.2-8.9,4.4-9.4,16.1-17.7,20.7-5.6-10.5-3.3-21-1.4-31.6a8.08,8.08,0,0,0,0-3.1c-2-8.6-19-19.4-28.6-17.3C4.75,33.6,2.35,24,.05,14.4c-.2-.7.2-2,.7-2.2,6.4-2.1,3.7-7,3.1-11.2A6.37,6.37,0,0,0,5.65,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default RioNegroCarcajero