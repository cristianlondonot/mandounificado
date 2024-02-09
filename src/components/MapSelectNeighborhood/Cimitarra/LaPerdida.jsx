import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPerdida = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 107.73 213.7"
      >
        <polygon
          fill={getColorByCarencias('LA PERDIDA', municipio.toUpperCase())}
          className="cls-1"
          points="46.41 3.55 46.05 4.96 44.99 6.03 43.93 7.45 43.57 8.51 42.86 9.57 41.44 11.37 40.73 12.08 40.38 12.79 40.38 13.5 41.8 14.21 43.22 15.27 44.63 16.69 45.7 17.4 46.76 18.46 47.82 19.88 48.53 20.95 49.24 21.66 50.66 22.01 51.72 20.95 52.43 20.59 53.14 20.24 53.85 20.59 54.91 20.59 55.27 19.53 55.27 18.82 55.62 17.76 56.33 18.11 57.4 18.11 58.1 18.11 59.17 18.11 59.52 18.46 59.88 19.88 60.23 20.95 60.23 22.01 60.23 23.43 59.17 24.14 58.46 23.78 58.1 24.14 57.75 24.85 57.4 25.2 57.4 25.91 58.46 26.65 58.81 26.97 57.75 27.71 57.04 28.42 57.4 29.45 57.75 30.16 57.4 30.9 55.62 32.32 54.91 33.35 54.56 34.09 54.56 35.13 55.98 35.13 57.04 35.51 57.4 34.8 57.75 33.71 58.81 34.8 58.46 36.22 58.1 36.9 57.75 37.61 58.81 37.99 59.17 36.22 59.52 35.13 59.88 34.8 60.59 35.13 61.3 35.13 62.36 35.83 63.42 37.61 64.13 38.7 64.49 39.41 64.13 40.09 63.07 41.51 63.42 42.22 64.49 42.57 65.19 42.95 64.13 44.02 63.07 45.08 62.36 45.79 63.07 46.85 63.78 47.56 63.42 48.27 62.36 48.98 62 49.69 63.07 50.4 63.07 51.11 61.65 52.53 61.3 53.59 61.65 55.01 60.94 55.72 60.23 56.78 60.94 57.84 61.3 59.29 60.23 60 59.88 61.06 62 60.71 63.78 60.71 65.19 61.06 66.61 60.71 67.68 60.35 69.09 60 69.8 60.71 69.8 61.77 68.74 62.48 68.39 62.84 69.09 63.9 69.45 65.32 68.74 66.03 69.45 67.8 69.09 68.51 69.09 69.57 70.16 69.57 70.87 69.22 71.58 69.57 71.93 70.63 71.93 72.05 71.93 73.12 71.58 73.83 72.28 74.18 72.99 74.18 73.35 74.53 72.64 75.63 72.28 75.98 72.64 76.69 72.99 77.05 71.93 77.75 71.58 78.11 71.93 79.17 72.99 79.53 73.7 79.88 73.7 80.59 73.35 81.3 72.28 81.3 71.58 81.65 71.93 82.72 72.28 83.78 71.58 84.49 70.51 84.84 69.09 85.2 67.68 85.2 66.61 85.91 66.26 86.26 66.97 87.33 66.97 88.74 66.97 90.16 66.61 91.96 67.32 93.38 67.68 94.42 67.68 95.86 68.03 97.25 69.45 98.31 71.58 99.02 71.93 99.76 72.28 101.15 72.64 102.92 72.99 104.73 74.41 106.82 75.12 107.56 76.54 108.62 77.96 109.69 77.96 110.75 77.96 111.82 78.28 113.23 79.35 113.94 80.44 115.01 80.76 116.07 81.83 116.78 82.18 117.84 82.57 119.26 83.24 121.03 83.98 121.74 84.66 122.45 85.4 123.16 86.46 123.51 87.14 124.61 87.14 125.32 87.88 126.02 87.88 127.44 89.98 129.57 91.43 130.28 92.85 131.34 94.59 132.76 95.33 133.47 96.72 134.53 100.61 136.66 102.06 137.01 103.45 137.37 104.9 139.14 105.58 140.59 105.96 141.65 106.29 143.07 106.64 143.78 107.35 144.49 107.73 144.84 107.35 144.84 101.68 149.81 93.2 156.93 66.61 179.61 40.73 201.62 39.67 202.68 39.32 202.68 35.06 206.61 33.64 207.68 27.62 212.99 26.55 213.35 26.55 213.7 23.01 194.89 22.66 193.11 22.66 190.63 21.59 188.83 20.53 187.06 19.14 185.64 17.37 184.58 14.53 183.51 13.82 182.09 13.82 181.03 13.11 179.26 12.76 177.49 13.47 175.71 15.24 175 16.66 174.3 18.43 172.88 19.49 170.01 19.14 168.62 18.79 167.91 17.37 166.11 16.66 165.08 16.66 163.66 17.01 161.5 16.66 160.12 15.95 159.05 14.89 158.7 13.47 158.31 11.7 157.6 10.99 156.93 9.92 156.93 9.92 156.19 9.92 155.83 9.57 155.83 8.86 155.48 7.8 154.41 7.09 153.7 6.02 152.64 4.96 151.93 3.9 150.87 2.83 149.81 2.48 149.45 1.77 148.74 0.71 147.68 0.35 146.97 0 146.62 0 146.26 0 145.91 0 145.2 0 144.84 0 144.13 0 143.42 0.35 142.36 0.71 141.3 0.71 140.94 1.06 140.59 1.42 140.2 2.12 139.14 2.83 138.43 3.19 138.08 3.19 137.72 3.19 137.37 3.54 136.66 3.9 136.31 4.25 134.89 4.96 134.18 5.67 132.76 5.67 132.41 5.67 132.05 5.31 131.7 4.96 131.7 4.61 131.7 4.61 131.34 4.96 131.34 5.31 131.34 6.02 131.34 6.38 130.99 6.73 130.63 7.09 130.28 7.44 130.28 7.44 129.92 7.44 129.57 7.8 129.22 7.8 128.86 7.8 128.51 7.44 128.15 7.44 127.8 7.44 127.44 7.44 127.09 7.44 126.73 7.44 126.38 7.44 126.02 7.44 125.67 7.44 125.32 7.44 124.96 7.44 124.61 7.09 124.25 7.09 123.16 7.09 122.8 7.44 122.45 7.44 122.1 7.44 121.74 7.44 121.03 7.44 120.68 7.44 120.32 7.44 119.97 7.44 119.61 7.44 119.26 7.44 118.91 7.44 118.55 7.44 117.84 7.44 117.13 7.44 116.78 7.44 115.71 7.44 115.36 7.44 115.01 7.44 114.65 7.09 114.3 7.09 113.94 7.09 113.23 6.73 112.88 6.73 112.52 6.73 112.17 6.73 111.82 7.09 111.46 7.09 111.11 7.09 110.75 7.09 110.4 7.44 110.04 7.44 109.69 7.44 108.98 7.09 108.62 7.09 108.27 6.73 108.27 6.73 107.92 6.73 107.18 6.73 106.82 7.09 106.5 7.09 106.11 7.09 105.43 6.73 105.05 6.38 105.05 5.67 105.43 5.67 105.05 5.67 103.31 5.31 101.15 4.61 99.02 4.25 97.25 3.9 95.86 4.25 94.06 5.31 92.32 6.38 91.96 8.5 92.32 9.57 91.96 9.57 90.52 9.92 89.81 9.92 89.1 10.28 87.33 10.99 85.2 11.34 82.72 12.05 79.88 11.7 77.75 12.05 75.63 12.76 73.47 13.82 71.7 14.53 69.57 14.89 67.09 14.89 64.96 14.89 62.48 15.24 61.42 16.3 60 16.66 58.2 17.37 55.72 18.08 52.88 19.14 50.75 19.49 48.98 19.49 46.85 19.85 44.73 19.14 43.31 19.14 41.89 19.14 39.41 19.14 38.32 20.88 37.28 22.3 36.22 23.01 34.09 23.36 31.61 23.36 28.75 23.01 26.97 21.59 26.26 19.14 26.65 18.08 28.04 17.72 29.84 17.37 31.61 15.95 32.64 14.89 32.32 14.18 30.9 13.82 29.13 13.82 27.71 14.18 26.97 15.24 25.55 15.95 24.49 16.66 23.43 17.37 22.36 17.72 21.3 16.66 20.24 15.95 20.24 14.89 19.88 13.47 19.53 12.05 18.82 11.34 17.76 11.34 16.34 11.7 15.27 11.7 14.21 10.99 13.5 10.28 12.79 8.86 12.44 8.15 12.79 6.38 13.15 4.96 12.79 4.96 11.73 5.67 10.31 6.73 8.86 7.44 7.45 7.8 7.45 8.5 7.09 9.21 7.09 9.57 6.74 10.28 6.38 10.99 6.03 11.34 6.38 12.05 7.09 12.05 8.15 11.7 8.51 11.34 9.57 11.7 10.31 12.4 11.02 12.76 11.37 13.82 11.37 14.53 10.67 15.24 9.57 15.24 8.51 14.89 7.45 15.24 7.09 15.95 6.74 17.01 7.09 17.72 8.15 17.72 9.57 17.37 10.67 17.37 12.08 18.08 13.15 19.14 13.15 19.85 12.08 20.2 10.31 20.2 8.86 20.53 8.15 21.95 7.45 22.66 7.45 23.01 8.86 23.01 10.31 23.36 11.73 23.36 12.79 24.43 13.5 25.14 13.5 25.85 11.73 25.49 10.31 25.14 8.51 24.43 7.09 24.07 5.32 24.43 3.19 24.78 2.13 25.85 2.13 27.62 3.55 28.68 3.9 29.39 4.26 30.45 4.61 31.16 5.32 32.58 5.32 34 5.67 34.71 6.38 35.06 7.45 34.71 8.51 33.64 9.57 33.29 10.31 34.35 10.67 35.77 11.37 36.48 12.08 37.19 12.44 37.9 11.73 38.25 9.93 38.61 9.22 39.32 7.8 40.38 6.74 41.44 6.74 42.51 6.74 43.22 6.38 43.93 5.32 44.28 3.19 44.63 2.13 44.99 1.06 45.34 0.36 46.05 0 46.76 0.71 46.76 2.13 46.41 3.55"
        />
      </svg>
    </div>
  )
}

export default LaPerdida