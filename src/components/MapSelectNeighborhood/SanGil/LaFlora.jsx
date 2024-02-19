import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaFlora = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.05 151.6">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA FLORA', municipio.toUpperCase())}
              className="cls-1"
              d="M87.05,116.9c-7.4,6.5-14.8,13-22.2,19.6-3.9,3.5-7.4,7.6-11.7,10.5-3.1,2.1-7.2,2.9-11.7,4.6-1.1-5.8-1.5-9.9-2.7-13.9a12.86,12.86,0,0,0-3.6-5.4c-6.4-6.3-13.4-12-19.4-18.6-2.2-2.4-2.5-6.5-3.4-9.9-1.1-3.9-1-8.4-2.9-11.8-6.9-12.8-6.9-26.6-7.4-40.5-.1-2.6-1-5.1-1.5-7.7-.3-1.6-.8-3.3-.4-4.8,1.2-4.4,2.9-8.8,4.3-13.2a8.72,8.72,0,0,0,.3-3.2c-.3-2.8-2-6.3-.8-8.1,2.8-4.6,6.6-8.6,10.4-12.6C15.45.7,17.65.7,19.55,0c-2,4.2-4.4,7.8-5.5,11.8-2.2,7.5,3.6,12.3,7.1,17.8.8,1.3,3.7,1.5,5.7,1.7,4.9.6,9.9.3,14.6,1.5,14.7,3.8,23.7,15.1,32.8,26,1.1,1.3,1.3,3.5,2,5.3,2.5,6.7,4.5,7.5,11.8,4.5-2.2,3.2-4.3,6.4-6.6,9.5-5.3,7.1-10.2,23.8-2.2,31.6C81.55,111.9,84.05,114.1,87.05,116.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaFlora