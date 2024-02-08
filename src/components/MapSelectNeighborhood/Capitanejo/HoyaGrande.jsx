import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const HoyaGrande = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104.5 155.66"
      >
        <polygon
          fill={getColorByCarencias('HOYA GRANDE', municipio.toUpperCase())}
          className="cls-1"
          points="104.5 75.94 103.94 76.46 95.82 86.8 94.19 87.88 83.39 92.77 78.5 97.08 76.34 99.26 73.63 105.76 68.22 113.38 62.8 126.37 55.2 139.42 49.26 152.95 44.37 155.66 37.32 155.11 34.12 146.99 34.12 142.65 35.75 133.94 35.75 125.29 34.12 113.38 32.49 100.89 32.49 95.45 32.49 93.85 29.78 91.14 24.92 91.66 21.66 95.45 18.4 103.6 14.09 106.83 11.38 105.76 8.67 99.79 9.2 91.66 8.67 85.69 8.12 83.51 4.33 77.02 0.55 66.71 0 62.4 0 50.99 1.07 46.65 3.26 46.65 7.57 47.2 15.17 48.83 17.32 47.2 17.32 45.57 17.87 39.6 22.21 10.83 18.95 0 23.84 5.97 24.92 7.57 27.08 14.65 31.41 18.46 34.12 20.06 40.59 22.77 45.45 24.4 53.05 24.96 57.91 23.33 59.54 23.88 62.25 28.19 67.66 34.16 68.74 35.79 74.16 50.43 79.57 60.74 86.1 66.19 87.17 66.71 94.74 70.52 100.16 74.31 101.79 74.83 104.5 75.94"
        />
      </svg>
    </div>
  )
}

export default HoyaGrande