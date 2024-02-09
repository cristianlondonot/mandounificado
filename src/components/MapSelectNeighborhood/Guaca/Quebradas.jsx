import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Quebradas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 137.47 236.59"
      >
        <polygon
          fill={getColorByCarencias('QUEBRADAS', municipio.toUpperCase())}
          className="cls-1"
          points="137.47 36.41 137.23 38.63 136.48 41.11 135.99 45.09 135.99 48.05 135.51 52.26 136.26 55.74 137 59.95 137.47 63.89 137.47 67.37 136.73 69.85 135 74.3 133.29 78.28 131.8 82.48 130.07 87.43 128.57 91.41 126.36 97.6 125.37 101.8 123.89 107.25 122.65 113.2 121.66 118.15 120.42 121.61 118.2 124.85 116.22 127.08 114.24 129.3 112.26 131.04 110.53 133.53 108.79 135.51 106.57 139.22 105.58 142.44 104.59 145.43 104.09 148.87 103.85 150.62 103.6 151.61 102.61 153.84 101.62 155.57 100.38 156.56 98.9 157.8 96.67 158.79 95.44 159.28 93.46 161.51 91.97 162.99 89.99 164.48 88.26 167.2 87.04 169.45 86.05 171.67 84.57 174.15 84.08 177.86 83.83 180.1 83.58 182.58 84.08 184.8 85.07 187.53 86.3 190.27 88.01 192.72 88.76 195.2 89.25 197.67 89.75 200.41 90.24 203.63 90.24 204.12 90.49 205.61 90.49 207.59 90.24 209.07 90.24 211.05 90.24 213.54 89.75 217.01 89.25 220.22 88.51 223.44 88.01 226.68 87.77 228.9 87.27 231.38 86.8 233.85 86.3 235.09 86.3 235.58 85.81 236.59 85.56 236.08 84.57 235.09 83.33 234.1 81.85 232.61 80.86 231.13 79.87 229.15 78.88 227.67 78.14 225.93 77.64 224.2 76.9 222.7 76.16 221.71 74.92 220.72 73.44 219.48 71.95 218 71.21 215.77 70.96 214.04 70.47 212.53 69.73 210.8 69.97 208.82 69.73 206.84 69.73 205.36 69.73 203.38 69.97 201.4 70.47 199.67 70.47 198.41 70.22 197.42 69.48 196.45 68.49 195.94 65.03 194.97 63.54 194.23 61.81 193.71 60.57 192.72 56.12 192.97 52.41 190.27 51.91 187.28 51.91 185.55 51.42 184.31 50.43 182.83 49.69 181.34 48.7 180.1 47.71 179.11 46.24 178.1 45.01 177.11 43.28 175.88 42.04 174.64 40.8 173.9 38.82 173.4 37.09 172.91 35.61 172.66 34.37 172.41 32.88 172.91 31.15 173.9 29.42 174.89 28.18 175.88 28.18 176.13 27.19 177.36 24.97 178.6 22.99 179.36 21.5 179.86 20.02 180.6 18.78 181.34 17.55 182.58 16.31 183.57 14.33 185.05 13.09 185.79 11.86 187.03 10.12 188.27 8.64 189.01 6.91 189.75 4.68 190.49 4.45 190.49 4.21 191.01 2.95 191.98 2.95 191.75 2.95 191.01 2.95 190.74 2.95 190.49 2.95 190.27 3.22 190.02 3.44 190.02 3.22 189.51 2.95 189.01 2.95 188.76 2.72 188.52 2.72 188.27 2.45 188.27 2.45 188.02 2.23 188.02 1.96 188.02 1.71 188.02 1.71 187.77 1.46 187.77 1.22 187.53 0.97 187.28 0.97 187.03 0.72 186.78 0.72 186.54 0.72 186.29 0.72 186.04 0.48 185.79 0.48 185.55 0.48 185.3 0.23 185.3 0.23 185.05 0.23 184.8 0.23 184.56 0 184.56 0 184.31 0.23 184.06 0.23 183.82 0.23 183.57 0.23 183.32 0.48 183.32 0.48 183.07 0.72 182.83 0.72 182.58 0.97 182.58 0.97 182.33 1.22 182.33 1.46 182.08 1.71 181.84 2.23 181.59 2.45 181.34 2.72 181.34 2.95 181.09 3.22 181.09 3.44 181.09 3.71 181.09 3.94 181.09 3.94 181.34 4.21 181.34 4.45 181.34 4.68 181.34 4.68 181.09 4.93 181.09 5.2 181.09 5.2 180.85 5.44 180.85 5.44 180.6 5.44 180.35 5.44 180.1 5.2 179.86 5.2 179.61 4.93 179.61 4.93 179.36 4.93 179.11 4.93 178.87 4.93 178.6 4.93 178.35 4.93 178.1 4.93 177.86 4.93 177.61 5.2 177.36 5.2 177.11 5.2 176.87 4.93 176.62 4.93 176.37 4.93 176.13 4.93 175.88 4.93 175.63 4.93 175.38 5.2 175.38 5.2 175.14 5.44 175.14 5.44 174.89 5.67 174.89 5.92 174.89 6.19 174.89 6.43 174.89 6.68 175.14 6.91 175.14 7.16 175.14 7.42 175.14 7.67 174.89 7.9 174.89 8.14 174.64 8.64 174.39 8.89 174.39 8.89 174.15 9.13 174.15 9.38 174.15 9.63 173.9 9.88 173.9 10.12 173.9 10.37 173.9 10.62 173.9 10.62 173.65 10.87 173.65 11.11 173.4 11.36 173.16 11.61 173.16 11.61 172.91 11.86 172.91 11.86 172.66 12.1 172.17 12.35 171.92 12.35 171.67 12.1 171.67 12.1 171.42 12.1 171.18 12.35 170.43 12.35 170.19 12.6 169.69 12.6 169.45 12.85 169.2 13.09 168.7 13.34 168.21 13.59 167.96 13.59 167.71 13.59 167.47 13.59 167.2 13.59 166.7 13.59 166.46 13.83 166.46 13.83 166.21 14.08 165.96 14.08 165.71 14.33 165.71 14.33 165.47 14.33 165.22 14.58 164.97 14.58 164.72 14.82 164.48 15.07 164.23 15.07 163.98 15.32 163.73 15.32 163.49 15.32 163.24 15.57 163.24 15.57 162.99 15.57 162.74 15.57 162.5 15.81 161.76 15.81 161.51 15.81 161.26 15.81 161.01 16.06 160.77 16.06 160.52 16.06 160.27 15.81 160.02 15.81 159.78 15.81 159.53 15.81 159.28 15.81 159.03 15.81 158.79 15.57 158.54 15.57 158.29 15.57 158.04 15.32 157.8 15.07 157.55 15.07 157.3 15.07 157.05 14.82 156.81 14.82 156.56 14.58 156.31 14.58 156.07 14.33 155.8 14.33 155.57 14.08 155.57 14.08 155.32 13.83 155.32 13.83 155.05 13.59 155.05 13.34 154.83 13.09 154.83 13.09 154.58 12.85 154.58 12.85 154.31 12.6 154.31 12.6 154.07 12.35 154.07 12.1 153.84 11.86 153.57 11.86 153.32 11.61 153.32 11.61 153.1 11.36 153.1 11.36 152.83 11.11 152.83 10.87 152.83 10.62 152.58 10.62 152.35 10.37 152.35 10.37 152.09 10.37 151.84 10.62 151.36 10.62 151.1 10.37 151.1 10.12 150.87 9.88 150.62 9.88 150.35 9.63 150.13 9.38 149.88 9.38 149.61 9.13 149.39 9.13 149.14 9.13 148.87 9.13 148.64 8.89 148.4 8.89 147.88 8.89 147.39 8.89 147.14 8.89 146.91 9.13 146.4 9.13 146.17 9.13 145.65 9.13 145.43 9.13 145.18 9.13 144.91 8.89 144.91 8.64 144.68 8.64 144.42 8.39 144.17 8.39 143.92 8.14 143.67 8.14 143.43 8.39 143.18 8.39 142.93 8.39 142.69 8.64 142.69 8.64 142.19 8.89 141.94 9.13 141.7 9.38 141.45 9.38 141.2 9.63 140.95 9.63 140.71 9.88 140.46 10.12 140.21 10.12 139.96 10.12 139.72 10.37 139.72 10.37 139.47 10.37 139.22 10.37 138.97 10.37 138.73 10.12 138.23 9.88 137.74 9.63 137.74 9.63 137.49 9.63 137.24 9.38 136.5 9.13 135.76 9.13 135.26 8.89 135.02 8.89 134.77 8.89 134.52 8.64 134.52 8.64 134.27 8.39 134.03 8.14 133.78 8.14 133.53 7.9 133.53 7.9 133.28 7.67 133.02 7.67 132.77 7.67 132.52 7.42 132.52 7.67 132.27 7.67 132.03 7.67 131.78 7.67 131.53 7.9 131.53 7.9 131.28 7.9 130.79 7.9 130.54 7.9 130.29 7.9 130.05 7.67 129.8 7.42 129.55 7.16 129.3 6.91 129.3 6.91 129.06 6.91 128.81 6.68 128.56 6.68 128.32 6.68 128.07 6.43 128.07 6.43 127.82 6.43 127.57 6.19 127.33 6.19 127.08 6.19 126.83 6.43 126.58 6.43 126.34 6.68 126.09 7.16 125.59 7.16 125.35 7.16 125.1 7.42 124.85 7.42 124.6 7.42 124.36 7.42 124.11 7.42 123.86 7.42 123.61 7.16 123.12 7.16 122.87 6.91 122.87 6.91 122.63 6.68 122.63 6.68 122.38 6.43 122.38 6.19 122.38 5.92 122.38 5.92 122.13 5.67 122.13 5.44 121.88 5.44 121.61 5.2 121.37 5.2 121.12 5.2 120.63 4.93 120.63 4.93 120.13 4.93 119.64 4.93 119.39 4.93 118.89 4.68 118.4 4.68 117.66 4.68 116.67 4.45 116.17 4.45 115.68 4.68 114.19 4.93 114.19 4.93 113.95 5.2 113.95 5.2 113.7 5.44 113.7 5.67 113.45 5.92 113.2 5.92 112.96 6.19 112.71 6.19 112.21 6.19 111.97 6.19 111.72 6.19 111.47 6.19 111.22 6.19 110.98 5.92 110.48 5.92 110.21 5.92 109.97 5.67 109.74 5.67 109.47 5.92 109.47 5.92 109 6.19 108.73 6.19 108.5 6.19 108.26 6.43 108.26 6.43 107.99 6.43 107.76 6.91 107.49 7.16 107.25 7.42 107.25 7.67 107.02 8.14 106.75 8.39 106.52 8.64 106.28 9.13 106.01 9.38 105.78 9.63 105.53 10.12 105.04 10.62 104.52 10.87 104.3 11.11 104.03 11.86 103.55 12.1 103.29 12.35 103.06 12.85 102.54 13.09 102.32 13.34 102.07 13.59 101.8 13.59 101.58 13.59 101.31 13.59 101.06 16.31 99.35 18.78 97.84 20.02 97.1 22.99 95.86 24.47 93.89 27.19 90.42 27.69 87.43 28.43 85.45 28.68 84.71 31.9 82.73 33.38 81 35.11 79.76 36.84 79.52 40.31 79.27 40.55 79.27 41.54 79.02 44.76 77.29 46.74 74.3 47.23 73.56 48.45 70.84 50.92 66.88 53.15 64.88 54.39 63.66 58.35 61.68 61.56 60.94 64.28 58.94 66.51 59.21 67.01 58.94 69.48 58.47 71.71 56.96 74.92 51.52 75.17 51.02 76.41 48.55 81.11 42.1 84.08 38.88 86.3 37.15 86.55 36.9 91.23 34.18 94.94 29.95 96.92 24.51 97.41 23.52 99.64 18.06 102.36 11.4 104.84 5.19 104.59 0 105.08 0.25 106.07 0.25 110.03 0.74 114.24 1.48 116.22 1.98 116.96 2.22 117.95 3.21 118.94 5.19 119.43 7.42 120.42 9.65 121.41 12.12 122.65 14.59 124.63 17.56 126.11 19.81 128.09 23.03 130.07 26.24 133.04 30.45 135 32.94 136.73 34.92 137.47 36.41"
        />
      </svg>
    </div>
  )
}

export default Quebradas