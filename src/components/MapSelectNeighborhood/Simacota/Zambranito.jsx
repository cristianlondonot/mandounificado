import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Zambranito =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.28 59.6">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ZAMBRANITO', municipio.toUpperCase())}
              className="cls-1"
              d="M41,28.8c-2.5,4.7-4.5,8.6-6.8,12.8-3.1-2.8-5.9-8.5-11-3.1C15.8,34.2,8.7,30.1.7,25.5.5,23,.3,18.8,0,14.4c11.3-6,24.5-7.3,36.7-12,2-.8,4.1-1.4,6.9-2.4,4.6,6,9.2,12.3,14.1,18.4,1.6,2,3.8,3.5,5.7,5.3,1.6,1.6,3,3.4,4.6,4.9a21.93,21.93,0,0,0,3.9,2.9c3.7,2.1,8,3.4,11.2,6.1,2.8,2.4,3.8,5.8,2.8,10.4C84.7,53.5,83,57.6,78,59.6c-6.5-4-13.3-7.6-19.3-12.2-3.5-2.7-6-6.9-8.4-10.8S46,28.3,41,28.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Zambranito