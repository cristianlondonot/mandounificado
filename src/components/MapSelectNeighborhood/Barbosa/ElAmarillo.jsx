import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElAmarillo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 277.25 310.62"
      >
        <polygon
          fill={getColorByCarencias('EL AMARILLO', municipio.toUpperCase())}
          className="cls-1"
          points="273.69 38.02 277.25 47.91 277.25 53.88 275.67 66.15 273.3 81.22 272.11 93.09 268.15 106.58 264.2 116.07 258.26 150.17 255.52 165.6 253.15 173.52 247.21 189.38 236.53 187.79 227.43 188.58 212 192.94 209.23 184.63 200.13 179.09 198.94 182.65 197.36 199.7 200.13 203.26 203.29 206.03 203.29 209.99 212.39 215.95 213.97 219.91 212.79 224.66 207.25 228.22 206.85 248.01 210.41 253.58 204.08 261.89 204.87 270.23 205.27 276.56 203.29 278.94 199.33 277.35 193 274.19 186.7 274.19 188.68 278.54 193.79 281.31 188.29 291.24 189.08 296.78 187.1 298.36 181.16 300.73 179.19 306.27 174.44 310.62 166.52 309.04 164.15 297.17 161.78 294.01 155.84 288.07 152.67 285.3 145.55 278.54 138.43 276.56 129.72 272.6 121.84 267.46 113.93 264.66 106.41 260.7 102.06 259.51 99.68 256.74 95.73 255.95 94.94 252.39 93.35 248.01 90.58 245.24 89.4 244.84 85.04 241.67 81.48 237.32 77.92 238.11 75.55 242.47 74.36 247.61 73.57 253.18 70.4 252 64.07 245.24 58.14 239.7 52.2 233.76 46.66 227.82 43.89 225.85 45.87 220.7 43.49 215.95 35.98 206.03 29.25 195.74 27.67 193.73 21.73 188.58 20.15 187.4 16.59 185.81 10.65 184.63 0 178.69 12.23 177.51 37.95 169.56 39.93 164.41 39.93 155.71 38.75 149.38 35.58 145.82 32.02 143.44 27.67 141.46 26.08 137.08 35.58 131.14 40.72 119.63 49.83 110.53 51.8 105.78 53.78 98.23 56.55 97.05 60.91 99.02 75.55 86.76 79.9 88.34 84.65 87.95 87.42 85.57 89.79 80.82 89.79 77.66 91.37 74.1 94.14 73.7 96.12 72.91 96.12 72.51 94.94 69.74 100.08 66.54 106.01 61.8 109.97 57.44 114.32 52.7 119.07 52.3 122.24 54.67 127.38 53.09 132.89 43.96 140.41 34.06 140.41 32.48 139.22 8.31 139.22 4.75 143.18 3.17 148.32 4.35 154.26 5.94 161.38 5.54 166.92 3.96 170.88 3.17 178 4.35 183.54 3.17 187.1 0.4 195.38 0 202.89 2.38 207.64 5.15 211.2 7.52 220.31 9.5 223.08 13.06 225.45 19.79 229.41 20.97 236.93 21.76 242.07 18.99 245.63 20.18 245.23 24.93 249.59 27.3 256.28 28.89 259.84 29.28 263.01 30.47 265.78 28.49 268.94 32.48 268.94 35.65 269.34 37.23 271.71 38.81 273.69 38.02"
        />
      </svg>
    </div>
  )
}

export default ElAmarillo