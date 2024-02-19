import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Barzal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 146.8 195.95"
      >
        <path
          fill={getColorByCarencias('BARZAL', municipio.toUpperCase())}
          className="cls-1"
          d="M139.4,145.2v-6.9l3.7-3.7v-3.7h3.7V109.7l-3.7-3.7V98.6h-3.7l-3.7-3.3h-3.3v-11h-3.7V83.1a82.25,82.25,0,0,1-16.4,1.7c-8.2-.1-16.6-1.2-24.1-4.6a25.78,25.78,0,0,1-5.1-2.9,33.42,33.42,0,0,1-4-3.5c-2.6-2.6-5-5.5-7.6-8.1-1.3-1.3-2.7-2.4-4.1-3.6A31.76,31.76,0,0,1,63.3,58a102.8,102.8,0,0,1-6.5-9.3,24.25,24.25,0,0,1-2.6-4.4,10.24,10.24,0,0,1-.5-3.5c0-2,.1-4,0-6-.1-1.8-.1-3.6-.2-5.4a.54.54,0,0,1-.5-.5A45.46,45.46,0,0,0,42.6,5.2,53.8,53.8,0,0,0,37.1,0a23.35,23.35,0,0,1-.7,2.5c-1.2,3.4-3,6.5-3.8,10.1-.4,1.9-.6,3.9-.9,5.9a24.42,24.42,0,0,1-1.5,4.8c-1.1,2.8-2.8,5.3-5.5,6.6a19.54,19.54,0,0,0-3.5,1.9c-1.3,1-1.6,2.6-1.7,4.2a25.2,25.2,0,0,1-.5,4.8,34.34,34.34,0,0,1-1.9,4.4,14.49,14.49,0,0,0-1.5,5,9.66,9.66,0,0,1-.1,2.4A8.07,8.07,0,0,1,13.8,55c-1,1.1-2.2,2-3.1,3.2-2.5,3-1.5,6.6-.3,9.9a26.27,26.27,0,0,1,1.4,5c.3,1.9.2,3.9.4,5.8a10.76,10.76,0,0,0,.7,3.1,4.9,4.9,0,0,0,1.7,1.8A7.07,7.07,0,0,1,17,87.1c1.6,5.3-3.9,9.1-6.1,13.3-1.7,3.2-1.4,7-1.3,10.5s.2,6.9-1.5,10c-1.3,2.4-4.2,4.4-3.4,7.5.7,2.8,3.5,4.5,4.3,7.3.8,3.1.5,6.7.2,9.8a93.84,93.84,0,0,1-1.7,10.4c-.7,3.6-1.5,7.1-1.9,10.7-.4,3.9-.4,7.8-.6,11.7.4.1.7.4,1.2.4a.45.45,0,0,1,.2.8,15.49,15.49,0,0,1-3.7,2.6c-.1,0-.1,0-.2.1A35.75,35.75,0,0,0,0,186.4c1.8.9,4,.4,5.8,1.4s2.6,3.4,3.4,5.3c.1-.1.1-.2.2-.2a10.22,10.22,0,0,1,4.2-2.3,60.12,60.12,0,0,1,6.1-1.4c3.3-.5,6.7-.8,10.1-1.3a18.9,18.9,0,0,0,4.1-1,22.18,22.18,0,0,0,4.2-2.5,6.73,6.73,0,0,1,2.9-1.5,4.36,4.36,0,0,1,2.9,1.1c3,2.2,5.9,4.6,9,6.8,1.6,1.1,3.2,2.1,4.9,3.1a14.89,14.89,0,0,0,4.3,1.9c5.3,1,9.9-3.2,13.7-6.3a60.26,60.26,0,0,1,6.4-4.9c2.9-1.8,6.1-2.4,9.5-2.8,1.9-.2,3.9-.4,5.8-.7s3.9-.8,5.8-1.2c3.7-.9,7.3-2,11.2-1.6a53.21,53.21,0,0,0,5.6.6,12.71,12.71,0,0,0,4.6-1.3,34.34,34.34,0,0,1,4.4-1.9,15.4,15.4,0,0,1,4.3-.6c3.1,0,6.2.6,9.4.9,1.3.1,2.6.2,3.9.2v-6H143v-7.4h-3.7v-3.7h-3.7V144.8h3.8Z"
        />
      </svg>
    </div>
  )
}

export default Barzal