import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Helechal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 114.84 178.72"
      >
        <polygon
          fill={getColorByCarencias('HELECHAL', municipio.toUpperCase())}
          className="cls-1"
          points="114.05 54.43 109.05 79.9 109.05 99.58 113.29 118.88 112.12 137.4 98.63 175.27 55.88 178.72 36.2 170.22 0 154.01 1.54 130.85 1.54 110 18.51 81.04 26.18 59.83 30.82 41.29 41.22 15.82 52.79 0 58.95 20.44 75.92 33.2 97.1 28.56 114.84 31.25 114.05 54.43"
        />
      </svg>
    </div>
  )
}

export default Helechal