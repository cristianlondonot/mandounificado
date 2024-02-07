import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoCruces = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('ALTO CRUCES', municipio.toUpperCase())}
          className="cls-1"
          points="137.07 9.36 138.93 12.17 141.11 15.29 142.06 17.16 142.66 20.3 142.98 21.22 128.33 34.02 120.22 25.89 116.81 38.7 104.95 49.32 96.88 38.7 90.03 59.9 87.54 68.03 75.99 70.52 62.92 65.85 48.9 64.59 42.05 76.16 38.61 89.23 31.45 105.49 7.14 76.16 0 56.48 3.41 41.19 2.47 28.39 19.93 35.28 42.05 25.89 57.3 14.35 81.92 0.31 82.24 0 83.16 0.94 84.42 2.49 84.42 2.8 86.28 2.49 87.83 3.12 90.03 3.73 91.58 4.38 93.13 4.38 94.39 5.32 94.7 7.18 95 7.81 95.94 8.44 96.25 8.13 97.8 7.81 99.38 6.87 100 6.55 101.53 6.24 102.77 5.63 104.34 5.93 105.58 5.63 106.84 4.69 108.07 4.38 108.39 4.38 109.96 5.32 110.25 5.63 111.51 6.87 112.43 8.13 113.06 8.73 113.37 8.73 114.32 9.05 114.92 10.3 115.55 12.17 116.49 13.72 118.04 13.72 119.3 14.35 120.54 15.29 121.8 15.9 122.72 15.61 123.35 15.29 124.6 14.35 124.9 14.03 125.52 13.11 127.1 13.11 128.02 13.43 128.96 13.72 130.2 14.03 131.45 13.11 131.45 12.8 132.69 11.54 133.63 10.3 134.87 9.36 135.5 9.36 136.44 9.36 137.07 9.36"
        />
      </svg>
    </div>
  )
}

export default AltoCruces