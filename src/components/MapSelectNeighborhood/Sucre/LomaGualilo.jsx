import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LomaGualilo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.2 96.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LOMA GUALILO', municipio.toUpperCase())}
              className="cls-1"
              d="M97.2,63.3c-5.1,6-8.6,10.7-12.8,14.9a12.12,12.12,0,0,1-7,3.1c-12.4.9-24.8,1.1-37.1,2-4.5.4-9.4-.3-13.3.4-7.5,1.4-14.5,5.8-21.6,9.2-1.8.9-3.3,2.7-5.4,3.6,3.6-14.3,6.1-29,20.7-37.1A185.24,185.24,0,0,0,38.3,47.7c2.3-1.7,3.8-4.2,5-5.6-9.3-9.7-18.1-19-27.8-29,6.4-1.3,5.9-1,7.7,2.5,1.2,2.5,4.1,4.2,6.5,5.9.5.3,2.5-1.3,3.6-2.3,1.7-1.6,3.4-5.2,4.8-5,6.6.6,5.9-3.2,5.1-7.6.6-.4,1.2-.8,1.9-1.3.7,1.5,1,3.3,2.2,4.3,4,3.4,5.3,2.2,7-2.7.9-2.6,4.2-5,7-6.2,2.3-1,6.1-1.6,6.8,3a2.65,2.65,0,0,0,1.5,1.9c9,3,8.6,11.3,10.2,18.4,2,8.6,3.8,17.3,5.9,25.9.4,1.5,1.9,2.7,3,3.9C91.7,57.2,95,60.9,97.2,63.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LomaGualilo