import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElAmarillo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-a37f66da-373d-4f22-911e-7826219569d3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 43.61 43.23"
      >
        <path
          fill={getColorByCarencias('EL AMARILLO', municipio.toUpperCase())}
          className="uuid-04d2842a-1d03-4b46-ac68-ba0597ade638"
          d="M42.92,17.1c-1.2-2.6-2.2-5.3-3.1-7.6-3.4,1.3-7.3,2.7-10.7,3.9-2.9-4.5-5.2-8-8.7-13.4-2.7,6.8-5.2,12-6.9,17.4-1.88,6.28-3.38,7.96-9.37,7.16-1.39.22-2.77.41-4.16.53,0,.1.01.21.02.31.6,3.9.4,9.3,2.8,11.4,5.8,5,13.2,7.5,20.9,6-2.4-2.6-7-5.4-6.7-7.4,1.1-6.4,6.8-8.9,13.4-10.7,1.1,3.6,2.2,7.1,3.3,10.6.7,2.2,1.6,4.4,2.4,6.6.7-.3,1.3-.5,2-.8-1.1-3.7-2.7-7.4-3.1-11.2-.3-3.2-1.2-7.6,5.2-7,3.2.3,4.2-2.6,2.7-5.8Z"
        />
      </svg>
    </div>
  )
}

export default ElAmarillo