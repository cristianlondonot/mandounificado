import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BuenaVista = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.01 57.24" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BUENA VISTA', municipio.toUpperCase())}
              className="cls-1"
              d="M49,0c-1.8,6.3-3.5,12.4-5.3,18.6-2.7,9-5.4,18-8.3,26.9-1.9,6-8.2,9.9-14.9,9.7-1.3,0-3-.5-4,.1-4.6,2.7-8.3,3.3-10.1-3a1,1,0,0,0-.4-.5c-3.8-2-8.8-4-4.1-9.1,2.6-2.8,1.8-8.7,7.6-8.6.4,0,1.2-1.3,1.3-2,.6-7.3,6.5-10.8,11-15.3s9-9.1,14.2-12.6C39.31,2,43.91,1.6,49,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BuenaVista