import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Palencia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 153.72 129.4"
      >
        <polygon
          fill={getColorByCarencias('PALENCIA', municipio.toUpperCase())}
          className="cls-1"
          points="113.24 8.2 124.13 15.6 146.31 31.2 153.72 41.31 145.14 49.89 138.91 63.16 135.02 75.99 122.57 78.35 106.63 77.94 88.73 77.94 82.89 82.65 83.66 111.47 78.61 120.84 72.39 127.07 63.42 129.4 45.16 129.4 44.77 118.9 34.63 99.02 13.24 90.82 0 86.93 6.22 61.98 17.13 35.47 54.1 3.51 58.4 0 58.4 3.51 62.65 10.14 66.14 10.14 71.98 8.58 72.39 8.58 78.23 11.32 82.89 15.21 91.44 15.21 98.85 13.65 99.23 13.65 105.07 10.91 113.24 8.2"
        />
      </svg>
    </div>
  )
}

export default Palencia