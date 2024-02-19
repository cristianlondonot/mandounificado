import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Tanqueta = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-f2ee415f-bfec-4ddb-976d-a02bcd6d01b3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 88.23 134.3"
      >
        <path
          fill={getColorByCarencias('TAQUETAS', municipio.toUpperCase())}
          className="uuid-adf7bd8d-c8a7-4d9c-997a-7ccfb4b61af1"
          d="M87.13,87.6c-.1-11.1-3-21.1-9.6-30.1-6.5-8.8-12-17.8-10.2-29.8.5-3.6-3.4-7.7-4.4-11.8-1.4-5.4-5.2-9-10.1-6.9-5.1,2.1-8.5-.2-11.1-3.1C35.33-1.1,27.33-.2,19.33.4c-.9,0-1.8,1.8-2.4,2.9-2.1,4-3.9,8.2-6.2,12.1C5.83,23.9.23,32.1.03,42.3c-.2,9.9.5,19.2,5.5,28.7,6.3,11.8,6.5,25.8,5.1,39.2-.49,5.66-2.88,11.23-4.48,16.79.01,2.36.09,4.71.42,7.03,1.32-.23,2.88-.12,4.66.28.47-.07.94-.17,1.4-.3,4.6-3.5,9.9-6.4,13.6-10.6,3.3-3.7,5.6-4.4,10.4-2.9,6.5,2,13.3,7.2,20.4,1.1.49-.36,1.1-.51,1.7-.4,5.8,2.9,9.5-1.5,13.9-3.7,1.44-.61,2.95-1.01,4.5-1.2,4.8-.9,11.3-6.9,11.1-10.3-.4-6.1-1-12.2-1.1-18.4Z"
        />
      </svg>
    </div>
  )
}

export default Tanqueta