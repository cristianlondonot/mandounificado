import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasNieves = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 68.46 51.69"
      >
        <polygon
          fill={getColorByCarencias('LAS NIEVES', municipio.toUpperCase())}
          className="cls-1"
          points="68.21 18.61 68.21 20.3 68.21 21.5 68.46 22.71 68.46 23.67 68.21 25.36 67.97 26.81 67.49 28.01 66.53 29 65.32 29.96 64.11 30.45 62.91 30.93 60.01 31.39 57.12 32.11 54.47 32.36 52.3 32.62 50.13 33.08 46.75 33.8 44.82 34.55 41.46 35.03 38.33 35.27 35.67 33.8 33.75 33.34 31.09 33.58 29.4 34.55 26.27 39.13 21.69 43.47 19.03 45.4 15.9 49.52 13.97 50.73 6.49 51.69 6.01 48.53 5.53 45.88 5.04 43.47 4.32 41.06 2.65 38.65 1.45 35.99 0.48 33.34 0 31.17 0.24 28.76 0.48 26.57 0.96 22.95 2.41 20.54 3.38 18.37 4.56 16.18 6.25 13.52 8.18 12.08 9.63 10.63 11.56 8.46 12.76 7.98 14.93 7.01 16.38 5.81 17.59 4.82 18.55 3.13 19.52 0.96 19.76 0 21.2 0.96 21.93 1.2 23.13 1.69 24.34 2.41 25.55 3.13 26.75 4.1 28.2 5.06 29.65 6.05 30.85 7.01 32.3 8.46 33.5 9.91 34.71 11.11 36.16 12.8 37.12 14.49 37.6 15.93 38.33 16.68 39.29 17.64 40.98 18.37 42.17 18.85 43.13 19.09 45.78 19.09 46.99 18.85 50.85 18.37 53.26 18.13 55.67 17.88 57.6 17.64 61.94 17.64 63.63 17.4 65.56 17.64 67.01 17.88 68.21 18.61"
        />
      </svg>
    </div>
  )
}

export default LasNieves