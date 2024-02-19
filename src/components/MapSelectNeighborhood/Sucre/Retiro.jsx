import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Retiro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.3 143.84" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('RETIRO', municipio.toUpperCase())}
              className="cls-1"
              d="M64.2,143.84c-6-4.2-11.3-10-19.6-8.9-3.6.5-7.7.4-10.8,2-6.6,3.4-10.5-1-14.8-4.2-3.2-2.3-5.8-5.5-8.5-8.4-4.6-4.8-10.8-8.2-7-17.5C5.2,102.54,1.4,96,0,90.14c4.6,0,9.8.1,14.9,0,9.1-.1,13-3.5,14.3-12.3.3-2.5.7-4.9,1-7.4s.4-5,.7-8.1c20.8-.1,38.4-7.1,49.9-25.6,7.4,5.3,14.3,5.1,21.6,2.4,3.1-1.1,6.5-1.3,9.6-2.3,1.6-.5,2.9-2,4.3-3-1-1.2-1.7-2.8-3-3.4-3.1-1.5-6.4-2.6-10.5-4.2-1.5-4.5-3.2-10-5.1-15.4-1.9-5.2-.3-8.2,5.2-9.1.8-.1,1.8.2,2.5-.1,13-5.7,16.5,4.7,21.9,12.5,1.7,2.4,4.4,5.7,6.8,5.8,5.3.2,7.7,3.2,10.8,6.7,1.9,2.1,5.7,2.6,9.4,4.1-2.2,4.2-4.2,9.4-7.3,13.7a24,24,0,0,0-5,15c-.1,6.8-.9,13.7-1.6,20.5-.9,9.4-8.4,14.9-13.1,22.1-2.8,4.3-6.5,8.5-10.8,11-5.4,3.1-11.9,4.3-17.9,6.4C84.9,124.64,71,129.14,64.2,143.84Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Retiro