import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Monserrate = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 125 117.6"
      >
        <polygon
          fill={getColorByCarencias('MONSERRATE', municipio.toUpperCase())}
          className="cls-1"
          points="110.5 7.5 110.5 8.1 110.2 8.4 108.8 9.3 108.5 9.6 107.9 9.9 106.7 11.6 106.5 12.5 106.2 13.6 105.9 15.1 105.6 16 105 17.1 104.4 18 103.9 19.1 103.3 20.6 103 22 102.4 22.9 101.8 23.8 101 25.2 99.8 26.1 99.2 27.3 98.1 28.7 97.5 29.9 96.9 32.2 96.6 32.2 96 33.6 96.3 34.2 96.3 35.1 96.6 35.9 96.9 36.5 97.2 36.2 97.8 37.1 98.9 38 100.1 39.1 100.7 39.7 101 40.9 101.5 42.3 102.1 43.2 103 44.4 103.6 44.9 104.1 45.8 104.7 46.4 105.3 47.2 105.9 47.8 106.2 48.4 107 49.3 107.6 49.8 108.5 50.7 109.1 51.6 109.6 52.7 110.5 53.6 111.4 54.8 112.2 55.6 113.1 56.5 114 57.1 114.6 57.9 115.4 58.8 116.3 60 117.5 61.1 118.3 61.7 119.2 62.6 120.1 63.2 120.6 64 121.5 64.6 122.1 65.2 122.1 65.5 122.7 66.4 123.5 66.9 124.4 67.8 125 68.7 124.4 69.8 123.2 71.3 122.4 72.7 121.8 74.2 121.5 75.9 121.5 77.4 121.5 78.8 121.5 81.1 121.2 82.3 120.9 83.7 120.6 84.9 120.3 86.1 119.5 87.5 118.9 88.1 118.6 88.9 118.3 89.2 117.5 91 116.3 92.2 115.4 93.6 114.6 94.8 114.3 95.6 114.3 96.2 113.7 97.4 112.5 98.8 111.7 99.7 110.8 100.8 109.6 101.7 108.8 102.9 108.5 104 108.5 104.3 108.2 105.5 107.3 106.6 106.5 108.6 106.2 109.2 102.4 114.4 101.3 115.6 100.1 116.2 97.8 116.7 95.5 117.3 93.7 117.6 92.6 117.6 90.8 117.3 89.1 116.7 87.1 115.6 85.9 115.9 84.2 115.3 83.9 115 81.6 114.1 79.6 113.3 77.5 113 74.9 112.1 72.9 111.2 70.9 110.4 68 109.5 66.3 108.6 64.5 108.4 63.4 108.1 61.9 107.8 59.6 107.5 56.4 107.2 54.7 106.9 53.2 106.6 51.8 106.3 50.9 105.7 50.3 105.5 49.8 105.2 49.5 105.2 48.6 104.9 48 105.2 47.5 105.2 46.6 105.2 45.7 105.7 44.8 106 44 106.3 42.6 106.9 41.1 106.9 40.2 106.9 38.8 106.9 37.6 106.9 36.2 106.6 35.6 106.6 34.7 106.6 33.6 106.3 31.6 106 31 106 29.3 105.7 28.1 105.5 26.1 105.2 24.6 104.9 22.6 104.9 20.6 105.2 19.7 105.2 17.7 105.7 16.8 105.7 16.5 106 15.1 106.6 13.9 107.5 13.1 108.1 12.8 108.6 12.2 108.9 11.9 108.9 11.6 108.6 11 106.3 11 105.7 10.4 105.2 9.3 104.3 8.1 103.1 7.3 102.9 7 102.9 6.4 102.6 5.2 102 4.1 101.4 3.2 100.3 2.1 99.4 1.2 98.8 0.6 97.9 0.6 97.4 0 96.8 0 96.5 0 96.2 0 95.3 0.3 95.3 1.2 94.2 1.2 93.3 1.2 92.7 1.2 91.9 0 90.1 0.6 89.8 1.5 89.2 2.3 88.4 2.9 88.1 4.1 87.5 5 86.9 5.8 86.6 7.6 86.3 8.1 86.3 9.9 85.8 11.3 84.9 12.5 84.3 13.1 84 13.3 83.7 13.9 83.2 13.9 83.7 14.2 84 14.8 84.6 15.7 85.2 16.5 85.8 17.1 86.3 17.7 87.2 18.3 88.1 18.8 87.5 20 86.1 20.6 85.5 19.7 84.9 19.4 84.3 19.4 83.7 19.7 83.5 19.7 82.3 20 82 20 81.4 20 80.8 20 80 19.7 79.4 19.4 79.1 18.8 78.8 18.5 78.5 17.7 78.5 17.1 78.2 15.9 78.2 15.4 78 15.1 77.4 14.8 77.1 14.5 76.2 14.2 75 14.2 73.6 14.5 72.1 15.7 72.1 15.9 72.1 16.5 72.1 18 72.4 18.5 72.4 19.4 72.7 20 73 21.4 73.9 22 74.2 22.9 74.7 23.8 75.3 24.3 75.9 24.6 76.5 25.2 76.8 25.5 77.4 26.1 78.5 25.8 78.8 26.4 78.5 27.5 77.6 29 77.1 30.1 77.1 31.3 77.4 31.9 77.6 32.4 78 33.3 78.2 34.5 79.1 34.7 79.4 35 78.5 33.3 76.5 32.7 75.3 31.9 74.2 31.3 73 31 72.1 30.4 70.7 30.1 69.8 29.5 68.1 29.3 66.7 28.1 65.5 27.5 64.9 26.1 64 24.9 63.7 24 63.7 23.5 63.4 22.6 62.6 22 62.3 22 62 21.4 61.7 22.6 60.8 23.5 60.6 24.3 59.7 25.5 59.1 26.6 58.8 27.2 58.5 28.1 57.1 28.4 55.9 28.7 55.1 29.3 53.3 29.5 52.7 29.5 52.2 29.5 51.6 29.3 50.4 30.1 48.7 31 47.5 32.1 46.7 32.7 46.1 34.2 44.9 35.3 44.4 35.9 43.8 36.8 43.2 37.6 42.9 38.2 42.3 38.5 42 38.8 41.7 39.1 41.2 39.7 40.6 41.4 38.6 42.3 37.7 43.1 37.1 43.7 36.2 45.1 34.8 46 34.2 46.6 33.3 47.5 32.8 48.9 31.3 50.1 30.7 51.2 30.4 51.8 30.2 52.9 29.9 53.5 29.6 54.4 29.3 55.8 28.7 56.4 28.7 57.6 28.4 58.2 28.1 59.3 27.8 59.9 27.6 60.2 27.3 60.2 27 60.2 26.4 60.2 25.5 60.2 24.9 60.5 24.9 60.5 24.3 60.2 23.5 60.2 22.3 60.2 21.7 60.5 20.6 60.8 19.1 60.8 18 61 17.1 61 16.5 61.6 15.7 62.2 15.1 62.5 15.1 63.4 14.5 64.2 14.2 64.8 14.2 65.7 14.2 66.8 14.2 67.4 13.6 67.7 13.1 67.7 12.5 68.3 11.6 69.1 10.4 70 9.6 71.2 9 72.3 8.4 73.2 8.4 74.1 8.1 74.6 7.8 75.2 7 75.5 5.8 75.8 5.5 75.5 4.9 75.2 4.7 75.8 4.4 76.1 4.1 77.8 3.2 78.7 2.6 79.6 2 80.1 1.8 81.3 0.9 82.2 0 83.9 0.6 84.8 0.9 86.2 1.5 87.1 1.5 88.2 2 89.4 2.6 90.6 2.9 92.3 3.5 93.4 3.8 94.6 4.1 95.5 4.4 96 4.4 96.6 4.4 97.2 4.4 97.5 4.7 110.5 7.5"
        />
      </svg>
    </div>
  )
}

export default Monserrate