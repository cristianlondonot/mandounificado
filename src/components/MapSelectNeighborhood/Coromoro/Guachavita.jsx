import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guachavita = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150.74 146.55"
      >
        <polygon
          fill={getColorByCarencias('GUACHAVITA', municipio.toUpperCase())}
          className="cls-1"
          points="150.74 38.79 147.43 42.39 146.59 45.15 146.59 50.41 146.31 56.52 142.17 57.63 135.54 59 125.85 60.95 119.76 63.17 115.35 64.28 112.85 64.84 105.39 69.27 97.64 74.25 91.55 80.9 86.29 87.81 82.14 96.13 75.79 104.72 71.92 113.3 69.44 119.41 64.46 127.73 61.68 135.2 57.53 138.79 52.01 141.03 47.86 144.07 42.32 146.55 37.34 146.02 30.41 145.18 21.86 140.76 8.02 136.59 1.11 132.44 1.39 128.01 1.67 123.56 2.48 119.97 3.04 116.91 1.39 113.85 0 108.59 1.39 103.63 1.95 98.91 2.76 93.37 3.87 89.5 8.02 87.81 13.56 77.86 16.6 68.16 17.15 60.39 19.1 50.71 19.1 40.18 18.54 31.59 18.26 26.33 14.67 20.77 10.52 15.23 6.63 11.61 1.95 0 10.8 6.1 15.78 9.69 26.28 16.34 45.08 29.64 56.16 38.24 76.34 43.78 88.51 42.94 105.39 39.35 124.46 37.96 139.69 36.85 150.74 38.79"
        />
      </svg>
    </div>
  )
}

export default Guachavita