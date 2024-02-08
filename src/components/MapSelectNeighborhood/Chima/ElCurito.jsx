import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCurito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 213.62 246.47"
      >
        <polygon
          fill={getColorByCarencias('EL CURITO', municipio.toUpperCase())}
          className="cls-1"
          points="115.49 66.95 149.49 88.23 192.36 107.19 207.44 113.4 199.33 131.19 204.72 157.1 213.62 179.93 209.37 181.89 204.34 184.2 200.47 184.59 194.29 184.59 192.74 184.59 190.81 184.59 190.43 185.35 190.05 186.14 188.11 188.83 186.95 189.21 184.25 190.76 179.22 191.93 178.07 192.7 175.76 193.87 173.42 197.35 171.1 202.38 170.34 203.93 169.93 204.7 169.17 207.42 169.17 210.11 166.48 213.98 166.09 214.74 163.37 220.56 162.61 220.94 161.06 223.66 160.68 224.05 156.46 226.36 152.97 228.7 152.21 229.46 150.66 233.71 149.49 239.53 147.18 241.84 146.41 242.63 142.93 242.63 139.06 240.29 136.34 239.91 135.96 240.29 133.65 242.22 129.78 244.16 124.77 246.47 124.37 246.47 120.12 245.71 116.64 242.63 116.64 242.22 115.11 239.53 112.39 236.43 109.31 235.66 107.38 233.33 105.45 231.39 102.35 230.61 99.25 229.46 97.34 226.36 96.55 222.88 95.02 219.8 92.71 219.8 89.63 220.18 86.53 220.18 84.6 217.1 83.83 213.98 83.05 211.28 79.18 211.66 76.1 210.49 73.79 208.18 71.86 205.08 69.14 205.08 66.44 204.7 64.13 202.76 61.81 199.28 61.03 199.28 59.09 199.28 54.47 199.69 52.15 197.35 49.81 193.46 47.5 191.53 44.02 189.21 41.32 186.14 39.77 183.42 36.29 181.48 33.59 179.93 31.68 177.21 28.99 176.07 25.5 174.52 22.4 173.35 20.47 170.65 19.32 170.27 18.94 170.27 17.01 169.1 15.84 167.93 13.53 166 11.98 164.09 10.83 162.9 10.43 159.8 10.04 155.93 7.73 152.86 5.42 149.75 5.03 146.68 5.8 142.79 5.42 139.69 4.63 135.82 2.7 132.74 0 130.41 0 127.69 1.17 124.61 1.17 120.72 1.93 116.47 2.7 112.23 3.48 107.96 3.48 103.33 4.25 98.68 5.42 95.98 6.97 91.71 6.97 88.61 6.97 84.36 7.73 82.43 7.73 78.18 7.35 75.08 5.8 71.19 4.25 66.95 5.03 63.46 5.8 58.45 6.18 53.78 6.56 47.98 6.97 41.8 8.49 37.53 8.9 32.9 8.9 28.25 8.11 25.17 7.35 22.07 7.35 19.35 6.18 15.1 4.63 10.45 3.48 7.37 1.93 3.87 1.17 2.32 10.04 0 25.12 3.49 44.02 17.04 59.86 35.6 87.7 55.33 115.49 66.95"
        />
      </svg>
    </div>
  )
}

export default ElCurito