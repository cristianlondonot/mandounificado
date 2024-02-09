import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaAguadita = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 316.26 160.89"
      >
        <polygon
          fill={getColorByCarencias('LA AGUADITA', municipio.toUpperCase())}
          className="cls-1"
          points="316.26 36.77 314.49 38.54 313.45 39.6 308.86 40.66 302.14 42.79 294.71 43.15 288.04 45.26 281.68 51.62 276.39 57.97 272.5 63.29 268.26 67.18 262.27 72.12 259.44 78.16 257.68 83.79 258.38 89.45 258.74 91.24 258.74 91.58 259.44 94.77 258.01 97.24 249.55 98.64 242.83 100.07 237.92 102.53 236.16 103.6 232.97 105.36 227.33 108.21 222.01 114.57 218.15 118.44 213.19 121.63 208.96 125.89 206.13 131.54 203.3 135.77 200.47 140.03 198.37 142.86 196.94 144.99 191.65 150.98 185.29 157.7 183.19 160.89 182.49 160.53 174.02 155.21 164.5 152.38 151.42 149.22 144.36 147.09 136.6 144.26 125.67 140.39 117.18 141.79 109.06 137.54 98.83 136.48 90.71 135.07 80.12 132.58 70.57 129.78 58.6 126.59 49.78 125.18 44.82 125.89 38.83 127.65 32.11 129.78 28.24 133.65 22.58 135.07 19.75 134.37 16.92 134.01 11.65 131.18 7.42 128.71 2.47 125.52 0 124.12 18.69 116.34 30.34 106.76 38.47 101.47 44.46 97.24 50.48 93.71 55.78 89.45 61.43 85.22 68.49 81.67 74.1 79.2 79.06 77.44 86.12 77.44 93.88 77.8 97.07 78.5 99.54 81.33 100.6 83.79 100.94 84.16 104.13 87.32 108.36 87.69 108.72 87.69 113.32 85.56 117.18 83.79 119.31 82.03 119.68 81.67 122.14 82.03 126.01 84.16 129.18 84.16 129.88 83.46 132.01 81.33 133.41 75.67 134.83 71.42 135.54 71.05 138.7 68.95 142.59 66.48 143.3 66.48 144.72 63.66 145.42 62.95 147.89 57.64 148.59 56.91 151.08 53.04 151.08 50.55 151.78 48.09 152.12 47.38 152.48 45.98 154.95 41 157.08 37.83 159.18 36.41 160.24 36.07 165.54 34.64 168.03 33.24 169.09 32.88 170.86 30.41 171.2 29.71 171.56 28.99 173.32 28.99 175.09 28.99 180.72 28.65 184.25 28.28 189.55 26.52 193.41 24.39 196.61 22.97 198.01 24.39 198.37 28.65 198.01 30.75 198.01 31.48 198.01 33.58 199.77 35.34 202.96 32.88 203.3 32.54 203.66 32.18 206.49 29.71 211.09 28.28 213.89 28.65 215.66 28.65 219.91 27.25 220.61 26.52 223.44 23.67 223.78 23.33 224.51 21.9 226.61 17.67 226.97 16.97 228.74 13.08 230.86 11.31 231.56 10.97 233.33 10.27 234.03 10.27 235.8 7.76 236.86 4.93 238.6 3.17 242.13 2.83 244.26 0.7 246.36 0 249.55 1.4 251.66 2.13 254.15 1.76 256.25 1.76 257.68 2.13 259.78 3.17 260.84 5.29 260.84 5.66 264.37 7.06 266.14 7.42 266.5 7.42 268.26 9.52 269.67 13.08 270.37 13.8 272.5 14.84 277.45 13.8 281.68 12.01 284.15 12.01 287.34 11.31 289.81 14.5 291.93 18.37 294.71 20.5 295.44 20.5 297.2 20.86 300.37 21.9 301.8 25.46 302.14 26.16 302.84 28.99 304.6 30.75 307.09 31.11 309.2 31.48 310.26 31.81 310.96 32.54 311.66 33.58 313.79 36.07 316.26 36.77"
        />
      </svg>
    </div>
  )
}

export default LaAguadita