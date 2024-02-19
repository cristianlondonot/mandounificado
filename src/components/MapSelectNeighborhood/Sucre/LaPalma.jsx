import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPalma = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.62 72.76">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PALMA', municipio.toUpperCase())}
              className="cls-1"
              d="M79.62,3.51c-1.9.7-3.8,1.9-5.7,2.1-7.9.7-12.1,3.9-12.9,11.6-.5,4.2-2.3,5.6-6,6.6a153.85,153.85,0,0,0-20,6.1c-5.9,2.4-2.2,7.4-.4,9.6,5.9,7.3,5.7,15.5,4.7,23.8-.4,3.6-1.9,7.1-2.5,9.3-5.1,0-10.1-.3-15.1.1-4.4.4-6.7-1.5-8.9-5.2-3.3-5.7-7.4-10.9-11.2-16.4-2.5-3.7-2.2-6.7,1.5-9.7,10.3-8.4,20-17.7,30.8-25.5,6.4-4.6,10.8-11.9,18.9-14.2,1.9-.5,3.9-1.8,5.7-1.7,6.8.4,13.6,1.2,20.4,1.9A7.74,7.74,0,0,1,79.62,3.51Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPalma