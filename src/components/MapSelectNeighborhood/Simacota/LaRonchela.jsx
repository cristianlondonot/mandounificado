import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaRonchela =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.16 48.36" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA RONCHELA', municipio.toUpperCase())}
              className="cls-1"
              d="M60.3,48.36c-.2-7.7-.5-8-8.2-8.9-.7-5.8,2.6-12.1-3.2-17.2-3.1-2.7-5.8-3.3-9.6-1.8s-6,3.6-5.8,7.8c0,1-.5,2-1.1,4.2-3-5.5-6.3-8.5-12.3-7.2-1.4.3-3.4-2.3-5.1-3.5,1.9-4.7,5-9.7-1.5-12.2-4-1.5-8.6-1.3-13.5-2,5.2-2.3,9.6-3.7,15.4-2.5,5.5,1.1,11.6-1.3,17.5-1.7C39.2,3,45-2.84,52,1.76c1.9,1.2,5.1.3,7.8.3,7.7,0,8.6.6,8.8,8.5.1,4.2,1.5,6.6,5.1,8.7,7.8,4.7,8.5,11.9,2.3,18.5-1.7,1.8-2.8,4.1-4.7,5.5s-4.4,1.8-6.5,2.8A46.67,46.67,0,0,0,60.3,48.36Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaRonchela