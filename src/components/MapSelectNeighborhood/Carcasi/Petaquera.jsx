import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Petaquera = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 215.58 221.59"
      >
        <polygon
          fill={getColorByCarencias('PETAQUERA', municipio.toUpperCase())}
          className="cls-1"
          points="212.5 146.21 212.5 152.69 209.12 167.31 206.33 171.26 199.59 176.89 171.52 190.65 167.31 193.47 163.1 195.71 156.08 197.67 151.87 199.1 128.01 199.1 115.64 197.67 109.18 198.24 102.16 201.06 86.74 208.65 79.72 212.88 76.36 215.7 71.3 218.49 69.91 221.59 65.96 212.6 61.18 206.12 57.82 201.06 53.9 195.43 47.44 191.5 41.84 187.86 37.89 185.02 32.57 178.85 29.18 171.26 25.26 163.38 21.62 154.65 18.8 145.67 14.31 139.75 11.78 135.26 9.56 128.24 6.46 121.75 4.5 113.05 3.36 105.72 2.25 101.23 1.11 98.15 0 92.52 3.64 89.42 10.1 86.33 15.7 83.25 23.01 79.87 28.36 79.02 36.49 76.77 42.95 72.85 47.44 68.04 48.29 66.36 51.11 63.27 55.86 57.66 56.69 56.24 61.18 51.75 69.34 46.97 76.65 46.4 83.93 46.4 89.56 48.36 93.2 49.79 97.69 50.9 100.77 52.86 104.97 52.03 108.62 47.8 113.68 43.02 119.59 36 123.23 31.22 126.87 25.3 128.86 22.49 130.26 17.71 131.11 10.4 130.54 1.68 130.26 0 136.71 2.24 142.34 5.6 150.17 9.55 157.47 16.03 160.57 23.34 163.93 32.07 167.03 38.53 171.81 45.01 176.58 49.79 180.51 57.07 183.86 61.87 190.32 64.97 193.39 68.33 196.49 73.13 200.42 79.59 204.63 89.14 206.05 95.6 210.82 102.08 214.18 108.53 215.58 117.26 215.58 135.83 214.18 143.42 212.5 146.21"
        />
      </svg>
    </div>
  )
}

export default Petaquera