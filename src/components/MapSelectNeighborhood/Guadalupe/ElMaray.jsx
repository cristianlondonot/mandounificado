import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElMaray = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 239.66 247.75"
      >
        <polygon
          fill={getColorByCarencias('EL MARAY', municipio.toUpperCase())}
          className="cls-1"
          points="239.66 128.23 239.33 129.97 238.97 132.4 238.28 134.86 238.28 137.28 237.92 139.05 237.59 141.12 237.23 142.53 237.23 144.27 237.23 146 237.23 146.69 236.87 147.38 235.49 148.79 234.8 149.84 234.11 151.22 234.11 152.96 234.8 153.65 235.16 154.01 235.85 154.72 236.54 155.77 236.54 157.84 236.18 160.3 235.49 162.73 234.8 163.77 234.8 164.11 233.76 165.15 233.4 165.15 233.07 165.15 232.71 164.82 232.38 164.82 232.02 164.82 231.66 164.82 231.33 164.82 230.97 164.82 230.64 164.82 230.28 164.46 229.92 164.46 229.59 164.46 229.23 164.46 228.87 164.46 228.54 164.46 228.18 164.46 227.85 164.46 227.49 164.46 227.13 164.11 226.8 164.11 226.44 164.11 226.11 164.11 225.75 164.11 225.39 164.11 225.06 164.11 224.7 164.11 224.37 164.11 224.01 164.11 223.66 164.11 223.66 163.77 223.32 163.77 222.97 163.77 222.61 163.77 222.28 163.77 221.92 163.77 221.59 163.77 221.23 163.77 220.87 163.77 220.54 163.77 220.18 163.77 219.85 163.77 219.49 163.77 219.13 163.77 218.8 163.77 218.44 163.77 218.11 163.77 217.75 163.77 217.39 163.77 217.39 164.11 217.06 164.11 216.7 164.11 216.37 164.46 216.37 164.82 216.01 164.82 216.01 165.15 216.01 165.51 216.01 165.84 216.01 166.2 216.01 166.56 216.01 166.89 216.01 167.25 216.01 167.58 216.37 167.94 216.37 168.3 216.37 168.63 216.37 168.99 216.37 169.35 216.37 169.68 216.37 170.04 216.37 170.4 216.37 170.76 216.37 171.09 216.37 171.45 216.37 171.8 216.37 172.14 216.01 172.49 216.01 172.83 216.01 173.18 215.65 173.18 215.65 173.54 215.65 173.87 215.32 173.87 215.32 174.23 214.96 174.59 214.6 174.92 214.27 175.28 213.91 175.28 213.91 175.61 213.58 175.61 213.22 175.61 212.87 175.61 212.54 175.61 212.18 175.61 211.85 175.61 211.49 175.61 211.13 175.61 210.8 175.61 210.44 175.61 210.44 175.28 210.11 175.28 209.75 175.28 209.39 175.28 209.39 174.92 209.06 174.92 208.7 174.92 208.34 174.59 208.01 174.59 207.65 174.59 207.32 174.23 206.96 174.23 206.6 174.23 206.6 173.87 206.27 173.87 205.91 173.87 205.58 173.54 205.22 173.54 204.86 173.54 204.53 173.54 204.53 173.18 204.17 173.18 203.82 173.18 203.48 173.18 203.13 173.18 203.13 172.83 202.79 172.83 202.44 172.83 202.08 172.83 201.75 172.83 201.39 172.83 201.06 172.83 200.7 172.83 200.34 173.18 200.01 173.18 200.01 173.54 199.65 173.54 199.32 173.87 199.32 174.23 198.96 174.23 198.96 174.59 198.6 174.92 198.6 175.28 198.6 175.61 198.27 175.61 198.27 175.97 198.27 176.33 198.27 176.66 197.91 176.66 197.91 177.02 197.91 177.35 197.55 177.71 197.55 178.07 197.22 178.4 197.22 178.76 196.86 178.76 196.86 179.09 196.53 179.45 196.17 179.81 195.84 180.14 195.48 180.14 195.48 180.5 195.12 180.5 195.12 180.83 194.79 180.83 194.79 181.19 194.43 181.19 194.1 181.55 194.1 181.88 193.77 181.88 193.77 182.24 193.41 182.24 193.41 182.59 193.41 182.93 193.05 182.93 193.05 183.28 193.05 183.62 192.72 183.97 192.72 184.33 192.72 184.66 192.36 184.66 192.36 185.02 192.36 185.35 192.03 185.71 192.03 186.07 191.67 186.43 191.31 186.79 190.98 187.12 190.62 187.12 190.62 187.48 190.27 187.48 189.94 187.81 189.58 187.81 189.25 188.17 188.89 188.17 188.89 188.53 188.56 188.53 188.2 188.86 187.84 189.22 187.84 189.55 187.51 189.91 187.51 190.27 187.51 190.6 187.51 190.96 187.84 191.31 188.2 191.65 188.56 191.65 188.56 192 188.89 192 189.25 192.34 189.58 192.34 189.58 192.69 189.94 192.69 189.58 193.05 189.25 193.05 189.58 193.38 189.58 193.74 189.58 194.07 189.58 194.43 189.58 194.79 189.58 195.12 189.58 195.48 189.58 195.84 189.25 195.84 189.25 196.17 188.89 196.53 188.89 196.86 188.56 196.86 188.56 197.22 188.56 197.55 188.2 197.55 188.2 197.91 187.84 198.27 187.84 198.6 187.51 198.6 187.51 198.96 187.15 199.32 187.15 199.65 186.79 199.65 186.79 200.01 186.46 200.01 186.46 200.34 186.1 200.34 186.1 200.7 185.77 201.05 185.41 201.39 185.05 201.74 185.05 202.1 184.72 202.1 184.72 202.46 184.72 202.82 184.36 203.15 184.36 203.51 184.36 203.84 184.36 204.2 184.36 204.56 184.36 204.89 184.36 205.25 184.72 205.25 184.72 205.58 184.72 205.94 184.72 206.3 184.36 206.3 184.36 206.63 184.36 206.99 184.36 207.32 184.03 207.32 183.67 207.68 183.67 208.04 183.67 208.37 183.67 208.73 183.67 209.08 183.67 209.42 183.31 209.42 183.31 209.77 183.31 210.11 182.98 210.11 182.98 210.46 182.62 210.46 182.62 210.8 182.29 211.15 182.29 211.51 181.93 211.51 181.93 211.84 181.57 212.2 181.57 212.56 181.24 212.56 181.24 212.89 181.24 213.25 180.88 213.58 180.88 213.94 180.53 213.94 180.53 214.3 180.19 214.3 180.19 214.63 179.84 214.63 179.5 214.63 179.5 214.99 179.15 214.99 178.79 214.99 178.79 215.32 178.46 215.32 178.1 215.68 177.77 216.04 177.41 216.04 177.41 216.37 177.05 216.73 176.72 217.09 176.72 217.42 176.36 217.42 176.36 217.78 176 218.14 175.67 218.49 175.31 218.83 174.98 219.18 174.62 219.18 174.26 219.18 173.93 219.54 173.57 219.54 173.24 219.54 172.88 219.54 172.52 219.54 172.19 219.54 171.83 219.54 171.5 219.54 171.14 219.54 170.78 219.54 170.45 219.54 170.09 219.54 170.09 219.18 169.76 219.18 169.4 219.18 169.05 219.18 168.71 219.54 168.36 219.54 168 219.54 167.67 219.54 167.31 219.87 166.98 219.87 166.62 219.87 166.62 220.23 166.26 220.56 166.26 220.92 165.93 220.92 165.93 221.28 165.93 221.61 165.93 221.97 165.93 222.3 165.93 222.66 166.26 223.02 166.26 223.35 165.93 223.71 165.93 224.04 165.93 224.4 165.93 224.76 165.93 225.09 165.57 225.09 165.57 225.45 165.57 225.81 165.57 226.14 165.24 226.14 165.24 226.5 165.24 226.83 164.88 227.19 164.88 227.55 164.52 227.88 164.52 228.24 164.52 228.57 164.19 228.57 164.19 228.93 164.19 229.28 163.83 229.28 163.83 229.62 163.83 229.97 163.47 229.97 163.47 230.33 163.14 230.66 163.14 231.02 162.78 231.35 162.78 231.71 162.45 231.71 162.45 232.04 162.09 232.4 161.76 232.76 161.4 233.09 161.4 233.45 161.4 233.81 161.04 233.81 161.04 234.17 160.71 234.53 160.71 234.86 160.71 235.22 160.35 235.55 160.35 235.91 160.35 236.27 160.35 236.6 160.35 236.96 160.35 237.31 160.35 237.65 160.35 238 160.35 238.34 160.35 238.69 159.99 238.69 159.99 239.05 159.66 239.38 159.66 239.74 159.31 239.74 159.31 240.07 159.31 240.43 159.31 240.79 159.31 241.12 159.31 241.48 159.31 241.81 159.31 242.17 159.31 242.53 159.31 242.86 159.31 243.22 158.97 243.22 158.97 243.58 158.62 243.58 158.62 243.91 158.26 243.91 157.93 243.91 157.93 244.27 157.57 244.27 157.24 244.27 157.24 244.6 156.88 244.6 156.52 244.96 156.19 244.96 155.83 245.29 155.47 245.29 155.14 245.29 154.78 245.29 154.78 245.65 154.45 245.65 154.09 245.65 153.73 245.65 153.73 246.01 153.4 246.01 153.04 246.34 152.71 246.34 152.35 246.7 151.99 246.7 151.99 247.06 151.66 247.06 151.3 247.06 151.3 247.39 150.94 247.39 150.61 247.75 150.61 247.39 150.61 247.06 150.25 247.06 150.25 246.7 149.92 246.7 149.92 246.34 149.56 246.34 149.56 246.01 149.56 245.65 149.56 245.29 149.56 244.96 149.23 244.6 149.23 244.27 148.87 244.27 148.87 243.91 148.87 243.58 148.52 243.58 148.52 243.22 148.18 242.86 148.18 242.53 148.18 242.17 147.83 242.17 147.83 241.81 147.83 241.48 147.47 241.12 147.47 240.79 147.47 240.43 147.14 240.43 147.14 240.07 147.14 239.74 146.78 239.74 146.78 239.38 146.45 239.05 146.45 238.69 146.09 238.69 146.09 238.34 146.09 238 145.73 238 145.73 237.65 145.73 237.31 145.4 237.31 145.4 236.96 145.4 236.6 145.4 236.27 145.04 235.91 145.04 235.55 145.04 235.22 145.04 234.86 144.71 234.86 144.71 234.53 144.71 234.17 144.71 233.81 144.35 233.81 144.35 233.45 144.35 233.09 143.99 233.09 143.99 232.76 143.66 232.76 143.66 232.4 143.3 232.4 142.94 232.4 142.94 232.04 142.61 232.04 142.25 232.04 142.25 231.71 141.92 231.71 141.56 231.35 141.2 231.02 140.87 230.66 140.87 230.33 140.51 230.33 140.18 229.97 139.82 229.62 139.46 229.28 139.46 228.93 139.13 228.93 139.13 228.57 138.8 228.57 138.44 228.24 138.11 228.24 138.11 227.88 137.75 227.88 137.75 227.55 137.42 227.55 137.42 227.19 137.06 227.19 136.7 227.19 136.37 227.19 136.37 226.83 136.02 226.83 135.66 226.83 135.33 226.83 134.97 226.83 134.64 226.83 134.28 226.83 133.92 226.83 133.92 226.5 133.59 226.5 133.59 226.14 133.59 225.81 133.59 225.45 133.23 225.09 133.23 224.76 133.23 224.4 133.23 224.04 132.9 224.04 132.9 223.71 132.9 223.35 132.9 223.02 132.9 222.66 132.54 222.66 132.54 222.3 132.54 221.97 132.54 221.61 132.54 221.28 132.18 221.28 132.18 220.92 132.18 220.56 132.18 220.23 131.85 220.23 131.85 219.87 131.85 219.54 131.85 219.18 131.49 219.18 131.49 218.83 131.49 218.49 131.13 218.14 131.13 217.78 131.13 217.42 130.8 217.42 130.8 217.09 130.8 216.73 130.44 216.73 130.44 216.37 130.44 216.04 130.11 216.04 130.11 215.68 129.75 215.32 129.75 214.99 129.42 214.99 129.42 214.63 129.06 214.3 129.06 213.94 128.7 213.94 128.7 213.58 128.37 213.58 128.37 213.25 128.01 212.89 128.01 212.56 127.65 212.56 127.65 212.2 127.32 212.2 127.32 211.84 126.96 211.84 126.96 211.51 126.63 211.51 126.63 211.15 126.27 211.15 126.27 210.8 125.92 210.8 125.92 210.46 125.58 210.46 125.92 211.15 125.92 211.51 125.92 211.84 125.58 212.56 125.58 212.89 125.23 213.58 124.89 213.94 124.54 213.94 124.18 214.3 124.18 214.63 123.85 214.99 123.49 215.32 123.49 215.68 123.16 215.68 123.16 216.04 122.8 216.37 122.8 216.73 122.44 217.09 122.44 217.42 122.11 217.42 121.75 218.14 121.39 218.49 121.06 218.83 120.7 219.18 120.37 219.18 120.01 219.54 119.65 219.87 119.32 220.23 118.96 220.23 118.96 220.56 118.63 220.92 118.27 221.28 118.27 221.61 117.91 221.97 117.58 221.97 117.22 222.3 116.53 222.3 115.84 222.3 115.48 222.3 115.15 221.97 114.79 221.97 114.44 221.97 114.1 221.97 113.75 221.97 113.39 221.61 113.06 221.61 112.7 221.61 112.37 221.61 111.65 221.97 111.32 221.97 110.63 221.97 110.27 222.3 109.58 222.3 109.22 222.66 108.53 222.66 108.17 223.02 107.84 223.02 107.48 223.02 107.12 223.02 106.79 223.35 106.43 223.35 106.1 223.71 105.74 223.71 105.39 224.04 105.05 224.4 104.7 224.76 104.34 225.09 104.01 224.76 103.65 224.76 103.65 224.4 103.32 224.4 103.32 224.04 102.96 224.04 102.63 224.04 102.63 223.71 102.27 223.71 102.27 223.35 101.91 223.35 101.58 223.35 101.58 223.02 101.22 223.02 100.86 222.66 100.53 222.66 100.17 222.3 99.84 222.3 99.48 221.97 99.12 221.97 98.79 221.97 98.79 221.61 98.43 221.61 98.1 221.61 97.74 221.61 97.74 221.28 97.38 221.28 97.05 221.28 97.05 220.92 96.69 220.92 96.33 220.56 96 220.56 95.64 220.23 95.31 220.23 94.95 220.23 94.6 219.87 94.26 219.87 93.91 219.87 93.57 219.87 93.57 219.54 93.22 219.54 92.86 219.54 92.86 219.18 92.53 219.18 92.53 218.83 92.17 218.83 92.17 218.49 92.17 218.14 91.84 218.14 91.84 217.78 91.84 217.42 91.48 217.42 91.48 217.09 91.12 217.09 91.12 216.73 90.79 216.37 90.79 216.04 90.43 216.04 90.43 215.68 90.1 215.68 90.1 215.32 89.74 215.32 89.74 214.99 89.38 214.99 89.05 214.99 89.05 214.63 88.69 214.63 88.36 214.63 88 214.63 87.64 214.63 87.64 214.3 87.31 214.3 86.95 214.3 86.59 214.3 86.26 214.3 85.9 214.3 85.9 213.94 85.57 213.94 85.21 213.94 84.85 213.94 84.52 213.94 84.16 213.94 83.83 213.94 83.5 213.94 83.5 214.3 83.14 214.3 82.79 214.3 82.45 214.3 82.1 214.3 81.76 214.3 81.41 214.3 81.05 214.3 80.72 214.3 80.36 214.3 80.03 214.63 80.03 214.99 79.67 214.99 79.67 215.32 79.31 215.32 79.31 215.68 78.98 215.68 78.98 216.04 78.62 216.04 78.26 216.04 77.93 216.04 77.93 215.68 77.57 215.68 77.24 215.68 76.88 215.32 76.52 215.32 76.52 214.99 76.19 214.99 75.83 214.63 75.5 214.3 75.14 213.94 74.78 213.94 74.78 213.58 74.45 213.58 74.45 213.25 74.09 213.25 74.09 212.89 73.76 212.89 73.4 212.56 73.04 212.56 73.04 212.2 72.71 212.2 72.71 211.84 72.35 211.84 72.35 211.51 72.02 211.51 71.66 211.15 71.66 210.8 71.31 210.8 71.31 210.46 70.97 210.46 70.97 210.11 70.62 210.11 70.62 209.77 70.26 209.77 70.26 209.42 69.93 209.42 69.57 209.08 69.24 209.08 68.88 209.08 68.55 209.08 68.55 208.73 68.19 208.73 67.83 208.73 67.5 208.37 67.14 208.37 66.78 208.37 66.78 208.04 66.45 208.04 66.09 208.04 65.76 207.68 65.4 207.68 65.04 207.32 64.71 207.32 64.71 206.99 64.35 206.99 64.02 206.63 63.66 206.63 63.66 206.3 63.3 206.3 63.3 205.94 62.97 205.94 62.97 205.58 62.61 205.58 62.61 205.25 62.28 204.89 62.28 204.56 61.92 204.2 61.92 203.84 61.56 203.51 61.56 203.15 61.23 202.82 61.23 202.46 61.23 202.1 60.87 202.1 60.87 201.74 60.87 201.39 60.52 201.05 60.52 200.7 60.52 200.34 60.19 200.34 60.19 200.01 59.83 200.01 59.83 199.65 59.5 199.65 59.5 199.32 59.14 199.32 58.78 198.96 58.45 198.96 58.09 198.96 58.09 198.6 57.76 198.6 57.4 198.6 57.04 198.27 56.71 198.27 56.35 198.27 56.02 198.27 55.66 198.27 55.3 198.27 54.97 198.27 54.61 198.6 54.25 198.6 53.92 198.6 53.56 198.6 53.23 198.6 53.23 198.96 52.87 198.96 52.51 198.96 52.51 199.32 52.18 199.32 51.82 199.65 51.49 199.65 51.13 199.65 50.78 199.65 50.44 199.32 50.44 198.96 50.09 198.96 50.09 198.6 50.09 198.27 49.73 198.27 49.73 197.91 49.4 197.55 49.04 197.22 48.71 196.86 48.35 196.86 48.35 196.53 47.99 196.17 47.66 195.84 47.3 195.84 47.3 195.48 46.97 195.48 46.97 195.12 46.61 195.12 46.61 194.79 46.25 194.79 46.25 194.43 45.92 194.43 45.92 194.07 45.56 193.74 44.51 193.05 44.51 192.69 44.18 192.34 43.82 192.34 43.82 192 43.49 192 43.49 191.65 43.13 191.65 42.77 191.31 42.44 190.96 42.08 190.6 41.75 190.27 41.39 190.27 41.39 189.91 41.03 189.91 41.03 189.55 40.7 189.55 40.7 189.22 40.34 189.22 40.34 188.86 39.99 188.86 39.99 188.53 39.65 188.53 39.65 188.17 39.3 188.17 39.3 187.81 38.96 187.81 38.96 187.48 38.61 187.48 38.61 187.12 38.25 187.12 38.25 186.79 37.92 186.79 37.92 186.43 37.56 186.07 37.2 185.71 37.2 185.35 36.87 185.35 36.87 185.02 36.51 185.02 36.51 184.66 36.18 184.33 35.82 183.97 35.82 183.62 35.49 183.62 35.49 183.28 35.13 183.28 35.13 182.93 34.77 182.93 34.77 182.59 34.77 182.24 34.44 182.24 34.44 181.88 34.08 181.88 34.08 181.55 33.72 181.55 33.72 181.19 33.39 181.19 33.39 180.83 33.03 180.83 33.03 180.5 32.7 180.5 32.7 180.14 32.34 179.81 31.98 179.81 31.98 179.45 31.65 179.45 31.65 179.09 31.29 179.09 31.29 178.76 30.93 178.76 30.93 178.4 30.6 178.4 30.24 178.07 29.91 177.71 29.55 177.71 29.55 177.35 29.22 177.35 28.87 177.02 28.51 177.02 28.51 176.66 28.18 176.66 27.84 176.66 27.84 176.33 27.49 176.33 27.15 175.97 26.8 175.97 26.44 175.97 26.44 175.61 26.11 175.61 25.75 175.28 25.42 175.28 25.06 174.92 24.7 174.92 24.37 174.59 24.01 174.59 24.01 174.23 23.65 174.23 23.32 174.23 23.32 173.87 22.96 173.87 22.96 173.54 22.63 173.54 22.63 173.18 22.27 173.18 21.94 172.83 21.58 172.49 21.22 172.14 20.89 172.14 20.89 171.8 20.53 171.8 20.17 171.45 19.84 171.45 19.48 171.45 19.15 171.45 18.79 171.45 18.43 171.45 18.1 171.45 17.74 171.45 17.39 171.45 17.39 171.8 17.05 171.8 16.7 171.8 16.36 171.8 16.01 171.8 15.65 171.8 15.32 171.8 14.96 171.8 14.63 171.8 14.27 171.8 13.91 171.8 13.58 171.8 13.22 171.8 12.89 171.8 12.53 171.8 12.17 171.8 12.17 171.45 11.84 171.45 11.48 171.45 11.15 171.45 10.79 171.45 10.79 171.09 10.43 171.09 10.1 171.09 9.74 171.09 9.74 170.76 9.38 170.76 9.05 170.76 8.69 170.76 8.69 170.4 8.36 170.4 8 170.4 7.64 170.4 7.31 170.04 6.95 170.04 6.62 170.04 6.27 170.04 5.91 170.04 5.58 170.04 5.22 170.04 4.86 169.68 4.53 169.68 4.17 169.68 3.84 169.68 3.48 169.68 3.15 169.68 2.79 169.68 2.43 169.68 2.1 169.68 1.74 169.68 1.38 169.68 1.38 169.35 1.05 169.35 0.69 169.35 0.36 169.35 0 169.35 0.36 168.99 0.69 168.99 1.05 168.63 1.38 168.63 1.74 168.3 2.1 168.3 2.43 168.3 2.79 167.94 3.15 167.94 3.48 167.94 4.17 167.58 4.53 167.58 4.86 167.58 5.22 167.25 5.58 167.25 5.91 166.89 6.27 166.89 6.95 166.56 7.31 166.56 7.64 166.2 8 166.2 8.36 166.2 8.69 166.2 9.05 165.84 9.38 165.84 9.74 165.51 9.74 165.15 10.1 164.82 10.1 164.46 9.74 163.77 9.74 163.42 9.38 163.06 9.38 162.37 9.38 162.04 9.38 161.68 9.74 161.35 9.74 160.99 10.1 160.99 10.43 160.63 10.79 160.63 11.15 160.63 11.48 160.63 11.84 160.63 12.53 160.63 12.89 160.63 13.22 160.63 13.58 160.63 13.91 160.63 14.27 160.3 14.63 160.3 14.96 160.3 15.32 159.94 15.65 159.94 16.36 159.58 16.7 159.58 17.39 159.25 17.74 158.89 18.43 158.89 18.79 158.56 19.15 158.2 19.48 157.84 19.84 157.51 20.17 157.15 20.53 156.46 20.89 156.1 20.89 155.41 21.22 155.08 21.58 154.36 21.58 154.01 21.58 153.32 21.58 152.96 21.94 152.6 21.94 152.27 21.94 151.91 22.27 151.58 22.63 150.86 22.96 150.53 22.96 150.17 23.32 149.84 23.65 149.48 24.01 149.12 24.37 148.79 24.7 148.43 24.7 148.07 25.06 148.07 25.42 147.74 25.75 147.38 26.11 147.05 26.44 147.05 27.15 146.69 27.49 146.33 27.84 146 28.18 146 28.51 145.64 28.87 145.64 29.22 145.31 29.55 145.31 30.24 145.31 30.6 144.96 30.93 144.96 31.29 144.6 31.65 144.6 31.98 144.27 32.7 144.27 33.03 143.91 33.39 143.91 33.72 143.58 34.44 143.58 34.77 143.22 35.13 143.22 35.49 142.86 35.82 142.86 36.18 142.86 36.51 142.53 36.87 142.53 37.2 142.53 37.56 142.17 37.92 142.17 38.25 142.17 38.61 142.17 38.96 142.17 39.3 142.17 39.65 142.17 39.99 142.17 40.34 142.17 40.7 142.53 41.03 142.53 41.39 142.86 41.75 143.22 42.44 143.58 42.77 143.58 43.13 143.91 43.49 143.91 43.82 143.91 44.18 143.91 44.87 143.91 45.23 143.58 45.92 143.22 46.25 142.86 46.61 142.86 46.61 142.53 46.97 142.53 47.3 142.17 47.66 142.17 47.99 141.84 48.35 141.84 48.71 141.48 49.04 141.48 49.4 141.48 49.73 141.12 50.09 141.12 50.44 141.12 50.78 141.12 51.13 141.12 51.49 140.79 51.82 140.79 52.18 140.79 52.18 140.43 52.51 140.43 52.87 140.1 53.23 139.74 53.56 139.38 53.92 139.05 53.92 138.69 54.25 138.33 54.25 137.97 54.61 137.97 54.61 137.61 54.61 137.28 54.61 136.92 54.97 136.59 54.97 136.24 54.97 135.88 55.3 135.55 55.3 134.86 55.3 134.5 55.66 133.81 56.02 133.81 56.35 133.45 56.71 133.09 57.04 132.76 57.4 132.76 57.76 132.4 58.09 132.07 58.45 132.07 58.78 131.35 59.14 131.02 59.14 130.66 59.5 129.97 59.5 129.61 59.83 128.92 59.83 128.56 60.19 127.87 60.19 127.54 60.19 126.85 60.52 126.49 60.52 125.8 60.87 125.45 60.87 124.76 61.23 124.4 61.23 123.71 61.56 123.35 61.56 123.02 61.56 122.66 61.92 122.33 61.92 121.94 62.28 121.58 62.28 121.25 62.28 120.89 62.61 120.56 62.61 120.2 62.61 119.87 62.61 119.51 62.61 119.15 62.61 118.82 62.61 118.46 62.61 118.11 62.61 117.77 62.61 117.42 62.61 117.08 62.61 116.73 62.28 116.37 62.28 116.04 62.28 115.68 62.28 115.35 61.92 114.99 61.92 114.63 61.92 113.94 61.92 113.58 61.92 113.25 61.92 112.89 61.56 112.56 61.56 112.2 61.56 111.84 61.23 111.51 60.87 111.51 60.87 111.15 60.52 110.82 60.19 110.46 60.19 110.1 59.83 109.77 59.5 109.77 59.5 109.41 59.14 108.72 59.14 108.36 59.5 108.03 59.83 108.03 60.19 108.03 60.19 107.34 60.19 106.98 60.19 106.63 60.19 106.29 60.19 105.91 60.52 105.22 60.87 104.86 61.23 104.53 61.56 104.53 61.92 104.53 62.28 104.53 62.61 104.17 62.97 104.17 63.66 103.84 64.02 103.84 64.35 103.48 64.71 102.79 64.71 102.43 64.71 102.1 64.71 101.38 64.71 101.05 64.71 100.36 64.71 99.64 64.71 99.31 64.71 98.6 64.71 97.91 64.71 97.57 64.71 96.86 65.04 96.53 65.04 95.84 65.4 95.48 65.4 95.12 65.76 94.79 66.09 94.43 66.09 94.07 66.45 93.74 66.78 93.74 66.78 93.38 67.14 93.05 67.5 93.05 67.83 92.69 68.19 92.36 68.55 92 68.88 92 69.24 92 69.57 91.64 69.93 91.64 70.26 91.31 70.97 91.31 71.31 90.95 71.66 90.95 72.02 90.59 72.35 89.88 72.71 89.54 72.71 89.19 72.71 88.86 72.71 88.5 72.71 88.14 72.71 87.81 72.71 87.45 72.71 87.12 72.71 86.76 72.71 86.4 72.35 86.07 72.35 85.71 72.35 85.35 72.35 85.02 72.35 84.33 72.35 83.97 72.35 83.28 72.35 82.92 72.35 82.23 72.35 81.87 72.35 81.54 72.35 80.85 72.35 80.49 72.35 80.14 72.35 79.45 72.35 79.09 72.35 78.76 72.35 78.07 72.35 77.71 72.35 77.35 72.71 76.66 72.71 76.33 72.71 75.61 72.71 75.28 72.71 74.59 72.71 73.87 72.71 73.51 72.71 72.82 72.71 72.46 72.71 71.77 72.71 71.42 72.71 70.73 72.71 70.37 72.71 69.68 72.35 69.35 72.35 68.63 72.35 67.94 72.35 67.61 72.35 66.89 72.35 66.2 72.35 65.84 72.35 65.15 72.71 64.82 72.71 64.46 72.71 64.1 72.71 63.77 72.71 63.41 73.04 63.41 73.04 63.08 73.04 62.72 73.4 62.36 73.4 62.03 73.76 61.67 73.76 61.34 73.76 60.98 74.09 60.98 74.09 60.63 74.45 60.29 74.45 59.94 74.78 59.94 74.78 59.58 75.14 59.25 75.14 58.89 75.5 58.89 75.83 58.56 75.83 58.17 76.19 58.17 76.52 57.84 76.52 57.48 76.88 57.48 77.24 57.12 77.24 56.79 77.57 56.43 77.57 56.1 77.57 55.38 77.57 55.05 77.57 54.69 77.57 54.36 77.57 53.64 77.57 53.31 77.57 52.95 77.57 52.62 77.57 51.91 77.24 51.57 77.24 51.22 77.24 50.86 77.24 50.17 76.88 49.84 76.88 49.12 76.88 48.79 76.52 48.1 76.52 47.74 76.52 47.38 76.19 46.69 76.19 46.36 76.19 45.64 75.83 45.31 75.83 44.59 75.5 44.26 75.5 43.9 75.5 43.21 75.14 42.85 75.14 42.52 75.14 42.14 74.78 41.81 74.78 41.45 74.78 41.12 74.78 40.76 74.45 40.4 74.45 40.07 74.45 39.71 74.45 39.38 74.45 39.02 74.09 38.66 74.09 38.33 74.09 37.97 74.09 37.61 73.76 37.28 73.76 36.92 73.76 36.59 73.76 36.23 73.4 35.87 73.4 35.54 73.4 35.18 73.4 34.85 73.04 34.85 73.04 34.49 73.04 34.13 73.04 33.8 72.71 33.45 72.71 33.11 72.71 32.76 72.71 32.4 72.35 32.07 72.35 31.71 72.35 31.38 72.35 31.02 72.02 31.02 72.02 30.66 72.02 30.33 72.02 29.97 72.02 29.61 71.66 29.28 71.66 28.92 71.66 28.59 71.66 27.87 71.31 27.54 71.31 26.85 71.31 26.13 71.31 25.77 71.31 25.08 71.31 24.39 71.31 24.04 71.66 23.68 71.66 23.35 71.66 22.66 71.66 22.3 72.02 21.94 72.02 21.61 72.35 20.89 72.35 20.56 72.71 20.2 72.71 19.87 73.04 19.15 73.04 18.82 73.4 18.46 73.76 17.77 73.76 17.41 73.76 17.08 74.09 17.08 74.09 16.72 74.09 16.36 74.45 16.03 74.45 15.67 74.78 15.34 74.78 14.63 74.78 14.29 74.78 13.6 74.78 12.89 74.78 12.56 74.45 12.2 74.09 11.51 74.09 11.15 74.09 10.82 73.76 10.46 73.76 10.1 73.76 9.74 73.76 9.38 73.76 9.05 73.76 8.69 73.76 8.36 73.4 8 73.4 7.64 73.4 7.31 73.4 6.95 73.76 6.62 73.76 6.26 73.76 5.91 73.76 5.57 73.76 5.22 73.76 4.86 73.76 4.17 73.76 3.84 73.76 3.48 74.09 3.15 74.09 2.79 74.45 2.43 74.45 2.1 74.78 1.74 75.14 1.38 75.5 1.05 75.83 0.69 76.19 0.36 76.88 0 77.24 0.36 77.93 2.1 78.98 3.48 81.41 4.86 83.14 5.22 85.57 5.57 87.64 5.57 89.38 6.26 91.48 8.36 93.22 9.05 93.91 9.74 97.38 11.84 100.17 12.89 101.91 14.63 103.65 16.03 105.74 18.13 107.12 19.51 107.84 20.56 109.58 20.56 109.91 20.56 112.37 20.56 116.53 20.56 120.7 20.56 123.16 20.56 125.23 20.56 126.96 20.89 129.75 21.61 131.85 22.66 134.97 25.08 137.42 26.49 140.51 28.59 142.61 29.61 145.4 29.97 145.73 29.97 148.18 30.66 150.94 31.38 154.09 33.11 155.14 33.8 158.26 35.54 161.4 37.28 163.47 37.61 165.24 37.61 166.98 39.02 169.05 41.45 170.78 43.21 172.19 43.57 173.57 43.9 176.36 44.26 179.84 44.26 182.62 43.9 184.72 43.9 186.46 44.26 187.51 44.59 188.2 46.36 188.2 46.69 188.89 50.17 189.58 56.1 189.94 60.29 190.62 63.08 192.03 65.84 193.05 67.94 195.12 71.42 196.17 73.87 197.22 75.61 197.91 77.71 200.01 79.45 202.08 81.54 203.48 83.28 204.17 86.4 204.17 89.19 204.17 92.36 203.82 95.12 204.17 96.86 204.86 100.69 206.6 103.12 208.34 106.63 211.85 110.46 214.27 111.84 214.96 112.56 219.13 114.3 223.32 116.73 228.87 119.87 234.11 123.02 234.8 123.71 237.23 125.09 238.64 126.49 239.33 128.23 239.66 128.23"
        />
      </svg>
    </div>
  )
}

export default ElMaray