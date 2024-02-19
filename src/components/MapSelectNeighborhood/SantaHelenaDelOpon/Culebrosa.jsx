import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Culebrosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.56 124.2"
      >
        <path
          fill={getColorByCarencias('CULEBROSA', municipio.toUpperCase())}
          className="cls-1"
          d="M119.3,53.2a11.25,11.25,0,0,1-1.1-4.8c-.2-1.9-.6-3.8-.9-5.7a56.7,56.7,0,0,0-1-5.7,93.81,93.81,0,0,0-3.4-10.2l-.9-2.7a15.46,15.46,0,0,0-.7-2.3,11.88,11.88,0,0,0-2.5-3.5,31.37,31.37,0,0,1-4.9-7.7,9.7,9.7,0,0,1-1-3.3c-.8-.6-1.6-1.1-2.4-1.6A40.54,40.54,0,0,0,84.7.4a45.25,45.25,0,0,0-16.4.8A27.67,27.67,0,0,0,61,4.3a74.23,74.23,0,0,0-7,4.4,20.93,20.93,0,0,0-5.6,5.5,34.8,34.8,0,0,0-3.6,6.9c-2.5,6.2-4.7,12.5-7,18.8s-4.4,12.8-6.2,19.3c-1.7,6-2.8,12.1-4.8,18a42.57,42.57,0,0,1-3.6,8.2c-1.2,2-2.5,4-3.7,6.1-2.3,3.9-4.6,7.9-7.7,11.3A19.68,19.68,0,0,1,.1,109.1H0c2,2.2,1.3,5.7,1.9,8.4.8,3.6,4.4,5.9,7.8,6.5a7.72,7.72,0,0,0,1.5.2.57.57,0,0,1,.1-.9,17.83,17.83,0,0,0,2.6-2.2,60.88,60.88,0,0,1,4.4-4.4,11.48,11.48,0,0,1,5.1-2.4c3.8-.7,7.8,0,11.5-1.2,3.3-1.1,5.4-3.6,7.1-6.5.9-1.5,1.7-3,2.5-4.5.9-1.7,2.1-3.2,2.9-4.9.9-1.9,1-4,1.7-6a12.76,12.76,0,0,1,3.4-4.9,41.84,41.84,0,0,1,10.3-6.8c1.8-.9,3.6-1.8,5.4-2.6a59.83,59.83,0,0,1,6.7-2.4c2.3-.7,4.7-1.3,7-2.1s4.8-1.7,7.2-2.5a93.57,93.57,0,0,1,14.6-3.4c2.4-.4,4.9-.6,7.4-1a28.17,28.17,0,0,1,5.7-.9v-.3a8.74,8.74,0,0,1,1.8-3.6,7.34,7.34,0,0,0,1.9-3.3C120.8,55.9,120,54.6,119.3,53.2Z"
        />
      </svg>
    </div>
  )
}

export default Culebrosa