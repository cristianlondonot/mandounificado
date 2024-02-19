import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasFlores =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-0011de03-acdd-4e34-af04-99878bb145c0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 39.87 39.9"
      >
        <path
          fill={getColorByCarencias('LAS FLORES', municipio.toUpperCase())}
          className="uuid-92e448b9-ca0a-414c-b440-d1f20b217746"
          d="M9.2,0c5.6,4.6,9.5,8,13.7,11,3.9,2.9,6.8,1.8,10.3-3.4,7.8,2.9,8.2,4.4,4.1,11.1-4.5,7.2-8.4,14.8-12,21.2-7.6-1.7-15.7-3.4-25.3-5.5C2.7,23.8,5.7,12.7,9.2,0Z"
        />
      </svg>
    </div>
  )
}

export default LasFlores