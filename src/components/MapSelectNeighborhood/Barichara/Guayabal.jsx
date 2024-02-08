import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Guayabal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185.3 212.21"
      >
        <polygon
          fill={getColorByCarencias('GUAYABAL', municipio.toUpperCase())}
          className="cls-1"
          points="171.17 169.42 171.52 171.49 170.83 171.84 169.8 171.15 168.76 170.11 167.04 169.77 166.35 169.42 163.25 169.42 159.8 170.11 154.29 171.49 150.84 173.56 147.74 174.94 145.33 176.32 143.26 176.66 140.51 178.04 138.44 180.45 136.72 183.55 136.03 186.34 134.99 189.44 132.93 193.57 130.17 195.99 127.76 194.61 127.41 194.26 125.69 193.23 121.9 190.13 119.49 189.09 118.14 188.41 115.38 186.34 114.35 185.65 112.62 185.65 109.52 186.68 106.42 187.72 102.97 188.41 99.87 188.75 96.43 188.41 94.36 187.72 90.91 187.72 87.81 189.09 84.71 189.44 82.64 189.78 79.54 190.82 76.1 190.82 73 191.16 68.86 191.51 65.76 191.51 61.65 191.85 56.83 192.2 53.04 192.54 49.59 193.23 43.04 192.89 36.5 193.57 29.95 194.61 25.82 196.33 23.4 197.02 14.1 201.18 7.24 205.66 4.8 207.73 1.35 210.83 0.32 212.21 0 206.7 0 206.01 0 202.91 9.27 181.14 19.96 180.8 16.86 175.63 18.92 170.8 19.96 168.39 20.3 166.64 21.68 164.57 22.71 163.19 23.4 161.13 23.75 159.4 24.09 158.02 24.78 156.65 25.47 154.92 26.5 153.54 27.54 152.17 28.92 150.44 29.95 149.41 30.98 148.38 27.54 145.96 28.23 145.27 28.57 144.59 28.92 143.9 29.26 142.52 29.26 141.83 29.61 141.14 29.95 140.45 30.29 139.76 30.98 139.42 31.67 138.73 32.02 138.04 32.36 137.69 33.05 136.66 33.74 135.6 34.09 135.25 34.43 134.91 34.77 133.87 35.46 132.84 36.15 132.15 38.22 126.64 39.94 120.06 40.29 117.31 40.63 116.62 40.98 115.93 41.67 111.1 41.67 106.28 41.67 104.18 42.01 102.11 42.36 99.7 42.7 97.29 42.7 95.22 42.7 94.19 42.36 92.47 42.36 91.09 43.04 89.36 43.73 88.68 44.42 87.99 45.8 86.95 46.84 85.23 48.9 83.16 47.87 82.47 46.84 82.47 46.84 80.75 46.84 80.06 46.84 77.99 46.49 77.3 46.49 76.27 46.49 74.89 46.49 73.51 46.49 72.45 46.49 71.42 46.84 70.04 47.52 69.01 48.21 68.32 48.9 66.94 49.59 66.25 50.28 65.56 50.97 65.21 51.31 64.53 51.31 63.49 51.66 62.46 51.31 61.42 51.66 60.39 51.66 59.36 51.66 58.67 51.66 57.98 51.31 55.88 51.66 54.85 52 53.81 52.69 51.75 53.73 50.71 54.76 49.68 55.45 48.65 56.83 47.96 58.21 46.92 60.27 46.58 62.34 45.54 63.72 44.51 66.45 43.82 69.55 41.75 70.24 39.31 71.27 37.93 73 36.21 74.03 34.83 75.75 32.77 76.44 30.35 76.1 26.56 75.06 22.77 73.68 16.23 87.12 8.27 104.7 0 105.39 1.03 106.77 2.76 107.45 3.1 108.49 4.14 110.21 4.83 110.9 5.51 111.24 5.51 111.24 5.86 111.59 5.86 111.59 7.93 110.9 9.65 110.9 10.71 111.93 11.75 112.97 13.47 114 15.88 114.35 16.23 115.38 18.64 116.41 20.36 118.14 21.74 118.48 21.74 120.18 22.43 123.28 23.81 126.03 25.18 126.38 25.53 127.41 26.22 127.41 26.56 128.1 27.6 129.48 28.63 130.51 29.32 131.55 29.66 134.3 31.04 137.4 32.77 138.09 33.11 139.47 33.8 143.95 35.87 147.4 37.93 150.84 40 151.53 40.69 153.26 41.75 155.32 43.48 155.67 43.48 156.7 43.82 158.42 44.17 161.53 44.17 163.59 43.82 167.38 43.48 170.49 43.48 172.9 44.17 174.62 44.86 177 46.58 177.38 47.27 178.41 48.3 178.04 50.02 178.76 51.75 178.76 52.09 178.76 54.16 179.07 55.88 179.44 55.88 179.76 56.23 180.11 56.57 181.17 56.57 182.55 56.57 182.86 56.57 184.61 56.57 185.3 57.29 185.3 57.63 185.3 58.67 185.3 61.08 185.3 63.49 185.3 63.84 184.93 65.21 184.27 66.59 184.27 66.94 183.24 69.01 183.24 69.69 183.24 70.38 183.24 72.45 183.24 73.51 183.24 75.24 183.58 77.3 184.27 78.68 184.27 79.03 184.27 80.41 184.27 80.75 183.9 81.78 183.9 82.13 183.9 84.89 184.27 87.64 183.58 90.05 182.55 91.78 182.2 92.12 181.17 93.84 179.76 95.91 178.41 98.67 177 101.08 176.69 101.77 175.97 105.59 175.65 109.72 175.28 110.76 174.94 113.17 173.93 116.62 173.93 116.96 173.24 119.37 171.86 121.47 171.17 122.85 170.14 124.23 168.07 126.29 167.04 127.33 166.7 127.33 164.97 127.67 162.9 128.02 161.18 128.36 161.18 129.05 160.84 130.77 160.49 132.15 160.15 134.91 159.8 136.32 159.8 137.35 159.46 139.42 158.42 141.48 157.05 142.86 156.01 143.9 154.63 146.31 153.6 149.06 152.57 150.1 151.88 150.79 149.81 152.86 149.47 153.2 147.74 155.27 147.4 155.27 146.36 157.34 146.36 159.75 146.36 161.47 147.4 163.54 147.74 165.61 148.78 166.64 149.12 166.64 149.47 166.64 150.5 166.98 153.6 167.33 156.7 166.64 159.46 165.95 161.87 165.95 163.94 166.29 164.28 166.29 166.01 166.98 167.38 168.05 168.76 168.39 170.49 169.42 171.17 169.42"
        />
      </svg>
    </div>
  )
}

export default Guayabal