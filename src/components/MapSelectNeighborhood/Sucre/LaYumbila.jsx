import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaYumbila = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.2 50.32" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA YUMBILA', municipio.toUpperCase())}
              className="cls-1"
              d="M76.2,8.5c-4.5,10.9-8.4,20.5-12.3,30-.6,1.5-1.5,3.1-1.6,4.7-.4,6.1-2.6,8.2-9.1,6.6-13-3.2-26.3-5.5-39.5-8.1-3-.6-6.1-.9-7.6-1.1-1.8-6-4-11.1-4.7-16.5C.4,16.4.4,8.5,0,0A21.74,21.74,0,0,1,3.1.7c9.6,7.4,20.3,6,31.1,3.9,1.2-.2,2.8-1,3.4-.5,5,4.1,10.7,1.6,16.1,2C60.9,6.7,68.1,7.6,76.2,8.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaYumbila