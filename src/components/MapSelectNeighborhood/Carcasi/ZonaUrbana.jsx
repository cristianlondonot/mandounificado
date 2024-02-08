import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32.35 30.38"
      >
        <polygon
          fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
          className="cls-1"
          points="14.75 27.22 15.05 27.22 15.31 27.51 15.9 27.78 16.19 27.78 16.77 28.36 17.36 28.36 17.36 28.65 17.92 29.24 18.48 29.53 19.06 29.8 19.65 30.38 19.94 30.09 20.23 30.09 20.5 30.09 20.79 29.8 21.08 29.8 21.67 29.53 21.67 29.24 22.25 29.24 22.81 28.65 22.81 28.36 23.1 28.07 23.1 27.78 23.39 27.51 23.39 27.22 23.69 26.92 23.98 26.63 23.98 26.34 24.27 26.34 24.56 26.05 24.86 25.76 25.12 25.46 25.41 25.46 25.41 25.17 26 24.9 26 24.61 26.29 24.61 26.58 24.32 26.58 24.03 26.88 24.03 26.88 23.73 27.17 23.73 27.17 23.44 27.43 23.44 27.73 23.44 27.73 23.15 28.02 23.15 28.02 22.88 28.31 23.15 28.31 22.88 28.31 22.59 28.02 22.59 28.02 22.3 28.31 22.3 28.31 21.98 28.31 22.3 28.6 21.98 28.6 21.69 28.9 21.69 28.9 21.4 29.19 21.13 29.19 20.84 29.48 20.55 29.19 20.55 29.19 20.25 29.19 19.96 29.19 19.38 29.48 19.38 29.48 18.82 29.75 18.52 29.75 18.23 30.04 18.23 30.04 17.94 30.04 17.65 30.33 17.36 30.33 17.06 30.62 16.77 30.92 16.77 30.92 16.5 31.5 16.5 31.79 16.5 32.06 16.5 32.06 16.21 31.79 16.21 31.79 15.92 31.79 15.63 31.79 15.33 32.06 14.46 32.06 14.17 32.35 13.9 32.35 13.61 32.35 13.31 32.06 13.02 31.79 13.02 31.5 13.02 31.21 12.73 30.62 12.73 30.33 12.73 30.04 12.44 29.75 12.15 29.48 12.15 29.48 11.85 29.19 11.59 29.19 11.29 28.9 11.29 28.6 11.29 28.6 11.59 28.31 11.85 28.02 11.85 28.02 12.15 27.73 12.44 27.43 12.44 27.43 12.15 27.17 12.15 26.88 12.15 26.88 12.44 26.58 12.15 26.58 11.85 26.29 11.85 26 11.85 26 12.15 25.71 12.15 25.41 12.15 24.86 12.15 24.56 12.15 23.69 12.15 23.69 11.85 23.69 11.59 23.39 11.59 23.39 11.85 23.39 12.15 22.81 12.15 21.96 12.15 21.67 12.15 21.37 11.85 21.08 11.85 20.5 11.59 20.23 11.59 19.94 11.29 19.65 11.29 19.35 11 19.06 11 18.77 11 18.48 10.71 18.18 10.71 17.92 10.42 17.63 10.42 17.07 10.12 16.48 9.83 16.19 9.57 15.9 9.57 15.61 9.57 15.31 9.57 16.48 6.64 15.05 6.35 14.46 6.35 14.17 6.35 14.17 5.77 13.88 4.33 13.58 4.04 13.58 3.75 13 3.45 12.73 2.89 12.73 2.6 12.44 2.31 11.56 2.31 10.98 2.31 10.13 2.02 9.84 1.73 9.25 1.14 8.96 0.87 8.67 0.58 8.08 0.58 6.94 0.29 6.65 0.29 6.35 0.29 5.5 0 4.63 0.58 4.63 1.14 4.92 1.73 4.63 2.6 4.33 3.19 4.33 3.45 4.04 4.04 3.46 4.62 3.19 4.91 2.31 3.75 1.73 4.04 0 5.77 0.29 6.06 0.59 6.35 0.88 6.64 1.14 6.64 2.02 7.81 2.61 8.66 3.46 7.52 3.75 7.81 4.04 7.81 4.33 7.81 4.63 7.81 5.21 8.08 5.5 8.08 5.5 8.37 6.06 8.37 6.35 8.08 6.65 7.81 7.23 7.52 7.52 7.52 7.82 7.23 8.37 7.23 8.96 7.23 9.54 7.52 9.84 7.52 10.13 7.81 10.42 8.08 10.69 8.08 11.27 8.98 11.56 8.98 11.56 9.27 11.56 9.57 11.27 9.57 11.27 9.83 11.27 10.12 11.27 11 10.98 11 10.98 11.29 10.69 11.29 10.69 11.59 10.69 11.85 10.42 12.15 10.42 12.44 10.42 12.73 10.42 13.02 10.13 13.02 10.13 13.31 10.13 13.61 10.13 13.9 10.13 14.17 9.84 14.46 9.54 14.75 9.25 14.75 9.25 15.04 9.25 15.33 9.54 15.33 9.84 15.33 9.84 15.63 9.84 15.92 10.13 15.92 10.13 16.21 10.42 16.5 10.42 16.77 10.69 17.65 10.98 18.23 11.27 18.52 11.27 18.82 11.56 19.08 11.56 19.38 11.56 19.67 11.56 20.25 11.56 20.55 11.56 20.84 11.56 21.13 11.86 21.4 12.15 21.69 13 22.59 13.58 23.15 13.88 23.44 14.17 23.73 14.46 24.61 14.75 25.17 14.75 25.46 14.75 25.76 15.05 25.76 15.05 26.05 14.75 26.34 14.46 26.34 14.46 26.63 14.75 26.92 14.75 27.22"
        />
      </svg>
    </div>
  )
}

export default ZonaUrbana