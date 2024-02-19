import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaCuchilla = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.2 85.97" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA CUCHILLA', municipio.toUpperCase())}
              className="cls-1"
              d="M41.2,3.38C30.7,13.68,27.9,26,30.2,40c.6,3.6.9,7.1-2.6,10.4-2.5,2.4-4.7,5.9-4.4,10,.7,11-8.1,16.8-13.4,24.5-.3.4-1.2,1.9-2.1.5-.6-.9-1.6-2.4-1.3-3.1,3.3-7.2-1.4-14.7.9-22,.9-2.8-.6-5.4-2-8C1.8,46-3,39.88,2.5,32.08a5.92,5.92,0,0,0-.6-7.3c-4.2-4.8,1.3-8,3.2-7.8,9.7.8,14.8-5.8,20-11.6S35-2.12,41.2,3.38Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaCuchilla