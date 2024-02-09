import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanVicente = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 261.29 167.1"
      >
        <polygon
          fill={getColorByCarencias('SAN VICENTE', municipio.toUpperCase())}
          className="cls-1"
          points="27.6 23.37 27.6 23.75 27.98 24.53 27.98 25.32 28.77 26.87 29.94 28.42 31.1 30.39 32.65 31.94 34.6 33.9 37.32 35.85 39.27 37.78 41.99 39.73 43.94 41.28 45.49 43.64 47.44 45.56 49.39 47.14 50.94 47.92 53.27 49.88 54.82 51.83 58.32 55.31 62.23 58.05 63.4 59.21 64.56 59.97 66.11 61.17 68.04 62.33 68.8 63.09 70.37 63.47 71.54 64.29 73.47 64.69 76.59 66.24 83.97 68.95 85.92 69.74 88.26 71.67 90.59 73.24 93.3 75.19 95.64 76.34 98 77.91 101.5 79.08 104.59 80.62 110.05 82.6 114.33 84.55 120.17 85.32 122.1 85.32 125.22 84.55 128.34 83.77 130.24 83.39 132.98 82.22 134.53 80.62 137.24 78.69 138.81 76.74 138.81 75.19 141.15 73.62 142.7 72.84 144.27 71.67 146.58 70.91 148.53 70.53 150.48 69.36 151.65 68.57 153.6 67.41 155.15 66.62 157.08 65.45 158.65 64.69 160.2 63.47 161.37 62.33 163.32 60.76 165.27 59.59 167.99 58.43 171.11 58.05 174.61 56.09 179.66 55.31 182.37 55.71 185.11 56.09 187.83 56.88 191.3 57.26 194.8 58.43 197.14 59.59 199.47 60.38 201.42 61.17 204.14 61.17 205.68 59.21 207.26 57.26 208.02 55.31 208.02 53.76 209.21 51.42 209.59 49.47 208.42 47.14 206.47 44.4 204.92 42.85 204.92 40.9 205.3 38.56 206.47 37.78 208.42 37.4 209.59 36.23 210.76 35.06 211.14 33.51 212.31 32.35 213.88 31.18 215.81 28.85 217.38 28.04 218.14 26.87 219.71 25.32 220.47 24.53 227.1 28.85 229.05 28.85 231.38 29.23 233.72 29.61 237.98 31.94 240.31 33.9 241.88 35.85 243.81 37.78 244.98 39.73 245.77 41.68 246.93 43.64 248.89 47.54 250.81 49.88 252.39 51.04 253.91 52.59 256.24 55.71 258.58 57.66 261.29 60.38 260.91 61.55 260.53 61.93 259.74 62.33 257.41 63.09 255.86 63.09 254.29 63.88 250.43 63.88 248.89 64.69 248.1 65.07 246.55 65.83 246.55 67 247.31 69.74 246.15 72.07 246.15 73.62 246.15 76.74 246.15 79.08 246.15 81.03 246.15 82.98 244.6 86.1 243.05 88.03 240.72 89.2 238.76 89.2 236.81 89.2 234.88 90.39 234.1 91.56 233.31 92.72 231.76 94.65 230.98 95.44 229.81 98.56 229.05 101.3 228.64 102.46 227.48 102.85 224.76 102.85 222.43 103.25 219.71 103.63 217.76 103.63 214.26 104.01 213.88 99.72 211.93 99.72 209.21 100.92 207.64 101.3 206.09 102.08 204.14 102.46 203.38 102.46 199.85 105.18 197.92 105.58 194.8 105.58 194.02 105.58 192.09 105.58 189.78 105.58 187.83 106.35 185.87 107.13 184.32 107.92 182.37 109.47 179.66 110.63 178.49 111.8 176.54 112.97 173.82 113.75 170.7 114.92 167.2 115.68 164.49 116.47 161.77 117.25 159.82 118.04 158.25 118.04 156.32 118.83 154.37 121.54 151.27 125.04 149.7 127 148.15 129.33 146.58 130.88 144.65 133.62 141.94 135.54 140.36 137.9 136.08 144.52 134.91 146.48 131.41 151.15 130.24 152.69 127.55 155.84 126.38 158.17 124.84 160.89 123.67 162.05 120.93 162.84 118.22 164.01 117.05 164.39 114.72 166.34 113.55 167.1 113.17 166.72 112.76 165.17 112.38 164.01 112.38 163.22 113.17 162.43 113.55 160.51 112.76 159.34 112.38 158.93 111.21 157.77 110.05 157.01 107.33 155.43 106.17 155.05 105.38 155.43 104.59 155.84 103.83 157.77 103.43 159.34 102.67 160.1 101.5 160.1 99.93 159.34 98.38 158.55 97.59 158.17 97.59 157.39 98 156.6 98.38 155.43 98.76 153.89 98.38 151.91 98 150.74 97.59 149.98 96.43 149.19 95.26 148.41 94.47 147.64 94.09 146.48 93.3 145.69 92.16 144.91 91 144.52 90.59 143.36 90.59 142.19 90.59 140.24 90.59 138.69 90.21 136.74 89.83 135.16 89.04 133.62 88.66 132.83 87.88 132.45 86.3 131.28 84.76 130.12 83.97 129.71 83.21 128.54 82.42 127 82.04 125.83 81.66 125.45 81.66 124.28 80.49 123.11 78.54 122.71 76.97 122.71 76.21 121.95 75.42 121.16 75.42 119.99 75.42 118.83 75.04 117.63 74.63 116.85 74.63 116.09 75.04 114.92 75.42 113.35 75.8 111.8 76.59 111.42 76.59 110.25 75.8 109.47 75.04 109.09 74.25 108.68 73.09 109.09 71.92 109.09 69.97 109.47 68.04 109.47 66.11 109.09 64.16 108.3 62.99 107.92 62.23 107.51 61.44 106.35 60.66 105.58 59.49 104.01 59.11 102.46 59.11 102.08 58.73 100.13 57.56 92.32 56.77 88.82 56.39 84.94 55.99 81.79 55.61 81.03 54.82 78.69 50.94 72.84 50.15 72.07 48.99 70.91 47.44 69.36 46.27 68.19 45.49 66.62 44.32 65.45 43.15 64.29 41.61 62.71 40.82 61.55 39.65 60.38 38.48 59.21 37.32 58.05 36.53 57.26 35.77 56.09 34.98 54.54 34.6 53 34.2 51.83 33.44 51.04 32.65 50.26 31.86 49.09 31.1 48.3 30.32 46.76 29.15 44.02 27.98 42.85 27.6 41.28 25.27 37.78 24.48 36.23 24.1 35.44 23.72 33.51 22.93 32.35 20.98 30.78 20.19 30.01 19.03 28.85 17.86 28.04 17.1 27.65 16.69 27.65 15.53 27.65 14.36 28.04 13.19 28.42 12.43 28.85 11.65 28.85 11.65 28.42 11.65 28.04 11.26 26.87 11.26 25.7 10.86 24.92 10.48 24.15 8.93 21.82 7.76 20.25 6.6 18.7 5.81 17.91 4.64 17.91 3.88 17.91 2.34 17.91 1.55 17.53 0.38 17.15 0 16.37 0 15.58 0.38 14.82 3.88 8.55 4.29 8.17 5.43 7.79 7.36 7.39 8.53 7.01 9.69 6.22 10.48 5.46 10.48 4.67 10.48 3.89 9.69 2.72 9.31 1.55 8.93 0.79 8.93 0 9.69 0.38 10.48 0.79 10.86 1.55 10.86 1.96 11.26 2.34 11.65 2.34 12.03 2.72 12.43 2.72 12.43 3.12 11.65 3.5 11.65 3.89 12.03 4.29 12.03 4.67 12.43 4.67 12.81 5.05 12.81 5.84 12.81 6.62 12.43 7.01 12.03 8.17 11.65 9.34 10.86 10.51 10.1 11.32 10.1 12.08 10.1 12.87 10.48 14.03 10.86 14.41 11.26 14.82 12.03 14.82 12.43 14.82 12.81 14.41 12.81 13.65 13.19 13.25 13.6 13.25 14.36 14.03 14.77 14.82 15.53 15.2 16.31 15.58 17.1 15.99 17.48 16.37 17.86 17.15 18.27 17.53 19.03 18.32 19.81 18.7 20.6 19.49 20.98 19.87 21.77 20.65 23.31 21.03 24.1 21.41 25.65 21.41 26.05 21.82 27.2 22.99 27.6 23.37"
        />
      </svg>
    </div>
  )
}

export default SanVicente