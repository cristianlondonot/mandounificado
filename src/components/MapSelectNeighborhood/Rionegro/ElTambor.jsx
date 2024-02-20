import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElTambor = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 115.4 137.82"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL TAMBOR', municipio.toUpperCase())}
              className="cls-1"
              d="M.27,0c4.3.9,8.5,1,12.2,2.6a155.5,155.5,0,0,1,18.8,10.2c1.4.9,1.3,3.9,2.3,5.7s2.4,4,4.1,4.8,3.3.4,4.4-2.8c1.7-4.7,15.6-3.5,18.5,1.1.7,1.2,1.9,2.8,3.1,2.9,6.5.9,8.6,5,9.8,10.8.6,3,2.9,6.7,5.4,8.1,11.1,6.1,17.7,15.3,21.2,27.2.4,1.4,1,3.5,2,3.8,6.2,2.3,7.7,8.3,10.8,13,3.8,5.9,3.2,10.8-1,16.6-2.2,3-4.1,6.4-6.3,9.5-.7,1-2.1,2.4-3,2.3-7.6-.8-6.9,5.2-8.3,9.7a16.87,16.87,0,0,1-3.6,6.4,18.65,18.65,0,0,1-7.1,4.8,34.81,34.81,0,0,1-10.7,1.1c-2.4,0-4.7-1.6-7.1-1.8-10.8-.5-13-7.9-13.7-15.5-.4-4.1-3.3-7.8-5-11.8-1.8-4.3-2-10.7-5.2-12.8-9.1-5.9-6.2-15.3-8.6-23-1.6-5.1-2.9-9.7-8.5-12-1.6-.6-2.5-3.5-3.2-5.5-2.1-6.6-5.8-11.7-12.1-14.9a11.63,11.63,0,0,1-2-1.8c.7-.9,1.8-1.8,1.7-2.2C4.47,24.7-1.33,13,.27,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElTambor