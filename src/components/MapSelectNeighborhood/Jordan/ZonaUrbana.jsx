import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ZonaUrbana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('ZONA URBANA', municipio.toUpperCase())}
          className="cls-1"
          points="11 0.49 2.94 0 3.43 2.95 3.43 3.93 3.91 7.11 2.69 7.35 0.98 7.6 0.25 7.6 0 7.84 0.49 8.82 1.72 11.75 2.45 13.48 2.69 13.97 2.69 14.44 2.94 14.93 3.43 16.15 4.4 15.92 4.65 15.92 5.14 15.68 4.89 15.19 6.6 14.68 7.34 14.68 7.58 14.68 9.05 14.44 9.29 15.44 9.78 15.19 10.27 15.19 10.76 14.93 11.98 14.93 12.96 14.93 13.45 14.93 13.69 14.93 13.93 15.92 13.93 16.39 13.93 17.88 14.42 17.61 16.38 16.39 18.33 15.92 19.55 15.44 19.55 16.15 20.51 15.92 21 15.44 21.98 16.15 21.49 14.68 22.71 14.68 22.71 14.44 22.95 14.44 24.18 14.19 25.15 13.97 25.89 13.97 25.64 12.99 26.62 12.73 26.86 12.73 27.35 12.73 27.84 12.48 29.55 12.24 30.77 12.24 32.49 11.99 32.73 11.75 32.97 11.75 33.71 10.28 33.46 9.31 33.46 9.06 33.71 7.35 33.71 7.11 33.22 7.11 32 6.86 32 6.37 31.75 2.95 26.13 2.22 17.84 1.22 11 0.49"
        />
      </svg>
    </div>
  )
}

export default ZonaUrbana