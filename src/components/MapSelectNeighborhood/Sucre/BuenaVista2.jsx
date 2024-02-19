import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BuenaVista2 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.8 79.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BUENA VISTA 2', municipio.toUpperCase())}
              className="cls-1"
              d="M63.8,44.8C49,56.7,34.9,68,20.4,79.6c1.3-3.6,2.6-7.4,4.1-11.2,1.3-3.3,3.3-6.4,4.2-9.8.6-2.2.4-6.5-.4-6.8a16.38,16.38,0,0,0-9.3-.3c-3,.9-5.4,3.9-8.4,5.1C7.4,57.8,3.7,58,.3,58.6L0,56.8c4.1-1.3,8.4-2,12.2-3.9,8.5-4.2,10.8-12.2,9.1-24.4C20,19.7,20.2,10.8,19.5,0,36.7,14.6,52.7,27.6,63.8,44.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BuenaVista2