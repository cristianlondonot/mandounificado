import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Plazuela = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 174.71 100.13"
      >
        <polygon
          fill={getColorByCarencias('PLAZUELA', municipio.toUpperCase())}
          className="cls-1"
          points="113.56 2.48 119.35 7.44 132.6 8.71 135.91 8.71 140.83 6.61 142.9 9.12 146.62 14.5 156.95 35.6 174.71 59.57 174.71 59.98 170.58 60.39 157.36 63.29 149.92 68.28 143.31 73.24 133.02 75.72 124.75 76.96 117.73 75.72 109.02 74.48 97.89 77.37 90.01 84.84 81.78 93.11 77.23 98.89 64.01 100.13 56.57 96.83 54.51 94.76 43.76 85.67 42.52 80.68 39.22 72 30.13 58.74 14.43 43.83 5.37 37.22 0 29.4 4.54 27.72 8.64 21.52 9.88 21.93 25.17 22.76 38.81 21.93 54.92 22.35 89.59 5.37 104.88 0 111.12 0.83 113.56 2.48"
        />
      </svg>
    </div>
  )
}

export default Plazuela