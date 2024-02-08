import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsperanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79.26 72.68"
      >
        <polygon
          fill={getColorByCarencias('LA ESPERANZA', municipio.toUpperCase())}
          className="cls-1"
          points="79.26 30.74 78.94 30.74 78.59 30.74 78.3 30.74 77.98 30.74 77.66 30.74 77.34 30.74 77.02 30.74 76.7 30.74 76.06 30.74 75.74 30.74 75.42 30.74 75.1 30.74 74.78 30.74 74.46 30.74 74.14 30.74 73.82 30.74 73.5 31.04 73.18 31.04 72.86 31.04 72.54 31.04 72.23 31.04 72.23 31.38 71.91 31.38 71.59 31.38 71.27 31.38 70.95 31.38 70.63 31.38 70.31 31.38 69.99 31.38 69.67 31.38 69.35 31.38 69.03 31.38 68.71 31.38 68.39 31.38 68.07 31.38 67.75 31.38 67.43 31.38 67.11 31.38 66.79 31.38 66.47 31.38 66.15 31.38 65.83 31.38 65.51 31.38 65.19 31.38 64.87 31.38 64.55 31.68 64.23 31.68 63.91 31.68 63.59 32.02 63.27 32.02 62.95 32.32 62.63 32.32 62.31 32.66 62 32.66 62 32.98 61.68 32.98 61.68 33.27 61.36 33.27 61.04 33.62 60.72 33.91 60.4 34.26 60.08 34.55 59.76 34.9 59.76 35.19 59.44 35.54 59.44 35.86 59.12 36.18 59.12 36.5 58.8 36.5 58.8 36.82 58.48 37.14 58.48 37.46 58.16 37.46 58.16 37.78 57.84 38.1 57.84 38.42 57.52 38.74 57.2 38.74 57.2 39.06 56.88 39.37 56.56 39.69 56.24 40.01 55.92 40.01 55.92 40.33 55.6 40.33 55.28 40.33 54.64 40.65 54.32 40.65 54 40.65 53.68 40.65 53.36 40.65 53.04 40.97 52.72 40.97 52.4 40.97 52.09 40.97 52.09 41.29 51.77 41.29 51.45 41.29 51.13 41.61 50.81 41.61 50.49 41.93 50.17 41.93 49.85 41.93 49.85 42.25 49.53 42.25 49.21 42.25 49.21 42.57 48.89 42.57 48.57 42.57 48.57 42.89 48.25 42.89 47.93 43.21 47.61 43.21 47.61 43.53 47.29 43.85 46.97 44.17 46.97 44.49 46.65 44.81 46.33 45.13 46.33 45.45 46.01 45.77 46.01 46.09 45.69 46.41 45.69 46.73 45.37 47.05 45.37 47.37 45.37 47.69 45.05 48.01 45.05 48.33 44.73 48.65 44.73 48.97 44.41 49.29 44.41 49.6 44.09 49.6 44.09 49.92 43.77 50.24 43.45 50.59 43.45 51.23 43.13 51.55 43.13 51.87 43.13 52.19 43.13 52.51 43.13 52.83 43.13 53.15 42.81 53.47 42.81 53.79 42.81 54.11 42.81 54.43 42.49 54.43 42.49 54.75 42.49 55.07 42.49 55.39 42.49 55.71 42.49 56.03 42.49 56.34 42.49 56.66 42.49 56.98 42.49 57.3 42.49 57.62 42.17 57.62 42.17 57.94 42.17 58.26 42.17 58.9 42.17 59.22 42.49 59.54 42.49 59.86 42.81 59.86 43.13 60.18 43.45 60.5 43.77 60.5 44.09 60.82 44.41 60.82 44.73 61.14 45.05 61.14 45.37 61.14 45.69 61.46 46.01 61.78 46.33 61.78 46.65 62.1 46.97 62.42 47.29 62.42 47.61 62.74 47.93 63.06 48.25 63.38 48.57 63.7 48.89 64.02 48.89 64.34 49.21 64.34 49.21 64.66 49.21 64.98 49.53 65.32 49.85 65.64 49.85 65.96 50.17 65.96 50.17 66.28 50.17 66.6 50.49 66.92 50.49 67.24 50.81 67.56 50.81 67.88 50.81 68.2 50.81 68.52 51.13 68.84 51.13 69.16 51.13 69.8 51.13 70.12 51.13 70.44 51.13 70.76 50.81 71.08 50.81 71.4 50.81 71.72 50.49 72.04 50.49 72.36 50.17 72.36 49.85 72.68 49.53 72.36 48.25 71.4 46.97 71.4 45.37 71.4 43.45 71.72 42.49 71.4 41.54 70.44 38.66 69.16 35.46 67.88 32.9 67.24 30.03 66.28 29.71 65.96 28.75 66.28 27.18 65.96 24.94 65.96 23.34 65.32 21.1 64.66 19.5 64.02 17.91 64.34 15.99 64.34 14.39 64.02 12.79 63.38 11.51 62.42 10.23 62.1 9.27 62.1 8.63 62.42 6.72 63.06 5.44 63.06 4.16 62.74 2.88 62.42 1.28 61.78 0.64 61.46 0 61.14 0 60.5 0 59.22 0 57.94 0 56.98 0.32 56.66 0.64 56.03 1.6 55.07 2.88 54.43 4.8 53.15 5.44 52.83 5.44 52.51 5.76 52.51 6.08 51.87 6.08 51.55 6.08 50.59 5.76 49.92 5.76 49.6 5.12 48.97 4.8 48.97 3.84 48.33 3.2 47.37 3.2 46.73 3.2 46.41 3.2 45.77 3.52 45.45 4.16 45.13 5.44 45.13 6.72 44.49 7.36 43.53 8 42.57 8 41.61 7.68 40.65 8 39.69 8 38.74 8.31 37.46 8.95 36.82 8.95 36.18 8.63 35.54 8 35.19 7.68 34.55 7.68 33.27 7.68 32.66 7.68 31.68 7.68 31.04 8.31 29.44 9.59 27.87 11.19 26.27 12.47 23.68 12.79 21.79 12.79 19.85 12.79 18.25 12.79 17.29 11.83 16.01 11.51 15.37 11.19 15.05 11.51 14.73 11.83 13.77 14.07 11.86 18.54 10.9 20.14 9.94 20.46 8.34 20.78 6.39 22.7 4.48 23.98 2.88 24.3 2.88 24.3 2.56 24.3 0.96 24.3 0.64 24.3 0 33.22 2.24 33.22 2.56 33.54 2.88 33.86 2.88 33.86 3.2 34.18 3.2 34.5 3.52 34.82 3.52 35.14 3.84 35.46 3.84 35.78 3.84 36.1 4.16 36.42 4.16 36.74 4.16 37.06 4.16 37.06 4.48 37.38 4.48 37.7 4.48 38.02 4.48 38.34 4.8 38.66 4.8 38.98 4.8 39.3 4.8 39.62 4.8 39.94 4.8 40.26 4.8 40.58 5.12 40.9 5.12 40.9 5.43 41.22 5.43 41.54 5.75 41.86 5.75 41.86 6.07 42.17 6.07 42.17 6.39 42.49 6.39 42.81 6.39 43.13 6.74 43.45 6.74 43.45 7.06 43.77 7.06 44.09 7.06 44.41 7.38 44.73 7.38 44.73 7.7 45.05 7.7 45.37 8.02 45.69 8.02 45.69 8.34 46.01 8.34 46.33 8.34 46.33 8.66 46.65 8.66 46.97 8.66 47.29 8.98 47.61 8.98 47.93 9.3 48.25 9.62 48.25 9.94 48.57 10.26 48.57 10.58 48.89 10.9 48.89 11.22 49.21 11.22 49.21 11.54 49.53 11.86 49.53 12.17 49.85 12.17 49.85 12.49 50.17 12.49 50.17 12.81 50.49 12.81 50.81 12.81 50.81 13.13 51.13 13.13 51.45 13.13 51.45 13.45 51.77 13.45 52.09 13.45 52.4 13.77 52.72 13.77 53.04 13.77 53.36 14.09 53.68 14.09 54 14.09 54 14.41 54.32 14.41 54.64 14.41 54.96 14.41 55.28 14.41 55.6 14.41 55.92 14.41 55.92 14.73 56.24 14.73 56.56 14.73 56.88 15.05 57.2 15.05 57.52 15.05 57.84 15.05 58.16 15.05 58.48 15.05 58.8 15.37 59.12 15.37 59.44 15.37 59.76 15.37 59.76 15.69 60.08 15.69 60.4 15.69 60.72 15.69 61.04 15.69 61.36 15.69 61.68 15.69 61.68 15.37 62 15.37 62.31 15.37 62.63 15.37 62.95 15.37 62.95 15.69 63.27 15.69 63.59 15.69 63.59 16.01 63.91 16.01 63.91 16.33 64.23 16.33 64.55 16.65 64.87 16.65 64.87 16.97 65.19 16.97 65.51 17.29 65.83 17.29 65.83 17.61 66.15 17.61 66.47 17.93 66.47 18.25 66.79 18.25 66.79 18.57 67.11 18.57 67.11 18.89 67.43 19.21 67.75 19.53 67.75 19.85 68.07 19.85 68.07 20.17 68.39 20.49 68.39 20.81 68.71 20.81 68.71 21.13 69.03 21.45 69.35 21.79 69.35 22.09 69.67 22.09 69.67 22.4 69.99 22.75 69.99 23.04 70.31 23.04 70.31 23.39 70.63 23.68 70.95 24.03 70.95 24.32 71.27 24.32 71.27 24.67 71.59 24.67 71.91 24.99 72.23 25.28 72.54 25.63 72.86 25.63 72.86 25.92 73.18 25.92 73.18 26.27 73.5 26.27 73.82 26.56 74.14 26.91 74.46 27.2 74.78 27.2 75.1 27.55 75.42 27.87 75.74 27.87 75.74 28.16 76.06 28.16 76.38 28.51 76.7 28.51 76.7 28.8 77.02 28.8 77.02 29.14 77.34 29.14 77.66 29.44 77.98 29.44 77.98 29.78 78.3 29.78 78.59 30.08 78.94 30.08 78.94 30.4 79.26 30.4 79.26 30.74"
        />
      </svg>
    </div>
  )
}

export default LaEsperanza