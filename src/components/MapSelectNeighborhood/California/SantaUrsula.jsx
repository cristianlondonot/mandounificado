import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaUrsula = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 373.79 334.24"
      >
        <polygon
          fill={getColorByCarencias('SANTA URSULA', municipio.toUpperCase())}
          className="cls-1"
          points="373.79 215.37 373.5 215.95 372.62 217.67 371.49 219.68 371.18 219.96 370.61 221.11 369.46 222.83 368.34 223.98 367.17 225.7 367.17 227.71 366.62 229.43 366.05 232.87 366.05 234.32 365.74 235.73 365.74 237.77 365.45 239.49 365.45 240.92 365.16 242.35 365.16 244.07 364.61 246.37 364.01 247.8 364.01 249.24 363.73 250.67 363.73 251.24 363.44 252.39 363.44 254.13 363.44 255.28 363.44 256.43 363.44 257.58 364.01 259.01 364.33 260.16 364.61 261.02 364.61 263.02 363.73 264.17 362.6 265.32 362.01 266.18 361.46 268.21 360.88 269.36 360.29 270.79 359.45 272.51 359.16 273.94 358.57 275.09 357.44 276.53 357.16 278.25 356.56 279.99 356.56 281.71 355.44 283.72 355.13 286.3 355.13 286.85 355.44 287.71 355.44 288.57 356.56 289.43 356.85 290.89 357.44 291.75 357.73 292.61 357.73 294.04 357.99 295.19 357.99 296.05 357.99 296.34 357.99 296.91 358.28 297.77 358.57 299.49 358.28 301.21 357.99 302.36 357.16 303.22 356.85 303.5 356.01 304.36 355.13 304.65 354 305.51 353.12 306.4 353.12 307.26 352.54 308.4 351.99 309.55 351.4 310.98 350.27 312.13 349.39 312.99 348.55 313.56 346.83 314.43 345.66 315 344.54 315.57 343.94 316.43 342.82 317.29 341.93 318.44 340.79 319.61 339.95 321.04 339.09 322.19 337.66 323.63 336.77 324.49 336.49 325.06 336.22 325.92 335.34 327.35 334.77 328.79 333.05 331.08 333.05 332.23 331.04 334.24 331.32 332.83 331.32 331.65 331.04 329.65 331.04 328.79 330.77 327.07 329.89 324.77 329.89 323.05 329.32 320.76 329.05 319.32 328.48 318.15 327.05 316.43 325.33 315.86 324.47 315.57 323.61 314.71 322.46 314.14 321.03 313.28 320.16 312.7 318.73 311.84 317.3 310.98 316.44 310.7 314.43 309.84 312.42 309.26 311.56 308.98 309.55 308.4 308.12 308.4 306.69 308.4 304.68 307.54 303.82 306.68 303.25 305.8 302.96 304.65 302.96 303.5 302.67 302.36 302.39 301.21 301.24 300.06 300.38 298.63 299.81 297.2 299.52 295.48 298.37 292.61 298.08 290.03 298.08 287.42 297.51 286.01 296.65 285.15 294.07 283.98 292.06 282.86 290.63 281.97 288.62 280.54 286.9 279.68 285.18 278.82 283.17 277.96 282.05 277.39 280.04 274.8 278.61 272.8 278.04 271.94 277.75 271.36 276.89 270.22 274.88 267.64 274.59 267.06 273.73 266.47 272.59 266.47 271.44 266.47 271.15 266.47 269.72 264.46 267.14 263.88 265.99 263.88 264.56 263.88 263.7 263.88 262.55 263.88 261.4 263.88 261.12 263.88 259.68 263.88 257.68 263.6 256.53 263.31 254.81 263.02 253.95 261.59 253.09 260.44 252.23 259.58 251.94 259.01 251.08 257.58 250.22 257 248.5 256.14 246.78 255.57 245.35 254.42 243.62 254.42 241.62 253.25 240.18 252.39 238.46 251.82 236.48 250.1 234.47 248.09 233.04 246.65 231.6 245.51 230.74 244.07 230.46 243.5 229.88 242.64 228.45 240.63 227.3 238.91 226.44 238.05 225.58 235.73 225.01 234.59 224.72 232.6 224.44 231.74 223.58 230.29 222.72 229.43 222.43 229.14 220.99 228.02 219.27 227.42 217.55 227.16 214.69 226.84 213.83 226.56 213.25 226.56 211.82 226.27 210.38 225.98 208.38 225.12 206.94 224.55 205.22 224.26 203.5 223.69 201.5 223.69 199.2 223.4 198.34 223.12 196.33 222.83 195.19 223.12 193.18 222.83 191.75 222.26 190.89 220.82 190.62 219.68 189.76 218.24 188.62 217.1 187.44 215.66 185.44 213.63 184.58 212.77 183.17 211.62 182.59 210.19 181.73 208.76 179.73 207.03 178.01 204.74 176.28 203.59 174.28 201.87 173.7 201.3 171.39 200.42 169.67 199.84 167.97 198.69 165.94 197.26 164.22 196.11 163.93 195.25 162.5 194.39 161.95 193.25 161.09 192.39 160.23 190.95 160.23 190.09 159.94 189.81 159.08 188.37 158.77 187.51 158.22 186.34 157.91 185.19 157.36 184.07 157.05 183.21 156.19 182.06 156.19 180.34 155.9 180.34 155.9 178.02 155.33 176.59 155.33 175.18 154.78 173.72 153.63 172.86 152.77 172.29 151.31 171.72 150.48 171.43 148.45 171.43 147.32 171.14 145.86 171.14 144.45 171.14 143.59 171.14 142.45 170.86 140.73 170.86 139.58 170.57 138.15 170 137.29 169.42 136.43 168.85 135.57 167.99 134.42 166.84 133.84 165.98 133.56 165.69 133.27 165.12 133.27 163.69 132.7 162.83 132.7 162.25 132.7 160.51 131.84 158.21 130.4 156.78 129.54 154.77 128.11 153.34 127.25 151.91 126.68 151.05 125.24 149.9 124.09 148.75 123.23 147.58 122.09 146.72 120.08 145.57 117.21 143.57 116.07 142.71 114.06 141.27 112.34 140.99 110.04 140.41 108.9 140.41 107.46 140.41 105.46 140.7 104.6 141.27 104.02 142.71 103.74 143.85 103.74 145.29 102.88 146.15 102.01 147.58 100.58 147.58 98.88 147.01 97.74 147.01 96.3 146.43 94.3 146.15 92.58 145.86 90.57 144.71 88.56 144.14 87.13 144.14 85.12 143.57 83.11 143.28 81.11 142.99 79.96 142.13 78.52 141.85 77.09 140.7 75.66 139.84 75.08 139.84 73.65 139.84 72.22 139.84 70.21 139.26 69.06 138.69 67.34 137.83 66.19 136.68 65.33 135.82 64.19 134.37 63.33 133.51 62.47 132.38 62.47 131.52 61.61 130.35 60.46 129.23 59.6 128.06 58.74 126.65 57.88 125.48 57.59 124.62 57.02 123.76 56.16 122.32 55.01 120.89 53.89 119.74 53.03 118.59 51.88 117.45 50.73 116.01 49.87 114.58 49.01 113.43 48.15 112.57 47.58 111.71 46.72 110.85 45.86 109.99 45.28 109.13 44.14 108.25 43.56 107.39 42.7 106.24 41.84 106.24 40.98 106.24 39.84 105.95 39.55 105.95 38.98 105.95 37.83 105.67 36.68 105.38 36.11 105.38 34.67 104.52 34.39 103.66 34.1 103.09 33.81 102.23 33.53 101.08 33.53 100.79 33.53 99.93 32.38 99.36 31.52 99.07 31.52 98.78 30.95 98.78 30.09 98.21 28.94 97.35 28.37 96.49 28.37 95.92 28.08 95.32 28.08 94.17 27.79 92.74 26.93 91.59 26.93 90.16 25.79 89.01 24.64 88.15 22.63 87.58 20.05 87.29 18.33 86.72 16.9 86.14 16.04 85.57 14.6 85.28 13.45 84.71 11.73 84.14 10.87 83.56 9.44 82.42 8.87 81.27 8.01 80.12 8.32 78.11 8.87 76.66 8.87 75.53 9.15 74.1 9.15 72.09 9.15 71.23 9.44 69.77 9.44 68.34 8.87 67.48 7.72 66.33 6.86 64.9 6.31 64.04 5.43 63.18 4.59 62.03 4.02 61.17 3.71 60.02 2.87 59.16 2.87 58.3 2.3 57.44 1.41 56.3 0.84 55.7 0 55.13 1.7 53.98 3.44 52.83 4.02 52.26 4.59 51.97 5.14 51.4 6.86 49.96 8.87 49.1 9.44 48.53 10.01 48.24 12.02 45.95 12.59 45.38 13.17 45.09 13.74 44.52 14.03 43.94 14.6 43.37 15.75 43.37 16.9 43.37 17.76 43.37 18.33 43.08 19.48 43.08 19.76 42.48 22.63 41.34 22.63 40.48 22.92 35.6 23.49 35.03 24.06 34.74 23.49 34.17 22.92 33.59 22.92 32.45 22.92 31.59 22.92 30.44 23.49 29.87 25.21 28.98 26.65 27.29 28.65 25.28 29.23 24.71 31.52 23.27 32.38 22.12 32.95 21.81 33.53 21.26 34.96 18.68 35.53 18.09 36.11 17.54 36.68 16.96 37.54 16.96 39.55 16.08 40.12 15.51 40.7 14.93 42.42 14.07 42.7 13.5 43.28 12.92 43.28 11.78 44.42 9.2 45 8.62 45 7.76 45.28 7.19 45.28 6.04 45.28 5.18 45.57 4.03 45.57 3.15 45.57 2 45.57 0.86 45.57 0 47.58 0.86 48.15 1.43 51.02 2.58 51.59 3.15 53.31 4.61 53.89 5.18 54.72 6.04 55.3 6.62 55.87 7.19 56.44 7.76 56.73 8.34 57.88 9.2 59.31 11.49 59.89 11.78 61.03 12.92 63.04 15.51 65.05 20.12 65.62 20.69 66.77 22.7 68.2 27.55 68.77 28.12 69.64 28.12 70.21 28.43 71.36 29.56 71.93 30.15 73.36 32.16 74.51 33.31 74.8 33.59 75.37 34.17 76.52 34.17 78.52 36.46 78.52 37.32 79.1 37.9 79.67 38.47 80.25 39.04 80.25 39.9 81.11 41.05 81.68 41.62 82.25 42.2 83.69 45.09 84.83 46.81 85.69 47.67 86.27 48.24 97.16 50.25 97.45 50.25 104.02 51.4 109.76 53.98 110.04 54.55 113.77 56.3 114.92 57.16 115.49 57.73 120.65 60.88 122.66 62.32 124.67 63.47 125.24 64.04 137.29 66.62 138.15 66.62 150.74 70.63 151.6 71.78 152.77 73.5 161.95 73.5 168.26 74.39 172.84 78.11 173.97 78.11 175.14 78.11 193.18 81.84 193.75 82.42 194.61 82.42 195.19 82.7 199.49 85 199.77 85.57 200.35 85.86 200.92 86.43 202.36 87.58 202.93 88.15 204.94 90.16 205.51 91.3 206.37 92.74 207.52 94.75 207.8 95.32 208.95 97.06 210.38 99.64 212.68 106.24 214.11 111.71 214.97 114.58 216.69 118.88 218.41 121.75 218.99 123.76 220.13 126.07 220.13 126.91 221.28 128.06 223.86 132.65 226.44 135.25 227.88 136.4 228.45 136.97 229.6 137.54 230.46 138.12 231.89 138.98 234.47 142.13 235.05 143.28 235.33 143.85 235.62 144.71 235.91 145.29 236.19 146.15 236.48 147.29 236.48 148.18 236.77 149.32 237.03 149.9 237.03 150.76 237.6 151.91 238.75 153.34 239.61 154.2 240.76 155.06 241.9 155.92 243.05 157.64 243.62 158.5 243.91 159.36 245.35 161.39 246.78 162.54 248.5 163.69 250.22 164.55 252.8 165.69 254.23 166.27 255.38 167.7 256.82 169.42 257.39 170.28 259.11 172 260.26 172.58 261.12 172.86 262.26 173.15 263.7 173.72 267.14 174.3 270.87 174.89 272.01 174.58 272.87 174.3 276.6 174.3 277.75 174.3 277.75 174.58 278.9 174.58 281.19 175.44 283.75 177.45 284.32 177.45 284.89 178.02 286.9 180.63 287.47 181.75 288.33 182.9 288.91 183.76 289.48 184.33 290.06 185.19 293.5 186.94 295.79 187.2 298.37 186.34 301.24 186.34 304.97 186.65 307.26 186.94 308.98 188.08 310.13 188.95 311.28 189.81 312.14 190.67 312.71 191.24 313.86 192.1 315.86 192.96 317.87 193.82 319.88 194.68 320.74 195.25 321.03 195.54 321.6 196.11 322.17 196.4 323.32 197.26 325.61 198.69 327.33 199.27 328.48 199.84 329.05 200.13 329.89 200.7 332.78 203.02 334.5 205.03 335.65 205.89 336.22 206.17 337.94 207.32 342.51 208.76 343.65 209.04 347.67 210.48 352.54 212.77 354 213.06 354.84 213.34 357.44 213.34 361.72 212.77 364.61 212.48 367.77 213.92 369.18 214.51 370.9 217.95 37.76 367.62 38.42 367.26 39.08 366.93 39.73 366.61 40.36 366.31 40.72 365.65 41.37 365.32 41.67 364.96 42.33 364.64 42.69 364.31 43.02 364.01 43.64 363.68 43.97 363.35 44.33 362.99 44.33 362.67 44.96 362.34 45.29 362.04 45.64 361.38 45.94 361.02 46.27 360.7 46.63 360.04 46.96 359.71 47.26 359.05 47.59 358.73 47.94 358.4 48.27 357.74 48.27 357.41 48.57 356.76 48.57 356.43 48.93 355.77 48.93 355.11 49.25 354.46 49.25 354.13 49.25 353.47 49.25 352.81 49.56 352.16 49.56 351.83 49.56 351.5 49.56 350.84 49.25 350.52 49.25 349.86 49.25 349.53 49.25 348.87 49.25 348.55 49.25 348.22 48.93 348.22 48.93 347.89 48.93 347.56 48.93 347.23 48.57 346.25 48.27 345.92 48.27 345.59 48.27 345.23 48.27 344.91 48.27 344.58 48.27 344.25 48.27 343.92 48.27 343.59 48.27 342.94 48.27 342.61 48.27 342.28 48.27 341.62 48.27 341.29 48.57 340.97 48.57 340.31 48.93 339.98 49.25 339.32 49.56 339 49.88 338.01 50.24 337.68 50.24 337.35 50.57 337.03 50.87 336.7 51.22 336.04 51.55 335.71 52.87 334.07 53.85 333.08 54.48 332.1 55.47 330.79 57.14 329.45 58.09 328.13 59.43 326.82 60.39 325.5 61.71 324.52 62.69 323.53 64 322.22 65.35 321.24 66.3 320.25 66.66 319.92 66.66 319.59 67.29 319.27 67.64 318.94 67.97 318.61 68.27 318.28 68.27 317.95 68.6 317.95 68.96 317.62 69.29 316.97 69.59 316.97 69.59 316.64 69.91 316.31 70.27 315.98 70.9 315.65 71.26 315.33 71.58 314.97 71.89 314.64 72.21 314.34 72.57 314.34 72.57 314.01 72.9 314.01 73.55 313.66 73.88 313.66 74.18 313.36 75.2 313.03 75.5 312.67 75.85 312.67 76.18 312.37 76.48 312.37 76.48 312.04 76.81 312.04 77.17 311.69 77.49 311.69 77.49 311.38 78.78 310.7 79.11 310.4 79.47 310.07 79.79 309.72 80.09 309.72 80.42 309.39 81.11 309.39 81.41 309.09 82.09 308.73 82.39 308.73 83.08 308.4 83.41 308.4 84.06 308.4 84.39 308.1 84.69 308.1 85.38 308.1 85.7 308.1 86.01 308.1 86.33 308.4 86.69 308.4 86.99 308.4 87.35 308.4 87.65 308.4 87.98 308.4 88.3 308.4 88.63 308.4 88.63 308.73 88.96 308.73 89.29 308.73 90.6 308.73 91.92 308.73 92.9 308.73 93.56 308.73 94.87 309.09 95.86 309.09 96.84 309.09 97.83 308.73 99.14 308.73 100.13 308.73 100.45 308.73 101.11 308.73 101.44 308.73 101.77 308.73 102.1 308.4 102.42 308.4 102.75 308.4 103.41 308.1 104.07 307.75 106.04 307.12 107.68 306.43 108.66 306.43 108.99 306.13 109.32 306.13 109.65 305.8 109.98 305.8 110.63 305.45 110.96 305.15 111.29 304.82 111.95 304.46 112.28 304.16 112.93 303.83 113.26 303.18 113.92 302.85 114.57 302.19 114.57 301.86 114.9 301.51 115.23 301.18 115.56 300.88 115.56 300.52 115.89 300.19 116.22 300.19 116.22 299.86 116.22 299.54 116.54 299.21 116.54 298.88 116.54 298.55 116.87 298.55 116.87 298.22 116.87 297.57 117.2 297.24 117.2 296.91 117.53 296.58 117.53 296.25 117.86 295.92 117.86 295.6 118.19 295.27 118.51 295.27 118.51 294.94 118.84 294.61 119.17 294.28 119.5 294.28 121.14 293.3 121.14 292.97 121.47 292.97 121.8 292.64 122.13 292.31 122.45 291.98 122.78 291.66 123.11 291.33 123.77 291 124.42 290.01 126.4 288.04 127.05 287.39 128.04 286.4 128.69 285.74 129.02 285.42 129.35 285.09 129.35 284.73 129.68 284.4 130.01 284.08 130.01 283.75 130.34 283.42 130.34 283.09 130.66 282.1 130.99 281.78 130.99 281.45 130.99 281.12 131.32 280.79 131.32 280.46 131.65 280.13 131.98 279.81 132.31 279.15 132.63 278.49 132.96 278.16 133.62 277.51 134.28 276.85 134.6 276.19 135.26 275.87 135.59 275.54 135.92 275.54 135.92 275.21 136.25 274.88 136.57 274.88 136.9 274.55 137.23 274.55 137.56 274.22 138.55 273.57 138.87 273.57 139.2 273.24 139.53 272.91 139.83 272.91 140.16 272.58 140.16 272.25 140.49 272.25 140.82 271.93 141.14 271.6 141.14 271.27 141.47 271.27 141.47 270.94 141.8 270.61 141.8 270.28 142.13 269.93 142.46 269.6 142.46 268.94 142.79 268.29 143.11 267.63 143.77 265.66 144.1 265 144.43 264.67 145.09 263.36 145.74 261.72 146.07 261.39 146.73 259.75 147.38 258.11 147.71 257.45 148.7 255.48 149.03 254.49 149.35 254.14 149.68 253.51 150.01 253.15 150.01 252.85 150.34 252.52 150.67 251.87 151 251.54 151.32 251.18 151.98 250.88 152.31 250.55 152.31 250.2 152.64 249.87 153.29 249.57 153.62 249.21 153.95 248.88 154.61 248.23 155.26 247.9 156.25 247.24 158.88 245.3 159.53 244.94 160.19 244.31 161.18 243.66 162.16 242.97 162.82 242.67 171.36 235.75 173.98 233.78 178.25 232.47 179.56 231.81 181.86 231.15 185.48 228.53 185.8 228.2 187.77 225.57 187.77 224.91 188.43 221.93 190.73 218.32 195.63 214.38 196.28 214.05 196.28 213.72 197.6 213.06 199.9 211.75 200.55 210.77 201.54 208.11 201.54 202.86 200.55 201.22 200.22 200.56 199.57 199.25 198.58 195.63 197.93 193.01 198.58 188.71 200.88 183.15 204.82 176.89 205.81 170.65 206.46 164.74 206.46 164.38 206.46 157.82 206.79 151.25 206.79 150.92 207.12 148.92 207.78 142.68 208.43 136.44 210.73 131.52 213.36 128.54 216.97 126.57 219.6 124.59 223.54 121.97 223.87 121.97 226.49 119.7 227.15 119.01 231.09 116.06 234.05 112.12 237 105.22 238.97 103.88 239.96 102.89 243.24 100.92 246.53 95.34 248.14 89.08 248.8 85.14 249.12 83.16 249.78 77.91 250.47 76.6 251.1 75.28 256.35 69.04 261.27 62.78 266.2 57.52 269.18 52.93 271.15 49.97 273.12 45.7 275.09 42.72 279.99 34.84 281.33 30.9 281.96 25.62 281.33 21.35 280.65 17.41 280.98 14.12 280.98 12.78 283.63 7.86 284.29 7.23 288.2 2.96 295.45 0.31 298.38 0 298.71 0 301.01 0.96"
        />
      </svg>
    </div>
  )
}

export default SantaUrsula