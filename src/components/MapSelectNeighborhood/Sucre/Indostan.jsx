import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Indostan = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.88 58.24" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('INDOSTAN', municipio.toUpperCase())}
              className="cls-1"
              d="M67.88,14.23c-3,7.5-6,15-9,22.4a14.62,14.62,0,0,0-.9,3.6c-.9,12-9.2,17.9-21,16-4.6-.7-9.7,1.1-14.5,1.6-2,.2-4.3.8-6,0a145.24,145.24,0,0,1-13.4-7.3c-3.1-1.8-4.2-9.7-1.7-14.5,3.6-6.7,7.8-13.1,11.8-19.6.4-.6,1.2-1.5,1.7-1.5,9,1,12.6-6.4,17.2-11.7,3.2-3.7,4.6-4.3,9.3-1.4C49.48,6.83,58.68,10,67.88,14.23Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Indostan