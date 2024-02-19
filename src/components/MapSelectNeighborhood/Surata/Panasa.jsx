import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Panasa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 34.32 52.9"
      >
        <path
          fill={getColorByCarencias('PANASA', municipio.toUpperCase())}
          className="cls-1"
          d="M33.32,35.6a32.7,32.7,0,0,1-3.5-7.3,22.28,22.28,0,0,1-1.4-8.1c.2-5.4,3.2-10.2,4.8-15.3-1.7-.8-3.4-1.6-5.2-2.4a12.13,12.13,0,0,0-3-1.1,25.12,25.12,0,0,0-2.7-.4,12.31,12.31,0,0,1-4.1-1h0c-2.7,6.4-5.1,13-7.8,19.4-2.3,5.5-5.2,10.7-8,16-.6,1.2-1.3,2.5-1.9,3.8A3.39,3.39,0,0,0,0,41.1c.1.6.6.7,1.1.8a36.16,36.16,0,0,1,7.1,2.8c2.7,1.3,5.3,2.6,8,3.9a53,53,0,0,0,8.6,3.4,29.68,29.68,0,0,0,7.8.9V45.8h1.7v-9A5.8,5.8,0,0,1,33.32,35.6Z"
        />
      </svg>
    </div>
  )
}

export default Panasa