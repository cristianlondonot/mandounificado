import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaTramba = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72.93 97.1"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA TRAMBA', municipio.toUpperCase())}
              className="cls-1"
              d="M8.4,30.7c8.8-.1,11.1-4.9,10.5-12.4-1.8-1.7-4-4.3-.3-8.2,1.2-1.3-2.9-4.8,1.9-6.2,4.3-1.2,7.5-1.7,9.3,4.7,1.3-3,2.1-4.8,3.8-8.6,2.2,2.9,4,5.2,5.7,7.5C45.9,15.9,53.6,21,65.1,18.2c5.8-1.5,6.9.3,5.9,6.2-1.3,7.8-3.6,15.2.5,23.4,3.1,6.3.4,13.8-1,20.7-.6,3-.9,6-1.4,9.9-8.8-3.6-13.7.6-18,8-1.4,2.5-5.8,3.3-9,4.6s-6.5,1.9-9.6,3.1c-4.2,1.6-8.3,4.7-12.1-.5a1.84,1.84,0,0,0-1.6-.5c-5,1.2-10,2.6-15.5,4C2.6,96.3,1.4,94.7,0,93c8-3.3,8.2-4.2,4.5-17.1.4-.1.7-.4,1.1-.4,3.3.5,7.1,3,8.9-2.5a39,39,0,0,1,4-8.8c1.4-2.3,3.1-5.2,5.4-6.2,7.6-3.3,7.8-3.4,4.3-11-.3-.7.2-1.9-.1-2.5-1.1-1.9-2.1-4-3.8-5.2-2.3-1.8-5.1-3-7.7-4.4C14.5,33.7,12.5,32.7,8.4,30.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaTramba