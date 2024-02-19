import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Limoncito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.18 68.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LIMONCITO', municipio.toUpperCase())}
              className="cls-1"
              d="M15.1,68.5c-4-5.3-8.2-9.8-11.2-15A27.32,27.32,0,0,1,0,40.6,117.49,117.49,0,0,1,2.5,16.2C3.6,10.8,6.8,5.8,9.3,0c5.6,4.8,9.5,10.7,14.4,11.7,10.4,2.2,11.2,7.6,8.8,15.8a1.72,1.72,0,0,0,.2,1.2c3.6,8.1.2,13.7-5.4,19.8C22.2,54,19.3,61.3,15.1,68.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Limoncito