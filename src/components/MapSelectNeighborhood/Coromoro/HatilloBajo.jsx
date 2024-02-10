import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const HatilloBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116.81 119.24"
      >
        <polygon
          fill={getColorByCarencias('HATILLO BAJO', municipio.toUpperCase())}
          className="cls-1"
          points="62.39 9.93 72.57 14.6 85.19 20.38 90.69 22.87 99.22 28.35 99.77 28.92 104.44 40.46 108.29 44.05 112.41 49.56 116 55.08 116.28 60.31 116.81 68.85 116.81 79.31 114.9 88.93 114.35 96.65 111.33 106.3 105.82 116.18 101.7 117.86 98.11 119.24 90.97 116.18 87.12 113.16 82.47 107.66 76.14 99.39 73.4 90.85 69.55 80.41 62.11 71.32 55.53 66.07 45.9 62.5 37.4 59.48 32.45 58.93 21.16 55.64 15.68 52.04 11.26 49.56 4.12 46.82 0 39.38 0.55 34.15 2.19 27.27 9.35 21.76 13.2 17.09 22.27 13.5 26.94 10.18 33.81 7.16 38.48 6.06 45.07 0 51.96 3.02 60.48 9.1 62.39 9.93"
        />
      </svg>
    </div>
  )
}

export default HatilloBajo