import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Volador = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.88 95.14" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VOLADOR', municipio.toUpperCase())}
              className="cls-1"
              d="M71.47,95.14c-2.8-4.8-4.9-9-7.7-12.8a7.79,7.79,0,0,0-5.5-2.8c-6,.1-11.4-1.4-17.1-3.4-5.9-2.1-12.7-3.2-18.9.8-.9.6-4.1-.3-4.5-1.2q-9-18.3-17.4-36.9c-.7-1.6-.4-4.9.8-5.9,7.9-7.1,15.9-14.1,24.4-20.4,4.9-3.7,10.9-6,16.1-9.4,6-4,12-3.8,18.4-1.5,7.6,2.7,15.4,5.2,22.6,7.6,4.1,13.4,7.9,26.4,17.9,36.6,1.8,1.9,3,4.4,4.4,6.6,3.6,5.5,7.8,10,15.1,10.9,2.2.3,6,2.9,5.8,3.9-.5,3.2-.7,7.1-5.7,7.8-9.5,1.3-19.3.7-28.1,5.6a20.81,20.81,0,0,0-3,1.3C83.27,86.24,77.57,90.54,71.47,95.14Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Volador