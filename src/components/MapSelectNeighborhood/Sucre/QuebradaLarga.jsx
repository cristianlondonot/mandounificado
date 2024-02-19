import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const QuebradaLarga = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.3 141.83" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUEBRADA LARGA', municipio.toUpperCase())}
              className="cls-1"
              d="M80.4,0c7.7,9,17,17.6,23.5,28s10.2,22.2,15.2,33.5c7.5-2.7,15-5.3,24.2-8.6-4.9,7.7-9.2,14.5-13.5,21.3a24.26,24.26,0,0,0-1.4,2c-3.2,8-6.1,16.2-9.5,24.1a17.85,17.85,0,0,1-9.6,9.7c-3.4,1.6-4.2,8.7-6.4,13.2-2.9,6.1-6.1,12.1-9.2,18.1-.2.4-1.2.6-1.7.5-3.7-.3-7.4-1.2-11.1-1.1-5.1.2-5.7-3.9-7.8-6.8-3.1-4.3-7-7-13-7.4-10.7-.6-21.4-2.2-32-3.8-2.4-.4-4.4-2.9-6.7-4.2C14,114.3,14,114.3,8.2,116c1.1-7.2,3.2-14.8,3.2-22.4,0-7.8-3-15.1-11.4-21,3.1-2.5,5.4-4.9,8.3-6.5,4.9-2.7,5.5-6.7,6.2-11.8C15.6,46,18.3,37.8,21,29.7c1.3-3.8,8.3-4.3,12.6-1.2,5.7,4,11.9,7.1,18.8,5.1,3.1-.9,6.3-3.8,8-6.7,1.9-3.3,3.3-7.7,2.8-11.3C61.6,5.6,69.5,4.2,75.3.9,76.3.1,77.9.3,80.4,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default QuebradaLarga