import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40.31 44.04"
      >
        <polygon
          fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
          className="cls-1"
          points="40.31 2.82 39.1 4.43 38.29 5.64 37.08 8.1 36.68 8.5 35.07 10.52 35.07 11.33 34.66 11.33 31.87 10.12 31.87 10.52 31.47 11.33 30.66 11.73 30.26 11.73 28.64 12.54 28.24 12.94 28.64 13.34 27.03 15.36 27.03 15.76 27.43 16.17 27.03 16.97 25.42 19.4 26.22 19.8 25.01 21.41 25.42 21.41 25.82 21.82 25.42 21.82 25.82 22.22 27.84 23.43 27.43 25.45 27.43 25.85 27.03 26.66 26.22 28.27 26.22 28.71 27.43 29.08 28.24 29.52 28.24 29.89 27.84 30.69 27.03 33.95 26.22 34.76 25.82 36.34 26.22 36.34 29.05 37.58 27.84 39.97 25.42 38.79 25.42 38.36 24.61 37.95 23 37.15 22.59 37.15 22.59 37.58 22.19 38.79 22.19 39.6 21.79 40.78 18.56 40.78 16.94 43.23 16.54 44.04 15.73 43.6 15.33 43.6 14.93 43.6 14.52 43.23 14.93 42.8 14.12 42.43 13.31 42.43 12.91 41.99 12.51 43.23 12.1 43.23 11.7 42.8 10.89 41.99 10.49 41.99 10.09 41.62 10.09 41.22 8.88 40.41 9.28 39.97 9.28 39.6 9.28 39.16 9.68 38.79 10.09 38.79 10.49 38.79 10.89 37.95 12.51 35.53 12.51 35.16 10.49 33.95 9.28 33.15 8.88 33.15 7.67 32.34 7.26 31.9 6.05 31.13 5.65 30.69 2.42 27.87 1.61 27.06 0.4 26.29 0 25.85 1.21 23.83 1.21 23.43 1.21 23.03 1.61 23.03 1.61 22.62 1.21 22.62 0 21.82 0 21.41 0.81 19.4 0.4 19.4 0.81 18.19 3.23 19.4 3.63 19.4 3.63 18.99 4.44 18.19 5.65 16.17 6.05 15.76 5.65 15.76 5.24 15.36 5.24 14.96 5.24 14.55 4.84 13.34 4.03 12.94 4.03 12.54 4.03 12.13 4.44 12.13 7.26 13.75 7.26 15.36 7.67 15.76 7.67 16.17 8.07 16.57 8.47 16.57 9.28 16.57 10.09 16.57 10.49 16.57 11.3 16.57 12.1 16.57 12.51 16.57 12.91 16.97 13.31 16.97 13.72 16.97 14.12 16.97 14.12 17.38 14.52 17.38 14.93 17.38 15.33 17.38 15.73 17.38 16.14 16.97 16.54 16.97 17.35 16.57 17.75 16.17 18.15 16.17 18.56 16.17 18.96 16.17 19.37 16.17 19.77 16.17 20.17 16.17 20.58 16.17 20.98 16.17 21.38 15.76 21.38 15.36 21.79 15.36 22.19 14.96 22.59 14.96 22.59 14.55 22.59 14.15 23 13.75 23 12.94 23.4 12.54 23.4 12.13 23.8 12.13 23.8 11.73 23.8 11.33 24.21 11.33 24.61 10.92 25.01 10.52 25.42 10.52 25.42 10.12 25.82 10.12 25.82 9.71 25.82 9.31 26.22 9.31 26.63 8.1 27.43 7.26 27.84 6.86 28.24 6.45 29.05 5.64 29.45 5.64 29.85 5.24 30.26 4.84 30.66 4.43 31.06 4.43 31.06 4.03 31.47 4.03 32.28 4.03 32.28 3.63 32.68 3.63 32.68 3.22 33.08 3.22 33.08 2.82 33.49 2.42 33.86 1.61 34.26 1.21 34.66 0.8 34.66 0.4 35.07 0.4 35.47 0.4 35.87 0.8 35.87 1.21 36.28 1.21 37.08 0 37.49 0.4 37.89 0.4 37.89 0.8 39.1 1.61 40.31 2.82"
        />
      </svg>
    </div>
  )
}

export default ZonaUrbana