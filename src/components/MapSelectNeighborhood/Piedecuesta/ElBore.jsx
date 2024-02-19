import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElBore = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.75 78.34" {...props}>

        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL BORE', municipio.toUpperCase())}
              className="cls-1"
              d="M5.22,73.21c1.5-1.7,4.9-1.5,4.7-4.6-.2-3.3-3.5-2.4-5.3-3.6-1.6-1.1-4.9-.1-4.6-4,.3-3.2,2.4-3.5,4.5-4.6,6.5-3.4,13.5-6,18.6-11.6a8.24,8.24,0,0,1,4.1-2.6c11.5-1.9,20.5-9.5,31.6-12.8C70.42,26,80,17.21,88.32,8c5.6-6.2,12.1-8.2,19.9-8,4.6.1,3.8,4.6,2.6,5.1-9.8,3.7-8.2,14.6-13.7,20.9-4.1,4.7-7.5,9.9-11.9,14.5a20,20,0,0,0-4.7,16c1,6.1-.7,10.3-5.5,13.4s-10.1,5.5-15.8,1.4A23.5,23.5,0,0,0,42.72,67c-2.6.2-5.2.6-6.7,2.9-5.6,8.6-13.4,10.2-22.4,6.7C10.62,75.31,7.12,76.51,5.22,73.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElBore