import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Calandaima = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 212.93 370.37"
      >
        <polygon
          fill={getColorByCarencias('CALANDAIMA', municipio.toUpperCase())}
          className="cls-1"
          points="113 11.93 117.61 12.71 118.76 12.71 121.07 12.34 124.9 11.56 126.06 12.71 126.84 13.86 126.84 14.24 127.99 15.39 131.05 17.7 134.13 19.26 137.59 20.81 141.05 23.89 144.51 26.58 144.89 26.95 146.44 27.35 146.82 27.35 148.75 28.88 151.05 30.04 153.36 31.19 154.86 31.97 155.64 32.72 156.39 33.12 156.79 34.65 157.17 35.43 157.17 40.06 157.57 41.22 157.95 42.75 158.32 43.52 158.72 45.43 158.72 46.21 159.1 47.74 159.88 48.89 160.63 51.22 161.03 53.9 161.41 55.83 162.18 56.99 162.18 57.39 163.71 59.69 164.87 62.78 165.24 63.53 166.02 64.68 166.8 66.21 167.17 66.99 167.95 67.77 169.1 69.3 170.63 70.45 171.79 71.23 173.32 72.38 174.09 73.53 174.47 75.09 175.62 77.02 176.78 78.92 177.93 80.85 178.33 81.63 178.71 83.56 179.48 84.69 180.64 86.24 182.17 88.55 182.54 90.08 182.94 91.63 183.32 93.19 184.1 94.72 184.47 95.87 184.85 96.27 185.25 97.42 185.25 98.95 186 100.48 186.4 101.26 186.78 101.64 187.56 102.79 187.93 104.34 188.71 105.87 188.71 108.56 188.71 110.14 188.71 112.44 188.71 113.97 187.93 116.28 188.31 117.81 189.09 119.74 190.61 122.04 191.77 123.97 192.92 125.5 194.07 127.06 195.23 128.21 196.38 129.77 197.53 130.92 198.31 132.07 199.09 133.6 200.62 135.13 201.39 136.69 202.92 138.99 203.7 139.37 205.23 140.14 206.01 140.14 206.76 140.52 208.31 142.45 208.69 142.83 209.84 143.6 210.62 145.16 211 146.31 211.37 146.69 212.15 147.47 212.55 148.24 212.93 148.62 211.37 151.7 210.24 152.86 208.69 153.61 205.61 154.01 204.45 154.01 202.92 154.01 201.77 154.38 200.62 154.01 199.09 154.01 197.53 153.61 196.78 152.86 195.63 152.45 194.48 152.45 193.7 152.08 191.39 152.45 189.86 152.86 187.93 152.86 186 153.23 184.1 154.01 182.17 154.76 181.01 155.54 179.48 156.32 177.55 157.47 176.78 157.84 176.02 158.22 175.25 158.62 172.94 159.37 172.16 160.15 171.41 161.3 170.26 161.68 168.33 163.64 166.8 164.41 165.64 164.41 162.94 164.41 162.18 164.79 150.28 165.94 148.75 165.94 147.22 165.94 137.21 167.1 136.06 167.87 134.51 171.71 132.98 170.93 131.05 169.78 129.52 168.62 128.74 168.25 127.59 168.25 125.28 174.39 124.53 179.41 124.13 180.96 123.75 183.64 122.97 185.2 120.29 191.34 119.92 192.89 119.14 194.8 118.76 195.58 118.36 196.73 117.61 198.68 117.21 199.81 117.21 200.21 116.83 202.52 116.46 206.76 116.06 208.29 115.68 209.44 116.46 210.97 116.46 211.75 117.21 213.28 117.99 214.83 118.36 216.01 119.14 217.14 119.92 218.31 121.07 219.84 122.6 221.37 123.75 222.93 124.9 223.68 126.06 224.83 127.99 226.39 128.36 227.54 129.14 228.29 131.05 229.85 132.2 230.22 132.98 231.38 133.35 231.75 134.13 232.93 134.91 234.08 136.06 235.24 137.21 237.17 137.97 238.32 138.74 240.25 139.9 242.93 141.05 245.62 142.58 249.48 143.36 250.66 143.73 251.81 144.89 257.95 147.22 261.41 147.97 262.94 147.97 265.65 149.12 266.4 149.12 267.18 149.9 273.34 150.65 275.65 150.65 279.11 150.65 282.57 149.9 284.5 147.97 286.83 145.66 288.76 144.89 291.07 143.73 293.38 144.89 294.13 146.06 295.28 146.06 326.47 146.82 346.12 149.9 358.06 143.36 367.66 134.13 369.97 132.98 370.37 134.51 368.81 135.66 365.75 136.44 362.27 136.81 359.21 136.81 356.53 136.06 352.64 135.66 350.34 133.35 345.35 132.2 343.04 126.06 336.87 122.6 332.26 118.36 326.87 114.15 323.79 111.07 321.86 107.61 319.92 103.77 318.77 98.76 316.84 93.37 315.31 88.03 313.38 84.94 312.6 83.41 312.23 79.95 311.85 77.25 310.3 74.56 308.77 73.03 306.46 71.48 304.53 66.11 297.99 60.35 292.97 53.03 286.46 46.11 281.04 43.43 279.51 41.12 278.73 40.34 278.73 32.27 278.36 28.46 277.58 25.38 277.2 23.85 276.05 18.83 274.5 17.3 274.12 15 273.34 12.69 272.97 9.23 271.81 3.84 269.51 0 267.98 1.93 263.34 3.46 260.26 6.15 253.34 6.15 252.96 6.55 252.18 8.45 248.32 8.85 248.32 9.61 246.77 12.31 243.31 14.62 239.47 17.3 235.24 19.61 231 20.39 229.07 20.76 229.07 21.14 227.14 22.69 224.08 23.44 222.15 26.15 216.01 26.9 214.43 26.9 214.05 29.21 205.58 30.77 200.59 31.52 195.95 32.27 194.02 32.27 193.27 33.05 190.96 34.98 188.66 35.73 187.1 35.73 184.8 35.35 182.89 34.58 179.41 33.42 173.64 32.67 171.71 31.89 170.18 31.52 169.78 30.77 169.03 30.77 168.62 31.89 168.25 34.58 167.1 37.28 165.94 40.34 164.79 41.5 163.26 41.9 161.68 42.65 159.77 43.43 158.22 44.96 157.07 46.11 156.32 46.89 154.76 48.04 152.08 48.82 149.77 49.57 147.47 52.28 139.37 55.74 128.99 57.64 126.28 58.42 125.13 59.57 123.57 60.72 122.82 61.1 121.67 61.1 120.11 61.88 118.58 62.66 117.43 63.81 116.28 65.34 115.12 66.87 113.6 68.8 112.04 69.95 111.29 69.95 110.89 70.33 110.14 70.73 108.98 70.73 108.18 70.73 107.03 70.73 106.65 70.73 104.72 71.1 102.79 71.1 102.04 71.1 100.88 71.88 99.73 72.26 98.18 72.63 95.87 72.63 93.97 71.88 92.03 70.73 89.7 70.33 87.4 70.73 85.47 71.1 83.56 72.26 81.63 72.63 80.85 73.03 79.7 73.03 78.17 73.79 77.02 74.56 75.09 74.94 74.31 75.72 72.38 76.49 71.23 76.87 70.83 77.25 70.07 75.72 68.54 74.19 67.39 73.03 66.21 72.26 64.31 71.1 62.78 69.95 62 68.8 61.22 68.02 60.07 67.27 58.92 66.87 56.99 66.49 55.06 66.11 51.97 64.96 50.44 63.81 48.14 62.25 46.21 59.95 44.68 58.04 42.37 56.89 41.22 54.58 39.29 53.03 37.73 52.28 36.58 53.03 36.58 54.18 36.58 54.58 36.18 55.33 35.8 57.26 34.27 59.57 31.97 62.66 29.66 64.96 26.95 66.49 24.65 70.33 21.19 78.8 13.49 79.18 13.09 91.11 0 96.45 4.26 97.23 5.02 103.37 9.25 107.61 11.18 113 11.93"
        />
      </svg>
    </div>
  )
}

export default Calandaima