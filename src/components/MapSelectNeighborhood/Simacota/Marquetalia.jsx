import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Marquetalia =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.3 66.03" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MARQUETALIA', municipio.toUpperCase())}
              className="cls-1"
              d="M58.4,54.33c-4.9,3.6-9.8,7.2-14.6,10.7-7-1.1-14.4-3.4-21.8-3.2-7.1.1-14.2,2.6-22,4.2a21.79,21.79,0,0,1,1.1-4.6c3.8-7.8,7.5-15.7,11.5-23.4,3.4-6.5,6.2-12.7,4.5-20.6C15.9,12,16.9,6.23,16.9,0c23.7-.8,40.6,12.9,58.4,27.4-1.9,2.8-4.6,7-7.3,11.2-3.4,5.3-6.6,10.7-10,16A1.87,1.87,0,0,0,58.4,54.33Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Marquetalia