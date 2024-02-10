import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.34 38.36"
      >
        <polygon
          fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
          className="cls-1"
          points="16.84 0.73 16.35 1.22 15.38 1.46 15.13 1.46 13.91 1.22 13.91 1.46 13.67 1.95 13.42 2.44 13.42 2.68 15.62 3.9 15.86 3.9 15.62 3.9 15.62 4.15 15.38 4.88 15.13 5.61 14.64 6.36 14.64 5.85 14.16 5.85 13.67 5.12 13.18 4.88 12.93 4.63 12.93 4.88 12.45 5.85 12.45 6.1 12.45 6.36 12.2 6.36 11.47 6.1 10.49 5.37 8.54 4.39 8.05 5.37 7.81 5.85 7.57 6.61 7.57 7.09 7.57 7.83 7.32 8.07 6.83 9.05 6.83 9.29 6.83 9.78 7.08 10.76 7.08 11.24 7.57 11.73 8.54 12.71 8.79 12.95 8.54 13.2 8.3 13.44 8.05 13.44 7.81 13.69 7.32 13.69 7.08 13.93 6.83 14.17 6.59 14.42 6.1 14.91 5.86 15.15 5.61 15.39 5.37 15.39 5.37 15.64 5.12 15.64 5.12 15.88 4.88 16.13 4.64 16.37 4.39 17.1 4.15 17.85 3.9 18.34 3.9 18.57 3.66 18.83 3.17 19.56 3.17 19.79 3.42 19.79 3.42 20.05 3.9 20.28 4.15 20.54 3.9 21.27 3.9 21.5 3.9 21.76 4.64 22.25 4.88 22.47 5.37 22.74 5.12 22.96 5.12 23.2 5.12 23.47 5.12 23.69 5.12 23.96 5.37 24.18 5.12 24.18 5.12 23.96 5.12 23.69 4.88 23.69 4.64 23.47 4.39 23.69 4.15 23.69 4.15 23.47 3.42 24.18 2.93 24.67 2.44 25.18 0 30.06 0.73 31.04 0.97 31.04 1.46 31.52 1.95 31.77 2.2 31.77 2.44 32.01 3.42 32.74 3.66 32.99 3.66 33.23 3.9 33.48 4.39 34.7 4.64 34.94 4.39 34.94 5.61 36.65 5.86 36.41 6.1 36.16 6.34 36.16 6.59 36.16 7.08 35.67 7.08 35.43 8.05 35.18 8.05 35.43 7.57 35.92 7.08 36.16 6.83 36.41 7.08 36.41 7.57 36.89 9.76 38.36 10.49 37.14 11.23 36.16 11.47 35.43 11.71 34.94 11.71 34.7 11.71 34.45 11.96 34.21 11.96 33.96 12.2 34.21 12.2 33.96 12.45 33.72 12.93 32.74 12.93 32.5 13.42 32.5 13.67 32.5 13.91 32.5 14.16 32.74 13.91 32.01 13.67 30.79 14.16 30.3 14.4 30.06 14.16 30.06 14.4 29.82 14.64 29.82 15.13 30.06 15.38 30.06 15.86 30.06 16.11 30.3 16.84 31.04 18.3 32.26 18.79 32.5 19.04 32.5 19.04 32.74 20.01 33.23 20.26 32.99 21.23 33.72 21.48 33.72 21.72 33.96 21.72 33.48 21.97 33.23 22.21 32.99 22.7 32.5 22.7 32.26 22.7 32.01 22.94 32.01 23.19 31.52 23.92 29.57 24.89 27.37 25.36 26.15 24.65 24.67 24.41 23.47 23.92 22.25 23.92 21.98 24.16 21.76 24.16 21.5 24.65 20.76 24.89 20.05 24.89 19.3 24.89 19.08 24.89 18.83 25.36 17.1 25.61 16.61 25.61 16.37 25.61 15.88 25.85 15.39 26.34 14.42 26.34 13.93 26.34 13.44 25.85 13.44 24.89 12.71 24.89 12.46 25.14 12.22 25.36 12.22 25.61 11.98 26.1 11.98 25.85 11.73 25.36 11.49 25.85 10.76 25.85 10.51 25.85 10.02 25.85 9.54 25.85 9.05 25.14 7.58 24.65 7.34 25.61 5.85 22.94 4.63 23.19 4.63 23.19 4.39 22.94 4.15 23.19 3.66 23.19 3.17 23.43 2.93 23.43 2.68 23.43 2.19 23.67 1.95 23.67 1.7 23.43 1.22 23.43 0.73 23.19 0.24 22.45 0.24 21.97 0 21.48 0 20.99 0 20.75 0 20.26 0.24 20.01 0.24 19.77 0.48 19.28 0.48 19.04 0.48 18.79 0.48 18.55 0.48 18.3 0.48 18.06 0.48 17.82 0.48 17.33 0.24 17.08 0.24 17.08 0 16.84 0 16.6 0 16.6 0.24 16.84 0.48 16.84 0.73"
        />
      </svg>
    </div>
  )
}

export default ZonaUrbana