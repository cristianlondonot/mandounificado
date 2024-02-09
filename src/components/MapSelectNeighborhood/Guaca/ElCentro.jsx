import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCentro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150.35 133.62"
      >
        <polygon
          fill={getColorByCarencias('EL CENTRO', municipio.toUpperCase())}
          className="cls-1"
          points="80.22 54.24 80.47 53.98 80.72 53.26 80.96 52.52 80.96 51.78 81.21 51.27 80.96 51.02 81.45 50.53 81.95 50.04 82.19 50.04 82.69 50.04 82.93 50.53 82.93 50.77 83.18 51.02 83.18 51.53 83.42 52.01 83.67 52.52 83.92 52.74 84.16 53.26 84.41 53.5 84.41 53.98 84.65 54.24 84.9 54.71 85.15 55.23 85.39 55.45 85.64 55.7 85.89 55.97 86.13 56.44 86.38 56.7 86.87 56.7 87.36 56.7 87.61 56.95 89.33 56.44 89.83 56.21 90.81 56.21 92.53 54.49 93.27 53.98 96.23 51.27 98.44 49.3 100.17 47.82 101.38 46.34 102.36 44.87 102.61 43.14 103.35 41.17 104.33 39.94 105.56 38.44 107.28 36.72 108.52 35.74 109.75 35.24 111.22 33.52 112.45 31.3 113.69 28.33 115.16 25.13 115.41 23.41 115.66 20.94 115.9 19.47 117.63 20.45 120.83 22.67 123.53 24.88 125.5 25.13 126.49 25.87 127.97 28.08 129.94 30.57 131.66 31.55 134.12 33.52 135.11 34.51 136.34 36.23 138.31 36.97 142.47 37.21 143.72 37.21 144.71 38.44 145.94 38.69 146.41 40.93 148.4 42.16 149.14 42.65 149.61 43.14 149.88 43.64 150.35 48.81 146.68 52.25 145.67 52.25 145.2 53.5 144.46 53.73 144.19 54.71 142.98 54.71 142.98 55.45 142.98 57.69 141.51 58.16 140.77 58.9 139.29 59.41 138.8 59.15 136.34 61.61 136.09 61.85 135.84 62.37 136.09 64.34 135.6 65.07 134.61 66.8 132.64 68.03 131.66 67.54 130.92 67.29 129.94 68.77 128.21 70.25 126.49 70.74 126 70.49 125.75 70.49 125.5 71.72 125.75 73.69 125.01 75.44 122.8 77.65 121.81 78.39 121.32 79.38 120.58 80.85 119.35 82.08 120.83 85.3 119.59 87.52 119.59 87.77 120.33 89 120.09 90.47 120.33 91.21 121.07 92.44 118.61 96.63 119.35 97.88 120.09 99.34 118.61 102.56 114.92 102.56 111.72 103.52 110.98 105.27 108.02 106.74 104.33 106.5 101.38 106.5 97.95 106.5 94.01 106.97 90.81 106.97 81.21 106.01 78.99 104.26 77.52 103.52 77.02 103.3 76.04 103.79 75.3 104.04 74.56 104.75 74.07 105.74 74.07 106.74 73.82 108.47 74.07 109.7 74.07 111.18 73.82 112.9 73.33 114.13 73.33 115.12 73.33 115.85 73.08 116.59 72.59 117.58 72.34 119.07 72.59 119.81 72.59 120.31 72.59 121.29 72.34 122.28 71.85 124 71.36 125.23 70.62 125.97 68.9 126.71 66.93 126.95 65.45 127.45 64.71 128.18 63.73 128.43 62.74 129.42 62.5 129.66 61.53 130.67 60.79 131.65 58.58 133.13 57.59 133.37 55.87 133.62 53.41 133.37 51.68 133.62 50.7 133.13 49.47 132.64 48.24 131.9 46.76 131.65 44.79 131.41 43.07 131.65 38.64 131.65 36.67 131.9 34.2 132.14 31.74 132.39 27.8 132.88 26.57 133.13 23.86 133.13 22.88 132.88 21.67 132.39 19.95 131.65 18.96 130.67 18.22 129.91 17.73 128.43 16.72 126.71 15.27 124.98 14.02 123.75 12.81 122.28 11.33 120.8 10.08 119.81 8.6 118.81 7.14 117.82 5.91 116.84 4.68 116.1 3.43 115.36 2.22 114.87 1.46 114.62 0 113.64 0.25 111.91 0.72 108.47 1.71 105.49 2.71 102.29 4.93 98.6 6.65 96.63 8.35 94.17 10.32 92.44 12.29 90.23 14.26 88.01 16.5 84.79 17.73 81.34 18.71 76.42 19.95 70.49 21.4 65.07 22.39 60.87 24.6 54.71 26.08 50.77 27.8 45.85 29.28 41.67 31 37.71 32.73 33.27 33.47 30.81 33.47 27.34 32.97 23.41 32.23 19.22 31.5 15.75 31.99 11.57 31.99 8.63 32.48 4.67 33.22 2.21 33.47 0 36.91 2.7 38.64 3.94 39.62 5.41 41.84 7.87 44.05 10.6 46.02 13.07 51.44 16.25 54.89 17.25 57.1 17.99 59.07 19.22 62 20.45 64.22 21.19 64.71 21.68 64.96 22.42 65.45 24.88 65.94 27.34 66.44 29.83 67.42 30.81 67.67 31.06 67.91 32.04 68.9 33.03 69.88 33.52 69.88 33.77 69.88 35.98 70.87 37.71 73.33 39.68 74.56 41.42 75.55 43.64 76.04 46.34 76.04 48.07 75.79 50.28 77.27 51.53 78.01 52.74 79.98 53.98 80.22 54.24"
        />
      </svg>
    </div>
  )
}

export default ElCentro