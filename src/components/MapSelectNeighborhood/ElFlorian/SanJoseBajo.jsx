import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanJoseBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65.35 140"
      >
        <polygon
          fill={getColorByCarencias('SAN JOSE BAJO', municipio.toUpperCase())}
          className="cls-1"
          points="34.87 140 31.17 140 27.48 140 27.48 137.97 28.17 128.91 25.14 126.9 24.46 124.21 21.13 122.18 21.79 100.04 18.77 97.37 16.76 94.68 14.07 92.65 11.4 91.64 8.38 89.63 6.04 86.61 5.03 84.6 2.69 81.93 0.66 77.21 0 57.74 3.68 55.07 2.69 52.38 4.7 48.7 6.7 46.32 10.06 44.31 14.4 41.97 17.42 40.62 18.44 38.95 17.78 20.82 19.43 18.48 21.13 15.77 22.81 14.43 24.13 11.76 25.81 9.07 28.17 6.73 30.83 1.02 64.67 0 65.35 9.75 63.68 12.77 61.32 22.17 61.32 28.21 61.32 42.3 58.65 52.38 58.32 62.77 58.98 92.32 58.65 98.69 53.29 104.41 46.6 106.08 43.25 109.46 43.58 115.15 39.55 120.51 36.88 123.86 35.2 129.59 34.87 140"
        />
      </svg>
    </div>
  )
}

export default SanJoseBajo