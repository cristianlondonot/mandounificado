import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const TierraAzul = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 133.24 60.62"
      >
        <path
          fill={getColorByCarencias('TIERRA AZUL', municipio.toUpperCase())}
          className="cls-1"
          d="M0,.94c7.8-.4,14.2-2.3,20.6.8a6.82,6.82,0,0,0,3.5.2c14.2-.8,27.3,1.3,39,10.7,6.4,5.1,13,2.2,15.7-5.5,1.3-3.6,6.6-5.4,10.4-2.9,2.6,1.8,4.4.8,5.1-1,2.2-5,4-1.9,5.7,0,1.2,1.4,1.9,3.3,3,4.8,1.9,2.4,4.2,4.3,7.6,4.5,6.8.2,13,2.5,19.1,5.2,3.5,1.5,4.6,7.2,2,9.8-2.1,2.1-3,4.3-.7,6.5,1.5,1.5.7,3.4,1.6,4.8,1.6,2.7-.1,4.7-2,5.8a5,5,0,0,1-6.3-.9c-6.4-6.5-10.6-6.3-16.2.5-1.3,1.6-3.2,2.8-4.9,2.5-7.8-1.5-12.4,4.3-18.4,7.1-5.5,2.5-11.9,3.5-17.4,6.5a3.09,3.09,0,0,1-2.3.1c-4.7-4.3-12.2-4.6-15.4-10.7a7.64,7.64,0,0,0-6.7-4.4c-8.7-.8-16.2-4.7-20.7-11.7-3.3-5.2-6.1-9.4-12.3-11.3-1.6-.5-2.6-4.6-2.8-7.1C6.8,9.84,4.6,5.74,0,.94Z"
        />
      </svg>
    </div>
  )
}

export default TierraAzul