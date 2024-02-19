import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Robada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.32 102.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ROBADA', municipio.toUpperCase())}
              className="cls-1"
              d="M25.12,82.16c1.1-5.5-4.9-8.3-9.2-11.2-5.4-3.6-10.3-7.4-11.2-13.9-.5-4.1.4-7.8-4.5-10-.7-.3.4-6.2,1.7-9.1,5.3-12.1,5.6-24.4,2.2-36.9,14.1-4.8,33.2,7.4,39.8,24,5.1,12.9,10.9,25.5,17,38,2.8,5.8,7.7,9.4,15,9.8,7.1.4,14,2.8,23.4,4.8-5.2,4.4-9.1,7.5-12.6,10.79a45.83,45.83,0,0,0-6.3,7.6c-3.4,5.3-6.9,9.6-13.8,4.7a4.69,4.69,0,0,0-3.3-.4c-10.4,1.8-17.4-4.1-24.6-10.1C34.92,87.06,30.12,85.06,25.12,82.16Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Robada