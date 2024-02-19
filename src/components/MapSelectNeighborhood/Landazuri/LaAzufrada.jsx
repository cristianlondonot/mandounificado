import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaAzufrada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 28.84" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA AZUFRADA', municipio.toUpperCase())}
              className="cls-1"
              d="M14.2,17.54a15.33,15.33,0,0,0-1.1-2.7,16.68,16.68,0,0,0-1.7-2.6C9.1,9.14,6.1,5.74,8,1.74A5,5,0,0,1,9.1.14,11.47,11.47,0,0,0,0,2.54v12.7l1.3,1.1v5l1.3,1.3v.9a8.18,8.18,0,0,1,4.1.5c1.4.7,2.2,2.1,3.4,2.9a11.72,11.72,0,0,0,4.8,1.5,27,27,0,0,0,4.9.4,12.88,12.88,0,0,0-2.4-5.5A29.63,29.63,0,0,1,14.2,17.54Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaAzufrada