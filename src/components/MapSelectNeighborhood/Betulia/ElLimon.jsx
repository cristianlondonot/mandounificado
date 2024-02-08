import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElLimon = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 81.99 114.89"
      >
        <polygon
          fill={getColorByCarencias('EL LIMON', municipio.toUpperCase())}
          className="cls-1"
          points="72.08 26.97 72.08 27.62 73.04 29.86 73.36 30.47 73.68 32.1 75.28 36.91 75.6 39.79 77.53 46.52 78.81 50.08 81.99 56.81 77.21 59.37 70.15 63.56 65.03 66.45 58.3 71.58 51.89 78.97 45.8 86.96 40.99 94.36 37.79 99.48 33.62 107.84 29.8 114.89 29.8 114.57 29.8 114.25 29.8 113.93 29.8 113.61 29.8 113.29 29.48 113.29 29.48 112.97 29.48 112.65 29.16 112.65 29.16 112.33 29.16 112.01 28.84 111.69 28.84 111.37 28.84 111.05 28.52 111.05 28.52 110.73 28.52 110.41 28.2 110.41 28.2 110.09 28.2 109.77 27.88 109.77 27.88 109.45 27.88 109.13 27.56 108.8 27.56 108.48 27.56 108.16 27.24 108.16 27.24 107.84 27.24 107.52 26.92 107.52 26.92 107.2 26.92 106.86 26.92 106.53 26.6 106.53 26.6 106.21 26.6 105.89 26.27 105.89 26.27 105.57 26.27 105.25 25.95 105.25 25.95 104.93 25.95 104.61 25.63 104.61 25.63 104.29 25.63 103.97 25.31 103.97 25.31 103.65 25.31 103.33 24.99 103.33 24.99 103.01 24.67 103.01 24.67 102.69 24.35 102.69 24.35 102.37 24.03 102.37 24.03 102.05 23.71 102.05 23.71 101.73 23.39 101.73 23.39 101.41 23.07 101.41 22.75 101.09 22.43 101.09 22.11 101.09 22.11 100.77 21.79 100.77 21.47 100.77 21.15 100.45 20.83 100.45 20.51 100.45 20.51 100.12 20.19 100.12 19.87 100.12 19.54 100.12 19.54 99.8 19.22 99.8 18.9 99.8 18.58 99.8 18.58 100.12 18.26 100.12 17.94 100.12 17.94 100.45 17.62 100.45 17.3 100.77 16.98 100.77 16.98 101.09 16.66 101.09 16.66 101.41 16.34 101.41 16.34 101.73 16.02 101.73 16.02 102.05 15.7 102.05 15.7 102.37 15.38 102.37 15.38 102.69 15.06 102.69 15.06 103.01 14.74 103.01 14.74 103.33 14.42 103.33 14.42 103.65 14.42 103.97 14.1 103.97 14.1 104.29 13.78 104.29 13.78 104.61 13.78 104.93 13.46 104.93 13.46 105.25 13.13 105.25 13.13 105.57 12.81 105.57 12.81 105.89 12.49 105.89 12.49 106.21 12.17 106.21 11.85 106.21 11.85 106.53 11.53 106.53 11.53 106.86 11.21 106.86 10.89 107.2 10.57 107.2 10.57 107.52 10.25 107.52 9.93 107.52 9.61 107.52 9.29 107.84 8.97 107.84 8.65 107.84 8.33 107.84 8.01 107.84 7.69 107.84 7.37 107.84 7.05 107.84 6.73 107.84 6.4 107.84 6.08 107.84 5.76 107.84 5.44 107.84 5.12 107.84 4.8 107.84 4.48 107.84 4.16 107.84 3.84 107.84 3.52 107.84 3.2 107.84 3.2 107.52 2.88 107.52 2.56 107.52 2.24 107.52 1.92 107.52 1.6 107.52 1.28 107.52 0.96 107.52 0.64 107.52 0.32 107.52 0 107.2 0 106.86 0 106.53 0 106.21 0.32 105.89 0.32 105.57 0.32 105.25 0.64 104.93 0.64 104.61 0.64 104.29 0.64 103.97 0.96 103.65 0.96 103.33 0.96 103.01 0.96 102.69 0.96 102.37 0.96 102.05 0.96 101.73 1.28 101.41 1.28 101.09 1.28 100.77 1.6 100.45 1.6 100.12 1.6 99.8 1.92 99.48 1.92 99.16 1.92 98.84 2.24 98.52 2.24 98.2 2.24 97.88 2.24 97.56 2.56 97.24 2.56 96.92 2.56 96.6 2.88 96.28 2.88 95.96 2.88 95.64 2.88 95.32 3.2 95 3.2 94.68 3.52 94.36 3.52 94.04 3.84 94.04 3.84 93.72 4.16 93.72 4.16 93.39 4.48 93.07 4.48 92.75 4.8 92.43 4.8 92.09 5.12 92.09 5.12 91.79 5.12 91.45 5.44 91.45 5.44 91.15 5.76 91.15 5.76 90.83 6.08 90.83 6.4 90.48 6.73 90.48 7.05 90.19 7.37 90.19 7.69 89.87 8.01 89.52 8.33 89.52 8.65 89.23 8.97 89.23 9.29 88.88 9.61 88.56 9.93 88.27 9.93 87.92 10.25 87.92 10.57 87.6 10.57 87.31 10.57 86.96 10.89 86.66 10.89 86.34 11.21 86 11.21 85.7 11.21 85.36 11.53 85.04 11.53 84.74 11.85 84.42 11.85 84.07 11.85 83.75 11.85 83.46 11.85 83.14 12.17 83.14 12.17 82.79 12.17 82.5 12.17 82.18 12.49 81.83 12.49 81.51 12.49 81.22 12.49 80.9 12.49 80.55 12.49 80.25 12.49 79.93 12.49 79.59 12.81 79.27 12.81 78.97 12.81 78.65 12.81 78.31 12.81 77.98 12.81 77.69 12.81 77.34 12.81 77.02 12.81 76.7 13.13 76.38 13.13 76.06 13.13 75.74 13.13 75.42 13.13 75.1 13.46 74.78 13.46 74.46 13.46 74.14 13.46 73.82 13.46 73.5 13.46 73.18 13.46 72.86 13.78 72.54 13.78 72.22 14.1 72.22 14.1 71.9 14.42 71.9 14.42 71.58 14.42 71.25 14.74 71.25 14.74 70.93 14.74 70.61 14.74 70.29 14.74 69.97 14.74 69.65 14.74 69.33 14.74 69.01 14.74 68.69 14.74 68.37 14.74 68.05 14.74 67.73 14.74 67.41 14.74 67.09 14.74 66.77 14.74 66.45 14.74 66.13 14.74 65.81 14.42 65.81 14.42 65.49 14.1 65.49 14.1 65.17 14.1 64.84 13.78 64.52 13.78 64.2 13.46 63.88 13.46 63.56 13.46 63.24 13.46 62.92 13.13 62.57 13.13 62.25 13.13 61.93 12.81 61.93 12.81 61.61 12.81 61.29 12.81 60.97 12.49 60.97 12.49 60.65 12.49 60.01 12.49 59.69 12.49 59.37 12.49 59.05 12.49 58.73 12.49 58.41 12.49 58.09 12.49 57.77 12.81 57.45 12.81 57.13 12.81 56.81 13.13 56.49 13.13 56.17 13.13 55.84 13.46 55.84 13.46 55.52 13.46 55.2 13.78 55.2 13.78 54.88 14.1 54.56 14.1 54.24 14.42 53.92 14.74 53.6 15.06 53.28 15.06 52.96 15.38 52.96 15.38 52.64 15.38 52.32 15.7 52 15.7 51.68 15.7 51.36 16.02 51.04 16.02 50.72 16.02 50.4 16.34 50.08 16.34 49.76 16.34 49.43 16.66 49.11 16.66 48.79 16.66 48.47 16.98 48.47 16.98 48.15 17.3 47.81 17.3 47.49 17.3 47.16 17.62 47.16 17.62 46.84 17.62 46.52 17.94 46.2 17.94 45.88 17.94 45.24 17.94 44.92 17.94 44.6 17.94 44.28 17.94 43.96 17.94 43.64 17.94 43.32 17.94 43 17.94 42.68 17.94 42.36 17.94 42.04 17.94 41.72 17.62 41.4 17.62 41.08 17.62 40.76 17.62 40.43 17.62 40.11 17.62 39.79 17.62 39.47 17.62 39.15 17.62 38.83 17.62 38.51 17.94 38.51 17.94 38.19 18.26 38.19 18.26 37.87 18.58 37.87 18.58 37.55 18.9 37.55 18.9 37.23 19.22 37.23 19.22 36.91 19.54 36.91 19.54 36.59 19.87 36.27 20.19 36.27 20.19 35.95 20.51 35.63 20.83 35.63 20.83 35.31 21.15 35.31 21.15 34.99 21.47 34.99 21.47 34.67 21.79 34.67 21.79 34.35 22.11 34.35 22.11 34.03 22.43 34.03 22.43 33.7 22.75 33.7 22.75 33.38 23.07 33.38 23.07 33.06 23.39 33.06 23.39 32.74 23.71 32.74 23.71 32.4 24.03 32.4 24.03 32.1 24.35 32.1 24.35 31.75 24.35 31.46 24.67 31.46 24.99 31.11 24.99 30.82 25.31 30.82 25.31 30.47 25.63 30.47 25.63 30.15 25.95 30.15 25.95 29.86 26.27 29.86 26.27 29.51 26.6 29.51 26.6 29.22 26.92 29.22 26.92 28.87 27.24 28.87 27.24 28.58 27.56 28.23 27.88 27.94 27.88 27.62 28.2 27.62 28.52 27.27 28.84 27.27 28.84 26.97 29.16 26.97 29.48 26.63 29.8 26.63 30.12 26.33 30.41 26.33 30.41 25.99 30.73 25.99 30.73 25.69 31.06 25.69 31.38 25.35 31.7 25.35 32.02 25.05 32.34 25.05 32.34 24.73 32.66 24.73 32.66 24.38 32.98 24.38 33.3 24.09 33.62 24.09 33.62 23.74 33.94 23.74 34.26 23.45 34.58 23.1 34.9 23.1 34.9 22.81 35.22 22.81 35.54 22.81 35.54 22.46 35.86 22.46 36.18 22.46 36.5 22.14 36.82 22.14 37.14 21.85 37.47 21.85 37.47 21.5 37.79 21.5 37.79 21.18 38.11 21.18 38.11 20.89 38.43 20.89 38.43 20.56 38.75 20.56 38.75 20.24 39.07 20.24 39.07 19.92 39.39 19.92 39.39 19.58 39.71 19.26 40.03 18.94 40.35 18.62 40.35 18.29 40.67 18.29 40.67 17.97 40.99 17.97 40.99 17.65 41.31 17.65 41.31 17.33 41.31 17.01 41.63 17.01 41.63 16.69 41.95 16.69 41.95 16.37 42.27 16.05 42.59 16.05 42.59 15.73 42.91 15.41 43.23 15.09 43.23 14.77 43.55 14.45 43.87 14.13 44.2 13.81 44.2 13.49 44.52 13.49 44.52 13.17 44.84 13.17 44.84 12.85 45.16 12.85 45.16 12.53 45.48 12.21 45.48 11.88 45.8 11.88 45.8 11.56 46.12 11.56 46.12 11.24 46.44 11.24 46.44 10.92 46.76 10.6 46.76 10.28 47.08 9.96 47.4 9.64 47.72 9.32 47.72 9 48.04 9 48.04 8.68 48.36 8.68 48.36 8.36 48.68 8.36 48.68 8.04 49 8.04 49 7.72 49.32 7.4 49.64 7.08 49.64 6.76 49.96 6.76 49.96 6.44 50.28 6.44 50.28 6.12 50.6 6.12 50.6 5.8 50.93 5.8 50.93 5.48 51.25 5.48 51.25 5.15 51.57 5.15 51.57 4.83 51.89 4.83 51.89 4.51 52.21 4.51 52.21 4.19 52.53 3.85 52.85 3.53 52.85 3.21 53.17 3.21 53.17 2.88 53.49 2.88 53.49 2.56 53.81 2.56 54.13 2.24 54.45 2.24 54.77 1.92 55.09 1.92 59.26 0 59.58 0.32 60.54 4.83 62.14 7.4 64.07 10.28 68.23 16.05 69.83 19.26 72.08 26.97"
        />
      </svg>
    </div>
  )
}

export default ElLimon