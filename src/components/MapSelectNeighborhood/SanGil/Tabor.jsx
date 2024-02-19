import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Tabor = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.09 72.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TABOR', municipio.toUpperCase())}
              className="cls-1"
              d="M109.9,0c4.2,4.8,8.4,8.9,11.7,13.7,1.7,2.4,1.8,6,2.8,9,.9,2.7,1.4,6.3,3.4,7.8,3.3,2.5,3.6,5.3,3.5,8.9-.1,11.7.4,12.1,11.7,13.2,3.4,9.4-1.5,12.8-9.7,14.3-7.5,1.3-15.3.7-23,.9-1.5,0-3.2-.2-4.5.4-9.2,3.9-18.7,4-28.6,3.3-10.5-.7-21-2.1-31.7-.5-9,1.3-18.2.8-27.3,1.4-7.5.5-14.1-.6-18.2-8,1.3-3.1,2-7.4,7.4-6.2.5.1,1.5-.6,1.9-1.2,4.8-5.9,9.5-11.9,14-17.6v4.2c1.5-2.7,2.4-4.3,3.1-5.6,7.3-1.5,14.6-2.2,21.4-4.6,5.4-1.9,9.8-6.4,15-9,6.7-3.4,13.8-5.9,20.7-9,2.3-1.1,4.1-3.2,6.4-4.5C96.3,7.2,103,3.7,109.9,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Tabor