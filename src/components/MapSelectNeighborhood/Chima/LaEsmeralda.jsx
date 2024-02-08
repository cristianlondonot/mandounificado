import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsmeralda = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 181.53 421.21"
      >
        <polygon
          fill={getColorByCarencias('LA ESMERALDA', municipio.toUpperCase())}
          className="cls-1"
          points="137.33 58.29 130.72 62.17 126.45 64.88 139.66 93.66 159.83 120.85 173.39 155.83 181.53 189.99 178.04 217.21 181.53 233.93 169.89 269.29 158.65 291.81 149.74 299.6 150.89 310.07 155.18 319.03 138.48 322.53 121.42 342.73 113.66 369.94 100.87 390.52 100.1 410.72 100.1 421.21 87.28 416.54 85.34 401.78 85.34 384.68 60.9 388.58 54.7 367.98 31.44 346.22 12.41 327.56 1.94 283.29 0 233.93 17.09 213.33 26.79 193.51 17.85 164.76 16.29 133.67 23.29 108.41 23.29 85.1 23.29 48.97 26.79 30.29 34.14 15.93 44.61 7.76 45.38 7.76 47.32 9.71 53.53 9.71 61.67 8.94 70.99 6.59 78.75 4.65 85.73 3.12 89.22 1.94 93.1 0.39 96.99 0 101.23 0 107.05 3.12 110.16 5.44 113.25 8.53 117.93 14.78 123.36 22.14 128.4 27.2 132.66 31.87 134.6 35.36 134.98 36.92 134.22 41.57 133.45 47.01 133.04 51.3 132.28 54.41 134.98 56.35 137.33 58.29"
        />
      </svg>
    </div>
  )
}

export default LaEsmeralda