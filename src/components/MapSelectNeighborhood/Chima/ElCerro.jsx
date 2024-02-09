import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCerro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 191.28 145.34"
      >
        <polygon
          fill={getColorByCarencias('EL CERRO', municipio.toUpperCase())}
          className="cls-1"
          points="137.45 35.93 147.35 53.55 156.9 56.99 175.6 77.27 191.28 97.52 164.16 108.25 142 123.91 127.9 145.34 112.99 139.21 70.62 120.47 37.02 99.43 33.2 84.53 22.89 75.36 10.3 66.94 0 43.62 30.91 39.02 75.22 27.54 98.87 3.84 122.92 0 122.92 16.83 124.83 31.36 137.45 35.93"
        />
      </svg>
    </div>
  )
}

export default ElCerro