import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsmeralda = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 89.55 97.65"
      >
        <polygon
          fill={getColorByCarencias('LA ESMERALDA', municipio.toUpperCase())}
          className="cls-1"
          points="83.92 29.47 84.24 32.78 88.22 36.41 89.55 41.04 87.9 47.33 82.61 50.98 79.96 53.29 76 59.57 76 71.82 75.33 81.76 72.35 91.04 66.73 96 55.18 94.67 48.24 95.65 42.96 97.65 40.63 87.37 45.94 77.8 43.61 65.86 41.31 60.25 34.37 60.57 30.06 66.86 27.41 68.18 19.49 67.18 9.57 59.23 0 51.63 5.61 47.67 3.96 42.69 1.65 38.71 1.65 26.14 4.31 24.16 3.96 11.25 5.29 7.27 5.96 2.98 22.47 2.98 36.67 0 51.22 13.23 66.08 20.18 73.35 24.82 80.96 31.12 83.92 29.47"
        />
      </svg>
    </div>
  )
}

export default LaEsmeralda