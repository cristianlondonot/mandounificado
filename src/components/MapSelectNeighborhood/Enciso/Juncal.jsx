import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Juncal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 193.42 244.91"
      >
        <polygon
          fill={getColorByCarencias('JUNCAL', municipio.toUpperCase())}
          className="cls-1"
          points="193.42 82.51 193.42 83.84 183.2 98.34 176.62 106.62 173.97 112.87 169.69 120.14 168.37 123.77 161.44 131.35 153.57 138.95 147.29 144.55 140.36 147.85 134.76 152.15 132.46 157.77 126.86 163.37 120.59 166.68 117.29 169.65 114.99 174.28 113.66 174.93 110.04 177.23 109.39 177.9 105.11 181.88 100.18 186.15 92.61 193.73 82.71 200.03 79.41 202.98 72.83 206.93 68.21 208.58 62.28 210.58 57.65 214.88 56 219.48 49.78 222.46 45.48 227.08 42.18 231.36 34.93 235.66 26.03 242.61 15.5 243.26 11.87 244.26 9.55 244.91 7.57 243.91 7.57 239.63 8.25 234.33 9.22 230.38 10.55 226.11 11.2 221.78 10.87 215.86 10.22 211.26 6.92 206.93 3.95 203.98 0 201.33 1.32 199.35 1.97 197.38 2.3 195.08 2.62 194.4 3.62 192.4 3.95 190.78 4.95 189.13 6.25 186.48 7.57 182.85 8.25 181.55 8.57 180.55 9.22 179.88 10.22 178.55 10.87 177.9 11.87 177.55 13.17 176.58 14.82 175.93 15.82 175.25 16.47 174.93 17.47 173.6 18.12 172.63 18.45 171.3 18.77 170.3 19.12 169 19.77 168 20.75 166.68 21.42 166.02 22.75 165.02 23.73 164.37 24.4 163.7 25.05 163.37 27.03 161.4 28.35 160.72 30 159.07 30.65 157.77 31.65 156.45 32.3 155.45 33.28 154.15 34.28 152.82 34.6 152.5 34.93 151.82 35.28 151.17 35.6 150.17 35.93 149.85 36.25 149.2 36.58 148.52 36.58 147.85 36.58 146.87 36.25 145.55 35.28 144.22 34.93 143.25 34.28 142.57 33.63 141.92 33.63 141.6 32.95 140.95 32.95 140.6 32.63 139.95 31.98 138.62 31.98 137.3 31.65 137.3 31.65 136.32 31.65 135.67 31.98 134.67 32.3 133.35 32.95 132.35 32.95 132.02 33.28 131.7 33.63 130.7 34.93 129.72 36.25 129.05 38.55 127.4 40.2 125.09 41.53 122.79 42.18 121.79 42.53 120.79 43.18 119.49 43.83 118.14 44.5 116.84 44.83 115.52 45.15 114.19 45.8 113.19 46.48 112.22 46.8 111.57 48.45 110.57 49.78 109.92 50.75 109.24 52.38 108.27 53.7 107.59 54.7 106.94 56 105.97 56.33 105.62 57.65 104.32 58.3 103.29 58.65 101.97 59.3 100.34 59.3 99.34 59.3 98.02 59.3 97.04 59.3 95.07 59.3 92.74 59.3 90.12 59.3 88.12 58.98 86.14 58.65 84.16 58.65 82.51 58.3 80.54 58.3 79.21 58.3 77.56 58.3 75.91 58.98 74.26 59.3 72.61 60.63 70.29 61.28 69.31 61.95 67.99 62.61 66.99 63.58 64.69 64.26 63.04 64.58 61.71 65.23 60.09 65.23 58.76 65.58 57.41 65.91 56.44 66.23 55.76 66.88 55.11 67.88 54.11 68.21 53.14 68.21 51.81 68.53 50.49 68.53 49.19 68.86 48.18 68.86 47.53 69.53 46.21 69.53 45.56 69.86 44.56 70.51 43.58 71.18 42.23 71.83 41.26 72.48 39.93 72.83 38.61 73.16 37.61 73.48 36.31 73.48 34.98 73.81 33.66 73.81 31.68 73.81 29.06 73.81 27.06 73.81 24.73 74.13 23.11 73.81 21.46 73.48 19.48 73.48 18.16 73.48 17.51 73.48 15.51 73.48 14.21 73.48 12.88 73.48 12.53 73.48 11.53 74.13 10.23 74.48 9.23 74.81 7.9 74.81 6.25 75.13 5.6 75.13 4.63 75.13 2.98 82.38 1.98 95.23 0 105.76 0.33 114.66 2.3 120.59 6.93 126.19 10.88 133.11 13.53 134.11 21.78 139.06 22.43 143.34 25.73 149.59 31.68 157.19 39.61 166.39 48.86 171.67 52.14 177.92 59.74 182.87 68.31 192.1 83.16 193.42 82.51"
        />
      </svg>
    </div>
  )
}

export default Juncal