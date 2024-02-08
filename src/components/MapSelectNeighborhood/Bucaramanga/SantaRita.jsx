import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRita = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 173.3 235.9"
      >
        <polygon
          fill={getColorByCarencias('SANTA RITA', municipio.toUpperCase())}
          className="cls-1"
          points="164.4 123.7 164.7 124 165.2 124.9 166.1 126.6 166.7 127.2 167.8 129.5 169 130.9 169.6 132.1 169.8 133.2 170.4 134.4 170.1 135.8 169.8 136.7 169.8 137 169.6 137.9 169.3 138.5 168.7 139.6 168.4 140.8 168.1 142.5 167.8 144.5 167.5 146.2 167.5 147.7 168.4 149.1 169.3 150.6 169.8 151.4 170.7 152 171.6 152.3 172.7 152.9 173 152.9 173.3 153.7 173 154.6 172.7 155.5 172.1 156.3 171.3 158.1 170.4 159.2 169.6 160.7 169.3 161.2 168.4 162.1 167 163.8 166.1 165.6 164.9 167.9 164.1 169.9 162.6 171.3 161.8 172.2 161.2 173.3 160.3 175.1 159.2 177.1 158.9 177.7 158.9 178.3 158.9 178.8 158.9 179.7 159.2 180.8 159.5 182.3 159.8 183.7 159.8 184.3 159.5 184.9 159.2 185.5 158.6 186.3 157.7 187.5 157.5 188 156.9 188.6 156 189.2 155.7 189.5 155.2 189.8 154.6 189.8 153.4 190.4 152.8 190.9 152.3 191.5 151.7 192.1 151.1 192.7 150.8 193.5 150.5 194.1 150 196.4 149.7 197.6 149.1 198.7 148.2 200.2 145.6 202.8 144.8 203.6 144.2 204.2 143.9 204.8 143.6 205.7 142.8 205.1 142.5 204.8 142.2 204.5 141.6 203.9 141 203.6 140.2 203.3 139.6 203.3 138.8 203.3 137.6 203.6 136.7 203.9 135.9 203.9 135.6 203.9 134.7 203.6 134.7 203.3 134.4 203 134.1 202.5 134.1 201.9 133.9 201 133.6 200.5 133.3 199.9 132.7 199.9 132.4 199.9 131.8 199.6 130.7 199.3 129.3 198.7 128.1 198.4 126.4 197.9 125.5 197.9 123.5 197 122.9 196.7 122.6 196.7 121.5 195.6 120.6 194.7 120 193.8 119.5 193 118.6 192.4 117.7 191.2 117.2 190.9 116 190.7 114.9 190.4 114.6 190.4 112 190.1 111.1 189.8 110.2 189.8 108.5 189.5 106.5 189.5 105.3 189.2 105.1 188.9 104.5 188.6 103.9 188 103 187.2 101.6 186.3 101.3 186 100.5 185.7 99.6 185.2 97.6 184 96.4 183.1 95.3 181.7 94.7 181.1 93.3 179.4 92.4 178.3 91.8 177.7 90.7 176.2 90.1 175.1 89.8 174.2 89.2 172.5 89.2 171.9 89 171.9 88.4 171 87.8 170.5 86.9 169.6 85.8 168.4 84.6 167.9 83.5 167 82.6 167 81.5 166.7 80.6 166.7 78 166.7 76.9 166.7 76.3 167 76.9 169.3 77.1 170.2 78 171.6 78 172.2 79.2 174.5 80.3 177.7 80.6 179.1 81.2 180.3 81.5 182.9 81.5 183.4 81.5 184 81.5 185.5 81.2 186.6 81.2 187.8 80.9 188.3 80.9 189.2 80.9 189.8 80.6 190.4 80.3 190.9 80 191.8 79.2 193.3 78.6 194.1 78.3 195 77.7 196.1 76.6 198.7 76 200.5 75.7 201.3 75.1 202.5 74 204.5 73.4 205.1 72.8 206.2 72 206.8 71.1 207.4 71.1 207.7 70.5 208 69.7 208.3 68.5 208.8 67.4 209.4 66.2 210 64.8 211.1 63.6 212 62.2 212.9 61.3 213.4 60.4 214.3 59.9 215.2 59 216.9 57.8 218.3 57.6 219.2 57 220.4 56.1 221.8 55.8 222.9 55.5 224.7 55.3 225.8 55 227 53.8 228.1 53.2 229 52.4 230.2 51.2 231.6 50.6 232.2 49.8 232.8 48.6 233.3 47.5 233.9 46.6 234.2 45.2 235.1 44.6 235.4 43.4 235.9 43.4 235.6 43.2 235.1 42.6 234.2 42.3 233.6 42 232.8 41.7 231.9 41.4 231.9 41.1 231 40.6 230.5 40.3 229.6 40.3 229 40.3 228.4 40.3 227.6 40.3 227 40.6 226.1 40.9 225.2 40.9 224.7 40.9 224.1 40.9 222.7 40.6 221.8 40.6 221.2 40.6 220.4 40.6 218.3 40.6 217.2 40.6 216 40.9 214.9 40.9 213.4 40.9 212.9 40.9 211.4 40.9 210.8 40.6 210 39.7 208.3 39.4 207.1 38.8 206.2 37.4 203.3 36.8 202.8 35.7 201 35.1 200.2 34.5 199.6 34.2 199 33.9 197.6 34.2 197.3 35.4 196.1 36.5 195.3 37.4 194.1 38.3 193.3 39.4 191.2 40 190.4 40.3 189.8 40.3 189.2 40.3 188.9 40 188 39.7 187.5 39.7 186.9 39.4 186 39.1 185.2 38.8 184 38.8 182.6 38.8 182.3 38.8 181.7 39.1 181.1 40.6 179.7 41.4 179.1 42.9 178.5 41.7 177.7 41.4 177.4 40.9 177.1 40.6 176.5 40 176.2 40 175.9 40.9 173.6 41.7 171.9 42 171.3 42.3 170.7 42.9 169.6 42.9 168.1 42.9 166.7 42 167.3 40.6 167.6 39.4 167.9 38.3 167.9 36.8 167.9 35.1 167.3 33.9 167 33.4 166.7 31.9 166.4 31.9 166.1 31.1 165.8 29.9 165 28.8 164.4 27.3 164.1 24.4 163.8 23 163.5 19.8 162.7 18.7 162.1 16.4 162.1 14.4 162.4 12.3 162.4 10.6 162.7 10.3 163 10 160.9 9.5 159.5 9.5 158.6 9.5 157.8 9.5 156.6 9.5 155.5 9.5 154.6 9.7 152.9 9.7 151.7 9.7 150.9 9.5 150 9.2 149.1 8.9 148.8 8 148 6.9 147.1 6.3 146.5 6 146.2 6 145.7 6 145.1 6 144.2 6.3 143.1 6.3 142.2 6.3 141.3 6 140.2 6 139.6 5.7 138.2 5.7 137.3 5.7 136.4 6.3 136.4 7.7 136.1 9.2 135.3 10 134.7 10.6 133.8 11.2 133.2 11.8 132.1 12.6 130.4 13.2 130.9 13.5 130.1 13.5 129.2 13.5 127.8 13.8 126.6 13.8 125.8 13.8 124.9 13.8 123.7 13.8 123.4 14.1 123.1 14.1 122.9 14.4 122.9 14.9 122.6 16.1 122.3 16.4 122.3 17.2 122 18.4 121.7 19.3 121.7 21 122 22.4 121.4 23.6 121.4 24.7 120.8 25.9 120.6 27.3 120 27.9 119.7 27 118.5 26.7 118.2 26.5 118 25.9 117.4 25 117.1 24.1 116.5 23 115.9 22.1 115.4 21.6 115.1 19.8 113.9 18.4 113.1 16.9 111.9 15.5 110.8 14.9 110.5 13.2 109.3 11.8 108.2 10.9 107.6 9.7 107 7.2 105.9 6 105.3 5.1 104.7 4.6 104.1 3.7 103.6 3.1 103.3 2.3 102.7 1.1 101.8 0.3 101.3 0 101 0.3 101 1.1 100.7 1.7 100.1 3.1 99.2 4 98.9 4.3 98.4 4.9 97.8 5.4 97.2 6 95.5 6.6 94 7.2 92 7.7 91.1 8.3 90 8.6 88.8 8.9 88 9.7 86.8 10.3 85.7 10.3 84.8 10.9 83.6 11.5 81.3 11.8 80.5 12.1 78.5 14.4 75.3 14.6 75 14.6 74.4 15.2 73.6 15.5 73 16.1 72.7 16.7 72.1 19.3 70.1 20.7 69.2 22.4 68.1 23.6 67.5 25 66.9 27 66 29 65.5 30.5 64.9 30.8 64.6 31.6 64.3 33.7 63.4 34.5 62.9 35.4 62.9 35.7 62.6 37.4 61.7 38.3 61.1 38.5 61.1 39.4 60.6 40 60.3 40.9 60 44.3 59.1 46 58.8 47.8 58.8 50.4 58.6 52.4 59.1 54.1 59.4 55 59.4 55.3 59.7 57.6 59.4 59.3 59.4 61.9 59.1 63.3 59.4 65.3 58.8 65.3 58.3 65 57.4 65 56.8 65 56.5 65 55.1 65 54.2 65.3 53.4 65.6 52.2 66.2 51.4 66.8 49.6 67.4 48.8 67.9 48.2 69.1 47.3 69.9 46.7 70.5 46.2 71.4 45.6 73.1 44.7 75.1 43.6 76.3 42.7 77.4 42.1 78 41.8 79.2 41.2 80 41 81.2 40.4 82.3 40.1 83.8 39.8 86.1 39.2 88.4 38.7 90.7 37.8 91.5 37.2 92.4 36.1 93.5 34.3 94.7 32.9 96.1 30 96.4 29.1 97.3 27.4 97.9 26.8 98.4 25.7 99.3 25.1 100.5 23.9 101.6 22.8 103 21.6 104.5 20.5 104.8 20.2 106.2 19 109.4 16.4 113.1 13.5 117.7 10.4 119.5 8.7 122.9 5.8 124.9 3.8 126.9 2.3 127.5 1.7 130.4 0 130.1 1.7 129 6.9 128.4 10.7 127.5 14.1 126.7 17 126.1 19.6 123.8 25.7 122.6 29.7 121.2 32.6 120.6 34.3 120.6 34.9 121.5 36.1 123.2 38.1 124.6 40.4 125.8 43 125.8 45.3 125.5 48.2 125.2 50.2 125.5 51.9 125.5 52.8 125.5 53.4 125.5 54.8 125.2 56 124.6 56.5 124.4 57.7 124.6 58.3 124.6 58.8 124.9 59.7 125.2 60.9 126.1 62 126.4 62.9 126.7 64 126.7 65.5 126.7 66.3 126.4 67.5 126.1 68.6 125.8 69.5 125.8 70.4 125.8 71.3 125.2 72.4 124.6 73.6 124.1 75.3 124.1 75.9 124.4 77.6 124.6 79 124.9 79.9 125.2 80.5 125.8 81.6 125.8 83.1 126.4 83.3 126.7 83.1 127.2 82.8 127.8 82.2 128.4 81.9 129 81.9 129.5 81.9 130.1 82.2 130.4 82.5 130.7 83.3 130.7 83.9 131 85.1 130.7 85.7 130.7 86.3 130.4 87.4 130.1 89.1 129.8 90.3 129.8 91.1 129.5 92 129.3 93.2 128.4 94.3 128.1 95.5 127.8 96 127.5 96.3 127.8 97.8 128.1 98.4 128.7 99.5 129.3 101 131 102.4 132.4 103.3 133.3 103.3 134.7 102.7 135.3 102.1 136.5 102.1 136.7 102.1 137.3 102.1 137.9 102.4 138.8 103 140.5 103.8 145.1 105.9 147.1 106.7 148.5 107.6 149.7 108.5 150.5 109 152 110.5 152.8 111.3 153.7 112.5 154 113.1 154.9 114.5 156.9 116.8 157.7 118 158.9 119.7 159.2 120 159.8 120.6 160.6 121.1 161.8 121.4 162.6 122.3 163.2 122.9 164.1 123.4 164.4 123.7"
        />
      </svg>
    </div>
  )
}

export default SantaRita