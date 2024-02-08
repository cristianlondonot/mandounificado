import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Virolin = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 215.56 265.53"
      >
        <polygon
          fill={getColorByCarencias('VIROLIN', municipio.toUpperCase())}
          className="cls-1"
          points="8.29 1.19 11.12 1.19 11.6 1.19 15.14 0.94 16.33 0.48 16.1 0.71 16.1 0.94 16.33 1.42 16.81 1.67 17.04 1.9 18 2.38 18.93 2.86 20.6 3.79 21.31 4.05 21.56 4.05 22.49 4.53 22.97 4.75 25.1 5.46 26.77 6.17 27.25 6.42 27.95 6.65 28.18 6.65 28.41 6.9 29.14 7.13 29.6 7.36 30.08 7.61 30.79 7.84 31.49 8.07 31.97 8.32 32.91 8.8 33.16 8.8 34.1 9.25 34.81 9.5 35.06 9.5 36.47 9.96 36.7 10.21 37.89 10.67 38.62 10.92 39.33 11.15 40.49 11.63 41.2 11.86 42.62 12.11 44.06 12.82 44.51 13.04 45.7 13.75 47.12 14.46 47.6 14.46 48.3 14.96 48.55 14.96 48.78 15.19 49.01 15.19 49.26 15.19 49.49 15.19 49.72 15.19 49.97 15.19 50.2 14.96 50.45 14.71 50.91 14.46 51.16 14.46 51.64 14.71 51.87 14.71 52.57 14.96 54.47 15.44 56.14 15.9 58.74 16.38 59.68 16.63 61.09 16.86 64.66 18.05 66.32 18.53 66.8 18.53 68.68 19.23 69.16 19.46 70.11 19.69 70.59 19.94 71.53 20.17 71.76 20.17 72.95 20.42 73.2 20.65 73.66 20.65 74.13 20.88 75.09 21.13 75.8 21.13 76.03 21.36 77.7 21.59 78.86 22.07 80.05 22.32 80.28 22.55 81.95 23.03 82.88 23.25 84.07 23.5 85.97 23.96 86.45 24.21 86.67 24.21 87.86 24.44 88.34 24.44 89.05 24.67 90.01 24.92 91.9 25.4 92.36 25.4 94.26 25.88 94.74 25.88 95.44 26.11 95.92 26.36 97.34 26.82 97.82 26.82 99.71 27.52 101.13 28 103.73 28.96 105.88 29.67 106.59 29.9 106.82 29.9 107.78 30.15 108.01 30.15 108.26 30.38 108.49 30.38 108.96 30.61 109.9 30.86 111.09 31.09 112.51 31.57 114.88 32.05 115.59 32.28 116.07 32.5 117 32.75 117.71 32.75 117.94 32.98 118.19 32.98 118.65 33.46 119.13 33.69 118.42 34.4 117.71 35.36 117.48 36.8 116.75 37.51 116.75 37.73 116.3 38.44 114.88 39.4 112.98 38.92 112.51 40.11 111.32 40.82 110.61 41.78 109.67 42.23 108.71 43.42 107.78 44.38 106.59 45.32 106.11 46.02 106.36 46.02 106.59 46.28 106.82 46.28 107.07 46.28 107.3 46.28 107.53 46.28 108.01 46.28 108.26 46.02 108.71 46.02 108.96 46.02 110.15 45.8 110.38 45.57 110.61 45.57 111.09 45.57 111.32 45.57 111.57 45.57 111.8 45.57 112.05 45.57 112.28 45.57 112.51 45.57 112.76 45.57 112.76 45.8 113.21 46.02 113.94 46.28 114.65 46.73 115.11 46.98 115.84 47.46 116.07 47.71 116.52 48.17 117 48.65 117.94 49.61 118.42 49.84 118.9 50.55 119.84 51.03 120.09 51.25 121.02 51.96 121.28 52.21 121.73 52.44 122.44 52.92 122.92 53.15 123.4 53.4 124.34 53.86 124.82 54.11 125.3 54.34 125.52 54.59 125.77 54.82 126 54.82 126 55.05 126.23 55.05 126.48 55.75 126.48 56.01 126.71 56.49 126.71 56.71 126.96 56.71 127.19 56.71 127.42 56.71 128.13 56.49 128.38 56.49 128.61 56.23 128.86 56.23 129.09 56.23 129.31 56.23 129.31 56.49 129.57 56.49 129.79 56.49 130.27 56.71 130.5 56.71 130.98 56.94 131.21 56.94 131.46 56.94 131.69 57.19 132.17 57.42 132.4 57.42 132.88 57.42 133.59 57.65 133.81 57.65 134.29 57.9 134.55 57.9 135.71 58.13 136.19 58.13 137.15 58.13 137.38 58.13 138.09 58.13 139.04 58.13 139.75 58.13 140.23 58.38 140.46 58.38 140.69 58.38 140.94 58.63 141.17 58.63 141.4 58.63 141.65 58.86 141.65 59.09 141.88 59.09 142.13 60.05 144.02 61.24 144.25 61.94 143.06 62.88 152.31 76.17 152.31 76.4 152.54 76.65 150.65 80.69 146.86 88.51 146.15 91.13 145.92 93.74 145.21 96.82 144.02 101.32 143.54 102.99 143.06 104.88 142.36 108.44 142.36 112.24 142.58 116.99 143.06 121.74 143.29 122.45 144.25 125.53 145.44 129.57 147.11 134.55 148.98 139.3 151.61 141.9 152.77 142.61 154.9 143.55 157.98 143.32 158.21 143.32 162.25 142.84 166.04 142.38 167.69 142.38 169.35 142.38 172.92 142.38 176.71 143.32 180.5 144.03 181.21 144.28 184.75 145.22 187.12 146.66 189.5 149.03 193.04 151.38 197.31 153.28 200.14 154.72 203.22 155.65 205.83 156.13 207.27 156.61 207.97 156.86 208.68 157.57 208.68 157.8 209.16 158.51 208.91 159.95 208.91 161.14 207.72 163.03 207.49 163.74 205.12 166.09 203.22 170.16 202.04 173.95 202.04 177.01 202.29 178.7 203 181.05 204.64 184.14 206.79 186.28 207.97 187.47 208.2 187.93 209.39 192.45 211.06 196.24 213.18 200.28 214.6 203.37 215.56 206.68 215.56 208.34 214.83 212.16 213.66 216.89 212.7 221.16 211.29 225.91 210.58 228.99 210.33 229.93 209.87 232.08 209.39 235.16 209.39 237.76 210.1 239.2 209.62 239.43 207.97 240.62 207.01 241.55 206.54 242.99 206.31 244.66 206.08 246.3 205.37 248.68 205.12 250.83 204.89 252.24 204.41 254.16 204.41 254.87 203.93 255.58 203.7 256.51 203 258.18 201.81 259.6 200.39 260.78 199.66 261.97 198.02 262.91 195.41 264.8 193.75 265.53 186.64 263.39 179.54 261.26 175.29 259.6 174.81 257.22 173.4 255.33 172.66 251.76 171.96 246.78 170.31 242.51 168.16 238.72 166.98 228.74 166.52 222.35 164.15 220.2 161.29 218.55 158.21 216.18 153.96 212.39 149.71 208.82 146.38 206.2 142.13 202.66 137.61 199.55 134.29 195.05 128.38 188.63 125.52 184.84 123.17 182.01 120.09 178.45 117.71 176.07 116.07 173.7 113.46 170.61 111.57 168.72 109.67 166.57 108.01 164.45 106.82 162.78 106.11 161.14 105.4 158.51 103.99 156.13 102.32 153.28 101.38 151.86 100.9 149.97 100.67 148.32 100.67 146.88 101.13 145.22 101.61 143.55 102.57 141.65 103.28 140.01 103.99 138.34 104.69 137.15 104.92 135.03 104.47 134.55 103.73 134.07 103.03 134.55 102.57 135.26 101.84 135.74 100.9 135.74 100.19 135.26 99.71 134.8 99.01 134.3 98.05 134.07 97.59 133.59 97.11 133.11 96.15 132.88 95.44 132.65 94.99 132.18 88.57 129.09 88.11 129.32 87.63 129.32 87.15 129.57 86.45 129.8 85.97 130.03 85.51 130.28 85.26 130.99 85.03 131.47 85.03 132.18 85.03 132.65 85.03 133.11 85.03 133.82 85.03 134.3 85.03 135.03 84.78 135.51 84.78 136.22 84.55 137.41 84.32 137.89 84.32 138.59 84.07 139.05 83.84 139.78 83.59 140.49 83.59 140.95 83.36 141.43 82.88 141.65 82.43 142.13 81.95 142.61 81.69 142.84 81.24 143.32 80.76 143.55 79.57 143.09 78.86 142.84 78.41 142.38 77.7 141.9 77.22 141.65 76.99 141.43 76.99 140.95 76.74 140.49 76.28 140.01 75.8 139.3 75.32 139.05 74.84 138.82 74.36 138.59 73.91 138.11 73.2 137.89 72.72 137.41 72.24 137.15 71.76 136.7 71.05 136.45 70.34 136.22 69.86 135.97 69.16 135.97 68.68 135.74 68.22 135.51 67.74 135.26 66.8 135.03 66.07 135.03 65.14 135.03 64.43 135.26 63.95 135.26 63.24 135.26 62.53 135.26 61.82 135.51 61.34 135.26 60.64 135.03 60.16 134.8 59.93 134.3 59.45 134.07 58.74 133.59 58.26 133.11 57.78 132.65 57.3 132.4 56.85 131.92 56.37 131.47 55.89 131.22 55.43 130.99 54.95 130.76 54.47 130.51 53.99 130.03 53.28 129.8 52.57 129.32 52.09 129.09 51.64 128.86 51.16 128.61 50.45 128.61 49.72 128.38 48.78 128.38 47.85 128.13 47.12 127.68 46.41 127.42 45.47 127.2 43.58 126.49 42.87 126.24 42.14 126.01 41.68 126.01 40.97 126.01 40.49 126.01 40.04 126.01 39.33 126.01 38.37 125.78 34.1 125.78 31.04 125.3 29.85 125.07 22.72 124.82 22.49 124.82 22.97 122.45 23.2 119.13 23.68 114.61 23.68 112.24 23.68 111.76 23.68 111.3 23.91 111.3 24.62 107.49 24.62 102.76 24.62 99.19 23.2 97.05 21.31 95.4 20.12 94.44 18.47 93.51 17.29 91.13 16.1 88.99 15.39 87.09 15.14 86.61 13.98 83.3 12.54 81.4 8.29 78.55 5.91 77.13 2.6 74.76 2.12 74.51 2.37 74.28 2.85 73.32 3.77 73.32 5.66 74.05 7.1 74.76 9 74.99 11.35 74.99 13.02 73.8 13.72 71.9 14.43 69.78 14.68 67.38 14.2 64.55 13.72 62.65 13.5 61.72 13.24 59.34 13.5 56.94 14.91 56.23 15.39 54.82 16.33 51.51 17.04 47.94 17.77 46.73 19.41 45.8 20.37 45.32 21.08 44.61 21.79 43.9 22.72 42.48 20.12 40.11 17.52 37.51 16.33 35.84 11.6 27.52 6.62 18.53 5.66 16.86 2.37 10.44 0.48 7.61 0 5.94 0 3.79 0.23 1.42 0.48 1.19 0.71 0.94 1.19 0.71 1.89 0 4.02 0.23 6.14 0.48 8.29 1.19"
        />
      </svg>
    </div>
  )
}

export default Virolin