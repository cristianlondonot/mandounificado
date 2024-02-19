import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPortico = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.41 19.3">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL PORTICO', municipio.toUpperCase())}
              className="cls-1"
              d="M10,16.3a7.72,7.72,0,0,1,2.4,1.2c.6.3,1.2.7,1.8.3,1-.5,1.5-1.9,2.2-2.7a5.73,5.73,0,0,1,1.1-1.1c.3-.2.6-.5.9-.7a1.05,1.05,0,0,1-.5-.9,7.14,7.14,0,0,1,.2-2,4.07,4.07,0,0,0,0-1.9,12.06,12.06,0,0,0-2.7-4.3,7.35,7.35,0,0,0-1.9-1.6,7.94,7.94,0,0,0-2.2-.6,26.38,26.38,0,0,1-4.9-.8C5.11.8,3.81.3,2.51,0c0,.1.1.2.1.3A23.08,23.08,0,0,1,2.31,4c-.3,2.4-.7,4.7-.8,7.1a12.26,12.26,0,0,1-.7,3.2A9.86,9.86,0,0,0,0,18a2.84,2.84,0,0,0,.4,1.3C3.41,18.6,6.41,15.3,10,16.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElPortico