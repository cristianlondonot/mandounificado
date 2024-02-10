import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Anzuelos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 134.42 91.5"
      >
        <polygon
          fill={getColorByCarencias('ANZUELOS', municipio.toUpperCase())}
          className="cls-1"
          points="118.69 3.86 125.33 3.58 130.28 9.13 134.42 15.19 127.8 21.3 123.11 22.41 116.22 25.44 111.52 28.74 102.41 32.35 98.53 37.04 91.36 42.57 89.69 49.48 89.16 54.73 93.3 62.2 90.8 69.95 90.25 73 90.25 80.45 89.69 89.58 79.24 89.03 66.52 89.03 64.32 91.22 57.41 91.5 52.43 85.44 48.31 79.34 43.34 65.25 40.29 63.87 34.79 61.11 22.92 57.51 16.56 56.7 9.95 50.87 1.94 45.34 1.11 45.34 0.83 43.98 0.56 42.57 0.28 42.02 0 40.91 0 39.82 0.28 38.43 0.83 37.04 1.11 36.77 1.94 35.93 2.75 35.12 3.03 34.57 4.14 33.18 4.97 31.79 6.08 30.41 6.36 28.74 6.89 27.38 10.78 24.05 16.01 19.35 23.75 15.75 29 14.94 39.2 12.72 48.85 12.44 56.04 11.88 62.65 10.78 70.4 10.78 79.24 5.53 79.24 0 88.05 0.83 105.99 1.66 118.69 3.86"
        />
      </svg>
    </div>
  )
}

export default Anzuelos