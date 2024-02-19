import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanJose = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 109.78 110.31"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN JOSE', municipio.toUpperCase())}
              className="cls-1"
              d="M0,50.92c12.7-5.9,18.3-19.2,27.6-29,6.7-7,13.6-14,21.5-19.5,3.7-2.6,10-2.8,14.8-2,13,2,25.8,5.1,38.6,7.8,7.2,1.5,8.9,5.3,5.8,12.1-4.5,10.09-5.4,20.7-3.9,31.59a5.38,5.38,0,0,1-.5,3.1c-6.4,8.5-12.6,17.2-19.5,25.2-7.3,8.5-15.4,16.41-23.2,24.5-1,1.1-2.3,2.41-3.6,2.6-6.8,1.1-13.7,1.9-21.4,3,1.9-12-5.1-17.4-16-19.9-3.1-.7-5.1-2.6-6.2-6.4A41.47,41.47,0,0,0,6.1,70C1.8,64.32,1.5,57.82,0,50.92Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanJose