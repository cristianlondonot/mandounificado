import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoSanPedro =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-a159ad63-ad80-46f4-9931-3d49c3734e0c"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33.2 42.7"
      >
        <path
          fill={getColorByCarencias('CAÑO SAN PEDRO', municipio.toUpperCase())}
          className="uuid-7294efd1-76f2-4d77-af7a-2d162f0ec2cb"
          d="M0,17.7c3.3-3.4,5.9-6.5,8.8-9.1,3.6-3.1,7.5-5.8,11.2-8.6,4,6,8.6,12.9,13.2,19.8-2.3,5.2-4.6,11.3-7.7,17.1-1.1,2.1-4.1,3.2-7.5,5.8-1.3-3.6-3-6.6-3.3-9.7-.5-7.3-4-11.6-14.7-15.3Z"
        />
      </svg>
    </div>
  )
}

export default CañoSanPedro