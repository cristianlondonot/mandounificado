import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cristalina = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-08323e0f-cd13-479d-b8dc-1071a1930a68"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48.47 14"
      >
        <path
          fill={getColorByCarencias('CRISTALINA', municipio.toUpperCase())}
          className="uuid-fd544d2f-bf95-4971-9c5c-1e9bf16201bc"
          d="M0,9.6C.6,5.7.9,3.7,1.4,0c9.3,1.8,18.3,3.6,27.4,5.4,6.4,1.3,12.9,2.6,19.6,3.9.2,3.2.3,5.7-5.4,4.3-4.8-1.2-10.2-.1-15.3-.6-9.1-.9-18.1-2.2-27.7-3.4Z"
        />
      </svg>
    </div>
  )
}

export default Cristalina