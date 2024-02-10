import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cupaga = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 224.16 207.83"
      >
        <polygon
          fill={getColorByCarencias('CUPAGA', municipio.toUpperCase())}
          className="cls-1"
          points="224.16 59.35 223.93 59.35 222.7 59.6 222.22 59.84 221.03 60.32 218.35 60.81 216.66 60.56 214.48 60.56 213.29 60.56 211.58 60.56 209.42 60.32 207.48 60.08 205.29 60.08 203.37 60.32 201.19 60.81 199.02 61.53 197.08 61.77 195.63 61.77 194.18 61.77 191.76 62.02 189.82 61.77 187.16 61.53 185.71 61.05 184.26 61.29 181.36 61.05 179.42 61.29 177.24 61.53 176.03 62.02 173.62 62.5 171.92 62.26 170.23 62.26 167.33 62.5 164.91 63.22 162.97 63.47 161.78 64.19 158.88 65.89 157.43 66.63 155.49 67.84 154.04 69.03 152.35 70.02 150.89 70.24 150.17 70.24 148.96 70.5 148.23 70.74 147.27 70.97 145.81 72.18 144.85 72.68 143.4 73.63 141.94 74.86 140.98 76.07 139.77 76.55 138.31 77.28 137.59 77.52 136.86 77.76 135.17 78.49 133.72 80.18 133.48 80.66 133.23 80.66 132.51 81.15 131.3 81.15 130.09 81.39 128.88 80.91 128.15 80.18 126.46 79.45 125.49 79.21 124.53 79.45 123.58 78.73 122.85 78.49 121.64 78.73 120.43 78.97 119.22 79.45 118.26 79.45 117.05 79.7 115.84 80.42 114.63 80.91 113.42 82.36 111.97 83.32 110.76 84.05 109.3 85.5 108.58 86.95 107.13 88.42 105.92 89.63 104.47 91.09 103.5 92.05 102.05 93.02 100.84 93.51 99.39 93.75 97.69 94.23 95.76 94.47 94.55 94.47 93.34 94.47 91.64 94.96 89.95 95.2 88.26 95.2 86.81 94.96 85.13 95.44 83.92 95.44 82.47 95.68 80.54 96.41 79.31 96.89 77.63 97.86 75.7 98.83 74.25 100.54 73.26 101.75 71.83 103.69 70.86 105.14 69.65 107.07 68.44 109.49 68.44 110.22 67.47 111.93 66.26 113.6 65.54 115.32 64.55 116.75 63.82 118.46 62.86 121.37 62.63 123.54 62.39 124.51 62.39 125.72 62.63 127.9 63.1 130.08 63.1 132.01 63.36 134.93 63.36 136.63 63.36 138.56 63.1 140.5 61.89 142.68 61.4 144.39 60.94 147.05 60.19 149.23 59.73 150.44 58.74 152.37 58.28 153.58 57.05 154.55 55.62 156.02 54.65 157.21 53.92 158.92 52.96 160.38 52.23 161.1 51.26 162.29 50.54 164.47 49.31 167.39 48.84 169.57 48.34 171.75 47.88 173.44 47.37 174.89 46.67 176.58 46.18 177.57 45.22 178.54 44.01 179.27 43.04 179.99 42.31 180.72 41.59 181.93 40.86 183.14 40.14 184.59 39.65 186.52 39.17 187.97 38.44 188.72 37.96 189.45 37.47 190.17 36.75 190.9 36.02 191.87 35.78 193.32 35.78 194.77 35.78 197.19 35.78 199.12 35.78 202.27 36.26 203.5 35.06 203.5 33.12 202.51 33.12 202.27 32.64 202.27 29.01 201.78 28.52 201.32 27.07 200.82 26.83 201.06 25.14 201.78 23.93 201.78 22.96 202.51 21.27 202.27 21.02 202.51 20.3 202.99 18.85 202.51 18.6 202.77 16.91 203.96 14.98 203.74 14.98 203.5 14.25 203.74 14.25 203.96 12.56 204.69 11.35 204.69 10.86 204.69 9.65 205.19 8.93 205.68 6.53 206.86 6.04 207.11 3.38 207.83 1.69 206.86 0.96 205.92 0.48 205.19 0 204.47 0.96 204.95 2.9 203.74 3.87 202.05 4.35 201.32 4.11 199.37 4.35 198.88 4.59 198.64 7.01 196.22 7.5 196.46 8.93 195.98 9.65 195.25 11.1 194.77 11.1 192.59 11.1 191.87 12.31 191.87 12.56 190.9 13.28 190.66 13.77 189.45 14.73 189.45 18.36 186.04 20.78 184.59 21.27 183.38 22.72 182.17 22.23 179.99 21.99 179.51 22.72 178.06 23.93 177.33 24.65 175.13 27.8 171.5 28.52 169.33 28.04 167.88 28.04 167.63 29.73 163.26 29.25 161.1 29.97 158.92 29.49 158.42 29.73 157.69 28.77 155.3 29.73 154.55 29.73 150.92 28.77 150.2 28.77 149.47 29.25 149.23 30.7 147.78 30.46 146.08 30.46 144.63 30.7 143.16 29.97 141.95 30.46 138.32 30.46 135.9 31.18 134.21 31.67 131.04 33.12 127.41 32.64 125.24 32.64 125 33.6 122.82 33.6 120.86 33.6 120.64 35.06 118.71 34.81 116.53 33.85 113.36 34.09 111.21 33.85 109.49 33.36 105.38 31.91 103.44 32.15 103.2 32.15 102.23 32.39 100.3 33.36 99.07 34.09 95.2 32.15 92.78 31.67 92.3 32.64 91.57 33.85 89.63 34.33 86.47 34.33 85.26 34.33 82.11 33.85 81.39 33.85 80.66 34.57 79.45 34.81 76.55 36.02 71.95 35.3 68.81 33.36 68.31 33.85 67.84 34.33 65.64 33.6 62.02 33.12 59.6 31.67 51.59 29.73 50.87 29.73 47 28.77 45.06 28.04 44.58 28.04 44.33 29.25 39.96 30.7 38.51 31.91 36.57 32.15 31.71 32.15 31.23 32.64 31.01 35.54 29.8 40.14 27.36 42.07 24.96 44.01 23.49 47.37 23.27 48.34 25.67 51.51 27.14 55.11 25.93 55.84 26.15 58.04 26.63 60.94 25.44 62.39 23.75 63.1 23.49 66.48 21.8 66.26 19.62 66.26 18.65 67.47 16.47 67.21 15.02 67.47 13.57 68.92 12.6 70.11 12.6 71.32 12.36 72.31 12.36 73.04 11.39 73.26 10.65 73.76 10.16 74.97 9.68 76.16 9.2 77.15 8.23 80.03 7.02 81.97 6.05 82.47 6.05 83.42 6.29 84.87 5.81 86.08 6.05 86.32 6.05 86.81 6.53 88.02 6.29 89.47 7.5 90.68 7.02 91.64 7.26 94.06 7.74 95.52 7.26 96.72 7.74 100.11 7.26 101.32 5.57 102.77 5.57 104.95 3.87 107.13 2.42 107.85 0.97 108.34 0.49 110.27 0.24 111.48 0 111.97 0.24 113.66 0.97 114.14 0.97 114.87 2.42 117.77 1.94 119.47 3.39 121.64 3.63 122.61 3.39 124.06 3.87 126.22 4.84 129.12 4.6 129.85 5.33 130.57 5.57 132.27 6.78 134.69 7.26 136.38 8.47 139.28 8.71 142.43 9.92 147.51 10.91 150.17 12.36 151.86 14.78 154.04 16.47 155.25 17.44 156.7 21.07 158.15 24.24 160.33 27.62 162.02 29.8 162.97 31.71 164.18 33.67 165.39 34.88 165.87 35.61 166.6 36.57 167.33 37.06 168.78 38.02 170.23 39.23 171.68 39.96 173.62 40.93 175.07 41.65 176.52 42.14 178.7 42.62 180.15 43.35 182.08 44.33 184.02 45.54 186.68 47 188.61 47.96 189.58 48.69 191.03 49.66 192.73 50.38 194.42 51.35 196.36 51.83 198.29 52.32 200.47 52.32 201.92 52.56 203.37 52.8 205.53 53.53 207.24 54.01 209.16 54.5 211.11 55.24 213.29 55.24 215.21 55.73 217.16 55.97 219.08 56.93 220.53 57.42 222.48 58.39 224.16 59.35"
        />
      </svg>
    </div>
  )
}

export default Cupaga