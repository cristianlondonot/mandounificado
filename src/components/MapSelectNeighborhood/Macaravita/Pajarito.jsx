import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pajarito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 161.89 387.93"
      >
        <path
          fill={getColorByCarencias('PAJARITO', municipio.toUpperCase())}
          className="cls-1"
          d="M25.4,280.3a42.35,42.35,0,0,1,7.5,5.7c2.8,3,2.8,7.8,6.1,10.4s8.4,2.8,12.5,2.9c2.3.1,4.6.4,7,.4a3,3,0,0,0,2.7-1.4c.6-.7,1.2-1.5,1.9-2.2,1.1-1.1,2.5-2.1,4-1.1s1.6,2.8,1.8,4.3a24.77,24.77,0,0,0,.3,2.7c.1.8.4.9,1.1,1.4a13,13,0,0,1,1.8,1.5,8.42,8.42,0,0,1,1.1,2.1,5,5,0,0,0,1.9,2.4,4,4,0,0,1,1.6.8c1.4,1.3.9,4,.2,5.5-.6,1.2-1.4,2.2-2.1,3.4a7.89,7.89,0,0,0-.6,3.4,23.35,23.35,0,0,0,1.2,6.4,15.42,15.42,0,0,1,.7,5.7,11.25,11.25,0,0,1-2.6,5.5,39.82,39.82,0,0,0,4.5,4.7c1.7,1.6,3.4,3.2,4.9,4.9,1.7,2,3.1,4.1,4.8,6,3.3,3.7,7.6,5.3,12.1,7.2,7.9,3.2,15.9,9.5,18.3,18,.6,2.1.5,4.3-1.1,5.7a6,6,0,0,0,7.1.3,28.46,28.46,0,0,0,6.1-5.9c2.2-2.5,4.5-5,6.7-7.5,2.5-2.8,4.9-5.7,7.3-8.6a39.71,39.71,0,0,0,5.9-8.2c5.3-11.2,2.4-24.2,5-36,.7-3.2,1.9-6.4,2.8-9.6a103.66,103.66,0,0,0,3.8-34.5c-.4-6.9-4.1-12.9-5.2-19.7-.4-2.5-.2-5.1-.8-7.6a16.35,16.35,0,0,0-2.6-5.5c-3.5-5.3-6.4-10.5-8.1-16.7s-2.6-12.8-1.6-19.1a37.45,37.45,0,0,1,3-9.3c1.5-3.4,3.4-7,3.7-10.8.5-6.1-4-11.2-4.8-17.2-1-7.4,2-14.6,2.2-21.9.1-7-1.3-13.9-1.7-20.9a53.46,53.46,0,0,1,.4-10.6c.5-3.4,1.4-6.9,1.6-10.4a22.59,22.59,0,0,0-2.5-11.1c-1.4-3-2.9-5.8-4.1-8.9-1.3-3.6-2.4-7.2-3.9-10.7-1.4-3.2-2.9-6.3-4.1-9.5-2.6-6.5-3-13.5-4.8-20.3-1.9-7.4-5.1-14.5-7.5-21.8-2.1-6.6-4-13.4-5.6-20.2a1,1,0,0,1-.4-.5c-.2-.9-.3-1.7-.5-2.6-.1-.2-.1-.5-.2-.7s-.1-.2-.1-.3V.2h0c0-.1-.1-.1-.1-.2A29.48,29.48,0,0,0,99.3,10.5c-5.9,4.7-9.9,11.3-13.4,18.2a6.57,6.57,0,0,0-.7,3.3c-1.4,1.4-2.8,2.8-4.3,4.2-5.1,3.3-9.7,7.2-15,10.1a23,23,0,0,0-10.5,2.6,7.1,7.1,0,0,0-1.4,1,6.93,6.93,0,0,0-8.8,2.3c-6.1,9-8.8,19.1-10.2,29.6a56.7,56.7,0,0,0-1.2,10.8c-.1.7-.1,1.3-.2,2l-1.5,1.5v36.4l.9.9a73,73,0,0,0-1.9,9.3,5.29,5.29,0,0,0-2.7,2.8,83.87,83.87,0,0,0-2.9,7.9c-1.2,1.5-2.3,2.9-3.3,4.4-3.8,5.7-6.1,11.6-6,18.5a6.54,6.54,0,0,0,.4,2.1l-2.2,5v7l-3.7,3.7v39.7L7,237.5v7l-3.7,7.4v7L0,270.1v1.3a44.24,44.24,0,0,1,17.1,4.1C19.9,277,22.7,278.6,25.4,280.3Z"
        />
      </svg>
    </div>
  )
}

export default Pajarito