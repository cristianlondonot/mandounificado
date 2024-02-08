import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guanenta = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 208.42 212.95"
      >
        <polygon
          fill={getColorByCarencias('GUANENTA', municipio.toUpperCase())}
          className="cls-1"
          points="64.13 28.24 65.18 29.28 66.22 29.63 66.57 30.01 67.27 31.06 67.62 31.75 69.01 33.85 69.36 34.54 69.71 35.24 70.06 36.29 70.41 37.68 71.1 38.73 71.8 40.47 72.15 40.82 73.2 41.17 74.24 41.17 74.94 40.82 75.99 40.82 77.38 40.82 78.43 41.17 79.47 42.21 80.52 42.91 81.56 43.61 83.31 43.96 84.7 44.31 86.1 44.66 87.49 44.66 88.89 45 89.93 45.35 91.68 46.08 93.07 46.08 94.12 46.43 95.86 46.43 97.6 48.52 99 49.91 100.39 50.96 102.49 50.96 103.88 50.61 105.62 50.61 106.67 50.61 108.76 50.61 110.16 50.61 111.9 51.31 113.99 52.7 114.69 53.05 115.39 53.75 116.43 53.75 117.83 53.75 119.22 54.1 119.92 55.49 120.62 56.54 121.31 57.24 122.01 57.93 123.41 58.63 124.1 58.98 125.85 60.38 126.54 61.42 132.12 67.73 132.82 69.12 133.87 69.79 136.31 70.17 137.35 70.17 138.4 70.84 139.1 71.56 139.45 71.91 140.14 73.62 140.49 74.35 141.19 75.02 141.89 75.72 142.58 77.11 142.93 78.19 142.93 79.23 142.93 80.98 143.28 83.77 143.63 85.16 144.33 86.9 145.02 87.95 146.07 91.44 145.72 93.18 146.42 95.3 146.77 96.35 147.81 97.39 147.81 98.09 147.46 98.79 147.81 99.48 148.83 100.18 148.83 101.23 148.83 101.93 149.53 103.32 149.53 104.02 149.53 104.72 149.88 105.76 150.22 106.81 150.57 107.85 151.62 109.97 152.32 111.37 153.01 114.16 153.36 115.2 154.41 117.99 154.76 119.39 155.46 120.43 155.8 121.48 156.5 122.88 156.5 123.92 156.85 124.97 157.2 127.09 157.55 128.11 158.24 129.88 158.94 131.24 159.64 131.94 161.03 133.34 162.08 133.71 162.78 134.41 163.13 135.81 163.47 136.82 164.52 138.25 164.87 138.91 166.61 140.66 166.96 141.73 168.01 143.48 169.05 143.82 170.8 145.57 172.54 146.96 173.59 147.66 175.68 149.05 179.17 151.84 180.21 152.89 180.91 154.63 181.26 155.33 181.26 156.03 181.26 157.42 181.61 158.15 181.95 159.2 183 160.59 183.7 161.64 184.74 163.38 185.44 164.77 186.14 165.47 187.53 167.56 187.88 168.61 188.93 170.35 190.32 172.45 190.67 173.14 191.37 173.87 192.76 174.92 193.11 175.61 193.46 177.01 193.46 178.05 193.81 179.1 194.51 182.59 195.55 185.38 196.25 186.77 197.3 187.82 199.04 189.91 199.74 190.63 200.43 191.3 201.83 192.35 202.18 193.39 203.22 194.09 203.57 194.44 204.94 194.82 205.64 194.82 206.33 195.49 206.68 196.21 207.03 197.58 207.38 199 208.42 201.76 196.95 209.81 196.25 210.16 195.9 210.51 194.86 211.21 193.81 211.56 193.11 211.9 192.41 212.25 191.72 212.6 190.32 212.95 189.28 212.95 188.58 212.95 187.53 212.6 186.14 212.25 185.09 211.9 183 210.16 181.61 209.11 180.91 208.77 179.51 207.72 175.68 205.63 174.28 204.93 173.24 204.58 171.84 204.2 171.15 204.2 169.75 203.88 167.66 202.81 165.92 202.49 163.82 201.44 160.69 200.72 158.24 200.02 156.5 199.67 154.76 199.67 153.71 199.67 152.32 199.67 150.22 199.67 148.83 199.35 147.46 199.67 144.68 199.35 143.28 199.35 141.54 199 138.4 198.63 137 198.31 134.56 197.58 133.52 197.58 131.08 196.91 128.64 191.68 128.29 190.95 127.59 189.56 127.24 188.86 126.89 187.47 126.54 186.07 126.54 185.38 127.24 184.68 127.94 183.63 128.98 182.24 128.98 180.84 128.29 180.49 127.59 179.8 126.2 179.45 125.15 179.1 124.45 179.1 123.75 179.45 123.41 180.15 123.06 181.19 123.06 182.24 122.71 182.93 122.01 183.98 120.97 184.68 119.92 184.68 119.22 184.33 118.52 183.98 118.18 183.63 117.48 183.28 116.43 183.28 115.39 183.28 114.69 183.98 113.64 184.33 112.95 184.33 111.9 184.68 110.85 185.03 109.11 185.03 107.37 185.03 106.32 184.33 105.27 183.63 104.58 182.59 103.88 181.89 103.18 180.84 102.14 180.15 101.44 179.45 100.74 178.75 100.04 178.4 99.7 178.4 98.65 178.05 97.26 178.05 96.56 177.7 96.21 176.31 96.21 175.61 96.56 174.92 96.56 174.22 96.56 173.49 96.91 172.45 97.26 171.4 97.6 170.7 97.6 169.66 97.95 168.61 98.65 167.91 99.35 167.22 99.7 166.87 100.74 166.17 101.09 165.12 101.79 164.08 101.79 163.38 101.09 163.03 100.39 163.03 99.35 163.03 99 163.03 98.3 163.03 97.6 163.38 97.26 164.08 97.26 164.77 96.91 165.47 96.91 166.52 96.56 167.56 96.21 168.26 96.21 168.96 95.86 169.31 95.51 170.35 94.81 171.05 94.47 171.4 94.12 172.1 93.42 172.45 92.37 172.79 91.68 172.79 90.98 172.45 89.58 172.1 88.89 172.1 88.19 172.1 87.49 171.4 86.79 170.7 86.45 170 85.75 168.96 85.05 168.26 84.7 168.26 83.31 167.91 82.61 167.91 81.56 167.56 80.52 167.56 79.82 167.91 78.78 168.61 79.12 168.96 79.12 170 79.12 170.7 79.12 171.4 79.47 172.1 79.82 173.49 80.52 174.22 81.22 174.92 81.22 175.61 80.87 175.96 80.17 176.31 79.47 176.66 78.08 177.36 77.38 177.36 76.33 177.36 74.94 177.7 73.55 177.36 72.15 177.36 70.76 177.01 70.06 177.01 68.32 176.66 67.27 176.66 65.87 176.31 64.13 175.96 62.39 175.26 60.3 174.92 58.9 174.57 57.51 174.57 55.76 174.57 54.37 174.22 52.62 174.22 50.88 173.87 49.49 173.87 47.74 173.87 46.35 173.87 44.95 173.87 42.86 173.14 40.77 172.79 38.33 171.75 36.96 171.4 35.22 170.7 33.83 170 32.08 168.61 30.69 167.91 29.29 167.22 28.25 166.87 27.2 166.52 26.85 167.22 26.5 167.91 26.15 168.61 26.15 169.31 26.15 169.66 25.81 170.35 25.81 171.05 24.76 171.4 24.06 172.1 23.37 172.79 23.02 173.14 22.32 174.22 21.62 175.26 20.58 172.45 16.39 179.45 12.21 186.77 9.42 191.68 9.07 193.05 7.67 206.32 4.19 205.63 3.14 204.93 1.4 204.2 0 204.58 1.4 200.4 1.75 199.35 3.14 196.91 4.19 195.49 6.63 191.68 11.86 182.59 17.09 173.87 24.06 164.08 26.15 160.94 25.46 160.24 25.11 159.54 24.76 158.85 24.41 158.15 23.71 157.42 23.37 156.38 23.37 154.98 23.71 153.94 24.06 153.59 24.76 152.89 25.11 151.84 25.11 151.15 25.81 150.45 26.5 150.1 27.2 149.75 28.25 149.4 28.6 149.05 28.94 148.71 29.64 147.31 29.64 146.27 29.64 145.57 29.64 144.87 29.29 144.52 29.64 143.82 29.99 143.48 32.08 142.78 35.57 139.96 34.87 138.91 34.17 138.25 33.13 137.87 32.78 137.17 32.43 136.5 31.38 134.76 31.38 132.99 31.38 131.94 31.38 130.92 31.73 128.83 32.08 127.41 32.78 125.66 33.48 123.92 33.83 121.83 34.17 120.43 33.83 119.39 33.83 116.95 34.17 115.9 34.52 114.86 34.52 114.16 44.26 94.6 44.61 93.91 44.95 92.48 44.95 91.44 44.95 90.04 44.95 89 44.61 87.95 44.95 86.9 45.3 85.51 45.65 84.46 46 83.07 46 82.02 45.3 80.63 44.61 79.58 44.26 78.88 43.91 77.84 43.56 77.11 42.86 76.07 42.16 74.67 41.82 74 41.47 72.96 41.12 72.23 40.42 71.56 39.38 70.84 38.33 70.17 37.63 69.47 36.96 69.12 36.96 68.39 36.61 68.08 35.92 67.35 35.22 67.35 34.52 67.35 33.48 67 33.13 66.68 32.78 66.3 32.08 65.63 31.73 64.91 31.38 64.24 31.04 63.19 30.69 62.84 29.99 62.12 29.29 61.8 28.25 61.07 27.55 60.72 26.85 59.68 26.85 58.63 27.55 57.59 27.9 56.89 28.6 56.19 28.94 55.15 29.29 53.75 29.29 52.36 29.29 50.96 29.29 49.57 29.64 47.82 30.34 46.78 31.04 45.73 31.04 45 31.04 43.61 31.04 42.56 31.73 41.87 32.43 41.17 33.13 40.47 33.48 39.77 33.13 39.08 32.43 38.73 31.38 38.73 31.04 38.03 31.04 36.98 31.04 35.94 31.04 35.24 31.04 34.54 31.38 33.5 31.73 32.8 31.73 31.75 31.73 30.36 31.73 29.28 32.43 26.5 32.78 25.45 33.13 24.4 33.48 23.71 34.52 22.31 35.22 20.22 36.61 17.78 36.96 17.08 37.63 16.73 37.98 15.34 38.33 14.99 38.33 14.29 38.33 12.9 38.33 11.82 37.98 11.15 37.98 9.76 38.33 8.02 38.68 6.62 39.03 5.23 39.03 4.15 39.72 3.13 40.42 2.06 41.12 1.01 41.47 0.69 42.51 0 43.91 0.34 44.61 0.69 45.3 2.06 45.65 3.13 45.65 4.15 46 5.23 46.35 6.24 46.35 6.97 46.7 8.36 47.74 11.15 47.74 12.17 48.44 13.59 49.49 14.99 49.84 16.04 50.18 16.73 50.88 17.43 51.23 18.13 52.62 19.52 53.67 20.22 54.37 20.92 54.72 21.27 55.07 21.96 55.76 24.4 56.46 25.8 57.16 26.5 57.51 27.19 58.2 27.89 58.9 28.24 60.64 28.24 61.69 27.89 62.74 27.89 63.43 27.89 64.13 28.24"
        />
      </svg>
    </div>
  )
}

export default Guanenta