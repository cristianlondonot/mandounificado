import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Angostura = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('ANGOSTURA', municipio.toUpperCase())}
          className="cls-1"
          points="67.78 102.47 59.83 93.31 39.09 92.07 29.93 97.89 19.84 87.47 0.31 53.54 0.31 53.24 0 52.62 0.62 52.62 0.93 52.62 1.52 52.31 1.83 51.69 1.83 51.39 0.93 50.48 0.62 49.56 0.62 47.09 2.45 44.34 3.06 43.13 4.28 41.61 4.89 40.07 5.82 38.86 6.72 37.32 7.03 36.11 7.64 34.87 8.26 33.97 9.14 33.02 10.97 31.2 12.51 29.99 14.03 28.75 14.65 27.52 14.96 25.69 14.96 24.17 14.96 23.25 16.17 23.25 17.4 23.86 19.23 24.48 21.06 26 22.6 27.52 23.5 28.75 24.42 29.99 25.94 30.27 27.18 29.68 28.7 28.14 29.93 26.92 30.83 25.69 31.45 24.48 32.37 22.04 32.66 21.11 33.28 20.5 33.59 19.9 34.2 18.96 36.95 15.59 39.4 14.68 40.3 14.38 41.53 14.07 43.36 12.55 44.9 10.1 45.81 7.97 46.11 7.66 46.42 7.04 47.04 7.04 48.87 7.04 51.91 7.35 53.45 7.35 55.58 6.74 57.1 6.74 58.31 6.43 59.53 5.81 61.07 4.27 62.89 1.52 62.89 1.21 64.13 0 64.72 0.61 65.03 1.83 73.59 15.3 73.59 31.2 80.31 41.61 81.52 55.37 73.59 75.87 70.23 95.44 67.78 102.47"
        />
      </svg>
    </div>
  )
}

export default Angostura