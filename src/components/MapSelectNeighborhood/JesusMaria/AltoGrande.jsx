import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoGrande = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('ALTO GRANDE', municipio.toUpperCase())}
          className="cls-1"
          points="111.89 12.63 112.2 15.09 112.82 17.24 112.82 19.39 114.35 21.23 115.59 22.78 116.5 25.24 117.12 26.79 118.32 27.11 118.94 27.42 120.18 28.32 120.78 28.95 121.71 29.57 122.02 29.88 123.55 31.41 125.7 31.72 127.85 31.41 130.31 31.1 130.93 31.72 132.48 32.94 134.32 35.09 135.54 37.26 137.4 39.41 137.71 42.49 138 46.5 138.93 48.65 140.17 49.87 140.77 50.49 141.7 52.95 142.01 55.12 142.32 57.27 142.32 59.11 142.61 61.28 143.54 63.43 144.78 65.27 145.69 66.49 146.62 67.42 149.71 70.52 152.46 72.98 153.08 73.58 156.16 75.73 158.62 78.21 160.77 80.67 161.08 81.27 162.01 83.44 163.23 85.9 163.54 86.21 166 88.67 168.75 90.2 172.74 89.6 177.35 90.51 180.12 91.13 182.58 92.97 184.13 95.74 184.13 99.47 183.2 102.84 181.65 106.85 181.36 110.24 181.96 113.63 182.89 116.09 183.2 116.71 183.2 119.15 183.2 121.32 183.51 122.54 185.35 124.4 189.65 125.02 193.95 125.02 194.88 125.33 196.12 125.95 197.34 127.48 197.96 129.94 197.96 133.02 196.72 135.17 194.26 136.7 191.8 137.32 189.34 136.7 187.5 135.48 184.42 133.02 183.2 132.71 182.27 132.4 180.12 132.4 179.5 132.4 175.82 132.71 172.43 133.62 171.21 134.24 170.9 134.24 169.66 136.7 169.06 140.11 167.51 142.26 166.62 142.88 165.38 143.48 162.3 145.63 162.01 145.63 161.08 148.09 161.39 150.86 161.39 153.34 161.7 156.11 163.54 157.95 164.76 157.95 164.76 158.58 164.76 158.89 164.76 159.2 164.16 160.11 163.85 160.42 163.23 160.73 162.61 161.04 162.01 161.35 161.39 161.35 160.77 161.04 160.15 161.04 159.84 160.42 159.55 160.42 158.62 160.11 158.31 159.82 157.69 159.51 157.07 159.2 156.47 159.2 155.85 159.2 155.23 159.2 154.61 159.2 154.01 159.2 153.7 159.2 153.08 158.89 152.46 158.58 152.15 158.58 151.55 158.27 151.24 158.27 150.93 158.27 150.3 158.27 149.71 157.95 149.09 157.95 148.47 157.95 147.84 157.64 146.93 157.36 146.62 157.36 146.31 157.36 145.69 157.36 144.78 157.05 144.47 157.05 134.94 159.51 121.09 164.12 106.06 155.8 77.14 137.32 71.62 144.41 47.35 139.8 46.1 133.93 27.66 104.99 11.68 91.13 0 83.13 7.07 67.11 10.46 54.19 17.22 42.8 31.03 44.04 43.95 48.65 55.33 46.19 57.79 38.17 64.57 17.24 72.53 27.7 84.21 17.24 87.6 4.61 95.6 12.63 110.05 0 110.67 1.84 110.96 3.99 111.58 5.85 111.89 7.69 111.89 9.84 111.89 10.46 111.89 12.63"
        />
      </svg>
    </div>
  )
}

export default AltoGrande