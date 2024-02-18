import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PedregalAbajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 216.98 455.05"
      >
        <path
          fill={getColorByCarencias('PEDREGAL ABAJO', municipio.toUpperCase())}
          className="cls-1"
          d="M199.78,2.72c-12.3-2.2-24.9-3.5-37.4-2.2a26.25,26.25,0,0,0-8.7,2,32.3,32.3,0,0,0-6.3,4.7,36.69,36.69,0,0,1-6.1,4.2,27.31,27.31,0,0,0-5.3,2.9c-4.6,3.7-4.4,9.5-5.3,14.8a16.45,16.45,0,0,1-7.2,10.9c-.9.6-1.7.9-2.2,1.9-1.1,2.2-1,5.1-1.1,7.4-.1,6,.7,12-1.7,17.7a1.15,1.15,0,0,1-1.2.5c-3.6-.9-7.5-2.3-9.6-5.6-1.8-2.7-2-6.1-1.8-9.3-1.6.1-3.2.3-4.7.4a14.4,14.4,0,0,1,3.7,4.8,24.26,24.26,0,0,1,1.4,2c3.1,4.7,6.3,10.5,6.7,16.2.3,4.6-2.3,8.9-5.9,11.6-3.9,2.8-8.8,4.1-13.4,5.2a143.89,143.89,0,0,0-15.8,4.8c-8.1,2.9-16.2,5.8-24.4,8.5-4.1,1.3-8.2,2.8-12.4,3.8A42,42,0,0,1,34,111c4.2,4.3,9.4,12.3,3.6,16.9a12.21,12.21,0,0,1,4.1,6.3c1.7,6.4-1.7,13.2-3.3,19.3-1,3.8-1.2,7.8-2.2,11.6a61.46,61.46,0,0,1-4.1,10.8c-1.8,3.7-3.8,7.2-5.8,10.8-1.7,3.1-3.7,6-5.6,9a31.58,31.58,0,0,0-4.7,10c-.3,1.4-.6,3.7.1,5.1.5,1,2.1,1.4,3,2,2.8,1.8,3.4,5.2,3.9,8.4.6,4.1,1.6,8.1,1.8,12.3.4,8.6-1.6,17-4.2,25.2-2.7,8.5-5.6,17-8.6,25.5-2.7,7.6-5.6,15.1-7.7,22.9a86.49,86.49,0,0,0-3,26.3c.4,9.2,1.7,18.4,2.7,27.5.9,8.7,1.7,17.5.6,26.2-1,8-2.9,15.8-3.9,23.8-1,7.6-1.2,15.2,1.6,22.5,2.5,6.8,6.9,13.5,12.8,17.8a18.41,18.41,0,0,0,10,3.8,28.33,28.33,0,0,0,11.1-2c7.7-2.8,14.7-7,22.7-8.7,9.2-2,18.7-1.2,28-.9a152.2,152.2,0,0,0,23.4-1c7.4-.9,14.8-1.8,22.3-2.3l-1.1-2.2v-21.2l5.5-5.5h5.5l5.5-5.5v-5.5h4.9v-31.5l5.5-5.5v-26.1h5.5v-5.5l5.5-5.5v-21.2l4.9-5.5v-47.9l-4.9-4.9v-5.5l-5.5-5.5-5.5-4.9v-21.8h5.5v-26.7h5.5v-25.8l4.9-10.9v-15.8l5.5-5.5v-15.8l5.5-5.5V92.62l5.5-5.5V44.72l4.9-5.5h10.9V28.92l5.5-5.5V12.52l4.9-4.9V5.42C210.78,4.82,205.28,3.72,199.78,2.72Z"
        />
      </svg>
    </div>
  )
}

export default PedregalAbajo