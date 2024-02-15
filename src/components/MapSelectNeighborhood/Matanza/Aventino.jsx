import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Aventino = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('MORROS', municipio.toUpperCase())}
          className="cls-1"
          points="348.61 13.69 348.61 16.24 349.05 24.12 349.77 41.77 353.92 64.03 361.1 83.53 368.52 97.23 377.09 109.53 384.76 120.42 391.46 130.86 398.18 139.22 405.13 149.44 408.14 157.32 413.47 164.29 421.58 169.62 431.76 175.89 443.58 187.94 447.05 197.7 453.08 209.3 452.84 210.23 453.08 210.46 453.08 210.69 454.47 212.31 455.16 213.01 455.86 214.17 456.32 215.33 457.02 216.95 457.25 217.43 457.71 218.36 458.64 219.98 459.55 221.6 460.47 222.99 460.94 223.92 461.4 224.15 462.09 225.08 462.79 226.47 463.48 227.63 463.95 229.25 464.64 230.64 465.34 233.21 466.27 235.52 467.42 237.84 468.12 239 469.51 240.85 470.67 244.33 464.87 244.1 457.48 241.78 450.06 239.7 449.14 239.46 442.19 238.54 436.16 240.39 431.53 241.78 425.97 240.85 421.35 239.23 418.57 238.3 414.4 236.91 408.14 235.74 401.42 236.43 396.32 236.22 389.6 238.77 383.81 239.23 381.74 239.46 378.73 239.93 377.09 239.93 371.07 241.32 364.83 241.78 358.32 242.48 354.4 246.41 353.69 247.34 350 251.53 346.52 253.39 346.29 253.62 342.12 257.33 340.73 258.72 337.02 262.67 332.39 266.15 326.36 267.54 318.49 268.7 311.55 271.02 301.82 273.8 295.8 273.8 287.45 272.87 280.04 272.87 274.5 274.26 263.37 272.19 263.14 271.96 262.45 271.73 247.85 264.53 238.58 261.28 235.8 260.13 227.71 258.02 220.29 256.4 214.02 254.31 208.46 252.92 204.3 252.69 201.74 252.69 198.51 252.69 195.27 252.23 188.08 250.61 179.28 248.73 173.02 248.27 168.16 248.5 161.69 249.68 156.59 250.61 151.26 251.07 143.15 250.84 136.89 251.07 129.25 252.23 121.85 254.08 120 255.24 116.75 257.09 113.97 262.21 102.62 275.19 98.45 281.69 94.97 288.41 93.81 290.73 92.42 293.07 89.89 296.08 88.04 297.93 88.25 300.71 88.5 302.59 88.73 303.75 87.81 304.44 85.26 306.53 84.1 307.69 82.46 308.61 81.07 309.31 79 310 77.36 310.93 76.22 311.63 74.6 311.39 73.67 310.7 71.57 309.54 69.71 308.15 67.63 306.53 66.47 302.36 65.33 298.4 63.69 294.69 62.78 292.14 60.93 289.8 59.07 287.72 56.52 286.1 53.98 285.4 50.27 283.78 46.56 281.46 43.55 279.15 40.07 277.04 36.36 275.9 32.89 275.19 27.56 275.65 25.01 276.36 21.53 277.99 14.6 278.2 16.22 273.35 15.3 265.69 11.82 259.89 9.74 255.47 9.27 251.3 9.27 243.4 9.27 232.26 10.2 224.38 9.74 210.69 8.81 196.31 8.11 184.47 4.41 173.09 3.94 164.06 6.03 158.25 5.57 153.38 3.25 147.82 3.25 135.52 4.41 123.91 5.57 113 1.16 105.57 0 96.76 3.94 86.55 9.27 76.1 12.29 62.87 10.2 49.66 11.82 50.36 18.29 52.91 24.08 56.38 30.57 62.18 35.67 67.97 37.52 71.7 37.99 77.03 39.84 81.45 44.71 85.62 53.28 86.55 53.49 86.32 64.17 83.77 72.51 80.52 81.76 75.17 88.5 70.08 93.12 64.26 94.28 62.87 99.61 53.37 103.31 43.85 109.11 33.41 113.51 23.67 115.83 19.71 119.76 13.23 125.33 8.13 130.4 3.94 130.87 3.47 135.5 1.16 143.61 1.16 152.19 0.23 166.77 2.32 178.35 3.47 190.4 6.27 199.21 8.82 201.74 9.06 202.91 9.29 206.83 9.75 208.01 9.06 212.86 6.97 215.2 6.04 219.12 1.85 220.04 1.16 225.39 0 232.57 0.23 240.2 1.85 252.48 6.51 263.61 11.6 270.33 11.14 277.26 9.52 277.72 9.29 279.58 9.06 288.38 6.27 299.04 3.71 313.16 5.35 316.86 5.81 321.73 6.74 324.05 6.74 331 6.74 340.04 9.75 345.6 12.3 348.61 13.69"
        />
      </svg>
    </div>
  )
}

export default Aventino