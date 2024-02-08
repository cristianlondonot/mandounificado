import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BajoCascajales = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 195.4 186.05"
      >
        <polygon
          fill={getColorByCarencias('BAJO CASCAJALES', municipio.toUpperCase())}
          className="cls-1"
          points="76.78 13.38 77.68 13.68 78.29 13.99 79.21 14.29 79.82 14.29 81.04 14.6 81.33 14.6 81.94 14.6 82.25 15.19 82.25 15.8 82.55 16.11 82.55 17.03 82.84 17.64 83.15 18.57 83.45 18.86 84.06 19.47 84.66 19.76 85.59 20.37 85.88 20.68 86.49 20.98 87.1 21.59 87.41 22.2 87.71 22.51 88.31 23.12 88.92 23.71 89.53 24.31 90.14 24.92 90.75 25.85 91.04 26.14 91.65 26.45 92.55 27.06 93.16 27.36 94.06 27.96 94.36 28.26 94.67 28.26 95.28 28.57 95.57 28.89 96.5 29.18 97.4 29.47 98.93 29.79 99.54 30.08 100.12 31.03 101.05 31.93 101.34 32.83 101.05 33.44 101.05 34.36 101.34 34.97 101.95 35.26 103.48 35.26 104.7 35.58 105.29 35.26 106.5 35.58 107.11 35.87 108.03 36.48 108.33 37.4 108.03 38.31 107.72 38.6 107.11 39.52 106.21 40.13 105.6 40.74 105.6 41.64 106.5 42.56 107.72 43.15 109.25 44.1 110.15 44.7 111.66 46.82 112.59 48.94 114.1 50.47 115.31 51.69 117.14 52.3 119.55 52.3 121.98 52.59 123.51 53.2 125.32 54.71 126.54 55.63 128.36 55.93 129.87 56.54 130.79 56.85 132.01 58.07 132.91 59.6 133.84 61.11 134.42 62.03 135.35 63.54 136.56 65.05 137.46 65.98 139 66.88 140.78 67.17 142.6 67.78 144.43 68.39 145.96 69.6 147.16 70.53 148.37 72.06 150.2 75.39 152.02 77.22 153.85 79.34 156.57 81.16 158.69 83.89 159.01 85.11 159.62 85.71 161.42 87.25 163.85 89.07 165.07 89.68 165.07 91.5 164.78 92.41 164.17 94.23 163.85 96.35 166.29 97.57 169.33 98.78 171.15 100.32 172.96 101.53 174.49 102.75 176 103.67 179.04 104.87 179.34 106.4 179.65 110.03 179.65 112.17 179.94 113.38 181.45 115.21 182.38 116.74 182.38 117.64 181.45 119.15 180.87 120.68 182.08 122.8 182.67 124.02 182.99 126.14 182.99 128.91 183.59 130.1 184.81 131.32 186.03 133.14 186.93 134.66 188.15 137.09 189.34 138.31 191.77 139.52 194.19 140.42 195.4 141.66 193.89 143.49 193.29 144.7 192.99 146.53 192.68 148.35 192.68 150.16 192.38 152.59 191.46 155.02 190.24 157.46 189.64 159.6 189.03 161.11 189.03 163.54 189.03 164.76 189.03 166.27 188.75 168.09 187.54 169.31 186.32 170.55 185.42 171.76 184.2 173.88 183.59 175.39 182.67 177.51 182.08 179.04 181.45 180.87 180.55 182.38 179.94 183.91 178.43 186.05 176.9 184.22 175.71 182.99 174.17 182.08 172.35 181.46 174.49 178.12 173.57 177.51 172.66 177.51 170.23 177.83 169.01 178.12 166.9 177.83 164.46 177.22 163.56 175.71 162.34 173.57 161.42 172.96 159.62 172.35 156.87 170.84 153.85 169 152.02 167.17 151.41 165.97 151.41 165.05 151.41 163.23 151.73 161.11 150.81 159.6 149.9 158.99 148.98 158.38 148.69 158.07 148.98 156.87 148.37 155.95 147.47 154.42 147.16 153.49 145.96 153.2 144.14 152.3 143.53 151.98 142.6 151.98 142 152.3 141.41 153.49 139.9 153.2 139 153.49 137.17 154.1 136.56 154.42 136.56 155.02 136.56 155.95 135.95 156.26 135.64 156.26 135.64 156.56 135.35 156.26 135.05 156.26 134.74 156.26 134.74 156.56 134.42 156.26 134.13 156.26 133.84 155.95 132.91 156.56 132.62 156.56 132.3 156.26 132.01 155.95 131.7 155.95 130.79 156.56 129.58 157.77 128.67 158.67 127.75 160.5 126.85 163.54 126.24 164.44 123.81 165.66 122.59 166.27 121.98 165.37 121.69 165.05 121.69 164.44 122.3 163.83 123.2 163.23 123.51 162.93 123.51 162.32 123.2 161.72 123.2 160.5 123.2 159.6 122.91 158.99 122.59 158.99 121.69 158.07 121.37 156.56 121.98 155.65 123.2 154.1 123.81 153.2 124.42 151.08 124.42 150.16 123.81 148.94 123.51 148.35 123.51 147.43 124.12 147.14 124.42 146.21 124.42 145.92 123.2 145.61 121.98 145.61 120.47 145.31 118.96 145.31 115.92 144.7 112.88 143.17 108.94 141.35 106.21 138.01 104.99 136.79 102.26 136.19 96.5 134.07 92.85 132.85 87.41 131.32 82.55 131.03 80.11 131.93 75.56 134.36 73.74 135.87 70.4 137.7 68.28 139.52 65.55 140.42 62.51 139.21 59.79 137.4 56.74 134.97 53.7 132.54 50.37 130.71 45.52 129.81 43.11 128.91 40.67 127.69 40.67 126.14 40.07 124.02 38.56 121.29 38.85 119.47 39.16 116.74 39.77 114.92 40.07 113.99 40.07 112.78 39.46 111.85 38.24 111.24 36.73 111.24 35.22 111.56 33.69 111.56 32.47 110.95 32.18 110.64 30.96 110.03 30.06 109.73 28.84 109.13 27.31 108.52 26.7 108.83 25.8 108.52 24.29 108.52 23.68 108.22 22.15 107.01 21.25 105.79 20.03 104.28 19.42 103.36 18.82 102.75 18.52 100.92 18.82 100.32 19.42 99.1 20.03 98.18 20.35 97.57 20.94 97.27 21.54 97.57 22.15 98.49 22.47 98.78 23.98 100.32 24.9 100.92 27.31 101.24 28.53 100.92 29.14 100.63 30.06 99.71 30.67 98.49 31.86 98.18 32.47 98.18 34.61 98.49 36.42 98.18 37.34 98.18 39.16 98.49 40.38 98.18 40.99 97.27 43.11 95.13 45.21 93.94 48.25 93.01 49.46 93.33 50.68 94.23 52.19 94.84 53.09 94.55 53.09 93.62 52.48 91.8 51.29 90.29 49.76 88.78 48.54 87.25 48.54 85.42 48.86 83.28 49.15 82.38 50.07 82.06 50.68 82.38 52.19 82.67 53.7 82.67 56.14 82.38 57.06 81.77 57.35 81.48 57.06 80.55 55.84 79.04 53.09 77.51 50.97 76.32 49.15 73.88 48.54 71.74 47.64 70.53 47.35 70.21 46.72 69.92 45.52 70.21 44.6 70.82 43.72 71.14 42.79 71.74 41.89 72.67 41.58 73.57 41.58 74.18 42.19 75.1 43.11 75.71 44.3 76.32 44.6 76.9 44.91 77.22 44.6 77.22 43.99 76.9 43.4 76.61 42.79 76.32 41.89 75.71 40.99 75.1 40.67 74.18 40.38 72.96 40.07 72.06 39.77 70.82 39.46 69.6 38.24 68.7 37.63 68.39 36.42 67.49 34.61 66.27 34 65.98 33.4 65.05 33.4 64.76 33.4 63.84 33.4 62.62 33.4 62.03 33.4 61.11 32.47 60.5 31.57 60.21 30.35 59.89 29.75 60.21 28.84 61.11 28.53 62.03 28.53 63.23 28.24 64.44 28.24 65.66 28.53 66.88 28.53 68.39 28.24 69 27.92 70.21 27.63 71.14 27.02 71.43 26.7 71.14 26.41 70.53 26.1 69.92 26.1 68.7 26.1 68.09 26.1 66.27 26.41 65.37 26.7 64.44 27.02 63.84 27.63 62.62 27.63 62.33 27.92 61.72 28.24 60.21 28.24 59.6 27.92 58.68 27.63 58.38 26.7 57.75 26.41 57.75 25.49 58.07 24.29 58.38 23.07 58.68 21.86 58.99 21.54 58.68 21.54 58.07 21.86 57.75 22.76 57.14 23.37 56.54 23.98 56.24 24.29 55.63 24.59 55.32 24.29 53.81 24.29 53.2 23.98 52.89 23.07 51.98 22.47 51.37 21.54 50.47 20.94 49.86 20.64 48.65 20.64 47.72 20.64 45.92 20.64 45.31 20.35 44.7 19.13 43.15 18.52 41.96 18.52 40.74 18.52 38.91 18.52 38.31 17.6 36.8 17.31 36.48 16.38 36.48 15.8 37.09 15.48 38.91 15.48 40.13 15.48 41.64 15.48 42.56 15.48 44.1 14.87 45.31 14.26 45.92 13.05 46.53 12.44 46.53 12.44 46.21 12.44 45.61 12.44 44.1 12.75 42.86 13.05 41.03 13.36 39.21 13.05 37.99 12.75 36.48 12.75 35.58 12.75 34.36 13.36 33.15 13.66 32.83 14.26 31.93 14.58 31.32 14.87 30.42 14.87 29.79 14.58 29.47 13.66 28.89 12.44 28.26 10.64 28.26 8.81 28.26 7.28 27.96 6.99 27.06 8.5 26.14 9.71 25.85 10.03 24.92 10.03 24.02 9.71 23.41 9.1 21.9 8.5 19.47 7.59 17.96 6.06 14.9 4.26 12.78 1.22 10.64 0 8.83 0.29 4.57 1.22 4.57 2.12 4.28 2.73 3.67 3.33 3.36 3.65 3.36 4.26 3.06 5.45 2.75 5.77 2.75 6.38 2.75 6.99 2.46 8.2 2.46 10.64 3.06 12.75 3.67 14.26 4.28 16.09 5.18 18.52 6.08 20.35 6.4 22.15 6.4 24.59 6.08 25.49 5.48 27.02 4.28 28.53 3.36 30.67 2.12 32.47 1.22 34.3 0.9 36.12 0.61 37.63 0.61 38.56 0.61 39.16 0.29 40.67 0 41.89 0.29 43.4 1.22 44.6 2.12 46.13 3.36 47.35 3.67 48.86 3.97 50.37 4.57 52.19 5.48 53.41 6.4 54.31 7.3 55.23 8.52 55.84 9.13 58.25 8.52 58.86 8.52 61.3 7.62 63.12 6.4 64.02 5.48 65.24 4.28 67.06 3.36 67.99 3.36 70.11 3.67 71.01 3.97 72.22 4.57 73.74 5.18 74.95 6.08 75.56 7.3 76.17 8.83 75.56 10.34 75.56 11.85 76.17 12.78 76.78 13.38"
        />
      </svg>
    </div>
  )
}

export default BajoCascajales