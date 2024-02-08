import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guane = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 280.06 339.46"
      >
        <polygon
          fill={getColorByCarencias('GUANE', municipio.toUpperCase())}
          className="cls-1"
          points="224.05 53.69 225.45 53.69 226.84 53.69 227.88 54.03 230.32 54.38 231.01 54.73 233.45 55.08 234.49 55.43 236.93 55.08 237.95 55.08 239.34 55.08 240.38 54.73 241.43 54.73 243.86 54.03 245.25 54.03 247.69 53.34 249.08 56.47 249.78 57.17 250.48 58.21 252.22 60.65 253.26 62.04 255 64.48 255.7 65.52 257.44 67.26 258.13 67.96 259.18 69.03 259.87 70.42 259.87 71.12 260.57 72.16 261.26 74.6 261.96 75.99 262.66 78.08 263.35 80.86 263.35 82.25 263.7 82.6 264.05 83.65 264.4 84.72 264.75 86.11 265.44 88.2 266.49 89.94 267.18 91.68 268.23 93.42 270.31 95.51 271.36 96.9 272.75 97.95 273.79 98.99 274.49 100.06 275.19 100.76 276.23 101.45 276.93 101.8 277.62 102.5 278.32 103.89 279.01 104.93 279.36 105.98 279.71 107.37 280.06 108.42 279.71 111.2 279.36 114.68 279.01 117.12 278.67 119.2 278.32 120.6 277.97 122.68 277.62 123.73 277.27 126.17 276.58 127.56 276.58 129.3 276.23 130.34 276.23 131.39 276.23 132.11 276.58 132.81 276.58 133.5 276.93 134.55 276.93 135.94 277.27 137.33 277.27 138.38 276.93 141.51 276.93 142.9 276.93 144.29 276.93 146.38 276.93 148.5 276.93 150.24 276.58 151.63 275.88 153.72 274.49 156.15 273.1 157.89 272.05 158.59 270.31 160.33 269.62 160.33 268.92 161.03 267.53 161.38 266.83 161.38 265.79 162.07 264.75 162.42 264.05 162.07 263.35 162.07 262.31 162.07 261.26 162.42 259.52 162.42 258.83 162.07 258.13 161.38 257.78 160.68 257.09 159.98 256.39 158.59 255.7 156.15 255.35 155.46 255 155.11 254.3 154.41 253.26 153.72 251.87 152.33 251.52 151.63 250.82 150.93 250.48 150.24 250.13 149.19 249.08 147.77 248.39 146.38 248.39 145.34 247.34 142.55 247 141.16 247 140.46 246.65 139.42 246.3 138.38 246.3 137.33 245.95 136.29 245.25 134.9 244.56 134.55 243.17 134.2 242.12 134.9 241.77 135.24 241.08 136.29 240.38 137.33 239.69 138.38 239.69 139.42 239.34 140.81 238.99 142.2 238.64 143.94 238.64 145.34 238.99 146.03 238.99 147.08 238.99 148.5 238.99 149.19 238.64 149.54 238.29 150.93 237.63 151.28 237.28 151.98 235.89 154.41 235.19 156.5 234.15 157.89 233.8 158.59 233.45 159.64 233.1 160.68 232.41 163.46 232.41 164.54 232.41 165.93 232.41 166.97 232.06 167.67 231.71 168.71 231.71 169.41 231.71 170.11 231.71 171.15 231.71 172.19 232.06 172.89 231.36 173.24 230.67 173.93 230.32 174.63 229.62 175.33 228.93 175.67 228.58 176.37 227.88 176.72 227.19 177.41 226.84 177.76 226.14 178.46 225.79 178.81 224.75 179.5 223.71 179.85 223.01 180.2 222.31 180.2 220.92 180.55 220.23 180.89 219.18 180.89 218.48 180.55 217.44 180.55 216.4 180.2 216.05 179.85 215.35 178.46 215.35 177.41 215.35 176.37 215.7 175.67 216.4 174.98 217.09 174.63 217.44 173.24 217.09 172.19 216.74 171.85 216.74 171.15 216.05 170.11 215.7 169.41 215.35 168.71 214.66 168.02 213.96 166.97 213.61 166.28 212.92 165.23 212.92 164.88 212.22 164.19 211.87 163.12 211.52 162.77 210.83 162.42 209.78 162.07 209.09 161.72 208.39 161.72 208.04 161.03 208.04 160.33 208.04 158.94 208.39 157.89 208.39 156.5 209.09 155.81 209.44 155.11 210.13 154.41 210.48 154.07 211.18 153.37 211.87 153.02 212.57 152.33 213.26 151.98 213.26 151.28 213.26 149.89 212.92 149.19 212.57 148.85 211.87 148.15 211.18 148.15 210.48 148.15 208.74 148.5 207 148.85 206.3 149.19 205.61 149.19 204.56 149.89 203.87 150.24 202.82 150.59 200.73 151.63 199.34 151.98 198.65 152.33 198.3 152.67 197.95 154.07 198.3 154.76 198.99 155.46 199.69 155.81 200.39 156.15 202.13 157.2 202.48 157.55 203.87 158.59 204.22 158.94 204.91 159.64 205.26 160.33 204.91 160.68 203.52 161.38 200.39 162.42 199.34 162.77 197.95 163.46 197.25 163.81 196.91 164.54 196.21 164.88 195.51 165.23 195.17 165.58 194.82 166.97 194.47 167.67 194.12 168.37 193.43 170.8 193.43 171.85 193.43 172.89 193.43 173.59 193.43 174.63 193.08 175.33 192.73 175.67 191.69 176.02 190.29 176.02 185.07 175.33 183.68 175.33 182.64 174.98 181.94 174.63 181.24 174.28 180.55 173.93 180.2 173.59 179.5 172.89 179.5 171.85 179.16 171.15 177.42 166.28 176.72 168.02 176.02 169.76 175.68 170.8 175.33 172.19 175.33 172.89 175.33 174.28 175.33 176.02 175.33 177.07 175.33 178.81 175.68 179.85 176.02 180.55 176.02 181.24 176.37 182.29 176.72 183.33 177.42 184.03 178.46 184.03 179.5 184.03 181.24 184.38 182.29 185.07 183.68 186.12 184.38 186.81 185.07 187.16 185.77 187.86 186.47 189.25 186.81 190.29 187.16 192.03 187.16 192.73 187.51 193.42 187.86 194.12 188.21 194.82 188.9 196.24 189.25 196.93 189.95 197.63 189.95 198.67 189.6 199.37 188.55 200.41 186.47 203.89 185.77 204.94 185.42 205.29 184.03 206.33 182.98 207.03 181.24 207.72 179.85 208.42 179.16 208.77 177.76 209.11 176.37 209.81 175.68 210.86 175.33 212.62 174.98 213.32 174.63 214.02 173.94 214.71 172.89 215.41 172.2 216.1 171.15 217.15 169.76 218.54 168.72 219.59 168.37 220.98 168.02 223.07 167.67 225.15 167.32 226.89 167.32 228.66 166.97 230.75 166.97 232.84 166.97 235.28 166.63 237.71 166.28 239.8 165.58 241.54 165.23 243.28 165.23 246.41 165.23 247.46 164.89 248.5 164.54 249.89 164.54 250.94 164.19 252.33 164.19 254.42 164.19 256.16 164.19 257.2 163.84 258.59 163.49 260.36 162.8 261.41 162.45 262.1 161.41 263.15 160.36 263.84 159.32 264.54 158.27 265.24 157.23 265.58 156.53 265.93 155.49 266.63 154.1 267.32 153.4 267.67 152.01 268.37 150.62 269.06 149.22 269.76 146.09 272.2 145.4 273.59 145.05 274.63 144.7 275.71 144.35 276.75 144.35 277.1 144 278.14 143.66 279.19 143.31 279.88 142.96 281.28 142.96 282.32 142.96 283.71 142.96 285.45 142.96 286.5 142.96 287.89 142.96 288.93 142.61 289.98 141.92 291.02 141.92 291.75 141.22 292.09 141.22 292.44 141.22 292.79 141.22 293.49 141.57 293.49 142.26 293.49 142.96 293.49 143.31 293.49 143.66 293.49 144.35 293.83 144.7 293.83 145.05 293.83 145.4 293.83 145.4 294.53 145.4 295.23 145.4 295.92 145.4 296.27 145.4 296.62 145.4 296.97 147.48 296.97 149.22 296.97 149.57 296.97 149.57 299.4 149.57 299.75 149.22 299.75 149.22 300.79 149.22 302.19 149.22 303.93 149.22 304.27 149.22 304.97 149.22 306.01 149.22 306.71 149.22 307.41 149.22 307.76 148.88 307.76 148.88 308.45 148.53 308.45 148.53 308.8 148.53 309.15 148.53 309.5 148.53 309.84 148.53 310.19 148.18 310.19 148.18 310.54 148.18 310.89 148.18 311.24 147.83 311.58 147.83 311.93 147.83 312.28 147.83 312.63 147.83 312.98 147.48 313.67 147.48 314.02 147.48 314.37 147.14 315.41 147.14 315.76 147.14 316.11 146.79 316.11 146.79 316.46 147.14 316.8 146.79 317.15 146.79 317.85 146.44 318.54 145.74 319.24 145.4 319.59 144.7 319.59 144.35 319.59 143.66 319.94 142.26 319.94 140.18 319.59 140.18 319.94 139.48 319.94 137.74 319.94 137.04 319.94 136 319.94 135.65 320.28 135.3 320.28 134.96 320.28 133.91 320.28 134.26 321.68 135.65 325.53 137.04 328.32 136.35 329.36 135.65 329.71 134.96 330.06 134.26 330.06 132.87 330.41 132.52 330.41 131.82 330.06 131.13 329.71 130.43 329.01 129.73 328.67 128.69 328.32 127.65 327.62 127.3 327.27 126.63 325.53 125.94 323.79 124.89 321.68 123.5 320.28 122.45 320.28 120.71 319.94 120.02 319.94 118.97 319.94 117.93 319.94 115.84 319.94 114.45 319.24 113.75 318.89 113.41 318.54 111.67 317.5 110.97 316.8 109.93 316.11 108.53 315.41 107.49 314.37 106.45 313.67 105.05 313.32 103.31 312.98 102.27 312.63 101.92 312.63 100.18 312.63 98.79 312.28 96.7 311.58 95.31 310.89 94.61 310.54 93.22 310.19 91.48 310.19 90.78 310.19 89.39 310.54 88.35 310.89 87.3 310.89 85.91 311.24 84.52 311.58 81.04 312.28 78.95 311.93 71.32 311.58 70.97 325.19 69.93 326.58 63.67 331.1 59.49 333.54 57.75 333.89 57.05 334.58 56.36 335.98 55.31 339.46 53.92 338.76 51.48 336.32 48 333.54 45.22 332.15 42.43 330.75 40.35 330.06 39.3 329.71 38.95 329.36 39.3 329.01 40 327.97 42.09 325.19 41.74 323.07 41.39 318.54 38.61 310.54 34.08 303.23 30.6 296.27 27.82 292.44 25.03 284.41 22.25 278.84 18.07 273.59 14.97 268.37 14.62 261.06 14.97 256.51 13.92 251.98 13.58 250.94 12.53 247.81 9.75 244.67 7.66 241.19 3.48 238.06 0.7 233.19 0.35 231.45 0 227.97 0.35 226.55 0.35 223.76 0.7 223.07 2.79 219.93 5.92 218.19 9.4 217.15 13.58 215.41 17.03 211.93 20.16 207.37 21.2 203.89 23.64 201.46 24.68 200.41 26.08 194.82 26.42 189.94 26.42 180.2 24.68 171.5 23.99 166.28 24.68 161.38 28.51 158.59 34.43 157.2 39.65 154.41 42.09 151.63 41.74 145.68 41.74 139.77 41.74 129.99 41.74 126.86 41.74 125.47 41.74 117.46 42.43 112.59 44.87 108.42 49.05 104.93 53.57 100.76 58.79 94.12 63.32 92.03 64.01 91.68 65.41 91.33 70.63 89.94 76.86 87.5 81.39 82.6 91.83 75.99 101.57 72.51 109.58 72.51 118.97 74.6 130.78 72.16 137.04 69.38 146.79 66.22 149.92 62.74 153.4 60.99 156.53 60.65 163.49 57.51 169.41 51.95 177.07 43.59 183.33 34.17 185.07 26.16 186.47 22.33 192.38 12.56 197.25 6.29 203.17 1.39 204.22 1.04 205.61 0.35 206.65 0 206.65 1.04 208.04 1.74 208.74 2.79 209.09 3.48 209.78 4.55 209.78 5.25 209.78 6.29 209.78 7.34 209.09 8.73 208.39 9.43 208.39 10.47 208.04 11.86 208.04 12.91 208.39 13.6 209.09 14.3 209.78 15 210.48 15.69 211.52 16.04 212.22 16.39 212.57 16.74 212.92 17.43 213.61 18.48 213.96 19.52 214.31 20.94 214.31 22.68 214.31 24.42 214.31 25.81 214.31 27.55 214.31 29.29 214.66 30.69 215 31.73 215.7 32.77 216.05 33.82 216.4 34.51 216.74 35.56 217.44 36.28 218.14 37.33 218.83 38.02 219.53 38.72 221.62 41.16 222.31 43.24 222.66 44.29 222.66 44.99 222.66 46.03 223.01 46.73 223.01 48.12 223.36 48.81 223.36 49.51 223.36 50.21 223.71 51.6 223.71 52.29 223.71 52.99 224.05 53.69"
        />
      </svg>
    </div>
  )
}

export default Guane