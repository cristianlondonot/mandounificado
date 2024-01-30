import React from 'react'

const AguaBlanca = (carenciaColor) => {
  return (
    <svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      width={460}
      height={460}
      viewBox="0 0 460 460"
      className='m-auto'
    >
      <defs>
        <style>{`.b{fill:${carenciaColor.carenciaColor};fill-rule:evenodd;stroke-width:0px;}`}</style>
      </defs>
      <polygon
        className="b"
        points="228.96 18.28 232.32 20.39 234.43 21.64 236.52 22.08 238.61 23.73 240.72 24.57 241.13 25.01 242.38 25.41 244.49 26.69 246.17 27.53 249.1 29.62 249.51 29.62 251.17 30.46 253.69 31.71 255.37 32.55 256.62 33.82 259.14 35.52 259.98 35.93 260.39 36.36 261.66 37.61 262.91 38.86 264.19 39.7 264.19 40.13 265.87 41.82 267.55 43.89 268.8 45.18 269.64 46.02 271.32 47.67 271.73 47.67 273.41 48.95 275.09 50.63 276.34 51.47 278.02 53.13 279.7 53.97 281.38 55.67 283.06 56.93 284.74 58.18 286.42 60.31 287.67 61.11 287.67 61.56 288.94 62.8 289.76 64.07 290.6 64.92 291.44 66.6 291.44 67 290.19 67.85 289.76 68.25 288.08 68.25 286.42 68.68 285.99 69.53 284.74 70.78 284.74 71.61 284.74 72.89 285.15 73.75 285.58 75 285.58 76.68 285.99 79.21 285.99 80.89 286.83 82.57 287.67 84.66 288.94 86.34 289.35 88.43 290.6 91.79 291.44 96.02 289.76 98.5 288.08 101.03 287.26 103.95 287.26 104.39 287.26 106.08 288.08 108.59 290.19 110.69 293.12 112.39 297.33 114.91 302.78 116.59 306.14 119.53 307.82 120.77 308.64 122.45 309.5 123.3 311.16 126.66 311.59 128.34 312.43 130.02 312.84 130.86 313.68 134.25 315.77 140.53 317.04 145.14 317.04 150.17 316.61 154.39 316.61 155.67 316.2 159 316.2 162.36 316.61 164.45 316.61 165.3 317.04 169.5 317.45 176.25 317.45 177.09 317.45 179.17 317.45 185.47 317.45 186.31 317.88 187.56 317.88 192.63 319.11 195.55 320.38 197.67 323.72 201.44 326.24 205.64 327.08 206.05 328.35 206.89 332.53 208.14 334.21 208.59 337.14 208.59 340.94 208.59 341.75 208.59 342.62 208.59 343.43 208.59 344.27 208.59 345.11 209.03 346.39 209.84 346.79 210.28 349.32 212.36 351.41 214.48 353.52 216.56 354.77 218.25 358.13 222.02 358.54 222.86 361.06 224.54 362.74 224.95 368.62 225.79 369.87 225.79 370.71 225.79 371.12 225.79 371.55 225.79 371.96 225.79 372.8 225.38 375.32 224.54 377.85 223.27 378.25 223.27 379.93 223.27 380.78 223.27 381.21 223.7 385.36 225.38 386.63 225.79 387.48 226.22 388.72 226.22 390.4 226.22 394.18 225.79 399.22 225.79 400.06 226.22 400.9 226.22 403.42 227.06 404.67 227.47 405.92 228.32 408.87 230.45 409.71 231.26 411.8 233.38 411.8 233.79 412.21 234.22 412.64 235.47 413.05 236.31 413.48 237.57 414.32 237.98 415.16 238.39 416 238.82 418.5 239.66 419.34 240.07 419.77 240.07 422.3 240.07 423.54 240.07 425.23 240.91 426.07 242.6 426.47 243.44 426.47 243.86 426.47 245.95 426.07 247.23 424.79 250.19 422.3 253.53 421.86 254.79 421.86 256.04 422.3 256.88 423.54 258.16 423.98 258.16 424.79 258.16 426.91 259.41 430.27 259.82 431.52 260.66 431.93 261.5 431.93 263.6 431.52 264.85 431.09 265.7 431.09 267.41 431.52 269.09 432.36 270.76 432.36 271.17 433.61 272.85 434.04 274.54 434.45 275.79 434.88 276.22 434.88 276.63 435.72 280.41 435.72 280.82 436.56 287.14 436.97 288.82 438.22 289.66 439.49 291.76 440.33 294.28 441.17 297.2 441.17 298.48 441.58 300.16 442.42 301.84 444.1 303.5 445.35 305.23 446.19 306.48 447.03 308.57 447.03 309 447.03 309.84 446.19 311.5 446.62 313.6 446.62 314.45 447.03 314.45 448.3 315.29 448.3 315.7 448.71 315.7 449.55 316.54 450.82 318.22 451.23 319.06 453.73 321.98 454.57 325.38 454.57 327.89 453.3 330.41 452.46 334.19 452.46 336.28 452.46 337.11 452.46 338.38 452.05 338.79 452.05 339.23 452.05 339.63 452.05 340.04 452.05 341.73 452.05 342.57 452.05 343.42 452.89 345.95 453.3 348.48 453.3 350.57 453.3 351 453.73 353.09 454.14 353.92 454.57 356.04 454.57 356.85 454.14 358.97 454.57 361.48 455.82 365.29 452.89 369.06 444.94 372.41 437.81 376.19 436.56 377.03 431.93 383.35 427.31 382.1 421.86 379.95 413.05 376.61 411.8 374.94 410.12 373.26 407.6 372.41 405.51 371.98 405.08 371.98 403.83 371.57 401.74 371.57 400.47 371.16 398.79 370.73 397.95 370.31 397.54 370.31 396.29 369.89 395.86 369.89 394.61 369.48 393.33 369.06 392.93 369.06 391.25 368.22 388.72 367.38 387.04 366.97 385.36 366.13 380.37 362.76 375.76 361.48 375.32 361.48 368.19 362.32 361.9 365.29 361.49 366.13 358.97 368.64 355.61 372.82 355.2 372.82 353.09 374.1 351.41 374.94 340.94 379.54 337.57 382.51 333.37 386.28 330.44 390.91 327.51 393.41 326.24 394.67 323.31 396.35 318.7 397.2 314.11 396.35 309.91 395.51 305.3 394.67 301.1 394.67 296.48 396.76 293.96 398.88 291.44 400.54 286.42 404.35 283.9 406.85 283.9 405.6 283.47 402.67 285.58 396.35 287.26 392.16 288.94 386.28 290.6 384.61 291.03 348.91 294.8 348.48 294.8 338.79 257.46 337.95 256.21 329.14 245.74 330.41 245.74 332.51 239.88 332.1 234 329.14 231.48 332.51 221.82 332.51 217.21 330.41 212.6 329.98 206.72 327.89 206.72 323.26 205.06 316.97 202.54 314.85 199.18 314.01 197.09 312.34 194.14 310.67 192.05 309.84 190.37 307.32 184.91 306.04 183.26 303.92 174.04 303.92 170.67 306.04 165.65 306.04 159.77 305.63 155.16 302.67 153.05 299.32 149.71 297.63 141.74 297.63 139.65 301 137.97 303.5 133.76 305.23 129.56 307.32 127.04 309.84 124.11 310.67 121.59 311.92 119.5 314.01 114.91 314.45 113.23 316.13 110.3 318.64 104.85 316.54 101.9 314.45 99.81 311.92 98.13 310.67 96.45 308.57 93.08 306.48 92.24 303.5 87.63 301.41 85.54 303.5 77.57 303.09 76.73 314.85 75.05 320.73 74.64 325.38 72.53 329.14 70.03 330.41 69.6 334.19 68.76 337.11 70.03 340.48 64.99 342.16 60.78 343.86 57.45 344.7 57.01 346.79 54.93 348.07 54.08 348.07 54.08 352.25 57.01 353.92 57.45 355.6 60.78 358.97 60.78 364.45 61.63 367.38 61.22 371.57 60.38 377.86 57.01 378.28 54.93 379.95 54.93 381.66 52.81 387.11 53.65 401 47.82 402.67 46.98 404.76 47.82 408.13 49.91 412.32 49.5 416.1 47.38 418.19 54.49 423.26 55.33 428.29 53.65 431.23 54.08 432.48 51.97 435 51.56 437.92 48.23 439.63 46.14 443 40.68 444.67 40.25 440.91 36.91 439.2 33.55 438.35 28.94 437.92 25.99 435 23.06 431.63 20.97 425.35 19.29 423.26 18.02 420.32 14.68 419.03 5.43 417.78 5.02 406.85 5.02 401 6.7 396.35 7.54 393.41 10.07 390.07 12.16 386.28 13.84 379.95 10.88 377.86 7.95 374.94 6.7 368.64 11.32 367.38 12.16 358.13 18.86 356.85 22.22 354.76 24.74 348.91 23.9 321.14 20.97 314.01 18.86 312.76 18.45 289.66 14.24 283.35 12.16 280.41 9.63 277.06 7.11 274.54 4.59 272.45 4.18 272.01 4.59 267 8.39 267.81 13 266.16 13.84 261.92 14.68 257.73 15.09 253.95 16.77 249.35 18.45 244.7 21.81 238.39 25.58 232.54 28.1 229.16 28.94 227.92 29.78 226.22 30.19 225.38 30.19 223.7 29.78 222.45 29.35 221.61 28.94 221.17 28.94 220.34 29.78 219.92 29.35 219.5 29.35 218.66 28.94 217.81 27.67 218.25 27.26 217.81 27.26 217.41 27.26 216.98 27.67 216.56 27.26 216.16 26.83 214.89 27.67 214.89 27.67 214.48 27.26 214.05 27.26 213.64 26.83 213.64 25.99 214.05 25.58 213.64 25.15 213.64 24.74 213.2 23.9 212.8 23.49 212.8 23.06 212.36 24.74 211.52 25.99 210.67 26.42 210.67 26.42 211.11 26.42 211.95 26.42 212.36 26.42 212.8 26.83 212.8 26.83 213.2 26.83 213.64 27.26 213.64 27.67 213.64 28.1 213.2 28.94 214.48 31.46 213.64 31.87 213.64 31.87 211.95 31.87 211.52 31.87 209.03 33.96 200.59 36.91 194.31 41.09 190.94 43.61 187.56 44.45 186.31 45.3 185.89 48.66 183.78 51.56 180.86 51.56 177.89 51.97 176.25 52.81 172.45 53.65 169.95 54.08 169.5 54.08 169.09 55.77 167.41 56.17 164.45 57.85 161.11 58.26 157.75 58.7 153.55 59.54 149.33 60.78 143.47 60.78 142.2 61.22 139.27 61.63 138.02 62.9 133.81 64.55 127.91 65.42 126.25 66.24 124.98 67.51 123.3 69.6 120.36 72.53 117.44 75.05 115.75 75.05 115.31 76.73 114.06 82.61 113.23 88.06 112.8 93.52 111.09 95.61 109.44 97.29 108.17 99.81 105.23 102.33 100.63 107.35 95.18 109.46 91.79 109.87 91.36 113.66 87.18 115.75 82.98 117.82 81.29 119.91 79.61 123.27 77.09 125.38 74.16 126.2 73.3 128.72 71.61 131.67 68.25 132.92 66.6 133.76 65.75 134.17 65.32 137.53 61.96 140.06 58.18 141.74 56.1 142.99 54.42 143.83 53.56 147.19 48.11 149.28 44.34 152.64 40.54 156 37.2 158.93 33.82 162.29 31.3 166.06 28.78 171.95 25.41 176.56 23.32 180.76 21.64 184.51 19.96 189.96 19.55 194.14 19.55 199.18 19.55 203.38 18.28 204.63 17.87 205.9 17.44 208.4 16.62 211.35 15.33 214.28 15.33 217.21 15.33 218.89 15.33 220.17 15.33 222.26 15.74 223.94 15.74 224.78 16.19 226.03 17.03 228.96 18.28"
      />
    </svg>
  )
}

export default AguaBlanca