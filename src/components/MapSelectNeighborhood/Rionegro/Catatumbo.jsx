import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Catatumbo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116.6 71.87"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CATATUMBO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,60.5c3.6-4,7.2-8.2,11-12.2,1.2-1.3,3.1-2,4.7-2.9,1.1-.6,3.1-.9,3.2-1.5,1.1-8.4,9.9-5.3,13.8-9.6.9-1,2.2-1.8,3.3-2.6,2.5-1.9,4.8-4.4,7.7-5.6,5.1-2.3,6.6-5.7,4.1-11-1.5-3.2-2.8-6.4-3.9-9.1,5.9-1.4,10.8-2.8,15.8-3.7,5.1-.9,10.4-1.4,15.8-2.1-.3,6.9,1.5,8.6,5.9,7.4,9.1-2.6,18.2-5.1,27.1-7.6,2.8,3.2,4.9,5.8,8.1,9.5-4,.4-7.1,1-10.3,1-6.1,0-12,4.8-13,10.5-1.4,8-3.2,16-4.9,24.1-17.1-.5-24.7,5.6-20.4,17.1-4.2,3-8.3,6.3-12.8,9-1.4.8-3.9.9-5.5.2-4-1.7-7.7-4.3-11.8-6.1-4.2-1.8-8.3-3.8-13.3-1.6-2.2.9-5.4-.4-8.2-.8-5.4-.9-10.8-1.7-16.4-2.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Catatumbo