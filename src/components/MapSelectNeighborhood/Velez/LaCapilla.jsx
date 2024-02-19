import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaCapilla = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 42.66">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA CAPILLA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,28c6.7-3.4,8.4-9.7,9.2-16.2.4-3.2,1-5.5,4.3-6.5a2,2,0,0,0,1.1-.6c3.2-5,7.2-6.5,12.8-1.9-.9,4.2-1.9,9-2.9,13.9-.3,1.6-1.3,3.6-.7,4.7,4.5,8.1,1.6,14.8-3.6,21.3-4.7-1.6-9.8-3.4-14.9-5S1.4,31.36,0,28Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaCapilla