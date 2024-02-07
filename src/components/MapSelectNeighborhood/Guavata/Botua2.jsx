import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Botua2 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('BOTUA 2', municipio.toUpperCase())}
          className="cls-1"
          points="105.55 4.07 109.89 5.84 118.61 7.3 127.04 10.5 133.73 12.53 139.26 13.7 143.91 13.7 152.05 15.15 162.79 19.83 172.1 24.48 179.37 28.55 188.38 31.44 199.14 36.11 209.01 41.93 216.28 45.74 221.22 49.23 226.46 55.33 231.69 59.72 238.38 63.79 232.27 74.58 227.91 82.11 223.55 88.24 221.51 92.61 222.39 96.68 224.13 100.77 220.35 100.48 213.08 98.45 205.23 93.48 200.6 89.99 195.36 88.24 187.22 87.37 175.88 86.5 165.99 85.34 157.27 85.92 150.6 88.24 145.37 93.77 141.29 101.06 137.22 109.5 131.41 116.5 125.88 122.03 120.35 124.94 114.83 126.42 110.47 129.61 104.36 135.7 91.27 140.96 79.93 143.57 76.17 145.61 71.23 147.65 64.54 151.72 47.96 159.3 45.93 161.63 44.76 165.12 43.02 166.6 29.64 168.34 25.57 172.7 21.79 174.74 17.14 175.32 16.85 171.25 16.26 167.76 10.47 163.96 8.14 163.96 6.11 162.79 5.53 161.34 5.82 159.88 4.95 156.1 6.98 155.52 7.56 154.65 6.98 153.49 1.75 149.39 0.87 147.35 0.87 145.9 0.29 143.57 0 140.96 1.75 138.92 5.53 137.76 7.27 135.14 7.85 133.08 11.34 131.63 12.8 130.75 13.96 128.74 14.54 127.55 15.97 128.16 17.43 129.3 18.01 131.36 21.5 133.95 22.95 131.94 25.28 128.74 28.48 127.29 30.22 123.48 31.68 120.28 32.55 117.08 31.97 113.59 30.51 108.92 28.19 102.81 28.48 101.06 30.22 97.84 31.1 95.22 31.1 92.32 29.93 89.99 29.93 86.79 31.39 84.17 32.84 81.85 32.55 79.23 32.55 76.3 34 74.87 36.33 76.3 38.37 75.74 40.11 73.97 42.73 71.64 45.35 70.77 47.96 70.19 50.58 68.73 52.62 65.83 54.36 64.95 57.56 64.37 60.47 65.54 61.34 64.95 62.51 64.08 64.83 63.79 68.9 63.79 71.5 66.12 75.57 69.9 83.13 69.61 84.29 66.7 87.2 61.76 89.55 57.66 89.82 54.75 88.39 51.84 86.35 48.06 82.86 41.93 81.12 38.44 80.8 34.37 81.68 32.04 81.41 28.82 81.68 24.17 83.13 20.7 84.87 18.06 86.35 14.57 87.2 9.92 86.62 4.95 86.06 0.58 87.81 0 90.4 0.58 91.01 1.75 91.27 3.78 91.56 6.72 93.33 7.88 98.54 9.33 100.29 8.75 101.16 6.72 101.48 4.37 103.22 3.78 105.55 4.07"
        />
      </svg>
    </div>
  )
}

export default Botua2