import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PeñaTambor = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-872bcdf7-479a-4c54-b9d0-b5101175bfc1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27.83 40.92"
      >
        <path
          fill={getColorByCarencias('PEÑA TAMBOR', municipio.toUpperCase())}
          className="uuid-2fb496f8-3106-4a31-aa1e-e64ac25b3d82"
          d="M.12,40.92c1.97-.18,3.94-.49,5.91-.85,3.2-2.27,4.79-5.56,5.76-9.76,1.5-5.2,2.9-10.9,8.4-14.6,3.4-2.3,5.4-7,7.2-10.9C28.49,2.4,27.59-.3,23.89,0,17.29.5,10.59,1,3.59,1.6c2.2,8.4,0,16.3-3,24.2-.9,2.2-.5,4.9-.5,7.3-.14,2.6-.13,5.21.03,7.82Z"
        />
      </svg>
    </div>
  )
}

export default PeñaTambor