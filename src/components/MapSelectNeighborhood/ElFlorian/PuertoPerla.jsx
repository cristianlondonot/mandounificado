import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoPerla = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53.97 146.38"
      >
        <polygon
          fill={getColorByCarencias('PUERTO PERLA', municipio.toUpperCase())}
          className="cls-1"
          points="51.67 59.03 44.45 63.3 42.81 67.92 45.43 74.2 49.05 79.46 52.34 82.08 53.97 86.05 53.64 88.37 49.05 92.98 44.45 99.24 43.46 99.57 44.13 102.86 46.75 106.17 49.05 108.47 49.05 111.11 45.78 113.74 45.78 115.73 44.78 121.01 44.45 123.98 37.2 138.15 36.22 146.38 31.93 138.48 32.93 122.99 30.61 112.76 28.96 105.85 26.99 99.24 21.73 91.01 18.76 83.08 16.46 74.85 11.52 69.24 8.55 62.65 6.58 56.04 0 48.46 5.59 43.52 8.55 34.29 9.23 24.39 9.23 12.18 13.17 5.94 15.81 3.62 21.08 0 21.08 15.84 24.02 21.43 28.31 26.69 31.28 29.35 35.9 30.33 36.87 31.98 40.84 33.3 41.16 36.27 46.1 36.27 49.7 37.59 50.67 38.89 52 42.55 52 46.17 50.67 47.81 49.7 50.43 51.67 59.03"
        />
      </svg>
    </div>
  )
}

export default PuertoPerla