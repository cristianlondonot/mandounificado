import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Colmenas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 362.35 220.87"
      >
        <polygon
          fill={getColorByCarencias('COLMENAS', municipio.toUpperCase())}
          className="cls-1"
          points="194.98 85.32 197.86 86.97 210.61 95.61 210.99 96.02 216.75 99.72 230.74 114.13 243.91 120.33 250.08 117.04 255.02 118.24 259.55 115.81 265.72 111.28 271.89 107.95 277.62 105.52 287.91 105.93 294.08 106.75 301.07 107.95 312.6 107.16 316.71 109.6 320.83 115.39 327 119.51 337.7 122.8 351.69 128.15 358.24 127.74 361.98 126.5 362.35 126.92 360.71 128.56 350.04 135.97 318.36 158.26 308.07 178.01 297.78 190.39 291.2 188.3 282.56 185.45 271.48 188.71 258.31 195.74 250.08 208.08 245.14 220.87 237.74 210.55 229.51 209.32 206.91 200.68 195.39 190.39 181.81 181.71 175.22 173.9 166.58 171.43 153.42 171.43 138.6 160.73 134.9 150.41 120.53 138.47 103.66 133.09 94.61 128.56 78.97 127.74 69.09 128.15 61.27 129.8 37 136.38 25.89 135.97 10.28 134.73 0 132.27 5.35 128.15 13.16 123.21 18.89 119.92 24.24 113.34 28.35 105.93 32.47 97.25 36.17 88.2 39.05 80.76 40.7 77.06 42.76 71.71 47.7 62.21 50.16 57.27 51.81 53.98 53.87 51.51 57.57 45.75 60.86 41.6 63.33 38.72 73.62 26 77.73 19.38 81.03 14.44 81.03 14.03 81.44 10.74 81.82 4.53 80.58 0 94.98 7.86 102.8 15.26 112.27 22.67 120.53 26.82 129.55 33.37 142.75 45.34 158.76 63.48 175.22 70.88 185.1 79.53 194.98 85.32"
        />
      </svg>
    </div>
  )
}

export default Colmenas