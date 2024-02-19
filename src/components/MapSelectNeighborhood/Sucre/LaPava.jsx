import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPava = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.09 51.76" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PAVA', municipio.toUpperCase())}
              className="cls-1"
              d="M69.22,51.5c-7.2,1.6-12.1-4.7-18.3-7.7-7.5-3.6-15.2-6.6-22.7-10a77.58,77.58,0,0,1-11-5.9c-4.7-3.1-8.9-6.9-13.7-10-3.8-2.4-4.9-4.5-1.4-8.1a23.5,23.5,0,0,0,4.2-7.2c1-2.3,1.1-3.2,4.6-2.2,4.8,1.3,9,7.3,15.1,3.1.4-.3,2.6,1.8,3.9,2.9,2.8,2.3,5.7,4.4,8.2,6.9,3.6,3.6,6.8,7.7,10.4,11.3,3.2,3.3,6.4,6.9,10.2,9.1,5.3,3.1,11.3,4.9,16.9,7.5,2.2,1,5.6,1.5,4.1,5.6-1.2,3.4-2.8,5.5-6.7,4.8C72.12,51.3,71,51.5,69.22,51.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPava