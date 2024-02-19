import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Primavera = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 251.72 204.6"
      >
        <path
          fill={getColorByCarencias('PRIMAVERA', municipio.toUpperCase())}
          className="cls-1"
          d="M234.32,147.1c-4.6-.3-9.2-.4-13.7-1-4.2-.5-8.3-1.6-11.7-4.2s-4.6-6.7-7.6-9.5c-6.3-5.8-15.7-6.4-23.8-6.1-4.3.2-8.7.7-13,.7a46.87,46.87,0,0,1-13.4-2.1c-4.2-1.3-8.9-2-12.6-4.4-2.8-1.8-4.1-4.7-5.8-7.4-2-3.4-5.2-5.5-8.5-7.6s-6.4-4.1-8.8-7.1c-2.5-3.3-4.1-7.7-8-9.7a17.67,17.67,0,0,0-5.1-1.5c-1.8-.3-3.6-.7-5.4-1.1-2.9-.6-5.4-1.7-7-4.3a19,19,0,0,1-2.1-5.6c-.6-2.4-1-4.8-1.7-7.2-2.3-8.3-8.4-14.4-12.8-21.6a33.19,33.19,0,0,1-2.9-6,32.81,32.81,0,0,1-1.8-6.1c-.2-1.8-.2-3.6-.4-5.5a15.28,15.28,0,0,0-.7-3.6h-.1a7.9,7.9,0,0,1-3.6-2.9c-1-1.4-1.8-2.9-2.8-4.2-2.2-2.8-4.8-5.2-7.2-7.8-1-1.1-1.9-2.6-3.2-3.3-1.6-1-3.8-.5-5.6-.6-3.7-.2-7-2-10.3-3.4-3-1.2-6-2.2-8.6-4a16.87,16.87,0,0,0,.8,5,27.41,27.41,0,0,1,.5,2.8,12.59,12.59,0,0,0,.4,2.7A15.93,15.93,0,0,0,30,14.8a13,13,0,0,1,2,4.3c.8,3,.3,6.2-.2,9.3s-1.6,6.5-1.4,9.7a25.71,25.71,0,0,0,1.2,5.5,12.86,12.86,0,0,1,.3,3.9c.3,0,.7.2.6.6a19.87,19.87,0,0,1-3,6c-1.2,1.8-2.2,3.8-3.4,5.6a18.21,18.21,0,0,0-1.5,2.7,6.1,6.1,0,0,0-.4,3,4.61,4.61,0,0,1-.6,2.8c-.6.9-1.3,1.8-1.9,2.6a132.18,132.18,0,0,1-7.4,11,62.55,62.55,0,0,0-4,5A22.53,22.53,0,0,0,8,92.9c-.4,2.1-.5,4.2-1.1,6.3a23.49,23.49,0,0,1-2.3,5.7,27.72,27.72,0,0,1-1.8,7c-.9,2.3-2.6,4.2-2.8,6.7a9.57,9.57,0,0,0,.8,4.4c0,.1.1.2.1.3,2.1-4,5.5-7.2,8.9-10,4.2-3.5,8.8-6.4,13.2-9.6,3.1-2.2,7.2-5.1,11.3-4,4.7,1.3,6.9,7.4,7.8,11.7.6,2.9.9,6.2,2.7,8.7,1.4,1.8,3.4,3,4.9,4.7a17.56,17.56,0,0,1,3,5.1,5.6,5.6,0,0,0,3.2,3.2c2.7,1.1,5.6,1.3,8.5,1.8a18.31,18.31,0,0,1,7.8,3.1c5,3.4,9.6,7.3,14.9,10.3a34.7,34.7,0,0,0,8.6,3.8,29.61,29.61,0,0,0,7.3.6c5-.1,10-.9,15-.2a15,15,0,0,1,11.3,6.8c3,4.4,4.7,9.6,7.3,14.3,2.3,4.2,3.4,8.9,5.9,12.9a10.45,10.45,0,0,0,4.9,4.4c3,1.2,6.4.8,9.6.5,2.9-.2,6-.5,8.7.5,2,.8,3.6,2.4,5.4,3.6a22,22,0,0,0,7.9,2.8,88.93,88.93,0,0,0,8.8,1.3c5.8.7,11.5,1.2,17.3,1.7,7.4.6,15,1.3,22.2,3.3l.2-.3v-3.9l1.3-3.9,1.3-4v-5.2l1.3-1.2v-1.3l1.3-2.7v-5.2l-1.3-1.2v-4l2.5-2.5,1.3-2.7,2.7-3.9,2.5-1.3v-.8l1.3-2.5,2.5-2.7h1.3l1.3-2.5h1.3l2.5-4,1.1-1H249C244.32,147.8,239.32,147.4,234.32,147.1Z"
        />
      </svg>
    </div>
  )
}

export default Primavera