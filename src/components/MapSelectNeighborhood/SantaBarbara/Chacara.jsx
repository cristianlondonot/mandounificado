import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chacara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.6 111.85" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHACARA', municipio.toUpperCase())}
              className="cls-1"
              d="M206.7,40.24c-3.4-.6-7-.5-10.2-1.8a9.51,9.51,0,0,1-3.6-2.7,29.75,29.75,0,0,1-2.4-4.3,8.36,8.36,0,0,0-3.2-3.5,30,30,0,0,0-4.1-1.8c-3.1-1.1-6.3-1.3-9.5-1.9a18.74,18.74,0,0,1-9.7-4.9c-1.8-1.7-3.2-3.9-5.8-4.4-2-.4-4-.1-6-.3s-4.2-.8-6.3-1a11.33,11.33,0,0,0-6.2,1.2,33.77,33.77,0,0,1-5.2,2.2c-4.4,1-9.1.4-13.5-.4-9.5-1.7-19.4-2.1-29.1-2.4-4.2-.1-8.8.4-12.9-1a17.85,17.85,0,0,1-5.4-3.3c-1.8-1.4-3.5-3-5.2-4.5C65.9,3.34,63,.84,59.7.14c-2.7-.5-5.4.4-8,1.1-1.6.4-3.2.8-4.8,1.1a5.45,5.45,0,0,0-3,1.3c-2.7,2.6-1.7,6.5-2.7,9.7a6.07,6.07,0,0,1-2.6,3.3A30.3,30.3,0,0,0,34.8,19c-2.5,2.1-4.7,4.3-7.6,5.8h0c-.1,0-.1,0-.2.1-.3.1-.6.3-.9.4a.53.53,0,0,1-.8-.3c-.1,0-.2,0-.2-.1a2.73,2.73,0,0,1-1.3-1.5h0c-.2,0-.4-.1-.6-.1a3,3,0,0,1-1.3-.9c-.1.5-.3.9-.4,1.3-.1.1-.1.3-.3.3h-.1a57.57,57.57,0,0,1-1.8,5.9,26.79,26.79,0,0,1-3.9,5.6,19.67,19.67,0,0,0-3.1,5.7,68.91,68.91,0,0,1-6.1,12.5c-2.3,4.1-4.8,8.3-5.8,13a15.82,15.82,0,0,0-.1,6.5,50.51,50.51,0,0,0,1.8,5.5A10,10,0,0,0,5,83c1.9,1.4,4.1.8,6.2.2s4.2-1.3,6.3-1a12.61,12.61,0,0,1,5.2,2.2c1.5.9,2.9,1.8,4.7,1.7,2.3-.1,4.6-1.1,6.8-1.7a11.66,11.66,0,0,1,4.5-.6,15.54,15.54,0,0,1,5.1,1.8c1.2.6,2.4,1.4,3.6,2a35.94,35.94,0,0,0,3.5,1.2,53.71,53.71,0,0,1,7.5,2.3c5.1,2.2,9.7,5.6,14.6,8.4,5.1,2.9,10.3,5.7,15.5,8.5,1.3.7,2.7,1.5,4,2.2a12.37,12.37,0,0,0,3.3,1.5c1.6.4,2.5-.4,3.3-1.7a66.7,66.7,0,0,1,8.2-11.5,79.45,79.45,0,0,1,11.1-9.8c1.1-.8,2.3-2.1,3.7-2.5a16.66,16.66,0,0,1,5.9-.4,12.63,12.63,0,0,0,5.4-1.3c2.3-1,4.6-2,7-2.9a112.8,112.8,0,0,1,47.2-6.2l3.4-1.2,7.3-3.7,1.9-1.7v-5.6l1.9-1.7,1.9-3.7,1.7-3.5,3.7-1.9,3.5-1.9,1.9-5.4,1.9-1.9.9-.9C214.1,41.64,210.4,40.84,206.7,40.24Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Chacara