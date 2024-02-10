import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPeña = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56.85 136.32"
      >
        <polygon
          fill={getColorByCarencias('LA PEÑA', municipio.toUpperCase())}
          className="cls-1"
          points="53.9 50.38 53.9 51.7 54.23 53.99 53.25 56.32 53.25 57.95 53.58 59.27 52.91 60.6 52.6 61.9 52.91 63.22 54.57 63.55 55.22 64.54 55.55 65.84 55.55 66.83 55.55 67.81 55.22 69.14 55.87 70.48 56.54 71.13 56.85 71.78 56.2 72.77 55.55 73.77 55.55 74.76 55.87 75.41 56.2 76.39 56.2 77.38 56.54 78.03 56.2 79.02 56.2 79.35 56.2 80.34 56.85 81.33 56.85 82.65 56.2 83.3 55.22 83.63 54.23 83.95 53.58 83.63 52.91 84.28 52.26 85.27 51.92 86.61 51.92 87.6 51.92 88.58 51.92 89.89 51.92 90.87 52.26 92.84 52.26 95.15 52.26 96.47 52.26 97.77 52.26 99.1 51.92 100.75 51.61 101.76 52.6 102.75 53.58 102.75 53.9 103.73 52.91 104.72 52.26 105.71 50.94 106.69 49.95 107.99 49.3 108.98 48.97 110.3 48.97 111.29 47.64 113.91 46.01 116.91 45.36 118.21 44.37 119.53 43.7 120.52 42.4 122.15 41.08 123.14 40.43 123.81 38.77 124.13 37.78 123.81 35.81 124.46 34.51 125.45 33.84 127.42 33.52 129.73 33.52 132.71 33.52 133.69 31.87 133.36 30.88 132.71 29.58 132.04 28.26 131.05 26.62 130.38 26.29 131.39 25.95 132.71 25.3 133.69 24.31 134.68 23.98 135.33 22.99 136.32 20.37 134.99 19.38 134.68 18.71 134.34 17.41 133.36 16.42 132.37 15.1 131.39 13.13 130.38 12.14 129.73 10.82 129.39 10.17 129.06 8.85 127.76 7.86 126.77 6.56 125.45 4.93 123.48 4.28 122.83 2.62 121.5 3.29 120.52 3.6 118.88 3.94 117.22 3.94 114.89 3.94 112.27 4.59 108.98 5.58 104.05 6.25 99.43 5.91 96.79 5.91 93.52 5.58 90.22 5.58 86.28 5.58 80.99 5.26 75.07 4.93 70.48 4.59 67.5 4.28 65.53 3.6 61.25 2.62 58.94 1.63 56.97 0.98 55.64 0 53 1.32 51.7 2.95 50.38 4.28 49.39 5.58 48.41 6.56 47.42 6.25 46.1 5.26 44.78 4.93 43.79 4.59 42.8 4.28 40.52 3.29 40.18 3.6 38.52 3.29 36.87 2.62 36.22 1.97 34.58 1.32 33.26 0.65 31.29 0.65 30.3 0 29.31 0.33 28.33 1.32 27.99 1.63 26.36 2.62 25.03 3.6 22.39 4.28 21.4 6.25 19.43 7.86 17.12 8.54 15.8 9.19 14.82 10.17 13.49 11.47 12.84 12.14 12.19 13.78 10.56 14.77 9.21 16.42 7.24 17.07 6.26 18.06 4.93 18.4 4.28 19.05 3.61 19.7 2.96 20.68 2.63 21.67 1.33 22.66 0.65 23.33 0 23.33 1.98 23.64 2.96 23.98 3.61 24.96 4.6 25.95 5.58 26.62 6.26 27.59 6.91 28.91 7.56 29.89 8.23 30.88 8.56 32.2 9.21 33.19 9.53 34.17 9.86 35.16 10.56 36.15 10.87 37.13 11.21 38.45 11.86 39.75 12.51 41.08 13.18 42.4 13.49 43.7 14.17 43.7 15.8 44.03 17.46 43.38 19.75 43.05 20.73 42.4 22.39 41.73 24.03 41.41 25.03 41.08 26.36 40.43 27.01 39.44 27.34 38.77 28.33 37.78 28.98 37.47 29.65 36.48 30.3 35.81 30.95 35.5 32.61 36.8 33.57 37.47 34.89 37.78 36.55 38.45 37.54 39.44 38.19 40.43 38.84 41.08 39.51 41.73 39.83 42.71 40.52 43.38 40.83 44.37 41.5 45.02 41.82 45.36 42.8 45.36 43.48 46.01 45.11 46.68 45.45 48.97 47.42 50.29 48.07 51.61 49.39 52.6 49.71 53.25 50.38 53.9 50.38"
        />
      </svg>
    </div>
  )
}

export default LaPeña