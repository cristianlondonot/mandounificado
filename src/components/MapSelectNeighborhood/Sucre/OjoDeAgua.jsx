import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const OjoDeAgua = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.61 36.41">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('OJO DE AGUA', municipio.toUpperCase())}
              className="cls-1"
              d="M89.5,23.61c-7,2.2-14,4.2-21,6.5s-13.7,4.5-19.1,6.3c-6.4-2.8-11.7-4.9-16.8-7.4-7.6-3.7-15.3-7.3-22.6-11.6a21.3,21.3,0,0,1-7-7.6C1.5,7.31,1.2,4,0,.11c6,0,12.1-.1,18.1.1,1.6,0,3.1,1.1,4.7,1.6,7,2.1,13.7,8,21.6,1.7,1.4-1.1,4.6-.7,6.8-.1,8.7,2.3,16.8-.1,25-2.5,10-3,16,1.5,16.4,12.1.1,4-.7,8.1-1.1,12.1C90.8,24.61,90.1,24.11,89.5,23.61Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default OjoDeAgua