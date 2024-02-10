import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCentro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70.93 158.04"
      >
        <polygon
          fill={getColorByCarencias('EL CENTRO', municipio.toUpperCase())}
          className="cls-1"
          points="34.9 14.98 36.28 27.51 44.53 47.14 48.12 59.67 55.52 69.22 62.13 78.75 68.16 88.3 70.93 94.29 66.53 102.45 60.47 114.74 59.09 123.72 55.52 131.63 53.86 139.81 44.25 146.33 39.85 158.04 27.21 155.88 9.33 155.06 0.55 154.24 0.55 145.51 0 132.15 5.23 113.92 3.57 88.3 7.4 60.49 5.23 38.98 7.69 17.98 9.33 18.26 10.44 17.98 11.54 17.71 14.01 17.16 14.28 16.89 15.94 15.8 18.13 13.9 22.25 8.44 24.19 6.52 26.38 4.08 29.42 0 32.43 0.55 32.99 0.82 33.54 0.82 33.82 3.81 34.9 14.98"
        />
      </svg>
    </div>
  )
}

export default ElCentro