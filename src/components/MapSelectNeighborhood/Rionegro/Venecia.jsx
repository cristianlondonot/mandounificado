import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Venecia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.28 60.15"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VENECIA', municipio.toUpperCase())}
              className="cls-1"
              d="M2.68,5.95c4,2,7.4,4.2,9.3-2.2C12.98.25,21.18-.85,24.98.65c1.2,5.6,2.3,10.6,3.3,15.6.2.8.4,1.7.1,2.4-3.8,12,.3,21.8,8.9,31.5-5.6,3.4-11.2,6.8-16.4,10-6.4-5.6-11.9-10.1-17.2-15-5.3-5-4.9-6.8,1.4-10.5,1.6-.9,3-2.1,4.6-3,4-2.4,7.3-5.7,6.3-10.6-1.5-7.5-4.5-9.4-12.4-9.5H.68c.7-1.9,1.3-3.6,2-5.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Venecia