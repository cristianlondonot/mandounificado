import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ChoroloAlto = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.61 67.28" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHOROLO ALTO', municipio.toUpperCase())}
              className="cls-1"
              d="M104.11,46.88v-2.2c-.6-.5-1.2-.9-1.9-1.4a7.68,7.68,0,0,1-2.2-2.2,12.66,12.66,0,0,1-1.3-3.2c-.7-2.2-2-4.3-2.6-6.6a13.18,13.18,0,0,1,2.1-11.1c-3.3-.2-6.7.2-10-.4-.7-.1-1.6-.3-2.5-.5a7,7,0,0,1-3.2,2.9c-1.9.8-3.9,1.2-5.7,2.2-4.4,2.3-5.7,7.8-9.4,10.9a.68.68,0,0,1-1.1-.3c-.9-4.7,1-9.5.1-14.1a9,9,0,0,0-1.3-3.2,16,16,0,0,1-1-3.1,4,4,0,0,0-.6-1.5,2.57,2.57,0,0,0-1.2-.5,2.8,2.8,0,0,1-1.7-1.5,8.57,8.57,0,0,1-.2-4.5c.1-1.3.5-3-.3-4.2s-2.8-1-4.1-.9a38.29,38.29,0,0,1-4.7.3c-2.9-.2-7.1-3.7-9.2-.3-1.7,2.6-1.3,6.1-4.1,8.1a13.43,13.43,0,0,1-2.7,1.3,5.56,5.56,0,0,0-2.1,2.2,5.88,5.88,0,0,1-2.4,2,19.4,19.4,0,0,0-2.4,1.5c-1.2,1-2,2.4-3.5,3.1a9.85,9.85,0,0,1-5.1.3,30.7,30.7,0,0,0-5.2-.6,6.7,6.7,0,0,0-4.6,2.7c-1,1.3-1.9,3-3.5,3.6s-3.6-.2-5.3,0a9,9,0,0,1-.5,4c-.4,1.3-1.2,3-.3,4.3.4.6,1.1.7,1.7,1.2a3.6,3.6,0,0,1,1.1,2,12.75,12.75,0,0,1,0,3.9h.3v1.3l1.3,1.3h1.3L8.51,45h5l2.6-1.3,1.3-1.3,3.7,1.3,2.4,1.3,2.6,1.3,1.3,1.1h1.1v1.3l.3.3c.2-.3.3-.7.5-1l.2-.2a9.19,9.19,0,0,1,3.7-5.6,14.78,14.78,0,0,1,6.4-2.8,13.85,13.85,0,0,1,7,.8c4.5,1.7,8.8,4.9,13.8,4.2a.56.56,0,0,1,.6.5c.5,2.5-.8,4.8-.9,7.3-.2,2.2,1.5,3.7,2.9,5.1a12.34,12.34,0,0,1,4.5,8.9h.7l1.3-1.3,2.6,1.3h1.1l2.6,1.1h1.3v-1.1l-1.3-2.6,1.3-1.3h13.5l1.3-1.1,1.3-2.6h1.1l1.3-1.3h2.6v-5h7.4v-2.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ChoroloAlto