import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoLopez = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('PUERTO LOPEZ', municipio.toUpperCase())}
          className="cls-1"
          points="89.65 19.67 90.26 24.67 89.38 29.36 87.89 32.88 86.16 35.52 84.67 39.04 84.4 43.73 84.67 46.98 83.79 49.32 84.08 53.42 85.86 56.94 89.38 63.12 91.41 66.93 92.87 69.86 92.6 72.79 90.26 76.9 87.3 81.88 86.16 84.84 78.53 85.11 74.41 81.3 71.79 78.97 67.66 78.97 65.34 79.27 64.17 80.12 63.29 80.73 60.36 79.54 57.14 80.12 55.38 81 53.33 83.96 50.69 85.42 48.05 85.98 45.41 86.86 42.77 89.23 41.02 90.99 38.96 91.58 36.62 90.11 33.69 86.6 30.17 82.76 26.65 78.07 22.55 74.85 18.74 71.92 17.3 68.98 13.78 65.17 9.09 61.95 3.23 57.82 0 54.89 1.76 53.13 4.4 49.61 7.33 44.61 8.8 39.62 8.8 36.99 7.92 32.88 8.8 24.36 11.43 20.86 14.07 14.68 16.71 8.53 19.62 4.99 22.84 6.48 28.41 8.53 41.89 14.1 48.64 16.15 50.98 10.87 53.62 8.53 57.14 5.57 61.83 0 65.61 2.35 69.45 6.16 74.72 9.99 79.1 13.22 84.96 16.74 89.65 19.67"
        />
      </svg>
    </div>
  )
}

export default PuertoLopez