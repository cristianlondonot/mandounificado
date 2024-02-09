import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VegaGrande = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100.64 109.53"
      >
        <polygon
          fill={getColorByCarencias('VEGA GRANDE', municipio.toUpperCase())}
          className="cls-1"
          points="96.3 40.23 95.33 40.23 92.19 41.2 87.83 42.65 86.86 43.38 85.41 44.35 83.72 45.8 82.27 47.01 81.05 48.22 80.33 49.19 78.88 50.64 77.91 51.63 76.46 52.11 74.76 52.84 73.79 53.57 71.37 55.02 69.44 57.2 67.74 58.41 66.29 60.34 64.6 62.28 63.39 63.49 62.42 64.7 61.94 67.12 61.21 68.57 60.24 70.75 58.55 73.41 57.1 75.37 55.4 77.06 53.47 78.51 50.8 80.21 48.87 81.9 47.17 83.35 45.48 84.56 42.57 87.25 41.12 88.94 40.15 90.39 39.43 91.84 37.98 94.51 36.52 96.95 35.56 98.88 34.59 100.82 34.1 103 33.62 104.69 33.62 106.14 33.38 108.32 32.89 109.53 31.68 109.29 30.96 109.05 29.75 108.32 28.78 107.84 28.05 107.11 26.84 106.63 25.39 105.9 24.42 105.42 22.99 104.93 22.02 104.21 20.81 103.48 19.12 101.79 17.91 100.09 17.18 99.37 14.76 96.7 12.1 94.51 9.92 91.12 9.68 86.28 9.2 85.31 4.11 82.39 0 80.69 1.94 79.96 2.9 79.72 4.36 79 6.29 77.79 8.23 76.09 11.13 74.16 13.31 72.44 15.49 70.75 17.18 69.78 18.88 68.33 20.57 65.67 21.78 63.25 22.99 61.31 23.94 59.37 25.15 57.44 26.6 55.26 27.81 53.81 29.51 51.12 30.96 48.95 32.41 46.53 33.86 43.62 35.07 41.44 36.28 39 38.22 36.83 39.91 34.89 42.09 32.71 44.27 31.26 46.45 30.05 49.35 29.08 51.77 28.34 53.47 28.09 55.89 28.58 58.06 28.34 61.21 27.61 63.63 26.64 66.78 25.67 68.95 24.7 71.62 23.25 74.28 21.56 76.46 19.86 77.42 18.9 78.88 17.69 80.33 16.72 82.27 15.51 83.23 15.02 84.2 14.06 85.17 13.33 86.38 11.64 87.83 10.18 88.8 8.97 89.77 7.76 91.46 6.29 93.16 5.08 94.12 4.11 95.58 3.39 96.79 2.66 98 1.94 98.72 0.97 100.64 0 99.93 5.32 99.21 9.46 98 13.81 97.03 15.99 96.3 21.56 96.06 26.16 96.06 27.13 96.06 28.09 96.3 40.23"
        />
      </svg>
    </div>
  )
}

export default VegaGrande