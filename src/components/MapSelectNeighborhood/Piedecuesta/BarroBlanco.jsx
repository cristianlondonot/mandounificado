import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BarroBlanco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.18 44.66">
        <path
          fill={getColorByCarencias('BARRO BLANCO', municipio.toUpperCase())}
          className="cls-1"
          d="M.1,40.24c4.2-13,15.4-18.7,26.6-23,6.8-2.6,9.3-6.6,10.4-12.9.7-4.2.6-4,4.6-2.1C45.4,4,49,3,52.4,1c2.5-1.4,4-1.9,4.9,1.9.7,2.8,3.2,5.2,4.3,8,1.4,3.7,3.7,7.2-2.7,9.8-6,2.4-7.5,9.3-8.9,15.2-1.9,8.3-4.5,10.1-12.6,7.8-5.5-1.6-11-3.4-16.5-5.2A27.53,27.53,0,0,0,0,39.94Z"
        />
      </svg>
    </div>
  )
}

export default BarroBlanco