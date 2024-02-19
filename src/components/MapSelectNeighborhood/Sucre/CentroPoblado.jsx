import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPoblado = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.8 41.61" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CENTRO POBLADO', municipio.toUpperCase())}
              className="cls-1"
              d="M66.8,25.09c-4.8,3.7-11.5,9.2-18.5,14.1-2.2,1.6-5.7,2.8-8.2,2.3-8.2-1.8-16.4-3.7-24-7-3.6-1.5-6.1-6-8.7-9.5-.4-.5,1.6-3.2,2.9-4.4.9-.9,2.5-1.3,3.4-3.1a58.74,58.74,0,0,1-8.2,2.3c-1.8.2-3.7-.6-5.5-1,.6-2,.9-4.2,2-5.9.8-1.2,2.6-2,4.1-2.5,8.7-3.1,17.6-5.9,26.3-9.1C38.6-1,45-.41,49.4,4.49,55.1,10.79,60.5,17.49,66.8,25.09Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CentroPoblado