import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaBarbara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.28 96.59"
      >
        <polygon
          fill={getColorByCarencias('SANTA BARBARA', municipio.toUpperCase())}
          className="cls-1"
          points="168.33 95.37 167.92 94.96 164.24 96.18 157.71 96.59 143.84 91.28 133.18 88.01 127.05 83.89 122.96 78.17 118.91 75.71 107.47 76.53 100.48 75.3 94.35 74.49 84.13 74.08 78.45 76.53 72.32 79.8 66.18 84.3 61.69 86.75 56.78 85.52 50.65 88.83 37.57 82.66 23.68 68.32 17.95 64.64 17.58 64.23 4.91 55.65 2.05 54.02 0 46.22 2.46 44.17 8.59 41.31 17.58 36.44 25.72 33.14 35.53 29.87 45.75 18.83 56.78 11.85 64.55 5.72 72.72 3.27 80.9 0 84.13 0.81 102.12 6.13 108.69 13.93 117.68 16.38 121.36 15.97 139.35 8.58 142.62 9.4 147.9 11.03 153.21 13.11 155.25 14.34 162.61 13.11 165.47 16.79 168.33 22.51 169.56 32.76 170.38 38.08 172.83 41.75 174.87 47.85 175.28 56.88 174.05 66.28 174.46 74.49 173.65 83.07 172.83 89.23 168.33 95.37"
        />
      </svg>
    </div>
  )
}

export default SantaBarbara