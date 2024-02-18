import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Peñitas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 109.6 315.5"
      >
        <path
          fill={getColorByCarencias('PEÑITAS', municipio.toUpperCase())}
          className="cls-1"
          d="M104.1,25.5a6.71,6.71,0,0,1-1.4-4,5.67,5.67,0,0,1,1.8-3.6A53.86,53.86,0,0,0,98.7,12a39,39,0,0,0-5.6-4.2c-2.9-2-5.8-4.5-6.6-7.8a22.49,22.49,0,0,0-9.8,2.4c-5.3,2.5-9.9,6.3-15.3,8.5-3.3,1.4-7,1.7-10.2,3.4A52.21,52.21,0,0,1,43.7,18a35.4,35.4,0,0,1,4.5.8,23.82,23.82,0,0,1,10,5.1c2.7,2.1,5.5,4.8,6.4,8.2a13.55,13.55,0,0,1-.9,8.4,56.28,56.28,0,0,1-4.6,8.3,42.37,42.37,0,0,0-4.4,8.1h0a23.11,23.11,0,0,1-3.1,9.6,23.87,23.87,0,0,1-6.8,7c-1.2.9-2.5,1.7-3.6,2.7a9.16,9.16,0,0,0-2.4,3.5c-.6,1.3-1,2.7-1.5,4.1a34.72,34.72,0,0,0-1.7,4.5,39.06,39.06,0,0,0-1.8,8.9c-.1,2.8-.1,5.5-1.5,8.1-.8,1.4-1.8,2.6-2.7,3.9s-1.6,2.4-2.4,3.6a53.45,53.45,0,0,1-5.8,6.8c-3.6,3.7-7.5,7.1-10.7,11.1a.81.81,0,0,1-.3.9c-1.6,1.1-2.2,3.3-2.5,5.1-.4,2.2-.5,4.6-.7,6.9a43.32,43.32,0,0,0-.2,7.2c.2,2.3,1,4.5,1.4,6.7.7,4.3-1.2,7.9-3,11.6-2,4-2.6,8.1-3.4,12.4-.4,2.3-1.1,5.1-.9,7.6a.75.75,0,0,1,1.2.6,7.74,7.74,0,0,0,2.4,5.5,16.07,16.07,0,0,1,3.6,5.3,40.18,40.18,0,0,1,1.8,5.9,18.2,18.2,0,0,1,.7,5.7c-.4,3.7-3,6.6-4.1,10.1a9.23,9.23,0,0,0-.5,3.7c0,1.2.2,2.3.1,3.5a18,18,0,0,1-2.4,6.7,39.24,39.24,0,0,0-3.4,6.4c-.8,2.6-.3,5.3-.5,8v.1c2.4-.1,4.9,1,7,1.6a10.53,10.53,0,0,1,4.1,1.7,3.2,3.2,0,0,1,1,1.9,2.14,2.14,0,0,0,1.2,1.7,6.74,6.74,0,0,0,4.2.7c1-.2,1.3-1.7,2.1-2.3,2.8-2.1,6.2-.3,8.6,1.6,2.1,1.6,4.8,2.6,6.4,4.7,1.8,2.4,0,5.1-1.3,7.2a5.76,5.76,0,0,0-1.2,3.8,4.46,4.46,0,0,0,1.4,2.6c1.6,1.7,3.8,2.8,5.8,4.1s3.9,2.8,4.1,5.3c.1,1.4-.5,3.3.4,4.5s2.8,1.9,4.1,2.4c3.4,1.3,7.2,2.1,10.5.4,2-1,4.7-2,6.9-1.2,2.8,1,2.1,4.6,2.1,6.9a49.87,49.87,0,0,0,.7,5.4c.2,1.6.1,3.2.3,4.8a9.63,9.63,0,0,0,5.4,7.1c3.1-3.4,6.5-7.2,11.5-6.7a25.42,25.42,0,0,1,6.5,1.9,31.07,31.07,0,0,1,4.1,2c.9-1.4,2-2.8,3-4.2a33.17,33.17,0,0,0,4-7.1,6.94,6.94,0,0,0,.3-4.5A34.49,34.49,0,0,0,97.9,285c-1.2-1.7-2.6-3.2-3.7-5a3,3,0,0,0-.5-.7h0c-.3,0-.8.4-1.1.5a39.55,39.55,0,0,1-9.8,4.5c-3.3.8-7.1.7-9.7-1.9a8.24,8.24,0,0,1-1.7-9.9c1.8-3.6,5.2-6.3,6.7-10,2-4.8-.6-10.4-1.3-15.3a17,17,0,0,1,.2-7.1,49.34,49.34,0,0,1,2.4-6.4,13.43,13.43,0,0,0,1.6-5.5c0-2.5-1.4-4.6-3-6.4-2.5-2.9-5.9-6-6.6-10-.8-4.3,2.2-8.1,5-11.1,5.6-5.9,13.8-11.8,13.9-20.7,0-5.5-2.6-10.7-4.4-15.8a73.53,73.53,0,0,1-4-16,63.16,63.16,0,0,1-.1-8.7c.1-2.7.1-5.3.3-8a24.68,24.68,0,0,1,1.7-7.6,36.47,36.47,0,0,1,3.4-6.1c1.1-1.8,2.7-4.2,1.9-6.4a6.82,6.82,0,0,0-3.4-3.5c-2.8-1.7-5.6-3.3-5.9-6.9,0-.4.3-.6.6-.8,2.2-.9,4.5-.6,6.8-.2,2.1.4,4.2,1,6.3.5-1.1-1.9-2.9-2.8-4.9-3.7-1.5-.7-3.2-1.4-3.9-3.1-1-2.3.3-5.1,1.3-7.2,1.3-2.6,3.1-5.1,5.9-6.3s5.8-.7,8.5.2c.9-3.7-.6-8.2-.3-12-.4,0-.7-.1-1.1-.1l-.9-.3a1.45,1.45,0,0,1-.7.2c-3.4-.8-6.3-3.2-6-7,.2-3.5,2.5-5.9,4.7-8.3a29.73,29.73,0,0,0,4.3-5.6,6.09,6.09,0,0,0,.4-4.6c-.6-2.6-2-6.3.4-8.5,2.2-1.9,5.5-1.3,8.4-.7-.7-1.3-1.4-2.5-2.2-3.7A30.89,30.89,0,0,1,104.1,25.5Z"
        />
      </svg>
    </div>
  )
}

export default Peñitas