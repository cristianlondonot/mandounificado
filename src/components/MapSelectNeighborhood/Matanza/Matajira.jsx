import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Matajira = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 43.8 68.6"
      >
        <path
          fill={getColorByCarencias('MATAJIRA', municipio.toUpperCase())}
          className="cls-1"
          d="M42.9,20.7a49.94,49.94,0,0,1-2.9-5,34.61,34.61,0,0,1-1.9-5.4,13.51,13.51,0,0,1-.4-2.8A28.5,28.5,0,0,1,38,4.6,34.21,34.21,0,0,0,38.4,0c-.8,1.2-1.6,2.3-2.4,3.4a20,20,0,0,0-1.6,2.4,19.23,19.23,0,0,0-1.2,2.5,17.1,17.1,0,0,1-1.3,2.3c-.4.5-1,.9-1.4,1.4-1,1.2-.7,2.8-1.3,4.2A22.47,22.47,0,0,1,28,18.3c-.3.7-.7,1.4-.9,2-.6,1.4-1.1,2.9-1.8,4.3a15.64,15.64,0,0,1-2.7,4c-1,1.2-1.7,2.6-2.8,3.8-.5.6-1.1,1.1-1.6,1.8-.4.5-.7,1.1-1.1,1.6a7.77,7.77,0,0,1-2.5,2.6,2,2,0,0,1,.6,1.6c-.1,1.1-1.7,1.6-2.5,2.2a50,50,0,0,1-4.8,3.2A68.2,68.2,0,0,1,0,48.5H3.7l1.6,1.4H8.5v1.6H9.9v1.6h1.6v1.6l1.6,1.4v9.5l-1.6,1.6h1.6l1.6,1.4h1.4V67.2h1.6L20.9,64h1.4l1.6-1.6V61H22.3V59.4H20.9V54.7h1.4l1.6-1.6h1.6V51.5h1.4V48.4H25.5V43.5h4.7l1.6-1.6V37.2h1.4V32.5H31.8V30.9H30.2V26.2l1.6-1.6h9.4L42.8,23h1A4.79,4.79,0,0,0,42.9,20.7Z"
        />
      </svg>
    </div>
  )
}

export default Matajira