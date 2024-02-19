import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPobladoMensuli = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 36.03" >
        <path
          className="cls-1"
          d="M0,4.72c9.6,3.7,16.6-.7,23.7-4,2.6-1.2,4.2-1,5,1.4,3.7,10.9,10.9,20.1,15.8,30.3-.8,2.2-2.9,1.3-4.2,1.8-9.3,3.8-12.9,1.9-15.6-8.4-.4-1.4-.4-2.9-2.1-3.3-1.5-.3-2.4.4-3.6,1.6-5,5.3-9,4.6-12.3-2.2-1.2-2.5-1.9-5.3-2.9-7.9S1.7,8.82,0,4.72Z"
        />
      </svg>
    </div>
  )
}

export default CentroPobladoMensuli