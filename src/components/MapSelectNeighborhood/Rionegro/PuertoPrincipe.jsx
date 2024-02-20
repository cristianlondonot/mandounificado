import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoPrincipe = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27.68 80.4"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUERTO PRINCIPE', municipio.toUpperCase())}
              className="cls-1"
              d="M0,37.2c1.7-7.4,3.4-14.8,5.2-22.5,12.4-1,15.4-3.7,11.3-10.7,1.7-1.3,3.4-2.5,5.5-4v12.4c0,1.4-.2,3.2.6,4.3,5.6,7.6,5.7,7.6-.8,13.3,7.1,17.2,9.5,34.3-2.8,50.4-3.7-5.2-2.6-13.5-11.6-15-5.1-.9-5.7-3.8-1.7-8,4.9-5.1,1.8-10.5.8-15.4-.4-2.2-4.9-3.7-6.5-4.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuertoPrincipe