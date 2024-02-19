import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Baraya = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92.2 82.6"
      >
        <path
          fill={getColorByCarencias('BARAYA', municipio.toUpperCase())}
          className="cls-1"
          d="M73.7,75.7a31.45,31.45,0,0,1,1.1-4.4c.5-1.5,1.2-2.8,1.8-4.2a70.53,70.53,0,0,0,3-7.6,70.78,70.78,0,0,1,2.5-7.8c1-2.3,2.5-4.4,3.3-6.7.9-2.5.7-5.2,1.3-7.8,1.3-5.8,2.9-11.7,4.5-17.4a32.31,32.31,0,0,0,1-8.7,20.9,20.9,0,0,0-.1-2.5L89.6,6.1H83.5V3.2H71L67.8,0H52.1L46,3.2H42.8L39.6,6.1H36.7L33.5,9.3,30.3,6.1,27.1,9.3H18.2L15,6.1H8.6L5.7,9.3v3.2H2.5v3.2H0c.3,1,.6,1.9.9,2.9a47.86,47.86,0,0,1,1.9,7.2c.2,1.3.3,2.6.5,3.9s.5,2.5.8,3.7A68.07,68.07,0,0,0,6.7,41l1.5,3.6A26.74,26.74,0,0,0,9.7,48a5.35,5.35,0,0,0,3.9,2.6c1.8.2,3.6.1,5.3.3,4.9.5,10,1,14.5,3.3,2.4,1.2,4.6,2.7,7,4,2.2,1.3,4.5,2.3,6.6,3.6a23,23,0,0,1,5.2,4.1,51.67,51.67,0,0,1,3.9,5.3c2.4,3.4,5,6.8,8.7,9a16.09,16.09,0,0,0,6,2.2c.3.1.7.1,1,.2C72,80.4,73.2,78.1,73.7,75.7Z"
        />
      </svg>
    </div>
  )
}

export default Baraya