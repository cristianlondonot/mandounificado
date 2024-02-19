import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoEncinal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.34 71.1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTO ENCINAL', municipio.toUpperCase())}
              className="cls-1"
              d="M0,21.9c7.2-3.4,14.8-6.6,22.1-10.3S36.2,3.9,43.4,0c-.4,6.3,4.7,7.4,9.9,9.5,3.6,1.5,6.1,5.9,8.8,9.2,3.3,4,6.1,8.4,9.3,12.4,3,3.8,5.4,6.8,2.9,12.5-3.5,8.3-6.6,17.1-4.2,27.5-7.1-1.9-13.8-3.7-20.4-5.4a104.18,104.18,0,0,0-32.9-3.4,6.37,6.37,0,0,1-4.2-1.8C6.7,55.7,5.5,49.4,5.3,41.9,5,35.5,2,29.1,0,21.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltoEncinal