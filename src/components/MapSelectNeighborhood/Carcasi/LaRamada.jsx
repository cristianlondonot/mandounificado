import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaRamada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90.94 106.56"
      >
        <polygon
          fill={getColorByCarencias('LA RAMADA', municipio.toUpperCase())}
          className="cls-1"
          points="59.48 9.47 59.19 11.18 58.64 13.75 57.48 16.33 56.9 18.62 56.61 21.49 56.61 24.07 56.9 26.64 56.9 29.22 55.77 31.8 55.19 34.38 55.77 36.67 56.9 39.24 58.9 40.95 61.22 41.82 63.21 43.53 64.92 45.56 66.63 47.56 66.34 50.13 65.77 52.71 66.06 55.29 66.92 57.87 67.5 60.44 68.34 62.73 69.79 65.02 70.92 67.31 72.63 69.6 74.63 71.05 76.92 71.91 79.21 73.33 80.63 75.33 82.36 77.33 84.65 78.78 87.23 79.62 88.94 81.62 90.36 83.93 90.94 84.8 89.49 85.09 84.65 87.38 76.63 89.96 66.34 91.96 65.77 91.67 64.92 91.38 64.06 91.09 63.21 91.09 62.06 91.09 61.22 91.09 60.06 91.38 58.9 91.67 57.77 92.22 56.61 92.8 55.48 93.38 54.35 93.96 53.19 94.8 51.77 95.38 50.61 96.25 49.48 97.11 48.33 97.98 46.91 98.82 45.75 99.69 44.62 100.56 43.46 101.4 42.33 102.27 41.17 103.11 40.04 103.98 38.88 104.56 37.75 105.4 36.88 105.98 36.04 106.56 32.31 100.27 32.31 99.69 27.44 93.09 24.31 86.51 18.6 78.2 16.31 68.44 14.6 59.58 13.74 48.13 8 39.82 1.42 34.09 0 26.64 1.71 16.88 1.71 7.18 1.42 0.86 3.42 0 6.29 0.29 8.87 0.58 11.45 0.86 14.31 1.71 17.18 2 19.73 1.42 22.31 1.71 24.6 2.86 27.15 4.6 29.73 5.73 32.02 6.6 34.31 8.02 36.88 8.6 39.75 8.6 42.62 7.44 45.2 6.89 47.75 6.89 50.32 7.73 52.9 8.6 55.48 8.89 57.77 9.47 59.48 9.47"
        />
      </svg>
    </div>
  )
}

export default LaRamada