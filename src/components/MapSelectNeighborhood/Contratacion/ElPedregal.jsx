import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPedregal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192.75 205.95"
      >
        <polygon
          fill={getColorByCarencias('EL PEDREGAL', municipio.toUpperCase())}
          className="cls-1"
          points="66.04 13.57 78.53 27.16 83.88 33.62 91.39 40.75 102.44 43.61 117.79 47.89 123.51 49.7 131.02 52.2 136.37 55.42 141.73 63.27 144.22 69.36 147.79 76.5 147.43 85.1 151 93.32 155.98 100.48 161.34 108.7 166.69 114.78 167.77 120.85 167.77 123.71 167.77 126.91 174.54 142.66 175.27 154.1 179.55 163.05 186.35 173.78 192.75 184.51 192.41 188.42 191.7 193.78 186.35 205.95 183.49 203.09 179.55 200.94 175.61 198.1 174.91 193.78 172.78 189.87 171.34 189.5 167.77 190.94 164.91 190.94 161.34 189.13 156.35 187.37 152.44 185.93 149.21 184.51 146.01 182.36 142.44 181.65 138.5 179.47 136.37 177.35 123.86 170.55 109.24 166.62 92.47 162.31 77.82 159.45 66.04 155.88 53.91 151.26 47.48 148.4 17.51 110.11 15.35 106.18 8.92 94.74 2.86 83.32 0 72.59 0 62.56 2.15 51.49 3.57 42.54 6.06 28.95 6.77 21.44 9.63 13.2 14.28 4.64 17.14 0 32.49 3.2 42.83 4.64 54.25 6.77 60.34 9.29 66.04 13.57"
        />
      </svg>
    </div>
  )
}

export default ElPedregal