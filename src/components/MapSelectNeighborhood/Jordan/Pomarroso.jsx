import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pomarroso = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('POMARROSO', municipio.toUpperCase())}
          className="cls-1"
          points="66.01 142.98 65.52 140.3 63.55 135.67 63.08 134.45 61.38 132 58.45 127.61 52.61 122.23 43.57 115.16 42.86 114.68 33.84 108.32 27.27 104.18 25.8 100.77 25.56 98.09 25.32 96.63 24.59 93.7 24.59 93.22 24.59 88.57 21.66 84.67 17.52 83.45 16.79 83.21 16.55 82.96 13.38 82.23 4.36 80.77 0 79.55 10.94 65.38 35.31 34.42 48.22 22.94 58.19 16.61 67.69 10.5 75.24 4.89 81.34 0 78.65 10.25 76.71 20.24 76.46 23.43 75.97 29.28 75.24 37.83 75.02 40.51 74.78 45.16 75.02 51 75.73 53.93 78.92 59.8 82.8 65.16 85.23 68.32 87.18 71.73 89.38 76.61 91.08 81.01 92.3 86.13 93.27 92 93.76 94.92 94.98 99.31 95.95 103.96 96.68 108.81 97.42 112.24 97.9 117.36 97.9 121.5 97.9 126.88 97.66 132.48 97.17 136.64 94.74 136.4 89.13 137.62 84.5 138.84 79.87 140.06 72.83 142.01 68.42 142.74 67.47 142.74 66.01 142.98"
        />
      </svg>
    </div>
  )
}

export default Pomarroso