import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanDiego = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 265.56 189.04"
      >
        <polygon
          fill={getColorByCarencias('SAN DIEGO', municipio.toUpperCase())}
          className="cls-1"
          points="165.15 92.34 202 108.86 222.01 117.51 265.56 113.98 263.21 128.9 259.67 141.86 257.32 154.85 242.44 159.94 231.44 177.24 216.13 178.02 203.96 189.04 180.05 185.89 160.03 156.4 125.14 140.29 91.39 151.31 65.88 169.39 55.31 173.7 39.22 152.89 19.98 132.05 10.17 128.49 0 110.41 0 99.82 0.77 79.4 13.71 58.56 21.56 31.06 38.81 10.61 55.7 7.1 73.73 0 89.82 7.1 96.09 50.3 96.09 61.71 118.46 77.05 146.3 87.64 165.15 92.34"
        />
      </svg>
    </div>
  )
}

export default SanDiego