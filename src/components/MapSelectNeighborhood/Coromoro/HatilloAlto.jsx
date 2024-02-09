import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const HatilloAlto = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 101.19 106.32"
      >
        <polygon
          fill={getColorByCarencias('HATILLO ALTO', municipio.toUpperCase())}
          className="cls-1"
          points="101.19 71.07 100.08 74.92 99.25 80.43 98.7 85.12 97.34 90.08 98.7 95.31 100.36 98.35 99.81 101.37 98.98 104.94 96.24 106.32 93.22 104.66 87.43 101.64 82.48 98.6 76.72 96.14 70.41 96.14 62.69 94.75 54.99 93.92 49.76 93.1 42.34 88.14 39.03 79.87 39.03 74.37 37.41 64.46 35.48 59.78 32.18 56.19 27.51 51.79 23.66 49.58 18.43 44.9 12.09 40.76 5.78 36.63 2.48 33.06 0 27.26 0.55 18.18 0.55 10.74 1.1 7.72 3.57 0 10.73 2.75 15.13 5.23 20.62 8.83 31.91 12.12 36.86 12.67 45.36 15.69 54.99 19.26 61.6 24.52 69.02 33.61 72.87 44.07 75.61 52.62 81.95 60.89 86.61 66.37 90.45 69.41 97.62 72.45 101.19 71.07"
        />
      </svg>
    </div>
  )
}

export default HatilloAlto