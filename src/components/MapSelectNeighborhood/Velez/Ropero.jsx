import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Ropero = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.9 34.38">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ROPERO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,19.28C6.4,14.78,13.4,9.88,20.4,5a49.11,49.11,0,0,1,5.5-3.8c4.1-2,7.5-1.7,10.2,2.7,2.2,3.7,5.1,6.9,7.5,10.4,2,3,1.9,5.6-1.8,7.4-5.8,3-11.5,6.1-17.2,9.2a56.18,56.18,0,0,0-5,3.5C17.9,28.38,8.7,21.68,0,19.28Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Ropero