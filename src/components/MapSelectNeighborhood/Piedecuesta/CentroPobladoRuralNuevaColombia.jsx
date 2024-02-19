import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPobladoRuralNuevaColombia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.53 81.97" >
        <path
          className="cls-1"
          d="M55.38,81.67c-5.5.9-10-2.1-15-4.1-11.1-4.4-22.8-2.8-34.3-2.7-6.9.1-6.9-4.8-5-7.5,5.1-6.9,5.4-15.2,6.1-22.5,1.2-12,5.1-22.9,8.4-34.1a19.08,19.08,0,0,0,.7-6.2c-.2-3.9,3.7-1.9,5-3.7s3.1-.3,4,1c6.9,9.8,16.2,17.3,24.7,25.5,8.9,8.6,17.1,18,27.3,25.3a5.14,5.14,0,0,1,0,8.5c-6.3,4.2-10.9,9.3-13.6,16.5C62.68,80.67,59.58,82.77,55.38,81.67Z"
        />
      </svg>
    </div>
  )
}

export default CentroPobladoRuralNuevaColombia