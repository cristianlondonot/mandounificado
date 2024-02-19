import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Provincia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        id="uuid-87238835-8ae4-4a3e-9208-637f849f52d1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.76 62.71"
      >
        <path
          fill={getColorByCarencias('PROVINCIA', municipio.toUpperCase())}
          className="uuid-0f54f590-d418-4cc2-bb12-afa1c88554c5"
          d="M33.59,45c-2.62-2.71-5.03-5.62-7.2-8.7C18.79,24.6,11.39,12.7,3.29,0c-6.8,9.5-1.1,16.8-.2,24.2.88,7.5,3.08,14.91,4.76,22.31,1.44,3.52,1.87,7.48,3.86,10.73.16-.11.31-.23.48-.34,2.5,1.5,4.9,2.9,7.2,4.4,3.9,2.4,14.6,1.6,17-1.3,2.7-3.4,1.2-10.8-2.8-15Z"
        />
      </svg>
    </div>
  )
}

export default Provincia