import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaHelena = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.61 106.84">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA HELENA', municipio.toUpperCase())}
              className="cls-1"
              d="M27.81,27.7c1.4-7.9,6.4-13.2,14.4-12.7s12.7-3.8,17.6-8.6c2.4-2.3,5.1-4.2,7.8-6.4,3.4,5.3,3.3,9.1-.2,13-1.1,1.2-1,3.6-1.2,5.5-.1,1,.7,2.4.2,3-7.7,9.3,1.5,14.1,5.2,20.9-3.8,3.2-8.3,6.7-1.9,10.8-1.6,5.3-2.9,9.9-4.5,14.5-.5,1.5-1.9,2.6-2.8,3.9a58.2,58.2,0,0,0-3.4,6c-.6,1.2-.6,3.1-1.5,3.8-6,4.8-10,10.1-7.4,18.4a3.5,3.5,0,0,1-1.5,3.1c-5.6,1.6-11.4,4.3-17,3.9-4.2-.3-9.3-3.9-11.9-7.5-2.7-3.8-5.2-3.9-8.3-2.8-4.5,1.6-9,1-10.7-2.9-1.4-3-.5-7.6.7-11.1,2.7-7.8,5.4-15.8,9.7-22.8,4.8-7.9,11.4-14.5,20.8-17.7,2.1-.7,4.3-3.6,5-5.9,1.1-3.7-1-6.4-4.9-7.3A25.77,25.77,0,0,1,27.81,27.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaHelena