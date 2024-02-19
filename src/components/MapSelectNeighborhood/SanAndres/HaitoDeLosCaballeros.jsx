import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const HaitoDeLosCaballeros = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-cd5a867f-36d2-4852-bda3-daaf48214e85"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111.6 171.2"
      >
        <path
          fill={getColorByCarencias('HAITO DE LOS CABALLEROS', municipio.toUpperCase())}
          className="uuid-52d7635e-71d2-457c-837b-d5475a9c1252"
          d="M108.12,125.58c0-.52.33-.82.73-.92,1.12-4.43,2.41-8.81,2.76-13.26.6-8.2,1.2-16.5,0-24.5-1-7-4.9-13.5-6.9-20.4-1.8-6.3-2.7-12.8-3.8-18.2-3.1,1.6-6.4,4.3-10,4.8-6,.95-12.1.95-18.1,0-3.3-.6-7.5-3.3-8.9-6.2-1.1-2.2.8-6.8,2.7-9.4,2.2-3,2.9-5.2,1.9-8.7-1.2-4-1.3-8.3-2-13.6-2.4,1.3-5.4,2.3-7.5,4.2-7,6.4-12.9,14.1-22.6,17.2-1.7.6-3.4,4.1-3.3,6.1.2,4.5-.4,7.8-5.1,9.6-1.92.95-3.54,2.4-4.7,4.2-2.6,3.8-4.4,8.1-7.3,11.7-6,7.6-10,15.2-7.5,25.6,2.9,12.2,3,24.5-3.4,36.2-1.3,2.3-1.9,6.5-.7,8.5,3.6,6,2.1,9.8-4.4,13.1,3.2,7,6.3,13.7,9,19.6,4-2.8,7-5.7,10.6-7.3,7.7-3.5,16.2-5.3,23.4-9.5,12.4-7.3,25.9-5.6,39-7.5,2.9-.5,5.6-.6,8.6-.9s6-1,8.9-.8c3.3.3,5.6-.6,5.9-4,.27-3.39,1.38-5.48,3.23-6.51-.46-3.01-.51-6.05-.51-9.1Z"
        />
      </svg>
    </div>
  )
}

export default HaitoDeLosCaballeros