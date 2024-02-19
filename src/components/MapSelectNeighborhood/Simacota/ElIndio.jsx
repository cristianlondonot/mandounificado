import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElIndio =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.93 131.86" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL INDIO', municipio.toUpperCase())}
              className="cls-1"
              d="M70.5,123.15c-6.1-3.2-9.6-6.9-17-6.1-6.8.8-7.2,4-9.1,8.4-1.2,2.7-4.4,6.6-6.1,6.4-3.9-.7-10.5,2-10.9-6.2s-2-16.5-2.8-24.8c-.1-1.1,1.4-2.5,2.4-3.5,1.6-1.7,4.6-2.9,4.9-4.7.9-5.1,2.4-11,.7-15.5a17.58,17.58,0,0,0-14-11.3c-1.3-.2-2.4-1.6-3.6-2.4-7.2-4.7-5.3-12.1-5.6-18.9-.1-3.9-6.6-13.3-9.4-15,4.3-.5,8.6-1.2,12.9-1.4,8.5-.4,10.1-2.1,8-10.2-1.6-6.2,1.2-10.6,6-13.1,7.3-3.8,14.4-6.8,23.8-3.3,6.6,2.5,8.4,8.9,13.9,11.5.5.2.9,1.9.6,2.6-2.6,4.9.8,10.5-2.5,15.9-1.8,2.9,1.6,8.9,2.6,13.5.8,3.4,2.4,7,2,10.2-.9,6.4.5,11,4.6,16.3,2.8,3.7,1.6,10.5,2,15.9.1,1.2-.8,2.5-.7,3.7.7,5.1,2.3,10-3.7,13.6-.9.5-.5,5.8.9,7.6C74,116.75,71.9,119.85,70.5,123.15Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElIndio