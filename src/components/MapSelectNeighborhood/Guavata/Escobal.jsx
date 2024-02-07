import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Escobal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('ESCOBAL', municipio.toUpperCase())}
          className="cls-1"
          points="66.52 2.92 64.47 11.7 64.18 19.87 65.06 26.88 66.81 33.32 67.39 39.45 69.14 44.7 71.18 48.81 75.56 51.44 77.61 51.44 79.06 47.33 78.77 42.66 79.94 38.86 88.11 38.86 89.57 42.07 89.57 49.4 91.32 57.57 93.95 59.32 94.53 70.43 95.09 72.77 95.67 76 98.01 78.63 100.64 82.13 97.16 85.34 95.41 89.72 94.22 96.14 93.95 101.68 94.22 107.84 94.8 113.38 94.8 117.2 93.95 120.7 91.01 125.37 86.92 131.21 80.23 133.54 73.81 135.02 69.14 136.17 62.43 139.11 58.05 143.2 52.8 146.11 44.92 149.03 38.5 151.66 30.64 155.45 23.35 160.15 19.55 163.07 19.55 159.56 20.14 155.45 19.26 154.58 17.22 154.29 16.05 152.24 16.34 150.2 15.76 144.07 15.18 142.03 12.84 139.38 12.84 137.36 13.13 135.61 11.97 133.54 9.92 132.08 1.75 124.2 2.04 121.58 3.21 118.66 4.67 116.61 3.79 109.59 0.29 106.67 0 103.75 2.92 101.39 5.84 97.3 7.3 94.09 8.76 92.05 12.26 84.46 14.59 79.77 14.59 76.27 13.43 72.77 14.01 71.02 14.59 69.26 14.3 66.35 14.59 64.3 17.22 59.03 21.6 55.52 23.64 53.77 24.52 50.56 25.68 47.33 26.85 45.58 30.94 37.41 37.92 26.29 39.67 21.94 42.88 15.49 46.96 9.95 47.84 6.13 47.55 3.8 52.51 0 58.34 1.75 66.52 2.92"
        />
      </svg>
    </div>
  )
}

export default Escobal