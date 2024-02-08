import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPlaya = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 194.23 127.94"
      >
        <polygon
          fill={getColorByCarencias('LA PLAYA', municipio.toUpperCase())}
          className="cls-1"
          points="194.23 14.49 193.71 18.3 188.86 27.94 181.88 38.67 167.97 41.93 150.25 41.93 143.81 43 133.08 48.4 119.11 60.2 112.12 67.74 107.85 70.42 103 72.04 99.8 75.79 100.32 76.34 102.48 76.88 116.42 75.79 119.11 75.79 119.66 76.34 119.66 78.47 118.04 102.69 120.18 119.34 120.72 118.27 121.79 120.95 121.79 122.02 120.72 123.12 119.66 124.19 118.04 124.71 115.36 124.19 112.12 123.64 110.54 123.64 108.92 123.64 106.24 124.19 104.07 125.25 100.87 126.87 95.5 127.94 90.13 127.94 85.34 126.32 82.11 123.64 79.94 119.89 78.36 117.2 76.19 115.07 73.51 113.45 71.37 112.32 68.14 111.8 64.94 110.19 62.77 107.5 60.64 105.37 57.95 104.82 54.2 104.27 48.83 103.75 46.15 103.75 43.44 102.14 41.3 101.07 38.62 98.9 35.93 97.84 32.73 96.77 29.5 95.15 27.88 93.54 24.65 90.33 23.06 89.27 21.44 87.62 19.28 86.52 17.14 85.46 13.94 84.39 9.09 82.77 6.96 81.7 4.27 79.02 2.14 77.4 1.07 75.27 0.55 74.17 0.55 73.1 0 70.97 0 67.74 0.55 65.05 1.62 61.79 2.14 59.65 2.14 57.52 3.72 51.6 5.34 45.17 6.96 40.87 7.48 38.67 9.09 39.8 12.84 44.1 17.69 49.99 20.38 52.15 23.06 53.22 25.74 54.29 27.88 54.83 29.5 56.97 30.56 58.59 32.18 60.72 33.8 61.79 35.41 62.89 36.48 62.89 37 62.89 39.68 62.34 42.37 60.72 45.6 59.11 47.74 59.11 49.9 59.11 51.52 58.04 52.58 57.52 53.65 56.97 55.79 56.97 56.34 56.97 57.95 56.42 59.57 56.42 61.7 55.9 63.32 55.35 64.94 54.83 66.52 53.77 67.62 52.67 69.21 51.08 70.82 49.47 71.89 48.92 73.51 47.85 74.58 47.3 75.67 46.23 76.74 45.17 77.81 44.1 78.36 42.48 78.88 40.87 79.94 38.67 80.49 37.09 81.04 35.47 81.56 33.85 81.56 33.3 82.66 32.79 83.72 32.24 85.34 31.72 86.93 30.62 89.58 29.55 90.65 28.49 92.82 26.87 94.43 25.25 96.57 23.67 97.12 22.57 98.18 21.5 98.7 19.88 99.25 18.3 99.8 16.13 99.8 15.07 100.32 13.42 100.87 11.8 101.39 10.19 101.94 9.12 103 8.05 103.55 7.5 104.07 6.44 104.07 4.82 104.07 4.3 104.07 3.23 104.62 2.14 105.69 0.55 105.69 0 107.85 1.07 114.29 4.3 116.42 4.3 122.86 5.92 129.32 6.44 134.69 5.92 140.58 6.98 144.33 6.98 148.11 8.05 155.62 9.12 178.13 19.37 181.88 19.37 190.48 15.61 194.23 14.49"
        />
      </svg>
    </div>
  )
}

export default LaPlaya