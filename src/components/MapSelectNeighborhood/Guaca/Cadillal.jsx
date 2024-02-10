import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cadillal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91.3 197.03"
      >
        <polygon
          fill={getColorByCarencias('CADILLAL', municipio.toUpperCase())}
          className="cls-1"
          points="45.41 0 46.14 0.47 47.35 1.2 47.6 1.2 49.05 1.93 50.27 2.67 51.24 3.38 51.72 3.87 52.45 4.62 52.7 4.62 52.7 4.86 53.43 5.35 53.67 5.59 53.91 5.59 54.4 5.83 54.64 6.07 55.37 6.56 56.1 6.8 57.07 7.53 57.55 8.02 58.04 8.5 58.28 9.23 58.28 9.48 58.28 10.2 58.28 10.93 58.53 11.18 59.01 11.42 59.01 11.66 59.5 11.9 59.5 12.39 59.5 12.88 59.5 13.12 59.74 13.12 60.21 13.36 60.45 13.36 60.94 13.36 61.42 14.09 61.91 14.09 62.39 14.58 62.88 14.82 63.36 15.33 63.85 15.57 64.58 15.81 64.82 15.81 66.52 17.51 71.87 22.13 74.05 25.77 74.3 26.52 75.75 28.22 76.48 29.92 77.45 30.89 78.18 32.84 77.21 36.24 76.48 37.69 77.45 39.64 78.18 40.12 79.4 40.63 80.13 41.6 81.1 41.6 82.55 42.57 84.5 45.47 85.47 46.44 86.44 46.7 88.14 46.7 89.6 47.67 91.06 49.13 91.3 49.86 91.3 51.32 90.81 51.56 90.57 52.78 90.57 53.5 90.81 54.72 90.81 55.93 89.6 58.36 89.36 59.84 89.84 61.05 90.33 62.51 89.36 64.21 89.6 64.94 89.84 66.16 89.6 67.13 89.84 67.86 89.6 68.58 89.6 68.83 90.33 71.03 89.11 72.25 89.36 73.95 89.36 74.92 88.87 78.56 88.14 80.27 87.9 80.51 88.38 81.24 88.63 83.2 87.41 84.41 87.66 85.37 86.93 87.82 86.93 89.01 87.17 91.22 86.93 92.67 84.98 94.37 84.01 97.29 83.04 98.26 83.04 98.5 83.04 99.72 82.8 101.66 82.55 102.63 83.04 103.61 82.8 105.81 82.55 105.81 82.8 107.03 81.34 108.24 81.1 108.24 81.58 109.46 81.34 111.4 80.37 112.37 80.61 112.86 81.58 113.1 82.55 115.29 81.83 117.01 81.58 118.46 81.1 119.44 80.37 120.41 80.61 121.14 80.61 122.59 80.13 123.08 80.37 123.56 80.13 125.75 79.15 126.24 79.64 127.45 79.15 128.91 78.91 129.17 79.4 130.37 79.4 132.09 78.67 133.28 78.42 134.52 77.94 134.98 77.7 136.95 76.72 138.89 76.48 139.62 76.24 140.83 75.02 141.56 74.78 142.53 74.78 143.26 74.54 144.23 74.78 145.93 75.02 146.66 73.81 146.9 73.81 147.63 74.3 147.88 74.78 151.78 73.32 153.73 73.08 153.97 73.32 154.94 71.87 157.13 71.62 158.1 70.65 159.56 70.41 161.52 70.17 164.68 69.44 166.62 67.74 166.86 67.74 168.08 67.74 170.75 67.25 173.44 63.85 174.17 63.61 174.17 63.12 174.39 63.36 175.12 63.61 176.58 64.09 177.31 65.06 177.82 66.52 180 65.55 182.19 67.01 184.13 65.79 185.83 65.55 186.8 64.34 188.02 64.34 188.26 64.58 190.2 64.09 192.88 64.09 193.36 65.06 194.84 63.61 197.03 60.45 196.05 58.28 195.81 54.88 196.54 52.94 195.81 51.48 195.08 46.62 194.84 44.68 194.11 43.71 192.63 43.47 191.9 42.74 192.15 41.28 192.63 40.31 192.39 38.36 192.88 36.91 192.39 35.21 190.69 32.53 188.02 31.32 187.29 30.83 187.29 29.13 187.53 27.92 187.05 25.98 186.56 25.25 186.32 23.79 185.35 23.3 185.59 21.36 186.07 18.47 184.37 17.74 183.65 15.06 181.46 15.79 180 16.28 179.01 20.41 176.58 23.06 170.99 22.57 168.56 21.36 166.86 21.85 164.68 23.79 162.49 25.98 159.8 26.7 155.43 26.95 154.7 26.46 149.84 27.68 145.2 26.7 143.99 23.06 142.78 19.44 140.59 16.52 137.92 11.66 133.06 10.94 132.33 6.56 125.75 3.89 122.35 2.92 121.14 1.22 113.58 0 103.85 0.73 99.72 1.22 95.83 5.11 90.22 5.83 89.27 8.75 86.34 10.45 85.87 15.55 84.41 20.17 82.69 24.03 79.78 25.49 75.89 25.49 70.77 25.98 66.4 28.89 62.51 35.94 59.84 40.55 56.42 44.19 51.8 46.62 45.47 47.84 38.2 47.6 31.62 43.95 25.77 43.71 16.3 42.74 7.29 42.98 6.56 43.47 2.19 43.71 1.93 43.95 0 45.41 0"
        />
      </svg>
    </div>
  )
}

export default Cadillal