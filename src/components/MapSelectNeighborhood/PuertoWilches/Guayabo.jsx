import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guayabo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.98 91.14" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('GUAYABO', municipio.toUpperCase())}
              className="cls-1"
              d="M24.64,83c5-9,18-2,25-9-11-4,0-12,3-14,3-3,10,2,14-1,4-2,3-9,4-14,2-7,14-11,18-11C102.07,31.63,99.28,16.16,100,3.35,96.82,4.72,91.3,2.79,86.64,0c0,14-7,13-19,11-1,0-1,7-2,7-11.31,4.71-23.5,5.87-34.92,1.8C21.57,27.79,10.13,34.24,0,41.32L5.23,46l4.38,4.37,1,.44L14,56.17l1.44,3.88,1,2.38.95,1.94.49,3.43-.49,1.44-.5.5-1.44,2.43v3.88l.5,3.38V83.3l.49,1.44v1l-.49,1.94v.94l-1,2.43,0,.09C19.16,91.29,21.9,87.57,24.64,83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Guayabo