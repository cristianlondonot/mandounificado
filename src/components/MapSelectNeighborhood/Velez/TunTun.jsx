import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const TunTun = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.7 36.16" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TUN TUN', municipio.toUpperCase())}
              className="cls-1"
              d="M25.4,36.16c-1.5-6.1-6.4-8.1-11.8-9.4l.2.2c-4.5-7.9-9-15.8-13.8-24.3,2.5-3.5,5.8-3.3,11-.8,5,2.5,11.2,3,16.9,4,1.2.2,3.2-.3,3.8-1.2,4.3-6.1,7.1-1.1,12,1.7-15.5,5.2-11.5,20.5-18.3,29.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default TunTun