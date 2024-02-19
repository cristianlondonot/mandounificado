import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPobladoLaMata = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.27 37.17" >
        <path
          className="cls-1"
          d="M6.07,4.77a52.14,52.14,0,0,1,5.4-2c4.7-1,9.8-6.2,13.9.9,8,13.7,7.9,17-.5,23.3-.6.4-1.3,1.3-1.6,1.2-8.5-3.2-12.5,4.5-18.4,7.5-1.3.7-2.1,2.8-3.8.3-1.1-1.6-1.8-2.9.2-4,4.2-2.2,6.2-7.4,11.8-8.1,3.6-.4,4.8-2.7,2.8-6.6C13.37,12.67,9.67,9.17,6.07,4.77Z"
        />
      </svg>
    </div>
  )
}

export default CentroPobladoLaMata