import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Canelo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.1 40.72" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CANELO', municipio.toUpperCase())}
              className="cls-1"
              d="M37.1,1.62c-2,11-3.5,21.1-5.7,31.2-.8,3.7-2.9,7-7.8,6.6-1.8-.1-3.7.8-6.1,1.3-.8-2-1.3-4.9-3-6.6-2.3-2.3-5.3-4.6-8.3-5.3-5.5-1.3-7.8-6.4-5-11.3A41.61,41.61,0,0,0,5.4,6.22c1-4.3,9-8.4,11.9-4.9C23,8.12,28.4,2.62,34,2.62,34.8,2.42,35.6,2,37.1,1.62Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Canelo