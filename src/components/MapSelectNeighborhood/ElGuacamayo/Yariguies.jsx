import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Yariguies = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 297.14 244.41"
      >
        <polygon
          fill={getColorByCarencias('YARIGUIES', municipio.toUpperCase())}
          className="cls-1"
          points="287.23 0.33 289.54 1.34 291.52 2.33 293.18 3.65 294.17 4.31 294.83 4.64 293.84 5.96 293.18 6.29 292.51 7.95 291.85 9.27 291.19 9.93 291.52 10.26 295.82 12.57 297.14 16.88 297.14 21.18 296.15 26.13 293.51 32.1 290.53 37.38 283.93 40.03 278.64 42.34 274.02 46.98 271.05 53.59 265.1 58.21 255.21 61.87 252.57 59.86 246.63 54.58 242.99 56.89 240.68 61.54 233.08 68.8 228.79 71.11 224.5 74.75 227.8 79.39 230.77 85.01 232.09 90.95 230.77 97.58 227.47 104.51 223.51 109.47 224.17 115.1 229.45 122.7 233.41 128.98 234.07 134.92 234.07 140.23 232.42 145.84 228.13 150.14 226.81 154.45 228.13 158.08 234.07 165.68 237.05 169.99 236.06 173.63 231.43 174.29 225.49 174.29 222.18 176.27 221.85 185.21 221.19 192.47 219.87 199.43 215.91 206.7 208.33 211.32 203.38 213.98 197.1 217.29 192.48 218.94 186.86 219.93 182.24 223.23 176.95 226.21 171.67 229.86 166.06 234.15 158.79 238.45 154.19 243.42 153.19 244.41 152.53 238.78 152.53 236.13 152.53 234.81 152.53 233.49 152.53 232.5 154.19 226.54 155.18 219.27 153.86 213.98 151.87 210.33 150.88 206.37 151.21 202.07 150.22 199.1 150.88 195.45 150.22 191.81 150.88 186.86 152.2 183.23 152.2 182.9 153.52 178.25 152.53 174.29 150.55 170.32 149.56 167.35 148.57 163.04 147.58 159.73 147.25 158.74 143.95 155.44 141.96 154.45 141.63 154.12 138.33 151.46 134.04 148.81 130.73 146.83 127.1 146.17 124.79 145.84 123.47 145.51 120.52 144.52 114.9 142.21 112.92 142.21 110.61 142.21 109.29 142.54 107.31 142.87 104.31 143.2 104 143.2 102.68 143.53 101.05 141.88 100.7 141.22 98.08 135.58 97.75 134.92 96.1 130.96 92.46 126.33 88.83 124.35 85.2 122.04 81.56 121.71 80.9 122.04 77.6 122.7 76.28 123.69 74.63 125.01 72.65 126.66 67.03 126.99 64.06 127.66 61.42 129.97 60.75 130.96 57.45 131.62 54.48 135.91 53.16 139.9 52.5 145.51 52.83 150.47 54.15 157.09 54.15 159.73 48.89 161.72 41.95 166.01 37.99 167.68 33.36 169 28.74 168.67 25.1 168.67 24.11 169.33 22.79 169.99 19.49 171.98 17.18 171.98 15.53 171.65 14.2 167.35 11.89 160.06 7.6 153.46 5.29 150.14 3.31 146.17 0 141.22 0 140.89 0.33 139.57 0.33 139.24 0.99 136.24 1.65 133.93 1.65 133.6 2.31 131.95 2.97 129.31 3.64 126.33 4.96 126.33 6.28 126.33 7.6 126.33 9.25 126.99 10.9 127.32 11.56 127.32 13.54 127.99 14.87 127.99 17.18 127.99 18.5 127.99 19.49 128.32 20.81 128.65 21.8 128.98 22.13 128.98 23.78 129.64 26.1 130.3 28.08 130.96 29.73 131.29 31.38 131.62 32.7 131.95 33.36 132.28 33.69 130.96 33.69 128.98 33.36 126.66 32.7 124.02 32.7 122.7 33.69 121.71 35.67 119.05 37.33 117.09 39.31 114.09 40.63 112.46 40.96 111.45 41.29 110.48 41.95 109.47 42.61 108.48 43.27 107.82 43.93 107.16 45.25 106.14 46.57 105.17 47.89 103.83 48.89 102.86 49.55 101.54 50.54 99.87 51.18 98.9 51.84 97.91 52.5 96.59 53.16 95.6 53.82 94.61 54.81 92.62 55.14 91.96 56.13 90.95 56.79 90.62 57.45 90.29 59.43 90.29 60.75 90.95 62.41 91.63 64.06 92.95 65.05 93.28 65.71 93.61 66.7 94.28 67.36 94.61 68.35 95.27 70.99 96.92 71.65 97.25 72.65 97.91 73.64 98.57 74.63 99.21 75.29 99.21 76.28 99.56 76.94 99.56 77.93 99.56 78.59 99.21 79.91 98.24 81.23 97.58 82.55 96.26 83.88 95.27 86.85 92.95 86.85 92.62 88.17 91.96 89.49 91.28 90.81 90.95 91.8 90.29 92.79 89.3 93.45 88.31 93.78 87.65 93.78 86.66 93.45 85.67 93.12 84.68 92.79 83.02 91.8 81.7 91.14 79.06 92.79 78.73 94.11 78.73 96.1 78.07 97.09 78.07 97.75 77.74 99.05 77.74 102.37 73.76 103.69 72.77 105.32 72.1 106.29 71.77 108.28 69.79 108.94 69.46 109.29 69.13 111.27 69.13 112.92 68.8 114.9 68.8 116.88 68.14 117.54 68.47 118.2 69.13 118.51 70.12 118.51 71.11 118.51 72.43 118.51 73.1 119.53 73.76 119.84 74.42 119.84 75.41 119.84 76.07 120.19 76.42 121.16 77.08 121.82 78.07 125.12 77.74 128.09 77.41 128.09 76.75 128.75 75.74 129.41 74.42 130.4 73.1 131.07 71.77 132.06 70.12 132.72 68.8 133.38 67.81 134.04 66.82 135.36 66.16 138 64.18 139.65 63.52 142.63 61.87 145.93 60.19 148.57 59.2 150.55 58.54 153.19 58.21 154.85 57.88 155.84 57.88 157.47 58.21 157.8 58.21 158.79 58.87 160.11 59.2 161.1 59.53 162.75 60.52 164.4 61.2 166.06 61.87 167.05 61.87 167.71 62.2 169.36 62.2 171.34 62.53 173.98 62.53 176.62 61.87 179.93 61.2 186.2 59.53 186.86 58.87 188.18 57.22 189.18 55.9 190.83 54.25 192.81 52.6 194.46 51.61 195.45 50.95 197.1 49.95 198.42 48.96 200.41 47.64 201.73 46.98 203.05 45.99 205.03 44.98 206.68 44.32 208 43.66 209.3 43 209.96 42.67 210.95 42.67 211.61 42.67 211.28 42.01 210.95 41.35 210.95 40.36 210.62 38.7 209.96 37.71 209.63 37.05 209.3 36.72 209.96 36.06 210.95 34.41 211.61 33.09 211.94 32.1 211.94 31.77 212.28 31.11 213.93 28.44 215.25 26.46 216.57 24.81 218.88 23.16 220.86 21.51 222.84 20.19 223.84 19.86 224.5 19.2 225.82 18.87 227.47 18.54 229.12 18.54 230.44 18.54 232.09 18.21 234.07 17.54 236.39 17.21 237.71 17.21 239.69 17.54 240.68 17.88 242.66 18.21 246.96 15.89 251.25 13.56 252.9 12.57 254.55 11.91 257.86 10.26 258.52 9.93 259.18 9.93 261.49 9.93 263.45 10.26 265.43 10.26 267.08 10.59 268.4 10.92 270.39 11.91 273.03 11.91 274.02 11.58 275.67 10.92 276.99 10.26 278.97 8.28 280.95 5.3 281.95 3.32 283.93 0 285.91 0.33 287.23 0.33"
        />
      </svg>
    </div>
  )
}

export default Yariguies