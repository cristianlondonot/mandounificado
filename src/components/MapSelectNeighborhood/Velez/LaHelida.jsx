import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaHelida = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.94 74.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA HELIDA', municipio.toUpperCase())}
              className="cls-1"
              d="M64.8,73c-15.7,4.8-29.3-3-43.9-8C11.5,61.8,8.6,54.4,3.1,48.4c-.1-.1-.4-.2-.4-.4C1.7,42,.5,36.1,0,30c-.1-1.4,2.2-3,3.4-4.5C9.5,18.1,15.6,10.7,21.6,3.2c.6-.8,1-1.8,1.8-3.2,4.5,6.7,2.1,12.2-.1,16.9-3.4,7.3-2.7,14,.8,20.5C27,42.9,30.9,48,34.8,53c3,4,9.4,2.3,12.7-3.1,5.1-8.2,14.6-11.1,22.3-6.6,2.7,1.6,4,3.4,2.5,7C69.6,57.5,67.5,64.8,64.8,73Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaHelida