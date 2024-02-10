import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guayabal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 134.76 104.25"
      >
        <polygon
          fill={getColorByCarencias('GUAYABAL', municipio.toUpperCase())}
          className="cls-1"
          points="131.9 16.77 127.63 25.71 129.04 34.28 131.19 42.11 134.42 51.05 134.76 57.13 134.76 64.28 134.42 75.69 126.92 84.99 124.43 86.41 115.49 88.55 109.44 90.34 99.82 91.05 92.69 92.49 89.83 99.27 86.27 104.25 79.5 103.91 75.57 103.55 65.95 98.57 58.46 94.24 43.85 84.99 35.65 79.25 26.4 70.71 17.83 61.77 7.84 58.55 0 59.25 8.21 50 18.9 42.11 25.32 37.84 32.09 27.49 32.79 22.48 33.5 9.27 36.36 9.98 42.07 8.54 45.98 4.63 52.77 2.49 58.82 0.7 63.83 0 72.74 1.41 84.83 4.63 94.47 7.49 105.17 9.98 113.37 11.4 123.7 12.47 131.9 16.77"
        />
      </svg>
    </div>
  )
}

export default Guayabal