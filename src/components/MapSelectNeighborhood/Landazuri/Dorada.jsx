import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Dorada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.48 113.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DORADA', municipio.toUpperCase())}
              className="cls-1"
              d="M39.88,109.2a2.86,2.86,0,0,0,2.9.8,5,5,0,0,1,2.7.2,10.23,10.23,0,0,1,2.2,1.4,6.92,6.92,0,0,0,2.2,1.4,2.68,2.68,0,0,0,2.8-.9,15.84,15.84,0,0,1,2.2-2.3,8.52,8.52,0,0,1,3.1-1.3,48,48,0,0,1,7.5-.9c-.7-1.9-.4-4-.5-5.9a16.11,16.11,0,0,0-.6-4.4,7.53,7.53,0,0,0-2.6-3.5c-2-1.7-4.5-3.2-5.6-5.8-.5-1.2-.7-2.5-1.1-3.7S53.68,82,53,80.8c-1.6-2.6-1.3-6-1.1-8.9s.2-5.6,1.4-8.3a48.54,48.54,0,0,1,3.9-6.1,21.53,21.53,0,0,0,3.1-8.9,78,78,0,0,0,.3-9.7v-.1a4,4,0,0,1-2.8-1.2c-1.5-1.5-1.3-4.1-.4-5.9a28.11,28.11,0,0,1,4-5.1c1.5-1.8,2.4-3.8,1.5-6.1-.8-2.1-2.8-3.5-4.2-5.3a6.77,6.77,0,0,1-1.4-3.1,9.74,9.74,0,0,1,.2-2.4,4.22,4.22,0,0,0-.3-2.2,28.27,28.27,0,0,0-1.1-3.1,3.46,3.46,0,0,1-3.2-.6,18.57,18.57,0,0,0-2.7-2.2c-.9-.6-1.8-1.1-2.6-1.6a11.25,11.25,0,0,0-1.1,4.8c-.1,1.4-.3,2.8-1.8,3.2-2.3.7-3.1-2.1-4.5-3.4-.6,1-1.2,2.7,0,3.4.6.3,1.3.4,1.9.7a3.74,3.74,0,0,1,1.3,1.2c1.1,1.8-.9,3.4-2.3,4.1a14.76,14.76,0,0,1-2.7,1,4.15,4.15,0,0,1-3.6.3,7,7,0,0,1-2.4-2.1,3.2,3.2,0,0,0-3-.6c-1.2.2-1.9.6-2.1,1.9-.2,1.1-.1,2.2-.4,3.3a.63.63,0,0,1-.6.5,6.49,6.49,0,0,1-2.7-.8,1.41,1.41,0,0,0-1.4-.1,1.6,1.6,0,0,0-.5,1c-.4,1.4-1,3-2.6,3.3a6,6,0,0,1-4.8-1.4c-1.3-1.2-2-3.5-3.9-4-1.3-.3-1.5.7-1.6,1.6a2.43,2.43,0,0,1-.9,1.8c-1.1.7-2.7.3-3.9.1a5.93,5.93,0,0,0-2.3,0c-1,.4-.9,1.3-.7,2.1a4.3,4.3,0,0,1,.1,2.5c-.2.7-.8,1.2-1,1.8-.3.9.3,1.9.7,2.7a25.57,25.57,0,0,1,1.1,2.4A6.16,6.16,0,0,1,2,34a2.59,2.59,0,0,0,.5,2.4c1.2,1,3.1.9,4.5,1.2a12,12,0,0,1,4.3,2.3c1.3,1.1,2.5,2.4,3.9,3.5a30.37,30.37,0,0,0,5.2,3c3.7,1.9,7.6,3.9,10.2,7.3a49.43,49.43,0,0,1,3,4.9,10.39,10.39,0,0,0,1.7,2.4,10.14,10.14,0,0,0,1.3.9c1.6.9,5.5,2.5,4.5,5a.74.74,0,0,1-.9.4c-.2,1.4-.7,2.8-.9,4.2a11,11,0,0,0,.8,4,9.94,9.94,0,0,1,.8,3.4,9.24,9.24,0,0,1-.8,4,32.16,32.16,0,0,0-2.7,8.1c-.5,2.9.5,5.5,1.2,8.2a24.52,24.52,0,0,1,.7,7.6A2.63,2.63,0,0,0,39.88,109.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Dorada