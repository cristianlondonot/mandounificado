import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaRaya = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 78.26" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA RAYA', municipio.toUpperCase())}
              className="cls-1"
              d="M60,20.16c-3.2,8-5.1,15.8-14.9,20.4-7.9,3.7-13.5,12.3-20.3,18.5-4.7,4.3-9.8,8.3-14.7,12.6a69.14,69.14,0,0,0-5.9,6.6C2.8,54.56,1.4,31.36,0,8c9.8,4.7,10,4.6,16.4-3.8,2.7-3.5,5.6-5.8,10.5-2.7,2.9,1.8,6.8,1.8,9.9,3.3s5.9,3.7,2,7.4c-2.8,2.7-5.4,5.4-8.2,8.2-2.6,2.6-6.9,5.2-3.4,9.3,3.2,3.6,7.8,6.3,12.9,3,3.1-2,5.7-4.8,8.7-7.1,3.2-2.4,6.5-4.6,9.8-7A10.7,10.7,0,0,1,60,20.16Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaRaya