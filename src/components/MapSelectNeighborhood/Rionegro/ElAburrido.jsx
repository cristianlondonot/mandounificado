import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElAburrido = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90.33 107.9"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL ABURRIDO', municipio.toUpperCase())}
              className="cls-1"
              d="M1.07,34.3c6.6-5.6,6.6-5.6,13.7.8.9-.5,2.4-1,2.6-1.8,1.8-6.9,7.5-6.3,12.7-8.1a41.16,41.16,0,0,0,17-11.5c4.5-5.2,6.4-12.5,15.6-13.7,7.6,7.5,16.3,16.2,25,24.8a9.27,9.27,0,0,1-.3,13.3c-3.7,3.5-8.2,6.3-11.4,10.2-6.4,7.9-14.1,14.7-17.4,25.2-2.5,7.9-8.1,14.9-12.4,22.2a76.29,76.29,0,0,1-6.4,9.6c-1,1.3-3.1,1.7-4.8,2.6-.4-1.3-.5-2.9-1.2-4-1.8-2.8-3.5-5.7-5.9-7.9-3.5-3.1-7.2-7.1-11.4-7.9-8.4-1.7-11-8.4-14.9-14.1-2.4-3.5-2.1-10.6,1.3-12.8,4.5-3,5.5-5.2,2.1-10.4C2.27,46.6,2.37,40.5,1.07,34.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElAburrido