import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Colacote = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66.13 69.36"
      >
        <polygon
          fill={getColorByCarencias('CALACOTE', municipio.toUpperCase())}
          className="cls-1"
          points="40.92 26.69 41.41 26.92 41.86 27.18 42.12 27.41 42.6 27.89 42.83 27.89 43.54 28.12 44.96 28.6 45.44 29.31 46.15 30.73 46.87 32.41 47.12 33.6 47.35 35.27 47.58 36.95 47.83 38.85 47.12 39.31 47.35 39.31 47.35 39.56 47.58 40.04 47.83 40.5 48.06 40.75 48.29 40.98 48.29 41.47 48.54 42.18 48.77 42.66 49.25 43.12 49.73 43.85 49.96 44.08 50.44 45.04 50.44 45.53 50.67 46.01 50.9 46.95 50.9 47.43 51.38 48.37 51.38 48.62 51.61 49.1 51.61 49.56 51.61 49.81 51.61 50.76 52.58 51.24 53.52 51.47 54.48 52.18 54.71 52.43 55.19 52.66 55.42 52.91 56.13 53.37 56.61 53.62 57.1 54.08 57.81 54.33 58.29 54.82 58.75 55.27 59.48 56.01 60.19 56.72 60.65 57.2 60.9 57.2 61.13 57.68 62.1 58.16 63.04 58.39 63.75 58.39 64.23 58.39 64.71 59.1 65.17 59.82 65.42 60.3 66.13 60.78 66.13 61.01 65.9 61.72 65.9 61.97 65.42 62.68 65.17 62.91 65.17 63.39 64.94 63.14 64.46 62.91 64 62.68 63.52 62.68 63.04 62.68 62.81 63.39 62.55 63.62 62.1 64.33 61.84 64.82 61.61 65.78 61.13 66.74 60.9 67.2 60.65 67.45 59.94 67.45 59 66.97 58.29 66.74 57.81 66.74 57.55 66.74 57.1 66.97 56.13 67.68 55.9 67.91 55.19 68.39 54.23 68.65 54 68.65 53.75 68.39 53.04 68.39 52.32 68.65 51.38 68.65 50.67 68.65 50.21 68.39 49.73 67.91 49.25 67.68 48.54 66.97 48.06 66.74 47.58 66.24 47.12 66.01 44.96 64.1 44.48 63.85 44.25 63.62 43.77 63.62 43.06 63.39 42.12 63.14 40.92 62.91 40.21 62.91 39.5 62.68 38.79 61.97 38.06 61.24 37.35 60.53 36.64 60.04 36.15 59.59 35.21 59.1 34.73 58.88 34.5 59.1 34.02 59.33 33.79 59.33 33.06 59.82 32.6 59.82 32.35 59.82 31.63 59.82 30.92 59.82 29.98 59.59 29.5 59.33 28.79 59.33 28.08 58.62 27.6 58.39 26.89 58.16 26.63 58.16 25.92 58.39 25.46 58.62 24.73 58.62 24.27 58.62 23.79 58.39 23.08 58.62 22.37 58.88 20.92 59.1 20.21 59.33 19.27 59.1 18.08 58.88 17.37 58.88 16.18 57.91 15.95 57.68 15.46 58.62 15.46 58.88 15.21 59.59 14.75 60.78 14.5 61.49 14.27 61.97 13.79 62.2 13.08 62.68 12.85 62.68 11.91 62.68 11.66 62.43 11.2 61.97 10.72 61.72 10.23 61.49 9.75 61.01 9.04 60.78 9.04 61.01 8.56 61.49 7.85 62.68 6.91 61.97 6.43 62.43 5.95 62.91 5.23 63.85 4.78 64.59 4.52 65.05 4.04 65.53 3.33 66.24 3.1 66.49 1.91 67.45 1.2 68.16 0.72 68.88 0.23 69.1 0 69.36 0 67.91 0 66.49 0.23 65.3 0.49 64.59 0.72 64.1 0.72 63.39 0.95 62.91 1.2 62.68 1.2 62.2 1.43 61.97 1.91 61.24 2.14 61.01 2.62 60.53 3.33 59.82 3.58 59.33 3.81 59.1 4.04 58.62 4.29 58.16 5.01 57.43 5.49 56.97 6.2 56.01 6.91 55.04 7.39 54.56 7.62 54.33 8.1 53.85 8.56 53.37 9.29 52.43 9.29 51.95 9.29 51.47 9.29 51.24 9.04 50.76 9.04 50.27 9.04 50.04 8.33 48.37 8.1 48.14 7.85 48.14 7.62 47.66 7.39 47.43 7.14 47.18 7.14 46.95 6.91 46.47 6.91 46.01 6.91 45.53 6.91 45.04 6.91 44.56 6.91 43.85 6.91 43.37 6.91 43.12 7.14 42.66 7.14 42.18 7.14 41.95 6.91 41.47 7.14 40.75 7.14 40.27 7.14 40.04 6.91 39.31 6.91 39.08 6.43 37.89 6.2 37.43 6.2 36.95 6.2 36.47 5.72 36.24 5.49 35.98 5.01 35.27 4.52 34.79 4.29 34.33 4.04 33.85 3.81 32.89 3.81 32.41 3.81 31.92 3.81 31.21 3.81 30.73 4.04 30.27 4.04 29.79 4.29 29.54 4.52 29.08 4.52 28.83 4.78 28.37 5.01 28.12 5.01 27.89 5.01 27.63 4.52 25.98 4.29 25.5 3.81 24.56 3.58 24.08 3.58 23.6 3.33 23.12 3.33 22.63 3.58 22.15 3.81 21.67 4.04 21.21 4.52 20.96 4.78 20.73 5.72 20.5 5.95 20.02 6.2 19.77 6.2 19.31 6.2 18.35 6.2 17.86 6.2 17.4 6.2 17.15 5.95 16.69 5.95 16.21 5.95 15.96 6.66 15.73 6.91 15.5 7.39 15.5 7.85 15.02 8.33 14.54 8.33 14.06 8.33 13.6 8.1 12.89 7.85 12.4 7.85 11.92 7.85 11.67 7.85 11.19 7.85 10.96 8.1 10.25 8.1 9.77 8.33 9.29 8.56 8.83 8.81 8.09 9.04 7.63 9.04 7.15 9.29 6.92 9.29 6.67 9.52 6.44 9.75 5.96 10.49 5.02 10.72 4.28 10.95 3.57 11.2 2.86 11.43 2.38 11.91 1.92 12.37 1.67 12.85 1.44 13.31 1.44 13.56 1.44 14.27 1.44 14.75 1.67 15.21 1.67 15.95 1.92 16.4 1.92 17.12 1.92 17.6 1.67 18.31 0.94 18.56 0.71 18.56 0 20.69 0.94 21.18 1.21 21.66 1.21 21.89 1.21 22.37 1.21 22.83 1.44 23.08 1.67 23.31 1.92 23.79 2.15 24.02 2.38 24.27 2.63 24.5 2.86 24.73 3.09 24.98 3.34 24.98 3.83 25.21 4.28 25.69 4.77 25.92 5.02 26.41 5.25 26.41 5.96 26.41 6.19 25.92 6.44 25.69 6.44 24.98 6.44 24.02 6.44 23.31 6.92 22.83 7.15 22.6 7.38 22.12 7.63 21.66 8.09 21.41 8.34 20.92 8.57 20.92 8.83 21.41 9.06 21.89 9.06 21.89 9.29 21.89 9.77 21.66 10.48 21.89 10.96 21.89 11.44 21.66 11.67 21.89 11.92 22.37 11.92 22.6 11.92 22.83 11.92 22.83 12.15 22.83 12.63 23.08 12.89 23.31 13.34 23.79 14.31 23.79 14.54 24.02 15.25 24.27 15.5 23.79 15.96 23.56 16.21 23.31 16.69 23.08 16.69 23.31 17.4 23.56 17.4 23.79 17.63 24.27 18.12 24.27 18.35 24.5 18.6 24.98 18.6 25.21 19.06 25.21 19.31 25.46 19.77 25.69 20.02 26.18 20.25 26.63 20.73 27.12 20.73 27.6 20.25 28.08 19.77 28.31 19.31 28.54 19.77 29.27 20.02 29.02 20.25 28.54 20.73 28.54 20.96 28.08 21.44 27.83 21.67 27.83 21.92 28.31 21.92 28.54 22.41 29.02 22.63 29.5 22.89 29.73 23.37 29.73 23.12 30.44 23.12 30.92 23.6 31.18 24.08 31.89 24.56 32.12 24.79 33.06 25.98 34.02 25.27 34.5 25.5 34.73 25.5 35.69 24.56 35.92 24.56 36.41 24.79 36.86 25.27 37.12 25.5 38.06 25.98 38.31 26.21 38.79 26.21 39.02 26.46 39.25 26.46 40.44 26.69 40.92 26.69"
        />
      </svg>
    </div>
  )
}

export default Colacote