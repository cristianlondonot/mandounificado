import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElGaitan = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.08 135.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL GAITAN', municipio.toUpperCase())}
              className="cls-1"
              d="M117.08,0c-2.4,7.7-4.3,14.8-7,21.6-2,5.1-5.3,9.6-7.3,14.6-2.6,6.7-3.5,14.3-7.1,20.4-3.2,5.5-9.1,9.4-13.4,14.4-6.7,7.8-13.7,15.5-19.5,23.9-7.5,10.9-14.1,22.6-20.9,34-1.1,1.8-1.3,4.1-2.1,6.7-7.3-6.3-16.1-6.5-23.8-6.3-4.4-3.4-8.4-6.3-12-9.7a11.38,11.38,0,0,1-3.4-6,66.62,66.62,0,0,1-.3-14.8c.1-1.4,2.7-3.7,4.3-3.8,3.6-.2,7.3.7,11,1.1,8.5,1,12.6-1.9,15.5-9.5,1.1-2.8,4-6,6.7-6.9,6.3-2,8-7,11.2-11.8,6.3-9.6,5.8-21.1,10.8-31,2-3.8,3.1-4.8,7.2-2.1,7.3,4.7,14.9,9.6,24.3,7a10,10,0,0,0,5.7-5c3.5-7.1,6.4-14.4,9.5-21.6.7-1.7,1.6-3.5,1.5-5.2C107.68,2.7,108.08,2.1,117.08,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElGaitan