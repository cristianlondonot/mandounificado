import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaClara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 85.49 171.58"
      >
        <polygon
          fill={getColorByCarencias('SANTA CLARA', municipio.toUpperCase())}
          className="cls-1"
          points="51.83 30.45 59.17 38.89 60.52 54.38 64.06 70.41 67.32 84.3 69.23 98.15 73.57 118.28 77.09 130.78 79.51 143.56 82.24 156.05 85.49 171.03 85.49 171.58 84.4 171.31 82.78 171.03 81.69 170.76 80.6 170.47 64.86 167.76 54.01 167.49 39.89 167.21 29.86 165.3 18.46 162.05 7.32 160.14 0 157.69 2.16 153.89 2.7 153.07 2.7 148.45 3.79 142.74 5.16 139.2 6.5 130.51 8.41 123.98 9.77 120.71 10.05 115.82 12.21 110.39 12.21 102.5 13.57 96.54 14.12 88.65 15.48 77.23 16.01 69.32 16.01 62.81 15.21 56.56 13.85 50.85 11.39 41.32 10.59 35.34 11.66 28.27 12.48 21.77 17.1 13.33 20.08 7.06 21.99 0 32.04 4.08 39.34 10.33 43.14 15.49 48.85 23.38 51.83 30.45"
        />
      </svg>
    </div>
  )
}

export default SantaClara