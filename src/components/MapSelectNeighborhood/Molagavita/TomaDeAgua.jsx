import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const TomaDeAgua = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 288.41 443.2"
      >
        <path
          fill={getColorByCarencias('TOMA DE AGUA', municipio.toUpperCase())}
          className="cls-1"
          d="M153.8,405.4a3.1,3.1,0,0,1,.6-1.3l.3-.3a.6.6,0,0,1,.1-.4c1-2.1,1.9-4.2,2.9-6.3,2.1-4.2,5.5-6.5,9.8-8.3,6-2.5,12.5-3.9,18-7.4,1.2-.8,3.5-2,3.6-3.7.1-1.5-.6-3.1-.6-4.6-.1-5,2.7-9.2,6.5-12.2a62.69,62.69,0,0,1,6.3-4.2,39.25,39.25,0,0,0,7.2-5.7c3.7-3.8,7.2-8,12.4-9.8,2.7-.9,5.5-1.4,8.2-2.2l5.4-1.5c4.5-1.1,9.2-2.2,13.2-4.5a9.78,9.78,0,0,0,4.3-4c1.4-3,.1-6.4-1-9.2-1-2.6-2-5.1-3.1-7.6-.9-2-1.9-4.3-1.4-6.6.9-3.7,5.2-5.2,6.5-8.7a6.6,6.6,0,0,0-1.8-6.9c-1.6-1.6-3.5-2.8-4.8-4.7-1.5-2.2-2-5-3-7.4a21.78,21.78,0,0,0-4.7-7.3c-3.6-3.4-8.6-4.6-13.1-6.4a33.07,33.07,0,0,1-7.2-3.8,8.48,8.48,0,0,1-3.9-5c-1-4.4,2.5-8.3,3.3-12.4.5-2.4.7-5,2.1-7.1a8.57,8.57,0,0,1,4.8-3.3c1.2-.3,2.6-.3,3.6-.9,1.5-.9,1.8-3.4,2-4.9,1-7.1-7.1-17.9,1.2-22.6-3.2-4.7-3.5-12.2.4-16.6-1.6-1.3-3-3-2.3-5.1s2.7-3.4,4.2-4.6a18.44,18.44,0,0,0,5-5.4c1.2-2.1,1.9-4.5,3.1-6.6a19.68,19.68,0,0,1,5.3-6.2A18.09,18.09,0,0,1,254,156a10.32,10.32,0,0,1,3.9-.3c1.3.2,2.5.8,3.7,1.1,2.9.9,5.9-.5,8.6-1.5a32.58,32.58,0,0,1,8.1-1.3c2.9-.2,5.8-.7,8.1-2.7a.62.62,0,0,1,.7-.1,7.19,7.19,0,0,0,1.3-2.8c.1-1.1-.8-2.1-1.3-3a11.08,11.08,0,0,0-2.2-3c-1.4-1.3-3.4-.9-5.1-1s-3.1-.7-3.6-2.4a12.75,12.75,0,0,1,0-3.9,19.66,19.66,0,0,0,0-4.2c-.2-1.4-.3-2.8-.6-4.2a12.67,12.67,0,0,0-1.8-3.9c-.8-1.2-1.7-2.4-2.4-3.7a36.52,36.52,0,0,1-1.8-3.4c-1.1-2.1-2.6-4.3-5.1-4.6-2.7-.4-5.1,1.4-6.7,3.3a3.76,3.76,0,0,1-2.3,1.6c-1.1.1-2.1-.8-3-1.3a15.12,15.12,0,0,0-7.7-2.1c-5.8.1-11.7.9-17.4-.5a27.19,27.19,0,0,1-7.4-3.2,28.18,28.18,0,0,0-6.7-3.4,32.17,32.17,0,0,0-9.3-.6,72.16,72.16,0,0,1-9.3-.1,18.46,18.46,0,0,1-6.9-2.1,34.29,34.29,0,0,1-5.8-4.2c-2.2-1.8-4-3.9-6.5-5.4-2.1-1.3-4.1-2.4-5.4-4.5a.6.6,0,0,1,0-.7,47.18,47.18,0,0,1-1.5-6.5,10.63,10.63,0,0,0-1.6-3.8,12.25,12.25,0,0,1-1.6-3.5c-1.2-4.6-.1-9.7-2.6-14a61.12,61.12,0,0,1-3.8-6.5,12.27,12.27,0,0,1-.7-7.1c.5-2.6,1.4-5.1,1.8-7.8.5-3,.8-6,1.1-9,.4-4.1.8-8.2,1.1-12.3h-2.5l-2.7-3-3-2.7-8.7-6-3-5.7h-5.7V2.7H128l-6,3h-5.7l-2.5-1.3a37.91,37.91,0,0,1,.1,10.1c-.2,1.6-.5,3.2-.6,4.8a10.72,10.72,0,0,0,1.1,4.6,56.26,56.26,0,0,1,3.1,10.4c.6,3.7.3,7.4.2,11.1a91.71,91.71,0,0,1-.6,11.7,45.19,45.19,0,0,1-3,10.3,66.59,66.59,0,0,0-3,9.6,5.58,5.58,0,0,0-.3,2.2.44.44,0,0,0,.1.3l.6.3c1.8.6,3.9.5,5.4,1.7a3.34,3.34,0,0,1,.7,4.1c-1.5,3.6-4.7,6.2-7.3,9-2.2,2.3-3,5.3-3.8,8.4-.8,2.8-1.7,5.6-4.1,7.5a13.51,13.51,0,0,0-3.2,2.6c-1.1,1.4-.8,3.3-1.1,5a9.68,9.68,0,0,1-3.6,6.2c-1.8,1.5-3.9,2.6-5.7,4.2a10.91,10.91,0,0,0-2.3,2.9c-.3.6-.7,1.5-.4,2.1.7,1.1,2.9,1.3,4,1.6,1.6.4,3.3.9,4.2,2.3a.69.69,0,0,1-.3,1,8.79,8.79,0,0,1-1,.6c.1,0,.1.1.2.1A13.64,13.64,0,0,1,97.9,150c-.1,4.2-1.6,8.4-.5,12.6a20.59,20.59,0,0,0,6,10.1c3.1,3,7.1,4.1,11,5.6a28.05,28.05,0,0,1,6,3,32.33,32.33,0,0,1,4.4,3.9,9.07,9.07,0,0,0,3.5,2.2c1.5.5,3.3.8,4.1,2.3.5,1,.4,2.2.7,3.3.6,1.9,2.6,2.6,3.7,4.1,2.4,3.2,2.5,7.6,2.5,11.4s-.2,7.8.9,11.5c.4,1.5,1.3,3.7,3.2,3.6s3.7-1.5,5.5-2.1a.72.72,0,0,1,.7,1.2,31.71,31.71,0,0,0-5.2,6.4c-.5,1-1.2,2.2-.8,3.3a3.5,3.5,0,0,1-.2,3c-.5,1.1-1.4,1.9-1.9,3a5,5,0,0,0-.1,3.4c.6,2,1.3,3.8.5,5.9s-2.5,3.8-4,5.5l-.1.1v.1a.22.22,0,0,1-.2.2.31.31,0,0,1-.2.1l-.9.3h-.4c-.3.5-.7,1.1-1,1.7a41.06,41.06,0,0,0-2.8,6,17.11,17.11,0,0,0-1.5,5.9c0,2.3,2.1,4.1,3.4,5.8a23.94,23.94,0,0,1,2.1,3.4,43.61,43.61,0,0,0,2.4,4.1c1.3,2,3.1,4.2,2.9,6.7a12.13,12.13,0,0,1-1.1,3.7c-.2.5-.6,1-.4,1.5.4,1,1.2,1.9,1.6,2.9a9.94,9.94,0,0,1,.8,3.4,10.37,10.37,0,0,1-2,6.4,9.88,9.88,0,0,1-5.5,3.9c-1.2.3-2.6.4-3.5,1.3a5.35,5.35,0,0,0-1.3,3.8,24.5,24.5,0,0,1-.4,3.8,10.49,10.49,0,0,1-1.4,2.8c-1.3,1.8-3.1,3.3-4.4,5.1a8.7,8.7,0,0,0-1.6,3,14,14,0,0,1-1.3,3.4,20.82,20.82,0,0,1-4.6,4.3,13.63,13.63,0,0,0-2.4,2.4,33,33,0,0,1-2.2,3c-1.6,1.5-3.8,2.1-5.3,3.7a18.52,18.52,0,0,0-2.1,3.3c-.7,1.2-1.5,2.4-2.2,3.6a4.17,4.17,0,0,0-.8,1.8,5.73,5.73,0,0,0,.4,1.4c.2,1.1-.7,2.3-1.3,3.1-1.8,2.3-4.4,4.1-6.7,5.9a74.81,74.81,0,0,1-7.9,5.6c0,2.5-.5,5.2-3.6,5.4a4.93,4.93,0,0,1-3.9-1.9,12.88,12.88,0,0,0-1.6-1.7,4.3,4.3,0,0,0-2.7-.8c-2.2-.1-4.4.1-6.6.1s-4.5.2-6.8.4c-4.8.6-9.3,2.2-14,3.1-4.3.8-9.1,1.2-13.3,0-3.9-1.1-7.3-3.4-10.7-5.5a17.44,17.44,0,0,0-5.3-2.6,8.3,8.3,0,0,0-4.9.9,37.6,37.6,0,0,1-4.6,2,19.55,19.55,0,0,1-5.9.8H1.6L3,373.6v14.7L0,394v6l3,11.7,5.7,8.7v11.7l6,5.7H26.4v3l2.1,2.4a5.5,5.5,0,0,1,1.7-1.3c.1,0,.2-.1.3-.1,2.8-2.7,6.2-4.6,9.6-6.6s6.6-4.3,10-6.4,7.3-2.3,11.3-2.5c5-.3,9.9-.5,14.9-.9,4.7-.3,9.6.1,14.3-.9a51.56,51.56,0,0,0,6.6-2.3c2.3-.9,4.7-1.6,7-2.5a62.43,62.43,0,0,0,13-6.3c3.6-2.4,6.8-5.3,10.6-7.3a27.37,27.37,0,0,1,12.2-2.9,42.72,42.72,0,0,1,13.3,1.8c.3.1.7.2,1.1.3C153.8,405.5,153.8,405.5,153.8,405.4Z"
        />
      </svg>
    </div>
  )
}

export default TomaDeAgua