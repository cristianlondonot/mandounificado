import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElJobito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-61a301b9-7db9-47ff-9e1a-d7a7d49450e2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.91 92.48"
      >
        <path
          fill={getColorByCarencias('EL JOVITO', municipio.toUpperCase())}
          className="uuid-7c5a3992-e63c-489d-bedd-ce7012c487fc"
          d="M51.4,41.67c-.8-9.9-.8-19.8-1.3-29.7-.1-3.4-1.4-6.1-5.3-6.1-6.7,0-13.5-.4-20.1.5-3.19.39-5.35-.16-7.09-1.76-1.67-.64-3.05-1.95-4.63-2.78-1.15-.61-2.51-.77-3.76-1.08-1.02-.25-2.04-.5-3.06-.75C4.29.2,2.29.41,0,.67c1.1,5.2.7,11.5,3.6,14.4,4.8,4.7,4.9,8.7,2.4,14.1,6.7,3.4,11.6,8,14.3,15,2,5.3,4.9,10.3,7.6,15.2,5.3,9.6,4.7,11.3-5.7,14.9-.3.1-.5.6-.7.9,0,4.1-1.3,7.8-2.6,11.4-.5,1.4-1.6,3.3-1,4.3.6,1,2.8,1.7,4.2,1.6,8.8-.6,17.7-1.5,26.6-2.2,3.8-.3,5.6-1.7,3.8-5.9,1.4.5,2.3.8,3.3,1.1,0-3.5.3-6.6-.1-9.6-1.4-11.4-3.3-22.8-4.3-34.2Z"
        />
      </svg>
    </div>
  )
}

export default ElJobito