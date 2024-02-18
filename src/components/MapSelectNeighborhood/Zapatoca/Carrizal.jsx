import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Carrizal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 162.74 236.28"
      >
        <path
          fill={getColorByCarencias('CARRIZAL', municipio.toUpperCase())}
          className="cls-1"
          d="M160.48,98.18c-1-2.5-1.6-5.2-2.5-7.7-.9-2.3-1.5-4.5-.3-6.8a33.68,33.68,0,0,1,2.1-3.1,4.05,4.05,0,0,0,.5-.9.67.67,0,0,1-.6-.7c-.3-3-5.2-3-7.4-3.3a10.86,10.86,0,0,1-3.9-1.1,10.36,10.36,0,0,1-3.2-3.7c-1.7-2.8-3.7-6.5-3.1-9.9.5-2.9,3-4.8,3.8-7.5a12.19,12.19,0,0,0-1-8.8c-1.3-2.7-2.9-5.2-3.7-8.1a30.4,30.4,0,0,1-.5-9.5,53.26,53.26,0,0,1,1.7-9.7c.4-1.6,1.6-3.3,1.6-5,0-1.4-1.3-2.5-1.3-4,0-2,1.3-3.6,2.5-5.1a7.72,7.72,0,0,1-1.5-.2,19.3,19.3,0,0,1-3.4-1.1,37.45,37.45,0,0,0-4.5-1.2,30.52,30.52,0,0,0-5.2-.5,25.39,25.39,0,0,0-5.5,1c-3.1.8-6.3,1.7-9.6,1.3a60.38,60.38,0,0,1-7.1-1.6,19.55,19.55,0,0,0-7.2-.9c-2.6.3-4,2.1-5.1,4.3a21.52,21.52,0,0,0-1.7,9,17.36,17.36,0,0,0,1.3,7.8c.7,1.5,1.7,3.1,1.1,4.9a6.72,6.72,0,0,1-2.1,2.6c-1.2,1-2.6,1.8-3.9,2.7-5.2,3.3-10.5,6.2-14.5,11a.76.76,0,0,1-1,0l-2.3-2c-.4-.3-1-.9-1.5-.9-.8,0-1.5,2.4-1.7,3-1.6,4.3-2,9.2-5.3,12.7-2.8,2.9-6.8,4.8-8.8,8.4s-2.3,8-2,12c.2,3.3.5,7.9-3,9.7a10.9,10.9,0,0,1-4.4,1,49.54,49.54,0,0,0-5.4.6c-4.4.7-9,1.2-13.1,3.2a10.47,10.47,0,0,0-4.5,3.8c-.9,1.4-1.6,2.9-2.6,4.2a7.42,7.42,0,0,1-4.5,2.6,22.52,22.52,0,0,1-5.8,0,8.53,8.53,0,0,1-4.5-2.1c-.7-.7-1.4-1.4-2.1-2v1h-.6a6.15,6.15,0,0,1-.1,1.3c.1.1.1.2.1.4-.2,1.4.6,2.2,1.6,3a9.36,9.36,0,0,1,2.7,2.9c.7,1.5.3,2.9-.1,4.4a3.53,3.53,0,0,0,1,4.1,4.24,4.24,0,0,0,3.1.7c2.5-.2,4.8-1.4,7.3-2,1.8-.4,4.6-.7,5.7,1.2a8.9,8.9,0,0,1,.8,3.3c.2,1.4.3,2.9.4,4.3.3,3.5,1.9,6.8,1.7,10.4s-2,6.8-4.1,9.5a20.46,20.46,0,0,1-7.4,6c-.6.3-1.5.5-1.9,1.1-.3.4-.2,1-.3,1.5a24.52,24.52,0,0,0,.2,2.7,3.55,3.55,0,0,0,1.5,2.7,20.25,20.25,0,0,1,3,2.1,6.82,6.82,0,0,1,2.5,4.3,11.75,11.75,0,0,1-.8,4.9,16.91,16.91,0,0,0-1.2,5.4,13.68,13.68,0,0,1-.1,3.5c-.4,1.4-1.7,2.1-2.8,2.7a11,11,0,0,1-3.5,1.1,3.23,3.23,0,0,0-2.4,1.3,18.44,18.44,0,0,0-1.9,5.1,9.11,9.11,0,0,1-2.2,4.1c-1.2,1.4-2.7,2.5-3.8,3.9A6.81,6.81,0,0,0,.48,198a3.25,3.25,0,0,0,1.9,2.5c2.4,1.4,5.4,2.6,6.9,5.1,1.3,2.2-.9,3.7-2.4,5a11.94,11.94,0,0,0-3.3,3.8c-.9,1.7-1.5,3.6-2.3,5.3-.4.9-1.6,2.4-1.2,3.5.2.4.7.7,1,1s.9.5,1.3.8a11.5,11.5,0,0,1,3-4.5c1.4-1.3,3.5-2.3,5.4-1.5,1.6.6,2.6,2.2,3.6,3.5,1.1,1.5,2.1,3.2,3.7,4.2,2.1,1.3,4.1,2.8,6.1,4.3a17.76,17.76,0,0,0,6.4,3.3c5,1,10.1-.6,15.1-1,4.8-.4,9.2,1,13.5,3a42.09,42.09,0,0,0,1.2-4.8,33.06,33.06,0,0,0,.1-7.7c-.2-2.8-.2-5.6,1.4-8.1,2.8-4.4,7.6-7.2,11.8-10.1,2.3-1.6,4.4-3.3,6.7-4.8a56.53,56.53,0,0,0,7.3-5.6c2.9-2.8,4.7-6.4,7-9.7,1.6-2.3,4.3-6.6,7.7-5.2,1,.4,1.8,1.1,2.8,1.6a5,5,0,0,0,3.8-.1,7,7,0,0,0,2.6-2.2,18.72,18.72,0,0,0,2-2.9,1.73,1.73,0,0,0-.3-2.4,8.6,8.6,0,0,1-2-1.8,6.38,6.38,0,0,1-.4-5.7c1.5-4.1,5.1-7.1,8.3-9.9a22,22,0,0,1,7.1-4.1c2.5-.9,5-1.5,7.4-2.6a.61.61,0,0,1-.1-.8c3.3-4.6,2.3-10.7,1.6-15.9-.4-2.7-1.3-5.2-1.7-7.9a11.45,11.45,0,0,1,.8-6.6c1.7-3.9,5.1-7,8.5-9.4a44.39,44.39,0,0,1,11.4-6,8.83,8.83,0,0,1,5.3-.5,7.54,7.54,0,0,1,3.2,2.4C163.08,102.88,161.38,100.48,160.48,98.18Z"
        />
      </svg>
    </div>
  )
}

export default Carrizal