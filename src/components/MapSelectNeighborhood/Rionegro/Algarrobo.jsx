import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Algarrobo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.21 132.22"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALGARROBO', municipio.toUpperCase())}
              className="cls-1"
              d="M21.53,128.1a14,14,0,0,0-2.6-13c-4.2-5.9-6.4-13.2-9.7-19.8-1.5-3-3.1-6.2-5.4-8.5-4.6-4.5-5.6-7.5,0-9.7,6.9-2.7,4.8-8.7,7.5-12.7,2.1-3.2,1.9-8,2.6-12.2.6-3.4,7.2-8.1,12.2-9.2,6.8-1.5,13.9-.3,20.6-4.2,3.6-2.1,9.3.2,13.9-.6,4.2-.7,8.2-3,12.3-4.5.9-.3,2.2.1,3-.4,2.4-1.3,5.5-2.4,6.7-4.5,2.1-3.6,4.7-3.9,8.3-3.8a23.17,23.17,0,0,0,9.9-1.5c1.3-.6,2.4-5.1,1.5-6.6-4.4-7.1-2.8-12.2,5.5-16.9,3.1,4.5,6.1,9.6,9.7,14.2a29.65,29.65,0,0,0,8.3,7.5c4.6,2.7,5.9,7.4,2.3,11.4-3.1,3.5-7.5,6.4-8.9,10.5-2.6,7.7-10.2,12.7-10.4,21.5-.1,3-1.6,5.5-5.6,5.2-4.5-.3-6.1,2.4-6,6.6a44.76,44.76,0,0,1-.6,6.3c-.6,4-1.4,7.1-7.1,5.1-1.3-.4-5.3,3.3-6.1,5.8-1,3-1.9,4.4-5,5.9-4,1.9-7.5,5.4-10.2,8.9-2.8,3.8-4.4,8.4-6.6,12.7-3.3,6.5-8.5,8-15.3,5.5-1.7-.6-5.5.4-6,1.7-1.6,3.8-4.2,3.8-7.1,3C29.63,130.9,25.83,129.4,21.53,128.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Algarrobo