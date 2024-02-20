import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CampoAmor = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65.84 54.9"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAMPO AMOR', municipio.toUpperCase())}
              className="cls-1"
              d="M0,33.4c2.5-8,8.4-12.1,14.9-15.7C22.3,13.5,31,10.6,34.6,0c3.3,3.1,6,5.2,8.2,7.8,2.8,3.3,5,7.3,8,10.5a7.75,7.75,0,0,0,6.3,2.1c3.9-.8,7.4-.5,8.6,3.2.6,1.9-.9,5.4-2.5,7-3.7,3.6-8.2,6.3-12.1,9.7-3.9,3.6-7.4,7.6-11.1,11.4-.7.7-1.5,1.2-3.8,3.2C33,51,30,46.9,26.6,43.2c-1.1-1.2-3.5-1.8-5.3-1.8C13.1,41.8,6.4,38.7,0,33.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CampoAmor