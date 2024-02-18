import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LlanoHondo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 279.6 258.2"
      >
        <path
          fill={getColorByCarencias('LLANO HONDO', municipio.toUpperCase())}
          className="cls-1"
          d="M278.4,120.2a8.24,8.24,0,0,1-1.3-4c-.4-3.2.2-6.4-.3-9.6a34,34,0,0,0-4.5-11.4c-2.2-3.7-4.6-7.2-6.9-10.8-2.6-3.9-5.4-7.7-7.8-11.8a48,48,0,0,1-4.7-11.5c-2.2-8.4-2.5-17.1-3.5-25.6-1-8.7-6.5-15.6-11-22.7a59.34,59.34,0,0,0-6.3-8.6A16.9,16.9,0,0,0,226.4,0l-2.8,2.8V7.9L218.5,13l-14.8,9.7H188.9L174.1,37.5H169l-5.1,5.1H149.1v5.1H134.3v5.1h-5.1l-5.1,4.5v5.1l-9.7,5.1-5.1,5.1L99.1,82.3,89.4,92.5,84.3,97v5.1l-5.1,5.1-4.5,5.1-10.2,4.5-5.1,5.1L54.9,127v25l-5.1,4.5v5.1H44.7v5.7L35,171.8v5.1l-2.3,2.3a2.63,2.63,0,0,0-1.4-.9c-1.4-.2-2.8.9-3.9,1.5a10.74,10.74,0,0,1-7,1.4,22.1,22.1,0,0,1-4.2-1.2l-.4.2v5.5l-4.9,5.5v5.5H5.4v4.9H0c.8,1.2,1.5,2.4,2.2,3.6,1.3,2.1,2.5,4.3,3.9,6.3a26.14,26.14,0,0,0,5.7,5.8,72.35,72.35,0,0,0,6.4,4.4,14,14,0,0,1,3,2.3,30.63,30.63,0,0,1,2.1,2.9,6.4,6.4,0,0,0,2.5,2.4,12.9,12.9,0,0,0,3.9.8,6.58,6.58,0,0,1,5.2,4.3c.6,1.6.6,3.2,1.1,4.8.6,2,2.4,2.6,4.3,2.8.5.1.5.5.4.8a25.49,25.49,0,0,0,3.9.2c3.1-.1,6.2-.8,9.1.7.7.4,1.7.8,2.1,1.6a3.72,3.72,0,0,1,.2,1.8c-.1,1.2,0,2.3-.1,3.5a13.48,13.48,0,0,0,.2,4.9,5.36,5.36,0,0,0,2,2.7.37.37,0,0,1,.1-.3,10,10,0,0,1,5.6-4.9,8.86,8.86,0,0,1,6.6,0c1.6.7,3,1.7,4.6,2.3,1.1.4,3.3,1.2,4.3.2.7-.8.5-2.2.5-3.1s0-2.1.1-3.1a5.64,5.64,0,0,0,1.2.4c2.5.4,4.2-1.1,4.9-3.3s1-4.4,2.1-6.4a44.27,44.27,0,0,1,4.9-6.5c3.2-4,4-9.7,8.2-12.8a33,33,0,0,1,4.1-2.3l3.9-2.1a75.71,75.71,0,0,0,8-5,62.31,62.31,0,0,0,7-5.7,15.93,15.93,0,0,0,3.6-5c1-2.5,1.2-5.1,1.7-7.7a26,26,0,0,1,2.9-7.6c1.4-2.5,3.1-4.8,4.6-7.3,1.4-2.3,2.8-4.6,4.1-7,2.3-3.9,4.9-8.8,9.4-10.4s9.4-1.1,14-2a105.28,105.28,0,0,0,18.2-5.3,85.05,85.05,0,0,0,16.5-9c5-3.5,9.5-7.7,15.1-10.3,5.8-2.7,12.2-3.3,18.6-4,3.4-.4,6.9-.8,10.3-1.5s6.7-2.1,10.2-2.7a.54.54,0,0,1,.7.5c1.9.3,3.8.8,5.7,1a9.83,9.83,0,0,0,5.1-.8,26.79,26.79,0,0,1,3-1.2,27.59,27.59,0,0,1,2.7-.8c3-.9,6.4-1.6,9-3.5A1.74,1.74,0,0,1,278.4,120.2ZM35.1,184.4a5,5,0,0,0-.8.7,3.55,3.55,0,0,1-.2-1A1.93,1.93,0,0,1,35.1,184.4Z"
        />
      </svg>
    </div>
  )
}

export default LlanoHondo