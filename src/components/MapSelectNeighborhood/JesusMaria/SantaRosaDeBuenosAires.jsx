import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRosaDeBuenosAires = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('SANTA ROSA DE BUENOS AIRES', municipio.toUpperCase())}
          className="cls-1"
          points="60.17 10.81 60.17 12.68 61.41 13.9 61.72 13.59 63.26 12.99 65.11 11.12 67.27 9.58 69.13 8.03 71.29 7.72 72.83 7.09 74.07 7.4 75.3 8.34 77.46 10.21 79.32 11.43 80.24 11.74 80.86 12.05 83.02 12.68 84.87 13.9 87.34 16.06 89.49 17.62 91.65 17.93 93.5 17.3 95.35 17.3 98.13 18.24 100.29 19.15 101.51 19.46 103.07 19.15 104.29 18.24 105.85 16.99 107.69 16.37 108.92 16.37 109.54 17.3 109.23 18.84 109.23 19.15 108.63 20.4 107.69 21.31 107.38 22.24 107.38 23.49 108.32 24.42 108.92 25.05 109.85 26.27 109.85 26.58 110.48 27.81 111.39 29.05 112.32 29.67 112.32 29.98 114.17 30.59 114.48 30.59 116.64 30.9 118.2 31.52 118.49 31.83 120.35 32.45 120.67 32.45 122.2 33.37 121.89 33.68 97.5 47.58 82.4 59.04 60.48 68.32 43.19 61.51 44.13 74.17 40.74 89.32 47.82 108.81 71.91 137.86 53.38 158.87 40.74 168.14 38.58 175.86 38.27 177.4 37.96 178.64 37.05 179.58 36.74 179.89 36.43 179.89 35.8 179.29 35.49 179.29 35.2 179.29 34.89 179.89 34.89 180.2 34.58 180.2 34.58 180.51 34.27 180.51 34.27 180.82 33.33 181.76 33.02 182.36 32.73 182.36 32.73 182.67 32.42 182.67 32.42 182.98 31.18 181.45 31.8 181.13 31.18 180.51 29.95 181.76 29.64 182.05 29.33 182.36 29.02 182.67 29.02 182.98 28.71 182.98 28.71 183.29 28.39 183.29 28.39 182.98 28.1 182.98 27.79 182.67 27.48 182.67 27.17 182.67 26.55 182.36 25.92 182.36 25.63 182.05 25.32 182.05 25.01 181.76 24.7 181.76 24.39 181.76 24.08 181.76 23.77 181.76 23.45 182.05 23.45 182.36 23.14 182.67 23.14 182.98 22.85 182.36 22.23 182.05 21.92 182.05 21.92 181.76 21.3 180.82 20.99 180.2 20.67 179.58 20.38 179.29 20.07 178.64 20.07 178.33 19.76 177.71 19.45 177.11 18.83 176.8 18.22 176.17 17.6 175.86 17.29 175.55 16.98 174.95 16.36 174.64 16.05 174.33 15.73 174.02 14.82 173.39 13.89 172.77 12.97 172.17 12.66 171.86 12.04 171.55 11.73 171.55 11.11 170.61 10.5 170.3 3.7 163.49 6.19 156.4 9.57 136.62 17.6 115.91 16.36 102 9.57 91.48 9.57 75.41 0.94 61.8 0.63 60.58 0 59.95 0.63 59.33 3.1 57.48 5.88 55.64 8.35 55.33 10.5 54.7 11.73 53.17 12.35 51.92 12.97 51.3 14.2 49.14 14.82 48.52 15.73 47.27 17.6 45.74 18.22 44.8 19.76 43.27 20.99 40.8 22.23 38.64 22.85 38.02 23.45 37.08 24.39 34.92 24.39 33.99 24.7 32.45 24.39 30.3 24.39 29.98 23.45 29.05 23.45 28.12 25.01 27.2 26.86 26.27 27.48 25.65 27.79 25.34 28.71 24.73 28.39 23.49 27.79 22.24 27.79 21 27.79 20.4 29.02 19.46 30.55 18.53 31.49 17.93 31.8 16.68 31.18 15.46 31.49 14.21 33.02 14.21 34.58 14.21 36.43 13.3 38.58 12.36 40.43 11.12 41.68 10.81 42.59 11.74 43.81 12.05 45.37 11.12 46.91 9.89 48.13 8.34 50 8.03 52.16 7.72 54.63 6.78 55.85 5.25 56.47 3.69 56.79 1.84 58.32 0.93 60.17 0 60.48 0 61.72 0.62 62.04 1.22 62.64 1.84 62.04 3.09 62.04 3.4 60.79 4.93 60.17 6.47 60.17 8.34 60.17 10.81"
        />
      </svg>
    </div>
  )
}

export default SantaRosaDeBuenosAires