import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoSantos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.7 65.47">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUERTO SANTOS', municipio.toUpperCase())}
              className="cls-1"
              d="M8.8,0C11.9,5.6,15,11.1,18,16.8c2,3.9,4.5,6.6,9.4,5.7,4.5-.8,7.8-2.8,8.7-7.7.2-1.3,1-2.4,1.9-4.3,7.9,4.5,15.8,4.6,23.2-1.2,4.3,5.4,8.3,10.5,12.5,15.9C69.1,35.7,58.4,41.4,49.2,48.8c-4.9,4-9.4,8.5-13.9,12.9-4.9,4.7-9,5.3-12.9.1A37.75,37.75,0,0,0,0,47.2C3,31.1,5.9,15.6,8.8,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuertoSantos