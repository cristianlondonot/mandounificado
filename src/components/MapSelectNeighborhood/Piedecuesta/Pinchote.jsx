import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pinchote = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.53 58.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PINCHOTE', municipio.toUpperCase())}
              className="cls-1"
              d="M0,54.76a53.92,53.92,0,0,0,6.8-3.4c2.3-1.6,5.3-3.6.3-5.9-4.1-2-.5-4.8.5-5.2,13.7-5.1,24.5-15.8,38.6-19.9a21.87,21.87,0,0,0,8.3-4.8c7-6.4,16.2-8.7,23.7-14.1,3.6-2.6,5.9-1.8,5.2,2.9-1.2,8.3-3.5,15.6-10.6,21.7-7.6,6.5-18.5,6.5-25,14-7.3,8.6-16.7,10.3-27.2,10.1a4.78,4.78,0,0,0-3.6,1.9C12.6,60.16,6.6,59,0,54.76Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Pinchote