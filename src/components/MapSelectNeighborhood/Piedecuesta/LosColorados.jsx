import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LosColorados = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.45 82.42">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LOS COLORADOS', municipio.toUpperCase())}
              className="cls-1"
              d="M39.62,6.71c5.7-2.6,10.2-5.3,15-6.5,5.2-1.3,7.5,3.6,8.2,7.3,1.2,5.9,4.1,9.3,9.3,12s7,8.7,6.4,13.9c-1.3,12.2,6.1,19,14.6,25s10.8,13,5.5,22.4c-.4.7-1.5,1.7-2.1,1.6-1.6-.3-2.1-1.6-2-3.2.3-4.8-.3-9.2-3.4-13.3-2.3-3-3.3-4.2-5.7-.2-3.9,6.5-4.9,6.3-9.5.1-2.8-3.7-7-6.4-8.3-11.4-.4-1.5-2.5-5.5-5.8-1.4-.9,1.1-2.6-.4-3.8-1.2-5-3-10-6.9-14.6.5-.1.2-.4.5-.5.4-6-2.4-15.2-3.2-17.4-7.5-4.5-9-8.3-16.3-19.5-16.3A6.06,6.06,0,0,1,0,23c-.3-4,3.5-2.3,5.7-2.7,6.6-1.1,10-7.2,15.4-10.2,3.4-1.9,5.5-3.1,7.4,1.3.6,1.4,2.2,2.4,3.4,3.6,2.7,2.8,4.7,5.7,9.1,1.3C45,12.81,45.22,10.41,39.62,6.71Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LosColorados