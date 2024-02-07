import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantoComingo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('AGUACATE', municipio.toUpperCase())}
          className="cls-1"
          points="301.01 0.96 301.66 1.62 302.98 2.28 302.65 2.6 300.35 4.57 297.4 6.54 296.74 7.53 296.41 7.86 296.08 11.83 297.4 17.74 297.72 19.38 299.04 26.27 293.13 33.2 289.84 41.74 283.93 46.69 280.65 51.29 278.05 58.84 275.42 59.85 274.74 65.08 277.39 70.99 278.38 76.27 277.39 85.46 272.44 92.06 268.85 97.97 264.56 107.85 261.27 114.42 257.69 120.98 255.36 126.26 255.72 131.16 252.08 141.37 251.1 144.98 251.45 147.61 255.36 151.9 257.33 143.34 257.99 138.74 259.3 134.8 261.63 126.26 266.53 118.68 272.44 115.07 273.12 114.74 279.99 112.44 286.26 105.22 288.2 96 294.8 93.37 290.83 103.55 293.13 104.24 294.8 107.52 297.4 106.86 297.4 110.15 296.08 113.1 296.08 115.73 298.71 116.39 302.98 111.13 303.96 108.18 305.61 102.24 307.9 98.63 308.23 92.39 305.28 88.75 303.64 85.14 304.29 81.85 306.92 80.21 306.26 76.6 307.9 71.97 311.84 72.66 317.43 77.91 320.71 82.51 325.31 91.07 329.25 97.64 333.85 103.22 341.07 108.18 347.64 109.82 349.58 115.4 345.67 118.03 343.04 119.01 335.49 119.01 329.58 121.97 325.31 124.29 320.71 129.19 320.38 133.49 320.71 139.4 319.4 142.68 317.76 146.29 313.81 148.92 312.83 154.2 312.17 158.8 310.2 160.77 309.87 165.72 310.53 169.01 311.19 171.96 313.49 180.5 316.11 187.4 318.08 194.65 318.08 197.27 317.76 204.17 317.76 210.44 317.1 215.69 316.44 217.99 318.08 223.24 318.08 223.57 315.13 223.57 311.19 224.91 307.25 227.87 305.93 230.5 303.64 237.39 301.66 241.99 299.37 245.93 296.74 248.23 294.11 250.88 287.87 254.49 284.62 256.14 284.29 260.08 286.26 265 288.86 265.99 292.5 266.64 300.02 268.94 304.62 268.94 305.61 268.61 306.59 270.61 306.92 272.25 307.58 271.6 308.56 270.94 308.89 274.55 306.92 278.16 304.29 282.1 303.31 287.06 302.65 291.66 298.05 300.19 297.72 300.52 295.45 302.19 295.78 305.8 297.07 307.42 297.07 312.04 297.4 317.95 298.38 323.86 300.35 328.13 300.68 332.43 303.31 337.35 303.64 338.34 304.62 340.97 304.29 345.59 305.28 346.25 304.95 351.5 301.99 355.77 301.99 356.1 302.32 356.1 303.31 356.43 303.96 356.43 304.29 356.76 304.62 357.08 304.95 357.74 305.28 358.4 305.28 358.73 304.95 359.05 304.62 359.71 303.96 360.04 303.64 360.37 303.31 361.02 302.98 362.04 302.65 362.34 301.66 362.67 301.01 363.35 300.35 364.31 299.04 366.31 298.71 367.26 297.4 370.88 297.07 371.89 296.74 372.85 296.41 373.17 295.78 373.53 295.1 373.53 294.11 373.86 293.13 374.19 292.5 374.19 292.14 374.51 291.84 375.14 291.16 376.49 290.83 377.47 290.83 377.8 290.17 378.13 289.84 378.46 289.19 378.46 288.56 378.78 287.87 378.78 287.24 378.78 285.9 378.46 284.62 378.46 283.93 378.46 283.3 378.78 282.32 379.11 281.63 379.44 281.33 380.1 281.33 381.08 280.98 382.4 281.33 383.71 281.33 384.69 280.98 385.35 280.65 385.68 279.66 386.99 279.03 388.31 278.05 392.6 277.39 394.24 277.69 394.9 278.05 395.23 278.38 395.56 279.66 396.87 280.65 397.86 278.38 401.8 275.09 406.75 270.47 411.02 266.88 413.65 265.54 418.9 262.94 423.2 256.7 427.14 252.44 430.06 251.1 431.08 248.5 433.7 245.84 437.32 240.94 443.56 236.35 451.14 234.05 458.36 232.73 464.6 232.08 467.25 231.09 470.54 230.76 473.16 233.39 479.73 233.39 482.03 232.08 484.36 226.17 498.48 224.85 500.45 227.15 504.71 227.15 511.97 224.52 512.95 224.85 516.24 229.78 520.5 233.72 524.44 236.02 526.77 237.99 529.07 238.32 533.01 241.6 542.86 241.6 555.34 243.9 557.34 246.83 557.99 248.14 561.28 247.51 565.55 250.79 572.14 254.05 578.05 254.41 581.99 254.41 583.96 254.41 584.62 254.05 584.95 253.75 584.95 253.42 584.95 253.07 584.95 252.76 584.95 252.44 585.28 252.08 585.6 252.08 585.93 252.08 586.26 252.08 586.62 252.08 586.95 252.44 587.27 252.44 587.6 252.08 587.6 251.78 587.93 251.78 588.26 251.78 588.59 251.45 588.59 251.45 588.92 251.45 589.24 251.45 589.57 251.1 589.24 250.47 587.93 250.11 587.27 249.78 586.95 249.78 587.27 250.11 588.92 250.47 590.89 250.79 591.54 250.79 591.87 250.47 591.87 250.47 592.2 250.11 592.2 248.8 592.86 249.12 593.18 249.12 593.51 249.12 593.84 249.12 594.17 248.8 594.17 248.5 594.5 248.14 594.5 248.14 594.83 247.51 595.48 247.15 595.48 246.53 595.48 246.2 595.48 245.84 595.81 245.54 596.47 245.21 596.8 245.21 597.12 245.84 598.11 245.84 598.44 245.84 599.1 245.84 599.42 245.84 599.75 246.2 599.75 246.53 600.08 247.15 600.41 247.51 600.74 247.81 601.07 248.14 601.39 248.14 601.75 247.81 601.75 247.81 602.08 247.81 602.38 247.81 602.71 247.81 603.04 248.14 603.39 248.14 603.72 248.8 605.01 248.8 605.33 249.12 605.69 248.8 606.02 248.8 606.35 248.5 606.65 247.81 606.98 247.51 607.3 246.2 607.99 245.84 608.32 245.84 608.62 245.84 608.95 245.84 609.96 245.54 610.59 245.54 610.92 245.21 611.6 244.56 611.6 244.56 611.24 244.23 611.24 244.23 610.92 244.23 610.59 243.9 610.92 243.57 610.92 243.57 610.29 243.24 610.29 242.91 610.92 242.91 611.24 241.6 611.93 240.94 612.26 240.94 612.59 241.27 612.89 241.27 613.22 241.27 613.54 241.27 613.9 241.27 614.23 241.27 614.56 240.94 614.56 240.61 614.56 240.29 614.56 240.29 614.23 239.96 613.9 239.96 613.54 239.63 613.54 239.3 613.22 238.97 612.89 238.64 612.89 238.32 612.89 237.99 612.59 237.66 612.26 237.33 611.93 237 611.24 237 610.92 237.33 610.92 237.33 610.59 237.33 610.29 237 610.29 237 609.96 236.67 609.96 236.35 609.96 236.35 610.29 236.02 609.96 235.69 609.96 235.36 609.96 234.7 609.63 234.38 609.27 234.05 608.95 234.05 608.62 233.72 608.62 232.73 607.99 232.41 607.99 232.41 608.32 232.41 608.95 232.41 609.27 232.41 609.63 232.41 609.96 232.08 609.63 231.75 609.63 231.42 609.27 231.09 608.95 230.76 608.95 230.44 608.95 230.11 609.27 229.78 609.27 229.45 609.27 229.12 609.27 228.79 609.27 228.46 609.63 228.46 609.96 228.14 610.29 227.81 610.59 227.48 610.92 227.15 610.92 227.15 611.24 226.82 611.24 226.82 611.6 226.49 611.6 226.49 611.93 226.49 612.26 226.49 612.59 226.49 612.89 226.49 613.22 226.17 613.22 225.84 613.22 221.24 612.89 217.3 613.22 214.67 613.22 209.75 613.54 204.17 613.9 199.24 615.19 195.3 616.53 189.09 617.84 187.77 616.2 183.83 611.93 178.58 607.99 174.64 604.05 172.67 601.39 172.67 599.1 173 590.56 172.67 583.31 171.68 578.38 170.37 573.78 166.76 572.47 160.19 572.47 159.53 579.37 161.83 587.6 162.49 595.48 159.53 600.08 154.28 600.41 148.7 596.8 142.13 590.89 137.89 586.95 134.6 582.65 130.66 577.4 135.59 580.02 139.53 581.01 143.77 581.66 148.37 581.34 151 581.34 150.67 579.69 149.03 576.74 147.06 573.45 144.43 569.49 143.77 564.89 143.77 560.95 146.07 555.34 147.71 551.4 150.67 547.46 152.31 545.16 152.31 543.19 151.98 542.86 151 541.9 149.68 540.89 148.37 539.25 148.37 537.28 148.7 535.31 150.34 532.35 150.01 529.4 148.7 527.1 147.71 523.46 147.06 522.15 146.07 519.52 143.11 516.24 140.82 513.94 140.16 513.28 137.89 512.29 134.6 509.64 131.65 508 128.37 506.69 125.08 504.39 122.45 502.74 120.16 499.79 118.84 497.49 118.51 496.51 116.87 493.55 115.56 491.55 112.93 491.55 111.29 491.88 110.63 491.88 107.68 492.21 105.05 492.21 102.75 490.92 101.44 489.28 100.78 487.94 100.45 486.98 98.48 485.97 97.5 485.64 95.2 485.01 94.54 484 93.23 483.04 91.92 482.71 90.93 482.71 88.3 482.71 86.01 481.37 83.08 479.73 83.08 479.4 82.39 478.09 81.41 476.12 80.78 475.13 79.79 473.82 78.78 472.51 78.12 471.52 77.8 469.55 77.17 467.25 76.81 466.6 76.18 465.58 75.5 464.93 73.88 463.29 72.9 463.29 71.89 462.96 69.59 462.63 67.97 461.31 67.29 460.99 65.35 459.67 65.35 459.34 62.06 458.36 61.71 458.36 59.76 457.7 58.45 455.73 58.09 455.4 54.15 452.78 51.55 453.11 47.26 453.76 44.33 453.76 42.69 452.45 42.33 451.79 42.03 449.79 41.02 446.84 39.73 444.87 36.78 443.56 33.82 441.91 30.54 440.27 26.6 438.96 23.97 438.3 21.34 437.64 18.72 437.32 17.07 435.35 16.42 432.69 14.78 430.06 12.81 427.14 10.83 424.84 8.54 423.2 5.25 420.54 2.63 418.24 2.3 417.91 0 414.63 0.33 414.3 0.66 413.65 0.98 413.32 1.31 412.66 1.64 412.33 1.97 412 1.97 411.68 2.63 411.35 2.95 410.69 3.28 410.36 3.61 410.03 3.94 410.03 3.94 409.71 4.27 409.71 4.27 409.38 4.6 409.38 4.6 409.05 5.25 408.72 5.58 408.39 6.24 408.06 6.57 407.74 6.89 407.41 7.22 407.08 7.22 406.75 7.55 406.75 7.55 406.42 7.88 405.77 8.21 405.08 8.86 404.42 9.19 403.77 9.52 403.11 9.85 402.13 10.18 401.14 10.51 400.48 10.51 400.16 10.83 399.5 11.16 398.84 11.49 397.53 12.15 394.9 12.48 393.26 12.81 391.95 13.13 390.63 13.46 388.96 13.46 388.63 13.79 387.98 13.79 386.66 14.12 386.01 14.12 385.35 14.12 385.02 14.45 384.37 14.45 384.04 14.78 383.38 15.1 382.72 15.43 382.4 15.76 381.74 16.09 381.08 16.42 380.43 17.07 379.77 17.73 379.11 18.06 378.78 18.39 378.13 18.72 377.8 19.04 377.47 19.7 377.14 20.03 376.49 21.67 375.14 23.31 373.86 23.64 373.17 24.3 372.85 24.63 372.85 24.96 372.52 25.28 372.22 25.61 372.22 25.94 371.89 26.27 371.89 26.6 371.56 27.25 371.2 27.58 371.2 29.22 370.55 29.55 370.55 29.88 370.55 30.21 370.25 30.54 370.25 30.87 370.25 31.19 370.25 32.18 369.92 32.84 369.59 33.16 369.59 33.49 369.59 34.15 369.23 34.48 369.23 34.81 368.91 35.46 368.91 35.76 368.58 36.12 368.58 36.78 368.28 37.08 367.95 37.76 367.62 38.42 367.26 39.08 366.93 39.73 366.61 40.36 366.31 40.72 365.65 41.37 365.32 41.67 364.96 42.33 364.64 42.69 364.31 43.02 364.01 43.64 363.68 43.97 363.35 44.33 362.99 44.33 362.67 44.96 362.34 45.29 362.04 45.64 361.38 45.94 361.02 46.27 360.7 46.63 360.04 46.96 359.71 47.26 359.05 47.59 358.73 47.94 358.4 48.27 357.74 48.27 357.41 48.57 356.76 48.57 356.43 48.93 355.77 48.93 355.11 49.25 354.46 49.25 354.13 49.25 353.47 49.25 352.81 49.56 352.16 49.56 351.83 49.56 351.5 49.56 350.84 49.25 350.52 49.25 349.86 49.25 349.53 49.25 348.87 49.25 348.55 49.25 348.22 48.93 348.22 48.93 347.89 48.93 347.56 48.93 347.23 48.57 346.25 48.27 345.92 48.27 345.59 48.27 345.23 48.27 344.91 48.27 344.58 48.27 344.25 48.27 343.92 48.27 343.59 48.27 342.94 48.27 342.61 48.27 342.28 48.27 341.62 48.27 341.29 48.57 340.97 48.57 340.31 48.93 339.98 49.25 339.32 49.56 339 49.88 338.01 50.24 337.68 50.24 337.35 50.57 337.03 50.87 336.7 51.22 336.04 51.55 335.71 52.87 334.07 53.85 333.08 54.48 332.1 55.47 330.79 57.14 329.45 58.09 328.13 59.43 326.82 60.39 325.5 61.71 324.52 62.69 323.53 64 322.22 65.35 321.24 66.3 320.25 66.66 319.92 66.66 319.59 67.29 319.27 67.64 318.94 67.97 318.61 68.27 318.28 68.27 317.95 68.6 317.95 68.96 317.62 69.29 316.97 69.59 316.97 69.59 316.64 69.91 316.31 70.27 315.98 70.9 315.65 71.26 315.33 71.58 314.97 71.89 314.64 72.21 314.34 72.57 314.34 72.57 314.01 72.9 314.01 73.55 313.66 73.88 313.66 74.18 313.36 75.2 313.03 75.5 312.67 75.85 312.67 76.18 312.37 76.48 312.37 76.48 312.04 76.81 312.04 77.17 311.69 77.49 311.69 77.49 311.38 78.78 310.7 79.11 310.4 79.47 310.07 79.79 309.72 80.09 309.72 80.42 309.39 81.11 309.39 81.41 309.09 82.09 308.73 82.39 308.73 83.08 308.4 83.41 308.4 84.06 308.4 84.39 308.1 84.69 308.1 85.38 308.1 85.7 308.1 86.01 308.1 86.33 308.4 86.69 308.4 86.99 308.4 87.35 308.4 87.65 308.4 87.98 308.4 88.3 308.4 88.63 308.4 88.63 308.73 88.96 308.73 89.29 308.73 90.6 308.73 91.92 308.73 92.9 308.73 93.56 308.73 94.87 309.09 95.86 309.09 96.84 309.09 97.83 308.73 99.14 308.73 100.13 308.73 100.45 308.73 101.11 308.73 101.44 308.73 101.77 308.73 102.1 308.4 102.42 308.4 102.75 308.4 103.41 308.1 104.07 307.75 106.04 307.12 107.68 306.43 108.66 306.43 108.99 306.13 109.32 306.13 109.65 305.8 109.98 305.8 110.63 305.45 110.96 305.15 111.29 304.82 111.95 304.46 112.28 304.16 112.93 303.83 113.26 303.18 113.92 302.85 114.57 302.19 114.57 301.86 114.9 301.51 115.23 301.18 115.56 300.88 115.56 300.52 115.89 300.19 116.22 300.19 116.22 299.86 116.22 299.54 116.54 299.21 116.54 298.88 116.54 298.55 116.87 298.55 116.87 298.22 116.87 297.57 117.2 297.24 117.2 296.91 117.53 296.58 117.53 296.25 117.86 295.92 117.86 295.6 118.19 295.27 118.51 295.27 118.51 294.94 118.84 294.61 119.17 294.28 119.5 294.28 121.14 293.3 121.14 292.97 121.47 292.97 121.8 292.64 122.13 292.31 122.45 291.98 122.78 291.66 123.11 291.33 123.77 291 124.42 290.01 126.4 288.04 127.05 287.39 128.04 286.4 128.69 285.74 129.02 285.42 129.35 285.09 129.35 284.73 129.68 284.4 130.01 284.08 130.01 283.75 130.34 283.42 130.34 283.09 130.66 282.1 130.99 281.78 130.99 281.45 130.99 281.12 131.32 280.79 131.32 280.46 131.65 280.13 131.98 279.81 132.31 279.15 132.63 278.49 132.96 278.16 133.62 277.51 134.28 276.85 134.6 276.19 135.26 275.87 135.59 275.54 135.92 275.54 135.92 275.21 136.25 274.88 136.57 274.88 136.9 274.55 137.23 274.55 137.56 274.22 138.55 273.57 138.87 273.57 139.2 273.24 139.53 272.91 139.83 272.91 140.16 272.58 140.16 272.25 140.49 272.25 140.82 271.93 141.14 271.6 141.14 271.27 141.47 271.27 141.47 270.94 141.8 270.61 141.8 270.28 142.13 269.93 142.46 269.6 142.46 268.94 142.79 268.29 143.11 267.63 143.77 265.66 144.1 265 144.43 264.67 145.09 263.36 145.74 261.72 146.07 261.39 146.73 259.75 147.38 258.11 147.71 257.45 148.7 255.48 149.03 254.49 149.35 254.14 149.68 253.51 150.01 253.15 150.01 252.85 150.34 252.52 150.67 251.87 151 251.54 151.32 251.18 151.98 250.88 152.31 250.55 152.31 250.2 152.64 249.87 153.29 249.57 153.62 249.21 153.95 248.88 154.61 248.23 155.26 247.9 156.25 247.24 158.88 245.3 159.53 244.94 160.19 244.31 161.18 243.66 162.16 242.97 162.82 242.67 171.36 235.75 173.98 233.78 178.25 232.47 179.56 231.81 181.86 231.15 185.48 228.53 185.8 228.2 187.77 225.57 187.77 224.91 188.43 221.93 190.73 218.32 195.63 214.38 196.28 214.05 196.28 213.72 197.6 213.06 199.9 211.75 200.55 210.77 201.54 208.11 201.54 202.86 200.55 201.22 200.22 200.56 199.57 199.25 198.58 195.63 197.93 193.01 198.58 188.71 200.88 183.15 204.82 176.89 205.81 170.65 206.46 164.74 206.46 164.38 206.46 157.82 206.79 151.25 206.79 150.92 207.12 148.92 207.78 142.68 208.43 136.44 210.73 131.52 213.36 128.54 216.97 126.57 219.6 124.59 223.54 121.97 223.87 121.97 226.49 119.7 227.15 119.01 231.09 116.06 234.05 112.12 237 105.22 238.97 103.88 239.96 102.89 243.24 100.92 246.53 95.34 248.14 89.08 248.8 85.14 249.12 83.16 249.78 77.91 250.47 76.6 251.1 75.28 256.35 69.04 261.27 62.78 266.2 57.52 269.18 52.93 271.15 49.97 273.12 45.7 275.09 42.72 279.99 34.84 281.33 30.9 281.96 25.62 281.33 21.35 280.65 17.41 280.98 14.12 280.98 12.78 283.63 7.86 284.29 7.23 288.2 2.96 295.45 0.31 298.38 0 298.71 0 301.01 0.96"
        />
      </svg>
    </div>
  )
}

export default SantoComingo