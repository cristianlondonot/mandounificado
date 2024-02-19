import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPobladoRuralRuitoqueSectorLaColina = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.35 54.58">
        <path
          className="cls-1"
          d="M11.93,27c-2.5.1-4-.3-4.8.3-9.8,8.1-6.5-.1-6.9-5.1a86.73,86.73,0,0,1,0-11.4C.53,4.26,5,2,9.53.36s7.2,2.5,9.4,5.9,5.9,5.4,9.3,7.3c9.5,5.4,19.3,10.4,29.3,14.9,3,1.3,3.6,2.5,4.2,5.3,1.4,5.9-1,13.1,5.7,17.3,1.9,1.2.5,2.4-.9,3.1-1.7.8-3.6.5-4.4-1.1-3.1-5.9-10.2-6.7-14.3-12.1-3-4-9.9-7.8-16.9-5.4-2.4.8-5.1.8-7.4,1.9-4.8,2.2-6.1-.8-6-4.2C17.83,27.76,15.23,26.46,11.93,27Z"
        />
      </svg>
    </div>
  )
}

export default CentroPobladoRuralRuitoqueSectorLaColina