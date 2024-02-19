import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Naranjito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.03 103.31"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('NARANJITO', municipio.toUpperCase())}
              className="cls-1"
              d="M68.34,103.31c-3-7.4-7.3-14-15.7-16.8-1.1-.4-1.9-2.8-2.2-4.5-1.2-6.4-4.3-11-10.5-13.6-2.5-1.1-5.9-3-6.5-5.2-1.1-3.9-2.2-6.5-6.7-6.1-3.3.2-6.8-.3-9.8.7-6.7,2.4-15-1.1-16.8-7.7a2.55,2.55,0,0,1-.1-1.2c1.6-5.3,2.7-10.9,5-15.8,2.1-4.5,2.7-8.4.2-12.8-1.6-2.8-2.2-5.1,2.9-5.4,2-.1,5.3-3.7,5.4-5.9.5-6.8,5.2-8.7,10.1-8.9A145.58,145.58,0,0,1,50,1.41c5.4.8,10.5,4,15.7,6.1,1.3.5,2.7,1.3,4,1.2,7.6-.4,13.9,3.3,20.8,5.4A67.2,67.2,0,0,1,113,26.31a91.38,91.38,0,0,1,13.6,13.5c1.1,1.4-.4,5.1-1.1,7.7-2,6.9-6.5,10-13.8,11.3-4.5.8-8.5,4.8-12.4,7.8a57.6,57.6,0,0,0-8.6,8.5C83.14,84.21,75.94,93.51,68.34,103.31Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Naranjito