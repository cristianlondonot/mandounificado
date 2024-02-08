import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Sirguanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 333.96 287.9"
      >
        <polygon
          fill={getColorByCarencias('SIRGUANZA', municipio.toUpperCase())}
          className="cls-1"
          points="309.56 7.97 313.82 13.38 318.07 17.64 324.87 21.35 330.27 25.03 332.83 32.45 331.42 40.97 331.42 48.93 333.96 57.45 333.96 66.86 332.26 68.55 329.7 68.84 327.71 70.54 326.59 72.84 325.44 74.82 323.74 77.1 322.04 78.51 319.48 79.66 317.21 79.94 314.68 80.23 312.12 80.81 310.13 82.5 309.84 85.06 308.41 87.08 306.13 88.2 303.57 88.77 303.03 88.77 301.04 89.06 298.48 88.77 296.21 88.2 293.93 88.2 291.37 88.49 288.81 88.77 286.25 88.49 283.98 88.49 281.42 88.49 278.86 88.77 276.33 89.06 273.77 90.19 271.78 91.33 269.79 93.32 267.81 94.73 265.25 95.31 262.98 95.31 260.42 95.88 258.14 97.32 255.87 98.44 253.31 99.02 250.75 99.3 248.48 100.14 246.2 101 243.67 100.71 241.37 101.86 239.12 103.56 237.11 104.97 235.41 106.7 233.14 107.53 230.58 107.24 228.59 105.55 226.64 104.14 224.36 103.27 221.8 103.27 219.24 103.56 216.97 104.42 214.7 105.55 213 107.53 211.3 109.52 209.29 111.24 207.3 112.68 202.47 114.66 200.48 115.79 198.5 117.22 196.51 118.92 194.24 120.05 191.68 121.2 189.41 122.32 187.42 123.76 185.15 125.48 184.03 127.47 183.45 134 181.18 135.12 179.48 137.13 178.07 139.12 176.63 141.39 173.81 145.39 172.09 147.92 170.68 149.93 168.4 151.92 166.13 154.19 164.43 155.92 162.45 158.19 160.17 159.89 157.61 161.87 155.63 164.17 154.19 166.16 152.49 168.14 150.79 170.42 149.1 172.98 147.66 175.54 146.25 177.81 144.55 180.08 142.83 182.07 140.84 184.05 139.43 186.06 138.28 188.62 137.18 190.9 136.32 193.46 135.75 195.73 135.17 198.29 133.76 200.85 132.35 203.12 130.91 205.68 129.21 207.96 127.8 209.94 126.37 212.22 125.24 214.51 124.38 217.07 124.09 219.63 123.81 222.2 122.97 225.04 121.25 227.03 119.26 228.75 117.56 230.74 115.86 232.72 113.88 234.42 112.44 236.98 110.46 239.25 109.05 241.55 107.06 242.96 104.5 242.39 102.23 241.27 99.95 240.69 98.81 243.25 97.68 245.52 95.41 247.51 93.42 248.92 91.73 251.19 89.74 253.21 87.75 254.93 86.06 257.46 84.62 260.02 83.5 262.3 82.35 264.86 81.51 267.71 80.07 269.72 78.38 271.99 77.25 273.69 76.68 274.26 75.24 276.54 73.25 278.52 71.56 279.96 69.28 281.66 67.01 283.35 64.74 285.08 61.89 286.2 59.33 287.06 57.06 287.61 54.52 287.9 51.96 286.78 49.12 286.2 46.58 285.91 44.6 284.79 42.87 282.81 40.6 281.08 38.33 279.36 36.05 278.23 33.23 276.8 30.96 275.96 26.41 273.98 23.85 273.11 21.58 272.28 19.31 271.13 16.75 270.84 14.19 270.55 11.63 270.27 9.07 270.27 6.51 269.98 3.97 269.72 1.41 269.72 0 269.43 1.41 267.99 2.53 265.43 3.68 263.16 5.09 260.89 6.51 258.61 9.07 254.07 10.5 251.48 11.34 249.21 12.2 246.65 13.32 244.11 13.9 241.55 14.19 239.25 14.76 236.41 15.34 233.85 15.6 230.74 16.17 227.89 17.03 225.59 18.44 223.03 19.88 220.5 20.43 218.22 20.72 215.38 20.43 212.5 20.14 209.94 20.43 207.41 20.72 204.56 20.72 202 21 196.31 21.58 193.75 22.42 190.9 24.14 188.62 26.13 186.35 27.54 183.79 28.69 181.23 29.81 178.38 30.38 176.11 30.96 173.26 31.25 170.7 31.51 168.14 32.37 165.87 32.08 163.31 31.51 160.72 30.67 158.19 30.1 155.92 30.1 154.77 30.96 155.34 31.79 155.92 33.23 156.46 34.93 157.33 36.91 158.19 38.9 159.31 40.89 160.17 42.58 161.01 44.31 161.87 45.72 162.45 47.13 163.02 47.97 163.6 49.12 163.88 49.69 164.17 50.53 164.46 51.1 164.72 51.68 164.72 52.25 165.01 52.54 165.01 53.09 165.01 53.37 165.01 53.66 165.01 53.95 165.01 54.52 165.01 54.81 165.01 55.07 165.01 56.22 165.01 56.8 165.01 57.06 165.01 57.63 165.01 57.92 165.01 58.49 165.01 59.07 165.01 59.62 165.01 60.19 165.01 60.77 165.01 61.34 165.01 61.89 165.01 62.47 165.29 63.33 165.29 63.88 165.58 64.45 165.87 65.03 165.87 65.89 166.16 66.72 166.44 67.3 166.71 67.87 166.71 68.16 166.99 68.45 166.99 68.71 166.99 69 166.99 69 166.71 68.71 166.71 68.71 166.44 68.45 166.16 68.45 165.87 68.16 165.58 67.87 165.01 67.3 164.72 67.01 164.46 66.72 163.88 66.44 163.31 65.89 162.73 65.6 162.45 65.31 161.87 65.03 161.3 64.74 160.72 64.45 160.17 64.16 159.89 64.16 159.31 63.88 158.74 63.88 158.48 63.88 157.9 63.88 157.61 63.61 157.33 63.61 157.04 63.61 156.75 63.61 156.46 63.61 156.18 63.61 155.92 63.88 155.34 63.88 155.05 64.16 154.77 64.16 154.48 64.45 153.9 64.74 153.64 65.03 153.07 65.6 152.78 65.89 152.21 66.15 151.92 66.44 151.08 66.72 150.8 67.01 150.51 67.01 150.22 67.3 150.22 67.59 149.93 67.59 149.36 67.87 149.1 68.16 148.78 68.45 148.21 68.71 147.92 69 147.37 69.57 146.8 69.86 146.22 70.43 145.39 70.98 144.81 71.56 144.24 72.13 143.66 72.71 142.83 73.25 142.25 73.83 141.68 74.69 141.1 75.53 140.55 76.39 139.98 77.25 139.69 78.09 139.4 78.95 139.12 79.81 138.83 80.65 138.54 81.51 138.28 82.35 138.28 83.21 137.99 83.78 137.99 84.62 137.71 85.19 137.71 85.77 137.71 86.34 137.71 86.89 137.71 87.18 137.42 87.75 137.42 88.04 137.42 88.62 137.71 88.88 137.71 89.17 137.71 89.74 137.71 90.03 137.71 90.31 137.71 90.89 137.99 91.73 137.99 92.27 138.28 92.85 138.28 93.42 138.28 94 138.28 94.55 138.54 95.12 138.54 95.98 138.54 96.53 138.54 97.39 138.54 97.97 138.83 98.81 138.83 99.67 138.83 100.24 138.83 101.08 138.54 101.65 138.54 102.23 138.54 103.06 138.54 103.64 138.54 104.5 138.54 105.08 138.54 105.91 138.54 107.06 138.54 107.9 138.54 109.05 138.54 110.17 138.54 111.32 138.54 112.18 138.28 113.3 138.28 114.17 137.99 115 137.71 115.86 137.42 116.44 136.84 116.7 136.56 116.99 135.98 117.28 135.12 117.56 134.57 118.14 133.42 118.14 132.85 118.43 132.3 118.71 131.72 119 131.44 119.26 130.86 119.26 130.57 119.55 130.03 120.41 129.16 120.41 128.59 120.7 128.3 120.99 128.04 120.99 127.75 121.25 127.47 121.25 127.18 121.82 126.32 121.82 126.03 122.11 125.48 122.4 125.19 122.68 124.91 122.97 124.33 123.26 124.04 123.81 123.76 124.09 123.21 124.67 122.89 124.96 122.61 125.53 122.32 126.08 122.03 126.37 121.48 126.94 121.2 127.23 120.91 127.52 120.62 127.8 120.33 128.07 120.05 128.35 119.76 128.64 119.5 129.21 118.92 129.79 118.06 130.08 117.77 130.36 117.49 130.63 117.22 130.91 116.65 131.49 116.36 131.78 115.79 132.06 115.5 132.35 114.95 132.64 114.38 132.9 114.09 133.19 113.51 133.47 112.94 133.47 112.39 133.76 111.82 134.05 111.24 134.05 110.67 134.05 110.12 134.34 109.23 134.34 108.68 134.34 107.82 134.34 107.24 134.34 106.41 134.62 105.55 134.62 104.68 134.34 103.85 134.34 102.99 134.34 101.86 134.34 101 134.34 100.14 134.05 99.3 134.05 98.44 133.76 97.87 133.76 97.03 133.47 96.14 133.19 95.59 133.19 94.73 132.9 94.16 132.64 93.61 132.35 92.75 132.35 92.17 132.06 91.33 132.06 90.76 131.78 90.19 131.78 89.61 131.78 89.06 131.78 88.49 131.78 87.91 132.06 87.62 132.35 87.08 132.35 86.79 132.64 86.5 132.9 86.21 133.19 85.93 133.76 85.64 134.05 85.35 134.34 85.06 134.88 84.78 135.17 84.52 135.75 84.23 136.32 83.94 136.9 83.94 137.18 83.63 138.02 83.63 138.57 83.34 139.14 83.34 140 83.34 140.55 83.34 141.13 83.34 141.99 83.34 142.54 83.08 143.4 83.08 143.98 83.08 144.84 83.08 145.39 82.79 145.96 82.79 146.82 82.5 147.37 82.5 147.95 82.22 148.52 81.93 149.1 81.64 149.93 81.35 150.51 81.07 151.08 80.81 151.66 80.52 152.78 79.66 153.35 79.37 154.19 79.08 154.77 78.79 155.34 78.25 155.91 77.96 156.75 77.67 157.33 77.38 157.9 77.38 158.74 77.1 159.31 76.81 160.17 76.81 161.01 76.52 161.58 76.52 162.16 76.23 162.99 76.23 163.57 75.97 164.14 75.97 164.72 75.69 165.27 75.4 165.84 75.4 166.13 75.11 166.7 74.82 166.99 74.54 167.28 74.25 167.54 73.99 168.12 73.7 168.4 73.13 168.69 72.84 168.98 72.26 169.26 71.71 169.55 71.43 170.1 70.25 170.39 69.42 170.68 68.84 170.96 68.27 171.54 67.72 171.82 66.86 172.37 66.28 172.66 65.44 173.24 64.58 173.81 64.01 174.36 63.17 174.93 62.31 175.51 61.73 176.37 60.9 176.92 60.32 177.49 59.46 178.36 58.91 178.9 58.05 179.48 57.45 180.34 56.9 180.92 56.33 181.47 55.75 182.33 55.18 182.88 54.34 184.29 53.19 185.15 52.64 185.72 52.07 186.3 51.49 187.13 50.92 187.71 50.37 188.54 49.8 189.12 49.51 189.69 48.93 190.56 48.65 191.11 48.36 191.68 48.1 192.25 48.1 193.12 47.81 193.67 47.81 194.24 47.81 195.1 47.52 195.65 47.52 196.23 47.52 197.09 47.52 197.66 47.52 198.21 47.52 198.79 47.52 199.36 47.52 199.94 47.24 200.48 47.24 201.06 47.24 201.63 46.95 202.18 46.95 202.47 46.66 203.04 46.37 203.33 46.37 203.62 46.09 204.48 45.82 204.74 45.54 205.03 45.54 205.32 45.54 205.6 45.25 205.89 45.25 206.47 45.25 206.75 45.25 207.3 45.25 207.59 45.25 208.16 45.25 208.74 45.25 209.29 45.25 209.58 45.25 210.15 44.96 210.73 44.96 211.3 44.65 211.85 44.65 212.42 44.36 212.71 44.1 213.29 43.81 213.83 43.53 214.12 42.95 214.41 42.66 214.7 42.38 214.98 41.83 215.27 41.54 215.56 40.97 215.56 40.68 215.82 40.39 216.11 40.1 216.11 39.82 216.39 39.55 216.68 38.98 216.68 38.69 216.97 38.12 217.26 37.83 217.54 37.57 217.54 37.28 217.83 36.99 218.38 36.71 218.67 36.42 218.95 36.13 219.24 36.13 219.82 35.84 220.1 35.84 220.65 35.84 220.94 35.56 221.23 35.56 221.8 35.56 222.09 35.3 222.38 35.01 222.64 35.01 222.93 34.72 223.21 34.43 223.5 34.43 223.79 34.15 224.08 33.86 224.36 33.57 224.65 33.28 224.91 33 225.2 32.74 225.49 32.45 225.77 32.16 226.06 31.87 226.35 31.59 226.64 31.3 227.21 30.44 227.47 30.15 227.76 29.86 227.76 29.57 228.02 29.29 228.31 29.03 228.59 28.74 228.88 28.74 229.46 28.45 229.74 28.16 230.29 28.16 230.87 27.88 231.73 27.59 232.57 27.59 233.43 27.59 234.58 27.3 235.7 27.3 236.85 27.3 237.97 27.04 239.12 27.04 240.25 26.75 241.11 26.75 241.94 26.75 242.81 26.47 243.38 26.47 244.22 26.18 244.79 25.89 245.08 25.89 245.65 25.6 246.2 25.6 246.49 25.32 246.78 25.32 247.07 25.03 247.35 24.74 247.64 24.48 247.64 24.19 247.93 23.91 248.19 23.62 248.19 23.04 248.48 22.76 248.48 22.21 248.48 21.63 248.76 21.06 248.76 20.22 248.76 19.65 249.05 19.07 249.05 18.5 249.05 17.64 249.05 17.06 249.05 16.49 249.34 15.94 249.34 15.36 249.34 14.79 249.63 14.5 249.63 13.93 249.91 13.66 250.2 13.38 250.49 13.09 250.75 12.8 251.04 12.52 251.32 12.52 251.9 12.23 252.47 12.23 253.02 11.94 253.6 11.94 254.17 11.94 254.75 11.94 255.29 11.65 255.87 11.65 256.44 11.65 257.02 11.39 257.28 11.39 257.85 11.39 258.72 10.82 259.29 10.82 259.84 10.53 260.7 10.53 261.28 10.24 262.11 9.95 262.98 9.95 263.84 9.67 264.67 9.41 265.25 9.12 266.11 8.83 266.66 8.54 267.23 8.26 268.1 7.68 268.38 7.39 268.93 6.85 269.51 6.56 269.79 5.98 270.37 5.41 270.92 4.83 271.2 4.26 272.07 2.85 272.64 2.27 272.93 1.7 273.48 1.41 273.77 0.86 274.03 0.58 274.6 0.29 274.89 0.29 275.18 0 275.75 0 276.04 0 276.33 0 276.87 0.29 277.16 0.29 277.74 0.29 278.31 0.58 278.6 0.58 279.15 0.86 279.72 0.86 280.3 0.86 280.85 1.12 281.13 1.12 281.71 1.12 282.28 0.86 282.57 0.86 283.14 0.86 283.69 0.86 283.98 0.86 284.55 0.86 284.84 0.86 285.42 0.86 285.68 0.86 286.25 0.86 286.54 0.86 287.12 0.86 287.66 1.12 288.24 1.12 288.81 1.41 289.39 1.41 289.94 1.7 290.51 1.99 291.09 2.27 291.66 2.56 291.95 2.85 292.5 3.14 293.07 3.68 293.36 4.26 293.65 4.55 294.22 5.12 294.48 5.7 294.77 6.27 295.06 6.56 295.34 7.13 295.92 7.39 296.21 7.97 296.49 8.26 297.04 8.54 297.33 8.83 297.9 9.12 298.19 9.12 298.77 9.41 299.05 9.41 299.6 9.41 299.89 9.67 300.47 9.41 301.04 9.41 301.59 9.41 302.16 9.41 302.74 9.12 303.31 9.12 304.15 8.83 305.01 8.83 305.59 8.54 306.42 8.54 307.28 8.26 308.12 8.26 309.27 7.97 309.56 7.97"
        />
      </svg>
    </div>
  )
}

export default Sirguanza