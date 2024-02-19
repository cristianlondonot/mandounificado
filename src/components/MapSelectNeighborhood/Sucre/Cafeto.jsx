import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cafeto = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.44 43.58" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAFETO', municipio.toUpperCase())}
              className="cls-1"
              d="M64.4,30.3c-1.7.1-3.5-.1-5,.5-9.1,3.7-18.3,7.4-27.2,11.5-5.3,2.4-14.1,1.5-16.3-3.3C12.6,31.9,6.5,29.7,0,27.9,8.5,18.7,16.9,9.6,25.8,0c3.4,2.2,7.1,5.5,11.4,7.4,9.6,4.2,14.1,13.5,21.3,20,1.7,1.4,4,2,5.9,2.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cafeto