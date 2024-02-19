import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AcoDePeña = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.44 89.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ACO DE PEÑA', municipio.toUpperCase())}
              className="cls-1"
              d="M28.49,19.1c7,9-.3,16.8-3,24.3-3.9,11-10,21.2-15.2,31.7-2.4,4.9-5,9.8-7.5,14.8H.29c1.1-9.9,3-19.2,11.8-25.7,4.1-3,6.4-7.2,1.5-12.2-2.2-2.3-3.4-5.6-4.9-8.5a2.86,2.86,0,0,1,.1-2.7c4.3-5.5,1.3-9.1-2.7-13.2-2.2-2.2-3.3-5.7-4.1-8.8A95.1,95.1,0,0,1,.09,6.9a50.45,50.45,0,0,1,0-5.5C.79.9,1.49.5,2.29,0c.4,1.1,1.2,2.2,1.3,3.3.3,6.3,5.8,7.6,9.8,9.8,4.7,2.7,10.2,4.2,15.3,6.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AcoDePeña