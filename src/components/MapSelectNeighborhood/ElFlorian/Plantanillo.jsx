import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Plantanillo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 129 211.62"
      >
        <polygon
          fill={getColorByCarencias('PLANTANILLO', municipio.toUpperCase())}
          className="cls-1"
          points="127.34 0.33 127.67 8.97 127.67 9.65 129 46.84 129 49.85 129 50.83 127.34 57.47 126.68 70.1 126.68 80.08 121.03 87.04 118.06 94.68 115.4 101.66 111.08 108.3 105.45 115.28 105.45 129.9 107.11 139.18 108.44 145.51 111.75 153.8 112.74 158.8 116.06 163.45 118.72 165.76 119.05 191.02 120.38 200.64 125.35 206.97 126.36 207.62 122.04 207.62 111.75 207.62 102.13 207.95 96.15 207.95 85.56 207.62 77.27 207.62 71.31 208.96 63.34 207.3 60.35 207.3 57.71 209.28 55.7 211.62 52.06 211.27 47.76 208.28 43.76 206.29 39.79 204.31 34.83 203.65 32.85 201.66 30.19 199.31 27.54 198.31 25.21 197.65 20.23 194.33 15.26 184.36 11.94 175.74 7.64 167.75 7.29 150.16 5.3 145.18 1.98 139.86 0 130.56 1.33 119.6 1.66 116.27 3.32 114.28 5.98 110.96 12.27 110.96 21.56 113.3 32.17 115.94 35.49 115.61 41.78 117.94 45.09 119.26 46.75 120.91 59.7 120.91 66.33 116.27 72.29 110.63 75.61 105.31 79.93 99.68 81.26 96.69 85.89 88.37 86.57 86.04 87.55 84.38 88.55 79.4 90.87 76.41 90.87 65.78 90.87 63.45 90.87 63.12 90.54 59.48 87.55 9.65 87.22 1.99 94.51 0 94.84 0 101.47 0 107.43 1.01 116.06 1.01 125.68 0.33 127.34 0.33"
        />
      </svg>
    </div>
  )
}

export default Plantanillo