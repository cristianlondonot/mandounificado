import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 172.26 139.7"
      >
        <polygon
          fill={getColorByCarencias('SANTA ROSA', municipio.toUpperCase())}
          className="cls-1"
          points="90.59 1.78 92.01 3.24 93.09 4.67 93.09 5.74 92.73 7.16 92.01 7.88 92.37 8.59 93.8 9.3 94.87 10.02 95.94 9.3 96.65 8.59 97.72 8.95 98.44 9.66 98.79 8.59 98.79 7.52 99.86 6.09 101.29 4.67 102.36 3.6 103.79 2.88 104.5 1.78 105.57 1.78 106.64 2.17 107.36 3.95 107.71 5.74 107.71 7.16 108.07 8.59 107.71 9.3 106.64 10.37 107 11.45 107 13.23 106.64 14.3 106.64 15.73 108.07 16.44 109.5 16.44 110.89 16.08 112.71 15.73 113.78 15.01 114.49 16.08 115.56 17.51 115.89 18.22 116.24 18.22 116.24 19.32 115.56 19.68 114.85 20.39 115.89 20.39 116.96 20.39 117.34 21.08 116.24 22.18 115.56 23.25 115.56 23.58 116.63 23.58 116.96 23.93 116.24 25 116.63 25.72 117.7 26.43 118.03 26.82 118.03 27.89 116.96 28.21 115.89 27.53 115.17 27.89 115.56 28.21 115.89 29.31 115.89 30.03 116.24 30.35 116.24 31.1 115.89 31.81 115.89 32.52 116.96 32.52 118.42 31.42 119.1 31.1 119.81 31.1 119.81 31.81 119.49 32.85 119.49 33.56 120.56 33.92 121.63 34.66 122.7 35.38 123.77 35.38 124.81 35.73 125.16 36.45 124.09 37.16 124.48 37.88 125.16 37.52 125.88 37.88 125.88 38.95 125.88 40.02 125.88 40.73 126.95 41.09 127.33 40.02 127.69 39.3 128.02 39.3 128.02 39.66 127.69 40.73 126.95 42.16 127.33 43.23 128.02 43.58 128.4 43.94 128.02 44.65 126.62 44.3 125.88 45.01 125.55 45.72 124.48 46.79 123.77 47.51 125.16 47.51 125.88 47.51 126.95 47.86 126.95 48.22 125.55 48.93 125.88 50.36 126.95 50 127.69 50 128.02 49.65 128.73 50.36 129.47 50.72 129.09 51.82 129.8 52.53 130.54 53.25 130.54 54.67 131.62 55.74 132.69 56.46 133.01 57.53 133.4 57.53 133.73 58.6 134.8 58.95 135.54 58.6 136.61 59.31 136.94 60.74 136.94 62.52 136.61 63.59 136.61 65.02 137.32 65.38 138.01 65.73 138.72 66.09 139.08 66.45 139.79 67.16 140.18 68.26 140.53 68.97 141.25 70.04 141.6 70.76 141.6 71.83 141.93 73.25 141.93 74.32 141.6 75.39 141.6 76.11 143.39 77.18 144.46 77.53 145.86 78.96 146.24 80.75 146.57 82.17 147.31 83.24 148.38 83.99 149.45 84.67 149.45 85.41 149.45 86.48 149.45 87.17 150.17 88.24 151.24 88.59 151.56 88.98 151.92 89.66 152.63 90.73 153.7 91.48 154.77 92.55 155.49 92.91 155.16 93.23 154.77 93.59 155.16 94.33 155.85 94.66 156.23 94.33 156.23 93.59 157.63 94.66 158.37 95.4 159.09 95.4 160.48 95.02 161.23 95.4 162.62 96.47 163.37 97.19 164.08 97.51 165.48 97.51 166.55 97.51 167.26 97.51 167.97 98.26 169.05 98.94 170.12 99.33 171.19 99.33 171.9 98.94 172.26 99.33 171.9 100.4 170.83 101.47 169.4 101.82 167.62 101.47 165.83 102.54 165.48 103.96 164.76 105.39 163.37 106.82 160.84 107.89 160.48 108.96 159.77 110.03 159.44 111.1 157.63 111.46 156.56 111.81 155.16 112.53 153.38 112.53 151.92 112.53 151.24 113.6 150.17 114.67 149.45 116.45 149.1 117.19 148.38 118.26 148.71 118.98 150.17 120.41 151.24 121.48 151.56 122.55 151.56 123.62 151.56 124.69 151.92 126.83 152.31 127.9 153.02 128.61 153.38 129.32 153.7 130.39 154.77 130.75 155.49 131.47 156.92 132.92 158.37 132.92 159.44 132.92 159.77 133.99 159.77 135.06 159.44 135.78 158.7 136.49 159.44 136.85 158.02 137.92 155.85 138.99 154.45 139.7 152.31 139.7 150.17 139.34 148 138.99 146.57 138.63 144.79 138.63 143.72 138.27 142.32 137.56 140.53 137.56 139.08 137.56 138.39 137.2 136.61 137.2 135.18 137.2 133.73 136.49 133.4 135.42 133.01 135.06 132.33 135.42 131.62 135.06 130.87 134.71 130.87 133.99 130.16 133.64 129.8 133.28 128.4 133.64 127.69 133.28 126.95 133.28 125.88 132.92 125.88 133.64 125.16 133.99 124.48 134.35 123.41 134.71 123.02 134.35 121.95 134.35 120.88 134.35 120.56 133.28 118.77 131.82 117.34 130.75 116.96 130.04 117.34 129.68 116.96 128.97 116.24 128.61 116.24 128.97 115.89 130.39 114.85 130.75 113.42 130.75 113.03 129.68 111.96 128.61 110.89 128.97 109.14 128.97 107.71 128.25 107 127.54 105.93 128.61 105.21 128.61 104.5 128.25 103.43 128.61 103.07 129.68 102.36 129.32 101.65 128.97 100.58 128.97 101.29 129.68 101.29 130.39 100.58 130.75 99.86 130.75 99.51 130.75 98.79 131.11 99.51 132.92 99.51 133.99 98.08 134.35 97.72 133.64 97.37 132.92 96.65 132.92 95.23 133.28 93.8 133.64 92.37 133.99 92.01 135.42 91.3 135.78 90.59 135.78 89.16 136.49 88.45 136.49 87.02 136.85 86.31 136.85 85.59 136.13 85.59 135.42 84.88 135.06 83.81 135.06 82.38 134.71 81.31 133.99 80.24 133.99 79.17 133.64 78.46 132.92 77.74 131.47 76.67 130.39 75.96 129.68 74.53 129.32 73.82 129.68 73.46 130.04 73.11 130.39 72.04 130.04 70.97 130.04 70.25 130.39 69.54 130.39 68.83 130.75 68.47 130.04 67.4 129.32 66.33 129.32 64.9 128.97 63.47 128.61 62.76 128.61 62.76 128.97 62.4 129.68 61.69 130.04 60.62 130.75 60.26 130.75 59.91 130.04 59.55 130.04 59.19 130.39 58.48 130.75 58.12 130.04 57.77 130.39 57.41 130.39 56.34 130.39 55.98 130.04 55.27 130.39 54.56 130.75 54.2 130.04 53.13 130.04 52.09 129.68 51.37 130.04 50.3 130.39 49.23 131.47 48.16 132.54 48.16 133.28 48.52 133.64 47.81 133.99 47.81 134.35 46.74 134.35 46.02 133.99 44.6 133.99 43.88 132.92 43.17 132.92 42.46 133.64 41.38 133.99 41.03 133.28 40.67 132.18 39.6 131.82 38.17 131.82 37.46 131.11 36.39 130.39 36.39 129.68 37.1 129.32 36.75 128.97 36.75 127.54 36.03 127.9 35.32 128.61 34.96 128.61 34.96 127.9 34.25 127.18 33.89 126.47 33.89 125.76 33.54 125.76 32.47 125.76 32.11 125.04 31.75 124.69 30.68 124.69 29.97 123.62 29.61 124.69 28.54 125.76 27.11 125.76 25.69 125.4 23.19 124.33 21.41 125.04 19.27 126.11 16.77 125.76 15.34 126.11 13.91 126.83 11.06 126.47 8.56 125.76 7.14 126.11 5.71 127.18 5.35 127.18 5 126.83 4.64 126.11 3.92 125.4 2.85 124.33 2.14 124.33 2.5 123.62 0 110.39 0 108.25 0 106.11 0.36 103.25 0.36 100.4 0.36 97.87 1.07 96.12 3.57 92.91 5 91.48 6.78 88.98 7.85 87.55 11.42 83.99 13.56 80.75 15.7 78.61 16.41 76.82 17.84 75.39 19.27 73.97 22.83 71.83 24.97 70.76 29.25 68.62 33.54 66.09 36.03 65.38 39.24 64.66 41.38 63.95 43.53 63.59 47.09 62.88 49.23 62.16 52.09 61.81 54.2 61.09 54.91 60.02 55.63 58.24 55.27 57.17 54.56 55.39 53.48 53.6 52.77 52.53 50.3 50.72 48.16 50.72 44.95 50 42.81 48.93 40.67 46.44 40.67 44.65 41.38 43.23 42.1 41.8 42.81 40.73 43.53 38.95 44.24 36.8 44.6 35.02 44.95 33.56 45.67 31.42 46.38 30.03 47.09 28.6 48.16 27.14 48.88 26.1 48.88 24.65 49.23 22.53 48.88 20.39 49.23 18.58 49.59 17.15 51.02 16.44 52.77 16.44 54.56 17.51 55.27 18.97 55.27 20.72 55.27 22.89 55.98 24.32 58.12 25 59.91 24.32 60.98 23.58 62.05 22.18 63.12 20.72 64.19 18.97 64.54 17.15 64.9 14.66 64.9 13.23 64.54 10.73 63.47 9.3 62.76 7.88 63.47 5.02 64.54 2.53 65.61 0.71 67.04 0 68.47 0.36 70.97 1.78 73.11 2.88 75.25 5.02 76.32 6.45 78.1 7.52 79.17 8.59 80.6 9.66 83.1 10.37 84.52 10.37 86.31 10.02 88.09 7.52 88.8 5.38 90.59 1.78"
        />
      </svg>
    </div>
  )
}

export default SantaRosa