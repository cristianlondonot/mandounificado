import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CampoHermoso = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.36 33.37" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAMPO HERMOSO', municipio.toUpperCase())}
              className="cls-1"
              d="M22.13,33.37c-5.8-2.7-12.7-5.5-19.2-9-4.6-2.4-3.5-17.2,1.3-20.6A25.05,25.05,0,0,1,9.43.57c2.2-.8,3.8-1.2,5.8,1.9,2.5,4,7.2,6.6,10.7,10a56.38,56.38,0,0,1,7.2,8.2c.6.8-.1,3.2-1,4.1C29.23,27.57,25.93,30.07,22.13,33.37Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CampoHermoso