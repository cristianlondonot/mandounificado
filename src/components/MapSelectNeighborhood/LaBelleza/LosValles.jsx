import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LosValles = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 193.18 172.89"
      >
        <path
          fill={getColorByCarencias('LOS VALLES', municipio.toUpperCase())}
          className="cls-1"
          d="M27.1,160.8c9-4,20-5,31-8,1,0,3-2,3-4,9,2,18,2,24-4,14-14,32-23,51-28,22-6,41-21,56-37,4-4-4-11-10-16-4-2-8,5-11,2-7-6-18-3-23-11-2-2-2-6-2-9-17,5-17-12-23-24,0-1-5-2-5-3C113,9.4,104.19,4.38,94.88,0c-2.53,2.27,1.19,9.91.22,13.8-1,3-14,3-7,9,1,2,6,3,6,4,1,6-6,8-11,7,3,8,3,21-3,23-9,4-22,5-32,9-6,2-12,3-15,7-2,1-6,4-5,7,0,4,7,2,7,4-2,11-17,10-23,19,0,1,1,4,0,5-3,3-6,8-3,9,5,4,9,11,7,16-1,3-10-1-12,3-3,3,2,6,7,6,0,7.65-4.57,11.62-11.09,8.46C-.24,158.55,5.32,165,9.1,167.8a28.38,28.38,0,0,1,5.53,5.09C15.17,167.43,21.39,164.37,27.1,160.8Z"
        />
      </svg>
    </div>
  )
}

export default LosValles