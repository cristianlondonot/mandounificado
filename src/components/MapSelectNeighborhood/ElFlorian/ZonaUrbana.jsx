import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111.17 102.75"
      >
        <polygon
          fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
          className="cls-1"
          points="8.67 41.98 9.01 42.67 9.35 43.03 9.72 43.72 10.06 43.72 9.35 44.06 8.33 44.77 7.98 45.45 7.62 45.79 7.28 46.52 8.33 46.86 9.35 47.21 9.72 47.21 10.06 47.21 10.4 47.21 11.09 47.21 11.43 47.55 12.13 47.55 12.82 47.89 12.82 48.25 13.53 48.25 13.87 48.6 14.21 48.94 14.55 48.94 14.89 48.25 14.89 47.89 15.6 48.25 15.94 48.25 15.6 47.55 15.6 46.16 15.6 44.77 15.6 44.4 15.26 44.06 15.26 43.72 15.26 42.67 15.94 42.33 16.99 41.64 17.33 41.3 18.38 40.59 18.38 40.94 19.07 40.25 19.41 39.91 19.75 39.57 19.75 39.2 20.09 38.86 20.46 38.52 20.8 38.18 21.14 38.18 22.19 39.2 22.88 39.57 23.92 38.86 24.61 38.52 24.27 38.18 23.92 38.18 23.22 37.47 22.19 36.44 22.19 36.1 22.53 36.1 22.88 35.39 23.22 35.05 23.22 35.39 23.58 35.74 23.92 36.1 23.92 35.74 24.95 34.71 24.61 34.37 24.95 34 25.29 33.66 25.29 33.32 25.66 32.63 25.29 32.29 25.66 31.93 25.66 31.59 24.95 31.24 24.61 30.9 24.27 30.56 24.61 30.19 24.61 29.83 24.27 29.15 24.27 28.8 24.27 28.44 24.61 28.1 24.61 27.76 25.29 27.05 25.66 27.05 26 26.71 26.68 26.36 27.03 26.02 27.39 25.68 27.73 25.34 28.08 25.34 28.42 24.97 29.12 24.63 28.42 24.29 29.12 23.6 29.47 22.9 29.81 22.21 30.15 21.85 30.49 21.16 30.86 20.82 30.86 20.48 30.49 20.12 30.15 20.12 30.15 19.43 30.15 19.09 30.15 18.75 30.49 18.04 30.49 17.7 30.49 17.36 30.49 17.01 31.2 15.97 31.88 14.57 32.59 12.82 33.28 11.79 33.28 11.43 33.62 10.4 33.96 8.33 33.62 8.33 31.54 7.62 30.15 7.28 29.47 7.28 28.42 6.94 26 6.25 25.66 6.25 22.19 7.98 21.85 7.98 19.75 5.2 17.68 2.42 16.99 1.74 16.29 0.69 15.6 0 13.53 2.08 12.82 3.13 12.13 3.81 11.09 4.86 10.74 4.86 10.74 5.2 9.35 5.89 9.01 6.25 8.67 6.59 7.62 6.59 5.54 6.59 5.2 6.59 3.47 6.59 0 6.25 0 6.94 0.34 9.01 0.69 9.72 0.69 10.06 0.69 10.4 1.05 11.09 1.74 12.14 2.08 13.53 2.78 15.28 3.13 15.97 3.47 16.67 3.47 17.36 3.13 18.75 3.13 19.09 3.47 19.77 3.47 20.12 3.47 20.82 3.47 21.16 3.47 21.51 3.13 21.85 4.15 22.9 4.52 23.24 4.52 23.95 4.15 24.29 4.15 24.63 4.15 24.97 3.81 25.34 3.81 25.68 3.81 26.02 3.81 26.71 4.15 27.05 4.15 28.1 4.52 28.8 4.52 29.15 4.52 29.49 4.52 29.83 4.52 30.19 4.15 30.9 3.81 31.59 3.81 31.93 3.81 32.63 3.81 32.98 4.15 34 4.86 34.37 4.86 34.71 5.2 34.71 5.2 35.05 5.89 35.74 6.25 36.1 6.93 37.13 6.93 37.47 7.28 37.83 7.28 38.52 7.62 38.52 7.28 38.86 7.28 39.2 7.98 40.25 8.33 40.59 8.33 40.94 7.98 41.3 8.67 41.98"
        />
      </svg>
    </div>
  )
}

export default ZonaUrbana