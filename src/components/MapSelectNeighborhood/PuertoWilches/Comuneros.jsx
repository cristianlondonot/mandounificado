import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Comuneros = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.53 103.44" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('COMUNEROS', municipio.toUpperCase())}
              className="cls-1"
              d="M11,89.36c9,7,20,15,32,14,1,0,2-5,4-7,3-1,1-7-1-10-3-3-5-6-8-10-2-1-7-1-7-2-4-10,3-22-1-30-2-5-9-9-10-17-1-1-2-1-4-1C13.4,17.69,19.8,9,17.66,1H17l.5.5V2H15.11l-.5-1V0C13.32,2.3,11.86,4.5,13,7.36c-2-1-6,0-6,1-7,10-8,15-5,26H0c9,4,14,11,11,20-2,6,0,12-3,16-4,7-3,13-5,20,3.18,0,3.84,3.16,6,5.46a17.93,17.93,0,0,0,2,.54Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Comuneros