import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LagunaNegra = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.92 91.97" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LAGUNA NEGRA', municipio.toUpperCase())}
              className="cls-1"
              d="M46.52,5.22c4.8-1.3,11.3-3.1,17.8-4.9,4.9-1.3,8.2,1.7,12.4,3.3,12.5,4.7,12.3,16.9,18,25.4,9.1,13.7,20.7,24.9,33.2,35.3-4.6-1.5-11.7,1.3-12.1-7.6,0-1-3.7-3-5.1-2.6-8.9,2.5-17.6,5.8-26.5,8.3-6.9,1.9-14.1,2.8-21,4.7-8.9,2.5-17.4,6.7-26.4,8-8.8,1.3-14.9,5.2-20.7,11.4-2.4,2.6-6.3,4.3-9.8,5.2-3.2.8-6.6-.2-6.3-5.1.5-8.5.8-17.1,1.4-25.6.1-1.3,1.5-2.4,1.9-3.7.7-2.9,2.3-6.4,1.3-8.6-1.7-3.8-.5-5.8.8-9.3,2.9-7.8,9.2-11.6,14.7-16.6,2.5-2.2,4-1.7,5.8.6,5.6,6.9,7.7,6.9,13.8.1,1.7-1.8,3.8-3.6,4.5-5.8C45.52,13.92,45.72,9.72,46.52,5.22Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LagunaNegra