import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanAntonio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 268.6 376.64"
      >
        <polygon
          fill={getColorByCarencias('SAN ANTONIO', municipio.toUpperCase())}
          className="cls-1"
          points="268.6 102.04 268.24 102.37 267.91 102.73 267.56 103.06 267.2 103.41 266.87 103.77 266.52 104.1 265.83 104.46 265.48 104.81 265.15 105.14 264.79 105.5 264.11 105.82 263.75 106.18 263.42 106.54 263.07 106.87 262.74 107.22 262.38 107.22 262.03 107.55 261.7 107.91 261.34 108.26 261.01 108.59 260.66 109.28 260.3 109.63 259.97 109.99 259.97 110.32 259.62 110.67 259.62 111.03 259.26 111.38 258.93 111.71 258.93 112.07 258.57 112.43 258.57 112.75 258.25 113.11 258.25 113.44 258.25 113.79 257.89 114.15 257.89 114.48 257.53 114.84 257.53 115.19 257.21 115.52 257.21 115.88 256.85 116.2 256.85 116.56 256.85 116.92 256.52 117.25 256.52 117.6 256.16 117.93 256.16 118.29 255.81 118.64 255.48 118.97 255.48 119.33 255.12 119.68 254.8 120.37 254.44 121.05 254.08 121.41 253.75 122.09 253.4 122.78 253.04 123.13 252.71 123.82 252.03 124.15 252.03 124.5 251.67 124.86 251.32 125.19 251.32 125.54 250.99 125.9 250.63 126.23 250.63 126.58 250.3 126.94 250.3 127.3 249.95 127.63 249.59 127.98 249.59 128.31 249.26 128.67 249.26 129.02 248.91 129.35 248.91 129.71 248.55 130.06 248.55 130.39 248.55 130.75 248.22 131.08 248.22 131.43 247.87 131.79 247.87 132.12 247.87 132.47 247.54 132.8 247.54 133.51 247.54 133.84 247.18 134.2 247.18 134.55 247.18 134.88 247.18 135.24 247.18 135.57 247.18 136.28 247.54 136.61 247.54 137.29 247.54 138.01 247.54 138.33 247.54 139.05 247.54 139.73 247.18 140.06 247.18 140.77 246.85 141.1 246.5 141.46 246.14 142.14 245.81 142.5 245.46 142.85 245.46 143.21 245.1 143.54 245.1 143.89 245.1 144.58 244.77 144.93 244.77 145.62 244.42 145.98 244.09 146.3 243.37 146.3 243.05 145.98 242.69 145.62 242.01 145.26 241.32 144.93 240.96 144.93 240.28 144.93 239.92 145.26 239.59 145.26 239.24 145.62 238.88 145.98 238.55 146.66 238.2 146.99 237.87 147.35 237.51 147.67 237.16 148.03 236.83 148.03 236.47 148.39 236.14 148.71 235.79 148.71 235.43 149.07 235.1 149.43 234.75 149.76 234.39 149.76 234.06 150.11 233.71 150.44 233.71 150.8 233.05 151.15 233.05 151.84 232.69 152.17 232.36 152.88 232.01 153.21 232.01 153.92 231.65 154.25 231.65 154.93 231.32 155.29 231.32 155.64 230.97 155.97 230.97 156.33 230.64 157.01 230.28 157.37 229.6 157.37 229.24 157.01 228.56 157.01 228.2 157.01 227.87 157.37 227.52 157.37 226.83 157.37 226.48 157.37 225.79 157.7 225.79 158.38 225.79 158.77 226.15 159.09 226.15 159.81 226.48 160.14 226.48 160.49 226.83 160.85 226.83 161.18 226.83 161.53 227.16 161.53 227.16 161.86 227.52 162.55 227.87 163.26 228.2 163.59 228.56 164.3 228.91 164.98 228.91 165.31 229.24 166.02 229.6 166.71 229.6 167.39 229.93 167.75 229.93 168.43 230.28 169.12 230.28 169.8 230.64 170.16 230.64 170.84 230.64 171.53 230.64 171.88 230.64 172.24 230.97 172.57 230.97 172.93 230.97 173.28 230.97 173.61 230.97 173.97 230.97 174.68 230.97 175.01 231.32 175.36 231.32 175.72 231.32 176.05 231.65 176.4 231.65 176.73 232.01 177.09 232.01 177.44 232.36 177.77 232.36 178.13 232.69 178.46 232.69 178.81 232.69 179.17 233.05 179.17 233.05 179.5 233.38 179.85 233.38 180.21 233.38 180.54 233.71 180.54 233.71 180.9 233.71 181.22 234.06 181.58 234.06 181.91 234.06 182.26 234.39 182.26 234.39 182.62 234.39 182.95 234.39 183.31 234.75 183.66 234.75 183.99 234.75 184.35 234.75 184.68 235.1 184.68 235.1 185.03 235.1 185.39 235.1 185.72 235.1 186.07 235.1 186.4 235.43 186.4 235.43 186.76 235.43 187.11 235.43 187.44 235.43 187.8 235.43 188.13 235.43 188.48 235.43 188.84 235.79 189.17 235.79 189.52 235.79 189.88 235.79 190.21 235.79 190.59 235.79 190.92 235.79 191.28 235.79 191.6 235.79 191.96 235.79 192.32 235.79 192.65 235.79 193 235.43 193.33 235.43 193.69 235.43 194.04 235.43 194.37 235.43 194.73 235.43 195.06 235.43 195.41 235.1 195.41 235.1 195.77 235.1 196.1 235.1 196.45 234.75 196.81 234.75 197.14 234.75 197.49 234.39 197.82 234.39 198.18 234.39 198.53 234.06 198.53 234.06 198.86 234.06 199.22 233.71 199.22 233.71 199.55 233.71 199.9 233.71 200.26 233.38 200.26 233.38 200.59 233.38 200.94 233.38 201.3 233.05 201.3 233.05 201.63 233.05 201.98 233.05 202.31 233.05 202.67 232.69 203.03 232.69 203.35 232.69 203.71 232.69 204.04 232.69 204.39 232.69 204.75 232.69 205.08 232.69 205.44 232.69 205.76 232.69 206.15 232.69 206.48 232.69 206.83 233.05 206.83 233.05 207.19 233.05 207.52 233.05 207.87 233.05 208.23 233.38 208.23 233.38 208.56 233.38 208.91 233.38 209.24 233.71 209.24 233.71 209.6 233.71 209.95 234.06 210.28 234.06 210.64 234.06 210.97 234.06 211.32 234.06 211.68 234.06 212.01 234.06 212.36 234.06 212.69 234.06 213.05 234.06 213.41 233.71 213.41 233.71 213.73 233.71 214.09 233.38 214.09 233.38 214.45 233.05 214.45 233.05 214.77 232.69 214.77 232.69 215.13 232.36 215.13 232.01 215.46 231.65 215.82 231.32 216.14 230.97 216.14 230.97 216.5 230.64 216.5 230.64 216.86 230.28 217.18 230.28 217.54 229.93 217.9 229.93 218.23 229.93 218.58 229.93 218.91 229.93 219.27 229.93 219.62 229.93 219.95 230.28 219.95 230.28 220.31 230.64 220.64 230.97 220.99 231.32 220.99 231.32 221.35 231.65 221.35 232.01 221.35 232.01 221.68 232.36 221.68 232.69 221.68 232.69 222.06 232.69 223.07 233.05 223.79 233.71 224.83 234.75 225.51 235.79 225.84 236.83 226.55 238.55 227.56 240.64 228.61 242.01 229.65 244.42 231.04 246.85 232.06 247.54 232.41 248.22 232.41 248.55 232.77 249.26 233.1 249.95 234.49 249.95 234.82 249.95 236.22 250.3 236.9 250.3 237.97 251.32 240.38 252.71 242.11 253.04 242.11 253.04 242.46 253.4 242.79 253.75 242.79 254.08 243.15 254.08 244.87 253.75 246.93 253.4 247.64 241.65 253.86 234.75 257.31 226.83 261.12 218.53 264.92 216.48 266.29 211.63 269.77 204.37 268.73 197.83 266.65 189.17 263.53 188.49 263.88 183.31 263.88 179.18 264.92 175.4 268.02 171.95 273.93 171.23 281.16 170.55 288.8 167.45 296.04 161.24 302.64 160.2 309.54 159.51 311.95 159.51 312.3 158.47 318.19 153.29 326.82 147.08 335.15 143.63 342.4 140.15 349.66 136.01 355.55 131.19 359 129.11 360.73 124.62 361.77 122.92 362.45 116.7 363.82 115.66 364.51 113.25 366.26 110.49 369.38 109.09 370.42 104.6 372.48 103.91 372.83 100.11 372.83 97.01 372.83 88.38 372.83 88.38 373.16 83.54 374.2 82.85 374.56 74.55 375.93 72.83 376.28 71.79 376.64 71.79 375.93 70.77 371.11 68.34 369.38 63.87 369.38 58.34 368.7 52.83 364.18 47.63 359.69 43.17 355.88 38.68 352.78 33.14 348.26 29.01 342.73 26.93 336.52 27.25 330.63 26.93 327.53 23.8 325.78 19.31 324.41 19.31 324.08 18.98 321.31 18.63 318.19 17.26 311.26 15.18 304.01 13.12 296.39 11.4 290.17 8.99 280.83 5.18 271.5 0.69 264.92 0 258.35 3.81 249.37 4.82 247.64 6.91 244.19 13.12 234.49 19.31 224.83 23.47 217.18 25.53 208.56 25.53 208.23 24.84 197.14 24.52 190.21 24.16 182.62 24.84 176.73 24.84 176.05 26.24 172.24 27.25 170.16 30.38 165.31 33.14 161.86 39 154.6 46.62 146.66 46.95 146.3 55.6 138.69 55.93 137.29 58.01 130.39 60.07 122.42 61.46 111.71 63.87 104.46 64.56 103.06 69.73 94.4 75.27 89.23 82.85 80.96 83.89 79.56 90.44 72.27 94.25 69.18 95.62 67.81 97.7 66.08 101.5 63.65 105.64 60.52 107.72 57.76 109.09 56.03 109.45 55.68 114.29 49.13 116.35 44.61 117.74 41.52 119.47 35.63 120.48 32.86 122.92 24.56 123.58 23.88 123.93 22.84 124.62 21.11 126.34 17.99 126.7 17.66 132.56 11.75 139.46 7.28 143.96 2.08 144.31 1.39 145.35 0 146.37 0.71 146.72 1.06 147.08 1.06 147.08 1.39 147.41 1.75 147.41 2.08 147.41 2.43 147.76 2.79 147.76 3.12 148.12 3.47 148.12 3.83 148.12 4.52 148.12 4.84 148.45 5.2 148.45 5.89 148.45 6.24 148.45 6.57 148.45 6.93 148.8 7.28 148.8 7.61 148.8 7.97 148.8 8.3 149.13 8.65 149.13 9.01 149.13 9.34 149.13 9.69 149.13 10.05 149.13 10.38 149.13 10.73 149.13 11.06 149.13 11.42 149.13 11.75 149.13 12.1 149.13 12.46 149.13 12.79 149.13 13.14 149.13 13.83 149.49 14.18 149.82 14.51 150.17 14.87 150.53 15.22 150.53 15.55 150.86 15.94 151.21 16.27 151.57 16.98 151.9 17.31 152.25 17.66 152.58 17.99 152.58 18.35 152.94 18.7 153.29 19.03 153.62 19.72 153.98 20.07 153.98 20.43 154.31 20.76 154.66 21.11 155.02 21.44 155.02 21.8 155.35 22.15 155.7 22.15 155.7 22.48 156.06 22.84 156.06 23.17 156.39 23.52 156.75 23.88 157.07 24.21 157.07 24.56 157.43 24.92 157.79 25.25 157.79 25.6 158.12 25.93 158.12 26.29 158.47 26.65 158.47 26.97 158.47 27.33 158.8 27.66 159.16 28.01 159.16 28.37 159.16 28.7 159.16 29.06 159.51 29.06 159.51 29.38 159.51 29.74 159.84 30.1 159.84 30.42 159.84 30.78 160.2 31.47 160.2 31.85 160.2 32.18 160.55 32.53 160.55 33.22 160.55 33.57 160.55 33.9 160.88 34.26 160.88 34.59 160.88 34.94 161.24 35.3 161.24 35.63 161.24 35.98 161.57 35.98 161.57 36.34 161.92 36.67 162.25 37.03 162.61 37.35 162.96 37.71 163.29 37.71 163.65 38.04 164 38.39 164.33 38.75 164.69 38.75 165.02 39.08 165.37 39.08 165.73 39.44 166.06 39.44 166.41 39.79 166.74 39.79 167.1 40.12 167.45 40.48 167.78 40.48 167.78 40.81 168.14 41.16 168.5 41.52 168.5 41.85 168.82 42.2 168.82 42.53 169.18 42.53 169.51 42.89 169.51 43.24 169.86 43.57 170.22 43.57 170.22 43.93 170.55 44.26 170.91 44.26 170.91 44.61 171.23 44.61 171.59 44.97 171.95 45.3 172.27 45.3 172.63 45.65 172.96 45.65 173.32 46.01 173.67 46.01 174 46.34 174.36 46.34 174.68 46.69 175.04 46.69 175.04 47.02 175.4 47.02 175.73 47.38 176.08 47.38 176.44 47.73 176.77 47.73 177.12 48.09 177.45 48.45 177.81 48.45 178.16 48.78 178.46 48.78 178.82 48.45 178.82 47.73 178.82 47.38 179.18 47.02 179.18 46.69 179.18 46.34 179.51 46.01 179.51 45.65 179.86 45.3 179.86 44.97 179.86 44.61 180.22 44.61 180.22 44.26 180.22 43.93 180.55 43.57 180.55 43.24 180.55 42.89 180.9 42.53 181.23 42.2 181.23 41.85 181.23 41.52 181.59 41.16 181.59 40.81 181.92 40.48 181.92 40.12 181.92 39.79 182.27 39.44 182.27 39.08 182.63 38.75 182.63 38.39 182.63 38.04 182.96 37.71 183.31 37.35 183.31 37.03 183.67 36.67 183.67 36.34 184 35.98 184 35.63 184.35 35.3 184.35 34.94 184.68 34.94 185.04 34.59 185.04 34.26 185.39 33.9 185.39 33.57 185.72 33.22 186.08 33.22 186.08 32.86 186.41 32.53 186.41 32.18 186.76 32.18 186.76 31.85 187.12 31.47 187.45 31.14 187.8 30.78 187.8 30.42 188.13 30.42 188.13 30.1 188.49 29.74 188.84 29.38 189.17 29.06 189.53 28.7 189.89 28.37 189.89 28.01 190.21 28.01 190.57 27.66 190.9 27.33 191.25 26.97 191.61 26.65 191.94 26.29 192.3 26.29 192.3 25.93 192.62 25.6 192.98 25.6 193.34 25.6 193.66 25.25 194.02 25.25 194.38 24.92 194.71 24.92 195.39 24.56 195.75 24.56 195.75 24.21 196.08 24.21 196.43 23.88 196.79 23.88 196.79 23.52 197.12 23.17 197.47 22.84 197.83 22.84 198.16 22.48 198.16 22.15 198.51 22.15 199.2 22.15 199.2 22.48 199.2 22.84 199.2 23.17 199.55 23.52 199.88 23.88 199.88 24.21 200.24 24.21 200.57 24.56 200.92 24.92 201.28 25.25 201.61 25.25 201.96 25.6 202.29 25.93 202.65 25.93 203 26.29 203.33 26.65 203.69 26.65 204.05 26.97 204.37 27.33 204.73 27.66 205.06 28.01 205.06 28.37 205.06 28.7 205.41 29.38 205.41 29.74 205.41 30.1 205.41 30.42 205.77 31.14 205.77 31.47 205.77 31.85 205.77 32.18 205.77 32.53 206.1 32.86 206.1 33.22 206.1 33.9 206.1 34.26 206.1 34.94 205.77 35.3 205.77 35.63 205.77 36.34 205.77 36.67 205.41 37.35 205.41 37.71 205.41 38.04 205.41 38.39 205.06 38.75 205.06 39.08 205.06 39.79 205.06 40.12 204.73 40.81 204.73 41.16 204.73 41.52 204.73 41.85 204.73 42.2 204.73 42.53 204.73 42.89 204.73 43.24 204.73 43.57 204.73 43.93 204.73 44.26 204.73 44.61 204.73 45.3 204.73 45.65 204.37 46.01 204.37 46.34 204.37 46.69 204.05 47.02 204.05 47.38 204.05 47.73 204.05 48.09 203.69 48.45 203.69 48.78 203.69 49.13 204.05 49.46 204.05 49.82 204.05 50.17 204.37 50.5 204.73 50.86 205.06 51.21 205.41 51.54 205.77 51.9 206.1 52.23 206.46 52.58 206.78 52.91 207.14 52.91 207.5 53.27 207.82 53.62 208.18 53.95 208.54 53.95 208.87 54.31 209.22 54.66 209.55 54.99 209.91 54.99 210.26 55.35 210.59 55.68 210.95 55.68 211.28 56.03 211.63 56.03 211.99 56.39 212.32 56.72 212.67 56.72 212.67 57.07 213 57.4 213.36 57.4 213.71 57.76 214.04 58.11 214.4 58.11 214.75 58.44 215.08 58.8 215.44 58.8 215.77 59.13 216.12 59.48 216.48 59.84 216.81 60.17 217.16 60.17 217.49 60.52 217.85 60.88 218.2 61.21 218.53 61.21 218.89 61.57 219.22 61.89 219.57 62.25 219.93 62.25 219.93 62.61 220.26 62.93 220.61 63.29 220.94 63.65 221.3 63.65 221.66 64 221.66 64.36 221.98 64.36 221.98 64.69 221.98 65.04 222.34 65.04 222.34 65.37 222.34 65.73 221.98 66.08 221.98 66.41 221.98 67.1 221.66 67.45 221.66 67.81 221.3 68.14 220.94 68.82 220.94 69.18 220.61 69.18 220.61 69.54 220.26 69.86 220.26 70.22 219.93 70.58 219.93 70.9 219.93 71.26 219.57 71.59 219.57 71.95 219.22 72.27 219.22 72.63 218.89 72.99 218.89 73.31 218.89 73.67 218.53 74.03 218.53 74.36 218.53 74.71 218.2 75.04 218.2 75.4 218.2 75.75 217.85 76.08 217.85 76.44 217.85 76.77 217.85 77.12 217.49 77.12 217.49 77.48 217.49 78.16 217.16 78.49 217.16 78.85 217.16 79.56 216.81 79.92 216.81 80.6 216.48 80.96 216.48 81.28 216.48 81.97 216.12 82.33 216.12 82.68 216.12 83.37 216.12 83.69 215.77 84.05 215.77 84.74 215.77 85.09 215.44 85.45 215.44 86.13 215.44 86.46 215.44 86.82 215.08 86.82 215.08 87.15 215.08 87.5 215.08 87.86 214.75 87.86 214.75 88.19 214.75 88.54 214.4 88.9 214.4 89.23 214.04 89.58 213.71 90.27 213.71 90.62 214.04 90.95 214.4 90.62 214.75 90.62 215.08 90.27 215.44 89.91 215.77 89.91 216.12 90.27 216.12 90.62 216.48 90.95 216.81 90.95 217.16 90.62 217.49 90.27 217.85 89.91 217.85 89.58 217.85 89.23 217.85 88.9 217.85 88.54 217.85 88.19 217.85 87.86 218.2 87.5 218.2 87.15 218.53 86.82 218.53 86.46 218.89 86.13 218.89 85.78 218.89 85.45 219.22 85.45 219.22 85.09 219.22 84.74 219.57 84.74 219.57 84.05 219.93 83.69 219.93 83.37 220.26 83.01 220.26 82.33 220.61 81.97 220.61 81.64 220.94 81.28 221.3 80.96 221.3 80.6 221.66 80.24 221.98 79.92 222.34 79.56 222.34 79.2 222.7 79.2 223.03 78.85 223.38 78.49 223.71 78.16 224.07 78.16 224.07 77.81 224.42 77.81 224.75 77.48 225.11 77.48 225.44 77.12 225.79 77.12 226.15 77.12 226.48 76.77 226.83 76.77 227.16 76.77 227.87 77.12 228.2 77.12 228.56 77.12 228.91 77.12 229.24 77.12 229.6 77.48 229.93 77.48 230.28 77.48 230.64 77.48 230.97 77.48 231.32 77.48 231.65 77.48 232.01 77.81 232.36 77.81 232.69 77.81 233.05 77.81 233.38 78.16 233.71 78.16 233.71 78.49 234.06 78.49 234.39 78.85 234.75 79.2 235.1 79.56 235.43 79.92 235.79 79.92 235.79 80.24 236.14 80.6 236.83 80.6 237.16 80.6 237.51 80.6 237.87 80.96 238.55 80.96 238.88 80.96 239.24 80.96 239.59 80.96 239.92 81.28 240.28 81.28 240.64 81.28 240.96 81.64 241.32 81.97 241.65 82.33 242.01 82.68 242.01 83.01 242.33 83.37 242.33 84.05 242.69 84.05 242.69 84.41 242.69 84.74 242.69 85.09 242.33 85.45 242.33 86.13 242.33 86.46 242.01 86.82 242.01 87.15 242.01 87.5 241.65 87.86 241.65 88.19 241.65 88.54 241.65 88.9 241.65 89.23 241.65 89.58 241.65 89.91 241.65 90.27 241.65 90.62 241.65 90.95 242.01 91.31 242.01 91.66 242.01 91.99 242.01 92.35 242.01 92.68 242.01 93.03 242.01 93.36 242.01 93.72 242.01 94.08 241.65 94.4 242.01 94.76 242.33 94.76 242.69 95.12 243.05 95.12 243.37 95.12 243.73 95.12 244.09 95.12 244.42 95.12 244.42 95.47 244.77 95.47 245.1 95.47 245.46 95.83 246.14 96.16 246.5 96.16 246.85 96.51 247.18 96.84 247.18 97.2 247.54 97.55 247.87 97.88 248.22 98.24 248.55 98.57 248.55 98.92 248.91 99.28 249.26 99.61 249.59 99.61 249.95 99.96 250.3 100.32 250.63 100.32 250.63 100.65 250.99 101 251.32 101 251.67 101.33 252.03 101.69 252.36 101.69 252.71 102.04 253.04 102.37 253.4 102.37 254.08 102.73 254.44 103.06 254.8 103.06 254.8 103.41 255.12 103.77 255.48 103.77 255.81 104.1 256.16 104.1 256.16 104.46 256.52 104.46 256.85 104.81 257.21 104.81 257.53 105.14 257.89 105.14 258.25 105.5 258.57 105.5 258.93 105.5 259.26 105.5 259.62 105.5 259.97 105.82 260.66 105.82 261.01 105.82 261.01 105.14 261.01 104.81 261.01 104.46 261.01 104.1 261.34 103.77 261.34 103.41 261.7 103.06 261.7 102.73 262.03 102.73 262.38 102.73 262.74 102.37 263.07 102.37 263.42 102.37 263.75 102.37 264.11 102.73 264.46 102.73 264.79 102.73 265.15 102.73 265.48 102.73 265.83 102.73 266.19 102.73 266.52 102.37 266.87 102.37 267.2 102.37 267.56 102.04 268.24 102.04 268.6 102.04"
        />
      </svg>
    </div>
  )
}

export default SanAntonio