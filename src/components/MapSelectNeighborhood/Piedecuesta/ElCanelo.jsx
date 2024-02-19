import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCanelo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.98 126" >

        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL CANELO', municipio.toUpperCase())}
              className="cls-1"
              d="M73.29,6c-5.2,4-1.8,8.9-.4,12.1,2.8,6.4-.3,10.6-3.6,16.8-1.7-2.8-3-5-4.5-7.5-6.3,9.9.1,19.3-2,28.3a8.51,8.51,0,0,1-1.3-.6c-1.3-2.1-.4-6.6-3.4-6.2-3.8.4-1.7,4.6-2,7.2-.3,3.3,0,6.6-.1,10-.1,1.8.6,3-2.7,4.3-4,1.6-1.5,7.9,1.5,9.7,11.6,6.6,8.4,15.2,6.5,25.6S55,118,46.39,117.52c-2.3-.1-5.6.6-5.8,3.1-.4,7.2-6.6,5.1-9.6,5.1a6.85,6.85,0,0,1-6.7-7.6c.4-5.5-3.7-7-7.9-3.1-2,1.8-2.3.4-3-.4-6.1-6.8-9.4-15.2-13.2-23.4-.2-.5-.3-1.7,0-1.9,6.6-4.6,6.9-14.1,13.9-18.4.6-.4,1.8-.7,1.8-.9-1-11,13.5-17.9,7.5-30.5-3.3-7,1.6-13.3,9.5-13.8s8.4-1.2,6.8-8.9c-1-4.5.4-8.8,2.7-12.4,1.4-2.3,4.8-4.1,7.6-4.4,2.6-.3,2.4,3.3,3.2,5.3,2,5.2,4.3,8.4,10.1,3.6,2.4-2,5.8-2.7,8.7-4C72.39,5.22,72.79,5.62,73.29,6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElCanelo