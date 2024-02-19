import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BuenaEsperanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100.71 192.15"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BUENA ESPERANZA', municipio.toUpperCase())}
              className="cls-1"
              d="M35.8.4C37.9.3,40.1,0,42.4,0c4.2,0,5.6,1.8,5.4,6.3-.3,6.3.7,12.8,1.2,19.1.3,2.9,1.2,5.8,1.2,8.7-.3,13.9,2.1,26.7,12.3,37,1,1,2,3.1,1.6,4.4-3.2,11.7.9,22.3,4.5,33.1,3.2,9.9,11.6,14.9,19.1,20.7,6.4,4.9,12,9.4,11.1,19.3-.8,8.7,1.8,17.7,1.9,26.6.1,3.3-1.7,8.2-4.2,9.6-11.1,6.1-23,9.7-35.8,5.6-8.5-2.7-11.2-9.8-11.7-17.7-.7-11.8-1.2-12.4-12.2-17.1a57.2,57.2,0,0,1-13.1-8.1c-1.3-1.1-1.3-4.5-1.1-6.8.4-5.2,2.8-10.7,1.7-15.4-1.3-5.4-5.4-10-8.4-15a11.85,11.85,0,0,0-2.2-2.3C6.2,101,1.3,92.5.5,82.2c-.4-5.3,1.1-10.9,0-16-1.6-7.6.6-12.5,7-16.6,2.6-1.7,3.9-5.3,6.1-7.6,4.4-4.6,9.6-8.7,13.6-13.7,2.2-2.8,2.6-7,3.7-10.6C32.5,12.4,34,6.9,35.8.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BuenaEsperanza