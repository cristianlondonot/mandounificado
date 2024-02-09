import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const DosHermanos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 226.21 184.02"
      >
        <polygon
          fill={getColorByCarencias('DOS HERMANOS', municipio.toUpperCase())}
          className="cls-1"
          points="93.3 31.74 93.99 32.47 94.74 32.47 95.82 32.14 96.15 32.14 96.15 32.86 96.55 33.91 97.99 33.58 98.71 33.91 99.4 34.66 100.51 34.99 101.59 35.71 102.28 35.71 103 36.1 103 37.18 103.75 37.9 104.83 37.9 105.91 38.23 106.64 38.62 107.33 38.23 108.05 37.51 108.41 36.82 110.6 36.1 111.68 36.1 112.01 35.38 112.37 33.91 113.45 32.86 114.92 32.47 116.33 32.47 117.42 32.14 118.53 32.14 119.22 30.66 119.97 29.61 120.3 28.89 121.38 29.22 122.46 29.61 123.18 29.61 122.46 30.66 123.54 30.66 124.26 30.66 125.34 30.66 126.06 30.33 126.79 30.66 127.87 31.05 128.95 29.61 129.31 28.89 130.03 29.22 130.75 28.89 131.47 28.14 131.83 28.14 131.83 28.89 132.55 28.5 133.27 28.5 133.99 29.22 134.35 29.61 133.63 30.33 134.35 30.66 135.07 31.41 135.79 31.74 136.88 32.14 137.96 32.14 139.04 32.47 140.12 32.86 141.2 32.14 141.92 31.05 142.64 30.33 143 31.05 143.72 31.41 144.8 31.05 145.52 31.05 146.6 32.14 147.33 32.47 148.41 32.47 149.49 32.14 150.21 32.47 151.65 32.14 152.73 32.47 153.81 32.14 154.17 32.47 153.45 33.19 153.81 33.58 155.25 32.86 155.25 31.41 155.97 30.66 156.69 30.66 157.05 30.33 156.69 29.94 157.05 29.22 158.14 28.89 159.22 28.5 159.94 29.61 160.66 30.33 162.1 30.66 162.82 31.74 164.26 32.86 165.34 33.19 166.78 33.91 167.14 34.66 166.42 35.71 165.7 36.1 166.42 37.18 166.78 37.9 167.14 38.62 167.87 38.23 168.59 38.95 169.67 38.62 171.11 38.62 171.83 38.95 172.19 39.34 172.19 40.06 171.83 41.14 171.11 41.86 171.11 43.28 171.47 44.39 172.19 44.72 173.27 45.47 175.07 45.11 176.51 44.72 177.23 45.47 177.6 45.11 178.65 45.11 179.73 44.39 180.45 44.72 181.17 45.47 182.25 45.47 182.97 45.83 183.33 45.83 183.69 46.19 184.41 46.55 185.49 46.91 185.85 48.35 186.21 48.35 186.93 49.07 186.93 49.79 188.02 50.51 188.02 51.23 188.38 51.95 189.46 51.59 190.18 50.87 190.9 50.51 191.98 50.87 193.06 51.95 194.14 53.4 195.22 55.56 195.94 57.36 197.38 59.52 198.83 60.96 200.27 62.44 201.71 63.52 203.51 63.88 204.95 63.88 207.11 63.88 210 63.16 212.88 62.44 215.04 62.07 217.56 61.32 219.73 61.32 222.25 61.32 224.77 61.32 225.85 61.71 226.21 63.88 224.77 65.68 222.25 68.92 220.45 71.44 218.29 74.69 216.48 78.32 214.32 81.56 212.52 84.09 210 86.61 207.11 88.77 204.23 90.93 201.71 94.54 200.63 97.09 199.55 101.05 198.47 105.02 197.38 109.67 196.3 113.31 195.94 117.27 195.94 120.15 194.86 124.48 194.5 127 193.78 130.27 192.34 133.88 191.26 136.76 189.82 140.36 189.82 143.61 189.82 146.52 190.54 147.96 191.26 148.68 191.98 150.12 192.7 151.92 193.06 152.64 193.42 153.36 194.14 154.45 194.5 155.17 194.86 155.89 194.86 156.25 194.5 156.25 194.14 156.61 194.14 156.97 193.78 157.33 193.78 157.69 193.78 158.05 193.78 158.41 193.42 158.41 193.42 158.77 193.06 158.77 192.7 158.77 192.34 158.77 191.98 158.77 191.62 158.77 191.26 158.77 190.9 158.77 190.54 158.77 190.54 159.13 190.54 159.49 190.9 159.49 190.9 159.85 190.9 160.21 190.9 160.57 190.9 160.93 190.9 161.32 190.54 161.32 190.54 161.68 190.18 162.01 189.82 162.01 189.82 162.4 189.46 162.4 189.1 162.76 188.74 162.76 188.38 163.09 188.02 163.09 187.66 163.48 187.29 163.48 186.93 163.48 186.57 163.48 186.21 163.81 185.85 163.81 185.49 163.81 185.13 163.81 185.13 164.18 185.13 164.57 185.13 164.9 185.49 164.9 185.49 165.26 185.85 165.65 185.85 165.98 185.49 165.98 185.49 166.37 185.13 166.37 185.13 166.73 184.77 166.73 184.77 167.06 184.77 167.45 184.41 167.45 184.05 167.45 183.69 167.45 183.69 167.06 183.33 167.06 182.97 167.45 182.61 167.45 182.61 167.81 182.61 168.14 182.61 168.53 182.25 168.53 182.25 168.86 181.89 169.22 181.53 169.22 181.17 169.61 180.81 169.61 180.45 169.61 180.45 169.22 180.09 169.22 179.73 169.22 179.37 169.61 179.01 169.61 179.01 169.94 179.01 170.33 179.37 170.69 179.37 171.02 179.01 171.02 178.65 171.02 178.32 171.02 178.32 170.69 177.96 171.02 177.6 171.41 177.23 171.77 177.23 172.1 177.23 172.49 176.87 172.49 177.23 172.82 177.6 172.82 177.6 173.18 177.96 173.18 177.96 173.57 177.96 173.9 177.6 173.9 177.6 174.27 177.23 174.66 176.87 174.66 176.87 174.99 176.51 174.99 176.15 174.99 175.43 174.99 175.07 174.99 175.07 175.38 174.71 175.38 174.35 175.38 174.35 175.74 174.35 176.07 174.35 176.46 174.35 176.82 174.35 177.15 174.71 177.54 175.07 177.9 175.07 178.26 174.71 178.62 174.71 178.98 174.71 179.34 174.35 179.34 173.99 179.34 173.99 179.7 173.63 179.7 173.27 179.7 172.91 179.7 172.55 179.7 172.19 179.34 171.83 179.34 171.47 178.98 171.11 178.98 170.75 179.34 170.39 179.34 170.03 179.7 169.67 179.7 169.31 179.7 168.95 179.7 168.59 179.7 168.23 179.7 168.23 180.06 167.87 180.06 167.51 180.06 167.14 180.42 166.78 180.06 166.42 180.06 166.06 180.42 165.7 180.42 165.34 180.42 164.98 180.42 164.62 180.42 164.26 180.42 163.9 180.42 163.54 180.42 163.18 180.42 162.82 180.42 162.82 180.06 162.46 180.06 162.1 179.7 161.74 179.34 161.74 178.98 161.38 178.62 161.38 178.26 161.02 178.62 160.66 178.62 160.66 178.98 160.3 178.98 159.94 179.34 159.58 178.98 159.94 178.98 159.94 178.62 159.58 178.62 159.22 178.62 158.86 178.62 158.5 178.62 158.5 178.26 158.5 177.9 158.14 177.9 157.78 177.9 157.42 177.9 157.05 177.9 156.69 177.9 156.69 178.26 156.69 178.62 156.69 178.98 156.33 178.98 155.97 178.98 155.61 178.98 155.25 178.62 154.89 178.62 154.89 178.98 154.53 178.98 154.17 178.98 153.81 178.98 153.81 179.34 154.17 179.7 153.81 180.06 153.45 180.06 153.45 180.42 153.81 180.42 153.81 180.78 153.45 180.78 153.09 180.78 152.73 180.78 152.73 180.42 152.37 180.42 152.37 180.06 152.01 180.06 152.01 180.42 152.01 180.78 151.65 181.14 151.65 181.5 152.01 181.5 152.01 181.86 152.01 182.22 151.65 182.22 151.29 182.22 151.29 182.58 150.93 182.58 150.57 182.58 150.21 182.58 149.85 182.58 149.49 182.58 149.13 182.94 148.77 183.3 148.41 183.3 148.41 182.94 148.41 182.58 148.05 182.58 148.05 182.94 147.69 182.94 147.69 183.3 147.33 183.3 146.96 182.94 146.96 182.58 146.96 182.22 146.6 182.22 146.6 181.86 146.6 182.22 146.24 182.22 146.24 182.58 145.88 182.22 145.52 182.22 145.52 182.58 145.16 182.58 145.16 182.94 144.8 182.94 144.8 183.3 144.8 183.66 144.44 183.66 144.44 184.02 144.08 184.02 143.72 184.02 143.36 184.02 143 184.02 143 183.66 143 183.3 143 182.94 143 182.58 143.36 182.58 143.36 182.22 143.36 181.86 143 181.5 142.64 181.14 142.28 180.78 142.28 180.42 142.28 180.06 141.92 180.06 141.92 179.7 141.56 179.7 141.2 179.34 140.84 179.34 140.48 179.34 140.12 179.7 139.76 179.7 139.4 180.06 139.04 180.06 138.68 180.06 138.32 179.7 137.96 179.34 137.6 178.98 137.6 178.62 137.24 178.26 136.88 177.9 136.51 177.9 135.79 177.9 135.43 177.54 135.07 177.54 134.71 177.9 134.35 177.9 133.99 177.9 133.63 177.54 133.27 177.54 132.91 177.54 132.55 177.54 132.55 177.9 132.19 178.26 131.83 178.62 131.83 178.98 131.83 179.34 131.83 179.7 131.47 179.7 131.11 179.7 130.75 179.7 130.39 179.34 130.03 179.34 130.03 178.98 130.03 178.62 130.03 178.26 130.03 177.9 130.03 177.54 130.39 177.15 130.03 176.82 129.67 176.82 129.31 176.82 129.31 176.46 128.95 176.46 128.95 176.07 128.59 176.07 128.23 176.07 127.87 176.07 127.51 175.74 127.15 175.74 127.15 175.38 126.79 175.38 126.79 175.74 126.42 175.74 126.06 175.74 126.06 176.07 125.7 176.07 125.34 176.07 124.98 175.74 124.62 175.74 124.62 175.38 124.26 175.38 124.26 174.66 124.26 173.9 123.9 173.9 123.9 173.57 123.9 173.18 123.54 173.18 123.54 172.82 123.18 172.82 122.82 172.49 122.46 172.49 122.1 172.49 121.74 172.49 121.38 172.49 121.02 172.49 120.69 172.49 120.3 172.49 119.97 172.49 119.61 172.82 119.22 172.82 118.89 172.82 118.53 172.82 118.53 172.49 118.14 172.49 118.14 172.1 117.81 172.1 117.81 171.77 117.81 171.41 117.81 171.02 117.42 171.02 117.06 171.02 116.73 171.02 116.33 170.69 116 170.69 115.64 170.69 114.92 170.69 114.17 170.33 113.84 170.33 113.45 170.33 113.09 170.33 112.76 169.94 112.37 169.94 112.01 169.94 111.68 169.94 111.29 169.94 110.96 169.94 110.96 170.33 110.96 170.69 110.6 170.69 110.21 171.02 109.88 171.02 109.52 171.02 109.13 171.02 109.13 171.41 108.8 171.41 108.41 171.02 108.05 171.02 107.72 171.02 107.33 171.02 107 170.69 106.64 170.69 106.24 170.69 105.91 170.69 105.55 170.69 105.16 170.33 104.83 170.33 104.44 169.94 104.08 169.94 103.75 169.94 103.36 169.94 103.36 170.33 103 170.33 102.67 170.33 102.28 170.33 101.95 170.33 101.59 170.33 101.59 169.94 101.2 169.94 100.87 169.61 100.87 169.94 100.51 169.94 100.12 170.33 100.12 170.69 99.79 170.69 99.4 170.69 99.4 171.02 99.04 171.02 99.04 171.41 99.04 171.77 98.71 171.77 98.32 172.1 97.99 172.1 97.63 172.1 97.24 172.1 96.91 172.1 96.91 172.49 96.55 172.49 96.55 172.82 96.55 173.18 96.55 173.57 96.55 173.9 96.15 174.27 95.82 174.27 95.46 174.27 95.07 174.27 94.74 174.27 94.38 174.27 94.38 174.66 94.38 174.99 93.99 174.99 93.99 175.38 93.99 175.74 93.63 175.74 93.63 176.07 93.3 176.07 93.3 176.46 92.94 176.46 92.55 176.46 92.19 176.46 91.86 176.46 91.86 176.07 91.47 176.07 91.47 175.74 91.47 175.38 91.11 175.38 90.78 175.38 90.42 175.38 90.03 175.38 89.67 175.38 89.34 175.74 88.98 175.38 88.98 174.99 88.59 175.38 88.59 175.74 88.26 175.74 87.9 176.07 87.51 176.07 87.15 176.07 87.15 176.46 86.82 176.46 86.82 176.82 86.46 176.82 86.46 176.46 86.06 176.46 85.73 176.46 85.73 176.07 85.37 176.07 85.37 175.74 84.98 175.74 84.62 175.38 84.29 175.38 83.93 175.38 83.54 175.38 83.54 174.99 83.18 174.99 83.18 174.66 83.18 174.27 82.85 174.27 82.46 174.27 82.1 174.27 82.1 173.9 81.77 173.9 81.41 173.9 81.41 173.57 81.02 173.57 81.02 173.18 80.66 173.18 80.33 173.18 79.97 173.18 79.97 172.82 79.58 172.82 79.25 172.82 78.89 172.82 78.89 172.49 78.5 172.49 78.14 172.49 77.81 172.49 77.45 172.49 77.45 172.82 77.06 172.82 77.06 173.18 76.73 173.18 76.37 173.57 75.98 173.57 75.98 173.9 75.61 173.9 75.28 173.9 74.92 173.9 74.92 174.27 74.53 173.9 74.17 173.9 74.17 173.57 73.84 173.57 73.84 173.18 73.45 173.18 73.09 173.18 72.76 173.18 72.76 172.82 72.4 172.82 72.4 172.49 72.01 172.49 72.01 172.1 71.65 172.1 71.32 171.41 70.96 171.41 70.96 171.77 70.57 171.77 70.24 171.41 70.24 171.02 70.57 171.02 70.57 170.69 70.57 170.33 70.57 169.94 70.24 169.94 69.88 169.94 69.88 169.61 69.49 169.61 69.49 169.22 69.88 169.22 69.88 168.86 69.49 168.86 69.88 168.53 69.49 168.53 69.49 168.14 69.13 168.14 69.13 167.81 69.13 167.45 69.13 167.06 68.8 167.06 68.44 167.06 68.05 167.06 68.05 166.73 67.72 166.73 67.72 166.37 67.72 165.98 67.72 165.65 67.36 165.65 66.97 165.65 66.61 165.65 66.28 165.65 65.92 165.65 65.92 165.26 65.92 164.9 65.92 164.57 65.52 164.57 65.52 164.18 65.52 163.81 65.16 163.81 64.83 163.81 64.44 163.81 64.44 164.18 64.08 164.18 63.75 164.18 63.75 164.57 63.39 164.57 63.39 164.9 63.39 165.26 63.03 165.26 63.03 165.65 62.67 165.98 62.31 165.98 61.95 165.98 61.59 165.98 61.59 165.65 61.59 165.26 61.23 165.26 60.87 165.26 60.87 165.65 60.51 165.65 60.15 165.65 59.79 165.98 59.07 165.98 59.07 166.37 58.71 166.37 58.35 166.37 57.99 166.37 57.99 166.73 57.63 166.73 57.27 166.37 56.91 166.37 56.91 165.98 56.91 165.65 56.55 165.65 56.19 165.65 55.83 165.65 55.46 165.65 55.1 165.65 55.1 165.98 55.1 166.37 54.74 166.37 54.74 166.73 54.74 167.06 54.38 167.06 54.38 167.45 54.02 167.45 53.66 167.45 53.66 167.06 53.3 167.06 53.3 166.73 52.94 166.37 52.58 166.37 52.58 165.98 52.22 165.98 51.86 165.98 51.5 165.98 51.5 166.37 51.14 166.37 50.78 166.73 50.78 167.06 50.42 167.06 50.06 167.06 49.7 167.06 49.7 166.73 49.34 166.73 49.34 166.37 49.34 165.98 48.98 165.98 48.62 165.98 48.26 165.98 47.9 165.98 47.9 165.65 47.54 165.65 47.54 165.26 47.54 164.9 47.18 164.9 47.18 164.57 47.18 164.18 46.82 164.18 46.82 163.81 46.46 163.81 46.1 163.81 45.74 163.81 45.37 163.48 45.01 163.09 45.01 162.76 45.01 162.4 44.65 162.4 44.65 162.01 44.65 161.68 44.65 161.32 44.29 160.93 44.29 160.57 44.29 160.21 44.29 159.85 43.93 159.85 43.93 159.49 43.93 159.13 43.57 159.13 43.57 158.77 43.21 158.77 43.21 159.13 42.85 159.13 42.49 159.13 42.49 159.49 42.13 159.49 41.77 159.49 41.41 159.13 41.05 158.77 40.69 158.77 40.33 158.77 39.97 158.77 39.61 158.77 39.61 158.41 39.61 158.05 39.61 157.69 39.97 157.69 40.33 157.69 40.33 157.33 39.97 157.33 39.61 157.33 39.25 157.33 39.25 156.97 38.89 156.97 38.89 156.61 38.53 156.61 38.17 156.61 37.81 156.61 37.45 156.61 37.45 156.25 37.09 156.25 36.73 155.89 36.73 155.53 36.73 155.17 36.37 155.17 36.01 155.17 35.65 155.17 35.65 155.53 35.28 155.53 34.92 155.89 34.56 155.89 34.2 155.89 33.84 155.89 33.48 155.89 33.48 156.25 33.12 156.25 32.76 156.25 32.4 156.25 32.04 156.25 31.68 156.25 31.68 155.89 31.68 155.53 31.68 155.17 31.68 154.81 31.68 154.45 31.32 154.45 30.96 154.45 30.6 154.45 30.6 154.81 30.24 154.81 29.88 154.81 29.52 154.81 29.52 154.45 29.16 154.45 28.8 154.45 28.8 154.81 28.8 155.17 28.8 155.53 29.16 155.53 29.16 155.89 29.16 156.25 28.8 156.61 28.8 156.25 28.44 156.25 28.08 156.25 28.08 155.89 28.08 155.53 27.72 155.53 27.72 155.17 27.36 155.17 27.36 154.81 27.36 154.45 27 154.45 26.64 154.45 26.64 154.81 26.28 154.81 25.92 155.17 25.56 155.17 25.56 154.81 25.2 154.81 25.2 154.45 24.83 154.45 24.83 154.09 24.47 154.09 24.47 153.73 24.83 153.73 25.2 153.73 25.2 153.36 25.2 153 25.2 152.64 25.2 152.28 25.56 151.92 25.56 151.56 25.56 151.2 25.2 151.2 24.83 151.56 24.47 151.56 24.47 151.2 24.11 151.2 24.11 150.84 23.75 150.84 23.39 150.84 23.39 150.48 23.03 150.48 23.03 150.12 23.03 149.76 23.39 149.76 23.39 149.4 23.03 149.4 23.03 149.04 22.67 149.04 22.67 149.4 22.31 149.4 22.31 149.04 22.31 148.68 22.31 148.32 22.67 148.32 23.03 148.32 23.03 147.96 22.67 147.96 22.67 147.6 22.31 147.6 21.95 147.6 21.59 147.6 21.23 147.24 21.23 146.88 21.59 146.88 21.95 146.52 21.59 146.16 21.23 146.16 20.87 145.8 20.51 146.16 20.15 146.16 19.79 146.16 19.43 146.16 19.43 145.8 19.07 145.44 18.71 145.08 18.35 145.08 18.71 144.72 19.07 144.36 19.43 144.36 19.43 143.97 19.79 143.97 20.15 143.97 20.51 143.97 20.87 143.61 21.23 142.88 21.23 142.16 21.23 141.8 21.23 141.44 21.23 141.08 20.87 140.72 20.51 140.72 20.51 140.36 20.51 139.64 20.87 139.28 20.87 138.92 20.87 138.56 20.87 137.84 21.23 137.48 21.23 137.12 21.59 136.76 21.59 136.4 21.23 136.04 21.59 135.68 21.95 135.32 22.31 134.96 22.31 134.6 22.31 134.24 22.31 133.88 22.67 133.52 23.03 133.52 23.03 133.15 23.03 132.79 23.03 132.43 22.67 132.43 22.67 132.07 22.67 131.71 22.67 131.35 22.67 130.99 22.67 130.63 22.67 130.27 22.31 130.27 21.95 130.27 21.59 129.91 21.23 129.91 21.23 129.55 21.23 129.19 20.87 129.19 20.87 128.83 20.87 128.47 20.87 128.11 20.87 127.75 20.87 127.36 20.51 127.36 20.51 127 20.51 126.64 20.51 126.28 20.51 125.92 20.15 125.92 20.15 125.56 20.15 125.2 19.79 124.84 19.79 124.48 19.43 124.48 19.43 124.12 19.07 124.12 19.07 123.76 19.07 123.4 19.07 123.03 19.43 123.03 19.43 122.67 19.79 122.67 19.79 122.31 19.79 121.95 19.79 121.59 19.43 121.59 19.07 121.59 18.71 121.59 18.35 121.59 18.35 121.23 18.71 121.23 18.71 120.87 19.07 120.87 19.07 120.51 19.07 120.15 19.07 119.79 18.71 119.79 18.35 119.79 17.99 119.79 17.63 119.79 17.27 119.79 17.27 119.43 17.27 119.07 16.91 119.07 16.91 118.71 16.91 118.35 16.91 117.99 16.55 117.63 16.55 117.27 16.55 116.91 16.55 116.55 16.55 116.19 16.55 115.83 16.55 115.47 16.19 115.47 16.19 115.11 15.83 114.75 15.83 114.39 15.83 114.03 15.47 113.67 15.11 112.94 14.74 111.86 14.74 111.5 14.74 111.14 14.74 110.75 15.11 110.42 15.11 110.06 15.11 109.67 15.47 109.34 15.47 108.95 15.47 108.59 15.83 108.26 15.83 107.51 15.83 106.46 15.83 105.71 15.47 105.38 15.11 105.38 15.11 105.71 14.74 106.1 14.38 106.1 14.02 106.1 13.66 106.1 13.66 105.71 13.3 105.71 13.3 105.38 13.3 105.02 13.66 104.63 13.66 104.3 13.66 103.91 13.66 103.55 13.66 103.22 13.3 103.22 12.94 102.82 12.58 102.49 12.58 102.13 12.58 101.74 12.58 101.41 12.94 101.41 12.94 101.05 12.94 100.66 12.94 100.33 12.94 99.94 12.58 99.58 12.58 99.25 12.22 99.25 12.22 98.86 12.58 98.86 12.58 98.5 12.58 98.17 12.94 97.78 12.94 97.45 13.3 97.09 13.3 96.7 13.66 96.37 14.02 95.98 14.02 95.62 14.38 95.62 14.74 95.62 14.74 95.29 14.74 94.93 14.74 94.54 14.38 94.18 14.38 93.82 14.02 93.82 14.02 93.46 13.66 93.1 13.3 93.1 12.94 93.1 12.94 92.73 12.94 92.37 13.66 92.01 14.02 91.65 14.38 90.93 14.74 90.93 15.11 90.57 15.11 90.21 15.11 89.85 14.74 89.49 14.74 89.13 15.11 88.77 15.47 88.05 15.47 87.33 15.83 86.97 15.83 86.61 16.19 86.25 15.83 85.53 15.47 85.53 15.11 85.53 14.74 85.17 14.74 84.81 14.38 84.81 14.38 84.45 14.38 84.09 14.38 83.73 14.74 83.37 14.74 83.01 15.11 82.64 15.47 82.64 15.47 82.28 15.83 82.28 15.83 81.92 16.19 81.92 16.19 81.56 16.55 81.56 16.91 81.56 17.27 81.56 17.27 81.2 17.27 80.84 16.91 80.84 16.55 80.84 16.19 80.84 15.83 80.84 15.83 80.48 16.19 80.48 16.19 80.12 16.55 80.12 16.55 79.76 16.19 79.76 15.83 79.76 15.47 79.76 15.11 79.76 14.74 79.76 14.74 79.4 14.38 79.4 14.02 79.04 13.66 79.04 13.66 78.68 13.3 78.68 13.3 78.32 13.3 77.93 13.3 77.57 13.66 77.57 13.66 77.21 14.02 76.85 14.02 76.49 14.38 76.49 14.38 76.13 14.38 75.77 14.74 75.41 15.11 75.41 15.11 75.05 14.74 74.69 14.74 74.33 14.74 73.97 14.38 73.97 14.02 73.97 14.02 74.33 13.66 74.69 13.3 74.69 13.3 74.33 13.3 73.97 13.3 73.61 12.94 73.61 12.94 73.25 12.58 73.25 12.58 73.61 12.22 73.61 12.22 73.25 11.86 72.89 11.5 72.53 11.14 72.53 10.78 72.53 10.42 72.53 10.06 72.89 9.7 72.89 9.7 72.53 9.34 72.53 9.34 72.16 9.34 71.8 8.98 71.8 8.98 71.44 8.62 71.44 8.62 71.08 8.26 71.08 7.9 71.08 7.54 70.72 7.18 70.72 6.82 70.72 6.46 70.36 6.13 70.36 5.77 70.36 5.41 70.36 5.41 70 5.05 70 5.05 69.64 5.05 69.28 5.05 68.92 5.05 68.56 4.68 68.56 4.68 68.2 4.32 68.2 3.96 67.84 3.6 67.84 3.24 67.84 2.88 67.84 2.52 67.84 2.16 67.84 1.8 67.84 1.44 67.84 1.44 67.48 1.08 67.48 1.08 67.12 0.72 66.76 1.08 66.76 1.08 66.4 0.72 66.4 0.72 66.04 0.72 65.68 0.72 65.32 1.08 65.32 1.08 64.96 0.72 64.6 0.72 64.24 0.36 64.24 0.36 63.88 0 63.88 0 63.52 0 63.16 0.36 62.8 0.36 62.44 0.72 62.44 0.72 62.8 1.08 63.16 1.44 63.16 1.44 62.8 1.08 62.8 1.08 62.44 1.44 62.07 1.44 61.71 1.8 61.71 2.16 62.07 2.16 62.44 2.52 62.44 2.88 62.44 2.88 62.07 2.88 61.71 3.24 61.71 3.6 61.71 3.96 61.71 4.32 61.71 4.68 61.71 5.05 61.71 5.41 61.71 5.77 61.71 6.13 61.32 6.46 61.32 6.82 61.32 7.18 61.32 7.54 61.32 7.54 61.71 7.9 62.07 8.26 62.07 8.62 62.07 8.98 62.07 9.34 61.71 9.34 61.32 9.7 60.96 9.7 60.6 10.06 60.24 10.06 59.88 10.06 59.52 10.06 59.16 10.42 59.16 10.42 58.8 10.42 59.16 10.78 59.16 10.78 58.8 10.78 58.44 10.78 58.08 10.78 57.36 10.78 57 10.78 56.64 10.78 56.28 10.78 55.92 10.78 55.56 11.14 55.56 11.14 55.2 11.14 54.84 11.5 54.84 11.86 54.48 11.86 54.12 12.22 54.12 12.22 53.76 12.58 53.76 12.58 53.4 12.94 53.4 12.94 53.04 12.94 52.68 12.94 52.32 12.94 51.95 12.58 51.95 12.22 51.95 12.22 51.59 11.86 51.59 11.86 51.23 11.5 50.87 11.14 50.51 11.5 50.51 11.86 50.51 11.86 50.15 11.86 49.79 11.86 49.43 11.86 49.07 12.22 49.07 12.58 49.07 12.58 48.71 12.94 48.71 13.3 48.71 13.3 48.35 13.3 47.99 13.3 47.63 13.3 47.27 13.3 46.91 13.3 46.55 13.3 46.19 13.3 45.83 13.66 45.83 13.66 45.47 13.66 45.11 14.02 45.11 14.38 44.72 14.74 44.39 15.11 44 15.11 43.67 15.47 43.67 15.83 43.67 15.83 43.28 15.83 42.92 15.83 42.59 16.19 42.2 15.83 42.2 15.47 42.2 15.47 41.86 15.83 41.86 15.83 41.47 15.47 41.14 15.47 40.75 15.47 40.42 15.47 40.06 15.47 39.67 15.47 39.34 15.11 39.34 15.11 38.95 15.11 38.62 15.47 38.62 15.83 38.62 16.19 38.62 16.19 38.23 16.55 38.23 16.55 37.9 16.91 37.9 17.27 37.9 17.63 37.9 17.63 37.51 17.99 37.51 17.99 37.18 17.99 36.82 17.99 36.43 17.99 36.1 17.63 36.1 17.63 35.71 17.99 35.71 17.99 35.38 18.35 35.38 18.35 34.99 17.99 34.99 17.99 34.66 17.99 34.27 17.99 33.91 18.35 33.91 18.71 33.91 19.07 33.91 19.43 33.58 19.43 33.19 19.79 33.19 19.79 32.86 20.15 32.86 20.15 32.47 20.15 32.14 20.15 31.74 20.51 31.41 20.87 31.41 20.87 31.05 20.87 30.66 20.87 30.33 20.51 30.33 20.51 29.94 20.15 29.94 20.15 29.61 20.15 29.22 20.15 28.89 20.51 28.5 20.51 28.14 20.87 28.14 20.87 27.78 20.87 27.42 21.23 27.42 21.23 27.06 20.87 27.06 20.87 26.7 20.51 26.7 20.15 26.7 20.15 26.34 20.51 26.34 20.51 25.98 20.51 25.62 20.15 25.62 19.79 25.62 19.43 25.62 19.07 25.62 19.07 25.26 19.07 24.9 19.07 24.54 18.71 24.18 18.35 23.82 18.71 23.82 19.07 23.82 19.07 23.46 19.43 23.46 19.43 23.1 19.07 23.1 18.71 23.1 18.71 22.74 18.71 22.38 18.71 22.02 18.71 21.65 19.07 21.65 18.71 21.29 18.35 21.65 17.99 21.65 17.63 21.65 17.27 22.02 16.91 22.74 16.91 23.1 16.55 23.1 16.19 23.1 15.83 22.74 15.47 22.02 15.47 21.65 15.11 21.65 15.11 21.29 15.11 20.57 15.11 20.21 15.11 19.85 15.11 19.49 14.74 19.13 14.74 18.77 14.74 18.41 14.38 18.05 14.02 17.69 13.66 17.69 13.3 17.69 12.94 17.69 12.94 17.33 12.94 16.97 13.3 16.97 13.66 16.25 14.02 15.53 15.11 13.73 16.19 13.01 17.27 11.93 17.99 10.45 18.35 8.65 19.43 6.85 20.51 5.41 21.95 3.25 23.39 2.17 24.83 1.81 25.92 1.81 28.08 1.08 29.52 0.72 31.32 0.72 34.56 0 36.01 0 39.25 0 41.41 0.36 45.01 0.72 47.54 1.08 49.7 1.45 51.86 2.53 54.02 2.53 55.83 3.25 56.91 3.97 57.63 5.05 57.27 6.13 57.63 7.93 58.35 9.73 60.51 11.17 61.23 12.29 61.23 14.45 60.87 16.97 60.87 17.33 62.31 19.49 63.03 20.57 64.44 21.65 66.28 22.02 68.05 22.74 68.8 23.82 69.88 25.26 70.96 27.06 72.01 28.14 73.84 28.14 75.61 29.22 76.73 30.33 77.81 30.66 78.89 30.33 79.97 30.33 82.1 29.94 82.85 30.33 83.93 29.94 84.98 29.61 86.06 30.33 87.15 31.05 89.34 31.74 90.78 32.14 92.19 32.14 93.3 31.74"
        />
      </svg>
    </div>
  )
}

export default DosHermanos