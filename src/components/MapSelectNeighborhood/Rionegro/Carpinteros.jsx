import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Carpinteros = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 71.7 135.1"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CARPINTEROS', municipio.toUpperCase())}
              className="cls-1"
              d="M27.9,0c2.5,3.3,5,6.1,6.9,9.1,1,1.7,2.2,4.3,1.6,5.8-2.7,7.4,2.5,12.4,4.8,18.2,4.5,11.5,9.3,22.8,14,34.2.8,2,1.7,3.9,2.3,5.9,1.9,6.1,3.9,12.1,5.5,18.3.4,1.6-1.4,4.1-.7,5.4,1.3,2.6,3.6,4.7,4.9,6.3,1.2,6.9,2.4,13.5,3.5,20.1.5,3,.7,6,1,9.1-.4.3-.9.6-1.3.9-2.2-1.8-4.6-3.5-6.7-5.5-5.9-5.5-8.9-5.8-14.6-.1-5.2,5.2-10.9,8.6-18.5,7a18.18,18.18,0,0,1-6.6-3.1c-4-2.8-7.8-5-13-1.3-1.6-6.7-3-12.8-4.4-18.9a10.93,10.93,0,0,1,1.5-.8c-2.7-1.2-5.5-2.3-8.1-3.4,4.9-6.3,17-10,10.5-22.7,1.4-.4,3.5-.5,4.3-1.5.6-.7-.4-4-.6-4-4,.1-5.3-2.6-5.2-5.5.2-4.7-.1-10.4,2.3-14a40.76,40.76,0,0,0,7-23.2c0-1.2-2.4-2.5-3.7-3.6-2.1-1.7-5.7-2.8-6.3-4.9C6.8,22.6,6.7,17.1,6,11.8,15.7,12.9,20,3.1,27.9,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Carpinteros