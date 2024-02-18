import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPoleo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 422.6 332.2"
      >
        <path
          fill={getColorByCarencias('EL POLEO', municipio.toUpperCase())}
          className="cls-1"
          d="M419.5,244.3c-1.7-3-4-6.2-4.8-9.6-1.4-5.8-1.3-12-1.3-17.8s-.7-11.7-1.1-17.6c-.8-11.3-1.8-22.6-4.4-33.6-2.4-10.5-6.3-21.3-13.8-29.2A167.81,167.81,0,0,0,380,124a195.88,195.88,0,0,0-16.4-12.4,109.66,109.66,0,0,0-17.1-9.5A90.83,90.83,0,0,0,326,96.2,109.71,109.71,0,0,0,303.9,94c-5.6.1-11,1.2-16.5,2.2-5,.9-10.3,1.9-15.4,1.4-3.9-.4-8.5-1.7-10.6-5.4a37.65,37.65,0,0,1-2.3-6.4,11.55,11.55,0,0,0-5.2-7c-5.1-3.1-11.4-3.9-17-6a217.23,217.23,0,0,1-38.2-19.3c-8.8-5.6-16.2-13.3-22.5-21.6a78.84,78.84,0,0,1-11.7-11.4c-1.9-2.3-3.7-4.6-5.5-6.9-.9-1.1-1.7-2.2-2.5-3.3a12.53,12.53,0,0,0-2.4-2.7,6.86,6.86,0,0,0-3.6-1.3c-1.4-.1-2.8.1-4.1,0A4.57,4.57,0,0,1,143.3,5c-.8-.8-1.4-1.9-2.2-2.7-2-2-5.3-2.2-8-2.3a12.48,12.48,0,0,0-6.3,1.5c-3.9,2.2-6.7,6-9.2,9.6-1.3,1.9-2.5,3.7-3.9,5.6-.6.9-1.4,1.7-2,2.5a39.56,39.56,0,0,0-2.2,3.4c-2.6,4.9-3.8,10.5-4.7,16s-1.8,11-3.3,16.4A62.16,62.16,0,0,1,96,69.3a66.2,66.2,0,0,1-9.1,12.6v.2a29.66,29.66,0,0,0-.8,5.2,34.48,34.48,0,0,0,.7,10.6c.8,3.4,2.2,6.7,3.1,10.1a36.25,36.25,0,0,1,1.1,9.9,35.64,35.64,0,0,1-2.1,10.2c-2.2,6.3-5,12.4-9.2,17.6-1.9,2.4-4,4.7-5.4,7.5a26,26,0,0,0-2.5,10.2c-.5,6.6.3,13.5-1.7,19.9a18.36,18.36,0,0,1-7.7,10.2c-4.5,3-9.9,4.6-15,6.1a146.11,146.11,0,0,1-21.5,4.3c-3.6.5-7.3.8-11,1-3.3.2-6.6,0-9.8.8a21.72,21.72,0,0,0-2.4.7,14,14,0,0,0-1.7.9,3.13,3.13,0,0,0-1,.5H0c0,.1.1.2.1.3a11.16,11.16,0,0,0,5.3,6.4c.1.1.2.2.2.3H17.8l3,3H32.4l3,2.7v-2.7H41l3-3,5.6-3h3l3-3h3l2.7,3h6l3-3,2.7,3v-3h3l3,3v6l3,2.7h2.7v-5.6h6l3,3h28.9l3,2.7,3,3h2.7l3,3h3l5.6,3h3l3,2.7h8.6l3,3h3l2.7,3h6v-3l3-3,2.7,3h20.3v6h3V244l3,3h3l2.7,3h3l3-3,3,3,3-3h14.3v-3l-2.7-2.7v-3l2.7-3h6l2.7,3h3v5.6h3l3,3h8.6v-3l3,3v6h2.7v-3h3v5.6l3-2.7h3v2.7h2.7v11.6h9l2.7,3h3v6l3,2.7v6l3-3h2.7l3,3h3v3l-3,6v11.6l3,2.7,3,3,2.7,3h3l3-3h11.6l3,3v3h2.7l3,5.6,3,3h3v3l2.7,2.7,1.6.8A113.43,113.43,0,0,1,369.8,304a136,136,0,0,1,13-13.3c4-3.5,8.5-6.4,12.3-10.2,4.4-4.5,7.3-10.4,11.2-15.4,2.1-2.6,4.2-5.2,6.4-7.7,1.7-2,3.3-3.9,5.7-5.1,2.1-.9,3.8-1.3,4.2-3.9A39.88,39.88,0,0,1,419.5,244.3Z"
        />
      </svg>
    </div>
  )
}

export default ElPoleo