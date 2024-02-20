import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const EspumaAlta = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 84.26 53.37"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ESPUMA ALTA', municipio.toUpperCase())}
              className="cls-1"
              d="M8.86,8.85c3.3-1.1,6.2-2.1,8.8-3,3.1,2.3,6.4,4.2,9,6.8,4.2,4.1,7.5,2.7,10.9-.8,2.7-2.7,5.6-5,8.1-7.9,4.9-5.7,9.4-5.3,15.1,1.7,1.1,1.3,1.9,3,3.1,4.1,3.2,2.8,2.2,4.7-.7,6.9-3.9,2.9-3.4,4.8,1.1,6.9,4.2,1.9,8.1,2.8,12.5.1,1.7-1.1,4.3-.9,7.5-1.5-4.8,11.1-10.6,17.9-22.3,18.5-3.2.2-6.2,4.2-9.2,6.6-8.6,6.7-18.2,7.4-28.2,4.5-6.4-1.8-12.7-4.3-18.1-6.2-2-3.6-4-6.7-5.6-10a9.1,9.1,0,0,1-.8-4.9,30,30,0,0,1,1.6-7.2c.4-1.3,1.3-3.3,2.2-3.5C11.46,18.75,9.56,13.65,8.86,8.85Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default EspumaAlta