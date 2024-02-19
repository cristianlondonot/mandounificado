import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Tubavita = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.4 20.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TUBAVITA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,9.2C2.1,6.8,3.5,5.6,4.6,4.1A39.76,39.76,0,0,0,6.7,0c4.8,2.9,9.1,6.9,14.1,7.9,5.2,1.1,11-.6,16.6-.4-2,3-2.8,6.7-8,3.5-2.8-1.7-7.9-3.9-11.3,2-1.8,3.2-6.4,4.7-10.5,7.5C5.2,16.9,2.6,13.1,0,9.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Tubavita