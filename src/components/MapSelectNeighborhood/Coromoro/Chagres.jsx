import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chagres = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 69.86 86.12"
      >
        <polygon
          fill={getColorByCarencias('CHAGRES', municipio.toUpperCase())}
          className="cls-1"
          points="69.86 0.54 69.86 0.81 69.86 4.84 65.83 10.76 61.8 19.92 58.31 25.57 55.61 33.92 50.79 41.98 46.49 50.87 39.49 60.01 32.26 68.09 27.42 73.74 23.66 78.04 21.5 84.23 19.88 85.04 14.25 86.12 12.36 86.12 9.95 85.85 6.44 81.82 4.84 76.15 4.03 68.63 3.76 60.28 3.49 51.68 1.89 43.6 1.35 41.17 0.81 39.28 0 33.65 0 33.11 0.81 25.84 0.27 22.87 1.08 17.76 1.62 18.3 5.38 22.35 12.09 24.49 18.28 25.57 22.58 24.22 25.26 22.6 30.91 19.11 34.92 18.03 38.41 15.33 41.38 13.19 41.92 12.92 44.6 11.3 47.28 8.89 48.9 8.62 53.47 9.16 56.42 8.35 60.2 6.73 62.34 6.19 64.5 3.76 65.29 1.08 67.45 0 69.86 0.54"
        />
      </svg>
    </div>
  )
}

export default Chagres