import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const DiezDeMayoSantaBarbara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 349.58 617.84"
      >
        <polygon
          fill={getColorByCarencias('DIEZ DE MAYO SANTA BARBARA', municipio.toUpperCase())}
          className="cls-1"
          points="73.2 42 73.5 40.6 73.8 39.4 74.3 38.3 75.2 37.4 75.8 37.1 76.4 36.8 76.6 36.8 77.5 35.1 78.7 35.4 79.5 34.5 79.8 34.3 80.4 33.1 80.7 32.5 80.7 30.2 81.2 29.4 81.5 29.1 82.1 29.1 82.4 29.4 82.7 29.4 83 29.6 83.8 29.9 84.7 29.9 85.3 29.6 86.1 28.8 86.7 27.6 88.1 27.6 89 27.3 89.9 27.3 90.7 27.9 91 27.9 91.9 30.2 91.9 34 91.6 38.3 91.9 38.9 92.2 39.1 92.7 39.1 93 39.1 93.9 39.1 94.7 39.1 94.7 40.3 94.7 40.9 94.5 41.7 93.9 42.6 93.6 43.2 93.3 44 93 44.6 93 45.2 92.7 45.8 92.4 46.6 91.9 47.5 91.9 48.1 91.9 48.9 91.9 49.5 92.2 49.5 93.9 48.6 95 48.1 95.6 47.5 96.5 46.9 97.3 46.3 98.2 45.8 98.5 45.8 99.6 44.6 101.1 42.9 101.6 42 101.9 41.4 102.2 40.6 103.6 39.7 103.6 40.3 103.9 40.9 104.2 41.7 104.5 42.9 104.8 43.5 105.1 44 105.1 45.2 104.8 46.6 103.9 49.8 103.9 50.1 104.2 50.4 105.1 50.4 106.8 50.4 109.1 49.8 109.9 49.8 110.5 49.8 111.9 49.2 112.8 50.1 114.2 50.6 114.5 50.9 114.8 50.9 116 50.9 116.8 50.6 117.4 49.8 118.3 48.4 118.8 46.9 119.7 45.8 120.9 44.9 122 44.3 123.4 44.3 123.7 44.3 124.6 44.3 125.2 44.6 125.7 45.2 126.3 44.6 127.5 44.3 128.3 44 129.2 43.7 130 43.5 130.3 43.2 130.6 42.9 130.9 42.6 130.9 41.7 130.9 40.3 130.9 39.7 131.2 37.7 131.2 36.8 131.5 35.4 131.5 35.1 132.1 34 133.2 32.8 134.1 31.9 136.1 30.8 135.8 30.5 136.7 29.6 137.5 29.1 138.1 28.8 139.2 28.5 139.8 28.2 140.4 27.9 142.1 27.3 142.7 27.1 143.3 26.8 144.1 26.2 144.7 25.9 146.1 24.8 146.7 24.5 147.5 24.2 148.7 23.6 149.6 23.3 149.8 23.3 150.7 23 151.6 23.9 151.9 24.2 152.4 24.8 152.4 25 152.7 25.3 153 26.2 154.5 28.8 154.7 29.4 155.3 30.2 155.3 30.8 155.6 31.9 155.9 32.8 156.2 33.4 156.5 35.1 156.7 36 157 36.6 157.3 37.1 154.5 39.7 156.5 42 159.1 40 159.6 40.6 159.9 41.2 160.8 42.6 161.1 42.9 161.9 42.3 163.7 41.2 164.5 43.2 168.5 40.6 172.2 38.6 174 37.4 174.6 38.3 174.8 38.3 175.4 38.9 176 39.4 176.6 39.7 176.6 39.4 176.9 38.9 176.9 38.3 178 39.4 179.1 40.3 180 40.9 180.6 41.7 180.9 42.3 181.1 43.2 181.5 43.7 181.5 44 181.5 44.6 181.1 46.3 180.9 46.9 180.9 47.8 180.9 48.9 180.6 50.6 182.9 49.8 185.7 47.5 188.9 43.5 188.9 43.2 190.1 39.1 190.4 39.1 190.9 39.4 191.5 39.4 191.8 39.7 192.4 40 192.6 40.6 192.9 40.9 193.8 41.7 192.9 42.6 192.9 43.5 192.4 44.3 192.1 45.2 191.8 46.3 191.5 47.5 191.2 49.2 191.2 50.9 192.1 51.2 193.2 51.5 194.1 52.1 192.9 54.4 193.2 54.4 193.5 54.7 194.1 55.3 194.6 55.5 194.1 57.3 193.8 57.6 192.9 59 192.1 59.3 189.2 59.6 188.9 60.1 188.6 61.9 188.6 62.7 188.6 63.6 188.3 64.4 188.3 64.7 188.3 65.3 188 65.9 187.5 66.7 187.2 67 186.9 67.9 186.6 68.5 186.6 69 186.6 69.6 186.3 70.5 186.6 70.8 186.6 71.3 186.9 72.5 186.9 73.1 186.9 72.5 186.6 72.2 186.3 71.6 186.1 71.6 185.7 71.9 185.5 72.2 185.5 72.8 183.7 71.9 183.2 71.6 178.9 69.3 177.7 69.3 176.9 69.3 174.3 69.3 170.8 71.6 168 74.5 165.4 78.8 162.5 81.4 161.3 87.8 161.6 92.6 160.5 97.5 160.2 99.5 158.2 102.7 157 103.9 153.6 107.9 149.6 111.3 149.3 112.2 148.1 115.4 146.7 120.8 145.6 122.3 145.3 122.5 144.4 124 144.1 124.3 143.8 125.1 143.8 125.4 144.1 126.3 144.4 126.3 144.7 126.6 144.7 126.9 144.7 127.2 145 127.2 145 127.4 145.3 127.4 145.3 127.7 145.3 128 145.6 128 145.6 128.3 145.6 128.6 145.6 128.9 145.6 129.7 145.6 130 145.6 130.6 145.3 130.9 145.3 131.2 145.3 131.5 145.3 131.8 145.3 132.3 145.3 132.6 145.3 132.9 145 133.8 144.7 134.1 144.7 134.3 144.7 134.6 144.4 135.5 144.1 135.8 144.1 136.1 144.1 136.4 143.8 136.6 143.8 136.9 143.8 137.2 143.8 137.5 143.8 138.1 143.8 138.7 143.8 139 143.8 139.2 143.8 139.5 143.5 139.8 143.5 140.1 143.3 141 143 141.3 143 141.5 143 142.1 143 142.4 143 143 143 143.6 143 143.8 143.3 144.7 143.3 145 143.3 145.3 143.3 145.6 143.3 145.9 143.3 146.1 143.3 146.4 143.3 146.7 143 146.7 143 147 143 147.3 142.7 147.6 142.7 147.9 142.4 148.2 142.1 148.4 141.8 148.4 141.2 149 141 149.3 140.7 149.6 140.7 150.2 140.7 150.4 140.7 151 140.7 151.6 140.7 151.9 140.7 152.2 140.7 152.8 140.7 153.1 140.7 153.3 140.7 153.6 140.7 153.9 140.7 154.2 140.7 154.5 140.7 154.8 140.7 155.4 140.7 155.6 140.7 155.9 140.4 156.2 140.4 156.5 139.8 156.8 139.5 156.8 139.2 156.8 139.2 157.1 138.7 157.1 138.4 157.4 138.1 157.4 137.8 157.4 137.5 157.4 137.2 157.6 136.9 157.6 136.4 157.6 136.1 157.6 135.8 157.6 131.8 157.6 129.5 157.6 126.3 157.9 120.9 158.5 120.6 158.5 116.3 159.4 115.1 159.6 112.8 162.5 109.7 165.4 105.9 170 105.9 170.6 102.2 179.2 97 184.4 86.1 188.4 79.5 193.6 78.1 193.9 76.6 194.2 75.8 194.5 74.9 194.8 74.3 194.8 74.1 194.5 73.2 194.2 73.2 193.9 73.5 193.9 73.5 193.6 73.8 193.6 74.1 193.6 74.3 193.6 74.6 193.3 74.9 193.3 75.2 193.3 75.5 193 75.5 192.2 75.5 191.9 75.5 191.6 75.5 191.3 75.5 191 75.8 191 75.8 190.4 75.8 189.6 75.8 189 75.8 188.7 75.5 188.1 75.5 187.3 75.5 186.4 75.2 185.8 75.5 185.3 75.5 185 75.5 184.7 75.8 184.1 75.8 183.5 76.1 183.5 76.1 182.7 76.1 181.8 76.4 181.2 76.1 180.7 76.1 180.1 75.5 179.2 75.8 178.6 76.1 178.1 76.1 177.8 76.4 177.8 77.2 176.9 77.2 176.6 77.5 175.7 78.1 173.5 78.4 172.9 78.7 172.3 78.7 172 78.7 171.7 78.9 170.9 78.9 170.3 78.9 170 78.9 169.4 78.9 168.9 78.9 168 78.9 166.3 78.9 165.7 77.8 164.5 77.2 164.2 76.6 163.9 76.1 163.7 76.1 163.4 76.4 163.4 76.4 163.1 76.4 162.8 76.6 162.5 76.9 161.7 77.2 161.4 77.5 161.1 77.8 160.8 78.1 160.5 78.4 160.2 78.7 159.6 78.9 159.1 79.2 158.8 79.5 158.2 80.1 157.1 80.4 156.8 80.7 156.2 81 155.9 81.2 155.9 81.2 155.6 81.5 155.4 81.5 154.8 81.8 154.2 81.2 153.9 81 153.9 80.1 153.6 79.8 153.6 79.5 153.9 79.5 153.6 79.5 153.3 79.5 153.1 79.2 152.8 79.2 152.5 78.9 151.9 78.9 151.6 78.9 151.3 78.7 151 78.7 151.3 78.4 151.3 78.1 151.3 77.8 151.3 77.5 151.3 77.2 151.3 76.6 151.3 76.4 151.3 76.1 151.3 75.8 151.3 75.5 151.3 75.5 151.6 75.2 151.6 75.2 151.9 75.2 152.2 75.2 152.5 75.2 152.8 75.5 152.8 75.5 153.1 75.8 153.3 75.8 153.6 76.1 153.6 76.1 153.9 75.5 153.9 74.9 153.9 73.8 153.6 73.2 153.3 72.9 153.3 72.6 153.3 72.6 153.1 72.6 152.2 72.6 151.9 72.3 151.6 72.6 151.6 72.3 151.6 72 151.3 71.8 151 71.5 150.7 71.2 150.4 70.9 150.4 70.3 150.4 70.3 150.2 69.7 149.9 69.5 149.9 69.2 149.9 69.2 148.7 68.9 148.2 68.9 147.3 68.9 146.7 69.2 146.4 69.5 145.9 69.5 145.6 69.5 145 69.2 143.6 68 142.7 68 142.4 68 142.1 68 141.8 68 141.3 68.3 140.7 68.6 140.1 68.6 139.8 68.9 139.5 68.9 139.2 68.9 138.7 68.3 138.4 68 138.1 67.7 137.8 67.2 137.5 66.6 137.2 66 136.9 65.4 136.6 65.2 136.1 64.9 135.5 64.6 134.9 64.3 134.6 64 134.1 64 133.5 63.7 133.5 63.4 132 63.1 130.9 62.3 128 62.3 127.7 62.3 126.9 62 126.3 61.4 124.5 60 124.5 59.7 124.3 59.7 124 59.4 124 58.8 124 58.5 124 58 124 57.7 124.3 57.4 124.3 57.1 124 56.8 124 56.5 124 56 124 56 124.3 55.7 124.3 55.7 124.5 55.4 124.5 54.8 124.8 54.3 124.8 54 125.1 53.1 125.4 52.8 125.4 52 125.4 51.4 125.7 50.8 125.7 50.5 125.4 50.2 125.4 50 125.4 49.7 125.4 49.1 125.4 48.8 125.7 48.5 126 48.2 126 47.9 126 47.7 126 47.1 126.3 46.8 126.6 46.5 127.2 46.5 127.4 45.9 127.4 45.6 127.7 45.4 127.7 45.1 127.7 44.5 127.7 44.5 128 43.9 128.3 43.6 128.6 42.8 129.2 42.2 129.5 41.6 129.7 41.3 129.7 41 129.7 40.8 129.7 40.2 129.7 39.9 130 39.6 130 39 130.3 39 131.2 39 131.5 39 131.8 39 132.3 38.8 132.6 38.2 132.9 37.9 133.2 37.3 133.8 37 134.3 36.5 134.6 36.2 134.6 35.9 134.9 35.3 135.2 34.7 135.2 33.9 135.5 33.6 135.8 32.7 135.8 32.4 135.8 31.9 135.8 31.6 135.5 31 135.2 30.7 134.6 30.4 134.1 30.4 132.9 30.4 132.3 30.7 130.9 30.1 129.5 30.1 129.2 30.1 128.9 29.6 128.3 29.3 128.3 28.7 128.3 28.1 128 27.5 127.4 27.5 127.2 27.8 126.6 28.1 126 28.4 125.7 28.7 125.4 29 125.1 29.3 124.8 29.3 124.5 29.6 124.3 29.8 123.7 30.1 123.4 30.1 123.1 30.4 122.8 31 121.4 31.3 121.1 31.3 120.5 31.3 119.7 31.3 119.4 31.3 118.8 31.6 118.5 31.9 117.9 31.9 117.4 31.9 117.1 31.9 116.8 31.9 116.5 31.9 115.9 31.6 115.4 31 114.8 30.7 114.5 30.4 114.2 30.4 113.6 30.1 112.5 30.1 111.6 30.1 111 30.1 110.2 30.1 109.9 30.1 109.6 30.1 109.3 30.4 109 30.4 108.8 31 108.4 31.6 107.9 32.7 107.3 33 107.3 33.3 107.3 33.6 107.3 33.9 107.3 34.2 107.6 34.4 107.6 34.7 107.3 34.7 107 34.7 105.6 34.7 105.3 34.7 105 34.7 104.7 34.7 104.2 35 103.6 35 103 35 102.1 35.3 101.8 35.3 101.6 35 101.3 35 101 34.7 101 34.4 101 34.4 100.7 34.7 100.4 34.7 100.1 35.6 99 35.9 99 36.2 98.7 36.5 98.4 36.7 97.8 36.7 96.7 36.7 95.8 36.7 95.2 36.7 94.7 37 93.8 37 93.2 37 92.9 36.5 92.9 36.5 91.5 36.5 91.2 37.9 90.3 37.9 90.1 37.9 89.8 36.7 88.3 36.5 88 33.9 84.3 33.9 84 33 82.9 31 80.3 29.8 78.5 30.1 78.3 30.4 78 30.1 77.7 29.8 77.4 29.6 77.4 29.3 77.7 29 77.7 28.7 77.4 28.4 77.7 27.8 78.3 27.3 78.3 27.3 78.5 27 78.5 26.7 78.3 26.4 78.3 26.1 78 25.5 78 25 77.7 24.7 77.4 24.4 77.4 24.1 77.1 23.8 77.1 23.5 76.8 23.2 76.8 23 76.5 23 76.2 22.7 76 22.7 75.7 22.7 75.4 22.4 75.1 22.4 74.8 22.4 74.5 22.1 74.2 22.1 73.9 21.8 73.9 21.8 73.7 21.2 73.7 20.9 73.4 20.7 73.1 20.4 73.1 20.1 72.8 19.8 72.5 19.2 72.2 18.9 71.9 18.6 71.6 18.4 71.6 18.4 71.3 18.1 71.1 17.5 70.8 17.2 70.8 16.6 70.5 16.1 70.5 15.5 70.2 15.2 70.2 14.9 70.5 14.3 70.5 14 70.8 13.8 71.1 13.2 71.3 12.9 71.6 12.6 71.6 12 71.9 11.8 71.9 11.2 71.9 10.9 71.6 10.6 71.6 10.3 71.6 10.1 71.6 9.8 71.6 9.8 71.3 9.2 71.3 8.9 71.3 8.6 71.1 8.6 70.8 8.3 70.5 8.3 69.9 8.3 69.6 8.3 69.3 8.6 69 8.6 68.8 8.6 68.5 8.6 68.2 8.9 67.9 9.2 67.6 9.5 67.6 9.5 67.9 9.8 68.2 9.8 68.5 9.8 69 10.1 69 10.1 69.3 10.3 69.6 10.6 69.6 10.9 69.6 11.2 69.6 11.2 69.3 11.8 69 12.3 68.2 12.9 67.9 13.8 67.3 14.6 67 15.5 66.7 16.3 66.5 16.9 66.5 18.1 66.2 18.6 65.9 19.2 65.9 19.5 65.6 19.8 65.3 20.1 65 20.7 64.7 20.9 64.2 20.9 63.9 20.9 63.6 20.9 63.3 20.9 63 20.7 62.4 20.7 62.1 20.7 61.6 20.4 61.6 20.4 61 20.1 61 20.4 59.6 20.7 58.4 20.9 57.6 20.9 57 20.9 56.4 20.7 56.1 21.2 56.1 21.5 55.8 21.5 55.5 21.2 54.4 21.2 53.5 20.9 52.6 20.9 52.4 20.9 52.1 20.9 51.2 20.9 50.9 20.4 50.9 20.4 51.2 19.8 51.5 19.2 51.5 19.2 51.8 18.9 52.1 18.4 52.4 18.4 52.9 18.1 52.9 18.1 53.8 18.4 53.8 18.4 54.9 18.1 54.7 18.4 54.9 18.1 55.3 18.1 55.5 18.4 55.5 18.4 56.7 18.4 57.6 18.6 58.1 18.6 58.7 18.4 58.7 18.4 59.3 18.4 59.8 18.4 60.4 18.1 60.4 17.8 60.4 18.1 61.3 18.1 62.1 17.5 62.1 17.5 63 17.2 63 17.2 63.6 18.1 63.3 18.4 62.7 18.4 62.4 18.9 61.9 18.9 61.6 19.2 61.6 19.5 61.6 20.1 61.6 20.4 62.1 20.4 62.4 20.7 62.7 20.7 63.3 20.7 63.9 20.7 64.2 20.7 64.4 20.4 64.4 19.8 65 19.5 65.3 18.9 65.6 18.1 66.2 16.9 66.2 16.3 66.5 15.8 66.5 14.6 66.7 13.2 67.3 12 68.5 11.2 69.3 10.6 69.6 10.3 69.3 10.1 69 10.1 68.5 9.8 67.9 9.8 67.6 9.5 67.3 9.2 67.3 8.9 67.3 8.9 67.6 8.6 67.9 8.3 67.6 8 67.6 8 67.3 8.6 66.5 9.2 65.6 9.8 64.7 9.5 64.2 9.5 63.9 9.5 63.6 9.5 63.3 9.2 63.3 9.5 63.3 9.5 62.7 9.5 61.6 9.5 61.3 9.5 61 9.8 61 9.8 60.7 9.8 60.4 9.5 60.1 9.5 59.6 8.6 57.8 8.3 57 8 56.4 7.8 54.9 7.8 53.5 7.8 53.2 7.5 52.9 7.2 51.2 7.2 50.9 7.2 50.6 6.9 50.4 6.6 49.8 6.3 48.9 6 48.1 5.4 47.5 5.2 46.9 4.6 46.9 4.3 46.6 3.7 46.3 3.4 46 3.2 45.8 3.2 45.5 2.8 45.2 2.3 44.6 2 44.3 2 44 1.7 43.7 1.4 43.5 1.1 43.2 0.8 42.6 0.8 42.3 0.8 41.7 1.1 41.2 1.1 40.9 1.4 40.3 2 40 2.3 39.7 3.2 39.1 3.7 38.6 4 38.3 4.3 37.7 4.6 36.8 4.9 36.6 5.2 36.6 5.2 36.3 5.4 36 5.4 35.7 5.7 35.4 5.7 35.1 5.7 34.5 6 34 6.3 33.4 6.3 33.1 6.6 32.5 6.6 31.9 6.9 31.7 7.2 31.4 7.5 31.4 7.8 31.1 8 31.1 8.3 30.2 8.3 29.9 8.3 29.6 8 29.4 8 29.1 8 28.8 8 28.2 7.8 27.6 7.8 27.3 7.5 27.3 7.5 27.1 7.5 26.8 7.2 26.8 7.2 26.5 6.9 26.5 6.9 25.9 6.6 25.6 6.6 25.3 6.6 25 6.6 24.8 6.6 24.5 6.3 24.5 6.3 24.2 6 23.9 5.7 23.6 5.4 23 5.2 23 5.2 22.7 4.9 22.7 4.9 22.5 4.6 22.5 4.3 22.5 4 22.2 3.7 22.2 3.2 21.9 2.6 21.3 2.3 21 2 20.7 1.7 20.7 1.4 20.4 1.1 20.4 0.8 20.4 0.5 20.4 0.3 20.4 0 20.2 0 19.9 0.3 19.9 0.3 19.6 0.3 19.3 0.3 19 0.5 19 0.5 18.7 0.5 18.4 0.8 18.1 0.8 17.8 1.1 17.6 1.4 17.3 1.7 17.3 2 17.3 2 17 2.3 17 2.6 17 3.2 17 3.7 17 4 17 4.3 17 4.6 17 4.9 17.3 5.2 17.3 5.7 17 6 17 6.3 16.7 6.6 16.7 6.6 16.4 6.6 16.1 6.9 16.1 6.9 15.8 6.9 15.5 6.6 15.5 6.6 15.3 6.3 15 6.3 14.7 6.3 14.4 6.3 14.1 6.6 13.8 6.6 13.5 6.9 13.5 6.9 13.2 7.2 13.2 7.5 13 7.5 12.7 7.8 12.4 7.8 11.8 7.8 11.5 7.8 11.2 8 11.2 8 10.9 8 10.7 8.3 10.7 8.3 10.4 8.3 10.1 8.6 10.4 8.9 10.9 9.2 11.5 9.5 11.8 9.8 12.1 10.1 12.4 10.3 12.7 10.6 12.7 10.9 13 11.2 13.5 11.5 14.4 11.5 14.7 11.2 15.3 11.5 15.3 12.3 15.5 12.9 14.7 12.6 14.4 12.3 13.2 12.3 13 12.3 12.7 12.3 12.4 12.3 12.1 12.3 11.8 12.3 11.5 12 11.2 12 10.9 12 10.7 11.8 9.8 12 8.9 12 7.8 12 7.5 12.3 6.9 12.3 6.6 12.3 5.8 12.6 5.2 12.6 4.9 13.5 5.2 13.8 5.5 14 5.5 14.3 5.8 15.2 5.5 15.5 5.5 15.8 5.5 16.1 5.5 16.6 5.5 16.9 5.5 16.6 5.2 16.3 4.3 16.9 4.3 17.2 4 17.5 4 17.5 3.8 17.8 4.3 18.1 4.6 18.1 4.9 18.4 4.9 18.6 4.6 18.9 4.6 18.9 4.3 18.9 4 18.6 3.8 18.9 3.5 19.8 3.2 19.5 2.6 19.2 2 19.5 2 20.1 1.7 20.4 1.7 20.4 1.4 20.7 1.4 20.9 1.4 20.9 1.2 20.7 0.9 20.7 0.6 20.4 0.3 20.4 0 20.7 0 20.9 0 21.2 0.3 21.5 0.3 21.8 0.6 22.1 0.6 22.7 0.6 23 0.6 23.2 0.6 23.2 0.3 23.5 0.3 23.8 0.3 24.1 0.3 24.4 0.3 24.4 0 24.7 0 25 1.2 25.3 1.2 25.3 1.4 25.8 1.4 26.1 1.2 26.4 1.2 26.4 1.4 26.7 1.4 26.7 1.7 27.3 2.6 27.5 2.9 28.1 4.3 29 5.8 29.6 6.6 29.8 7.2 29.8 7.5 29.6 7.5 28.7 8.4 27.8 8.9 27.3 10.7 28.7 12.7 29.6 12.1 30.1 12.1 31.3 11.5 31.3 10.9 31.3 10.7 31.6 10.4 31.6 10.1 31.9 9.8 31.9 9.5 32.1 9.2 32.4 9.5 33.9 10.1 34.4 10.1 34.4 10.4 34.2 10.4 34.2 10.7 33.9 10.9 34.4 11.2 35.9 11.5 37.6 11.8 39.3 11.2 40.5 10.9 41.3 11.2 41.6 10.9 41.9 10.9 42.2 10.7 42.5 10.7 42.8 11.8 43.3 12.4 43.3 12.7 43.3 13 43.3 14.4 43.1 15 43.1 15.8 43.1 16.1 43.1 16.4 43.1 16.7 43.3 16.7 43.3 17 43.6 17.3 43.9 17.8 44.8 18.1 45.9 18.4 47.7 18.7 49.4 19 50 18.7 50.5 18.7 50.8 18.4 51.1 18.1 51.4 17.6 51.4 16.7 51.7 15.5 51.7 15 51.7 14.1 52.3 13.8 52.8 13.5 53.1 13.2 53.7 13.5 54.3 13.5 55.1 13.5 55.7 13.2 56.2 13 57.4 12.4 57.7 12.4 58 12.1 58.5 12.4 59.7 12.7 60.3 13 60.6 13 61.1 13.2 61.1 13.8 61.7 15 62 15.5 62.6 15.8 62.6 16.1 63.1 16.4 63.7 16.4 64.3 16.4 64.6 16.4 65.4 16.4 66 16.1 66.9 16.1 68 16.1 68.6 16.4 69.2 16.7 69.2 17.3 69.2 17.6 68.3 18.7 66.9 19.9 66.3 21 66 21.3 66 21.6 66 22.2 66 22.7 66.3 23.3 66.3 23.9 65.7 24.8 65.4 25.3 64.6 26.5 64.3 27.3 64 27.6 63.7 27.9 63.4 27.9 62.6 28.2 62 28.8 61.4 29.4 60.6 31.4 60 31.7 59.4 32.2 58.8 33.1 58.5 33.4 58.3 33.4 57.7 34 56.5 34.5 56.2 34.8 56.2 35.1 56.2 35.4 56.5 35.7 57.1 35.7 58.3 35.7 60.3 36 60.3 36.3 60.8 36.3 60.8 35.1 61.1 34.5 61.7 34.5 62 34.5 62 34.3 62 34 62.3 34 62.9 34 63.1 34 63.4 34 64.3 34 65.2 34.3 66 34.5 66.3 34.8 66.6 35.4 66.3 36 66.3 36.8 66 37.7 66 38.9 66 39.7 66 40 65.7 40 65.4 39.7 64.9 39.7 64 40.6 64.6 41.2 65.4 41.4 66 41.7 66.3 41.7 66.6 41.7 66.6 42 66.9 42.6 67.2 43.7 67.5 44 67.7 44.9 67.7 45.8 68 46 68.3 46.6 68.9 46.9 69.2 46.9 69.7 46.9 72.3 45.8 72.6 45.5 73.2 45.2 73.5 44.9 73.8 44.3 73.8 44 73.8 43.7 73.8 43.5 73.8 43.2 73.5 42.3 73.2 42"
        />
      </svg>
    </div>
  )
}

export default DiezDeMayoSantaBarbara