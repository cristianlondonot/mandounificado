import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaColorada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70.4 126.73"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA COLORADA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,68.43c9.1-2.8,17.4-10.4,15.3-19,1.7-1.5,3.7-2.8,4.9-4.7,1.1-1.7,1.2-3.9,1.9-6.4,6.6,2.5,9.9.2,14.6-4.9,5-5.4,4.9-15.3,13-16.7,6-1.1,8.2-5.1,11.3-8.8a4.15,4.15,0,0,0,1.2-2.6C61.1-2,66.2.53,70.4,0c-1.2,6.9-2.6,13.2-3.3,19.6-.4,3.2.8,6.4.8,9.7.1,8.4.1,16.9.1,25.3,0,7.4.2,14.9-.1,22.3a10.53,10.53,0,0,1-2.3,5.9c-4.8,5.9-8.8,13.3-15.1,16.8-11.2,6.3-13,19.6-23.9,27.1-3.4-8.3-13.3-12.5-14.1-23.2-.2-3.1-2.2-6-3.2-9.1-1-3.4-2.2-7-2.4-10.5s-.6-6.7-3.5-9.3C1.7,73.33,1.2,70.83,0,68.43Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaColorada