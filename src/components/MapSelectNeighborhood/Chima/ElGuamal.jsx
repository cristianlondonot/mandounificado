import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElGuamal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 143.48 151.16"
      >
        <polygon
          fill={getColorByCarencias('EL GUAMAL', municipio.toUpperCase())}
          className="cls-1"
          points="97.72 25.06 111.03 28.97 132.54 37.21 142.71 57.18 143.09 67.73 143.48 73.62 136.04 93.2 120.01 119.43 116.51 135.1 121.96 151.16 110.25 144.13 88.35 135.1 66.86 126.09 62.15 112.4 62.95 88.88 44.96 86.13 23.47 90.86 6.25 77.92 0 57.18 2.34 37.59 14.08 25.83 33.61 15.26 40.66 0 59.42 7.05 97.72 25.06"
        />
      </svg>
    </div>
  )
}

export default ElGuamal