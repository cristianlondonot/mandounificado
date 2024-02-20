import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VegaCarreño = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54.47 67.93"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VEGA CARREÑO', municipio.toUpperCase())}
              className="cls-1"
              d="M34.1,0c5,5.8,10.8,12.1,16,18.8,3.1,4.1,7.3,8.7,1.4,14.1-.3.3-.6,1.3-.4,1.6,4.2,5.2.5,9.2-1.9,13.6-.8,1.4-.5,3.4-.6,5.1a8.73,8.73,0,0,0,.5,2.2c1.5,4.7.9,9.8-3,11.9-2.7,1.4-8.3.3-10.9-1.8C26.9,59,18.7,59.7,9.7,63.2c-2.4.9-5.3.6-8.5.9,2.1-6.6,10-12.6,1.1-18.1.4-4,.8-7.7,1.3-11.4.2-1.3,1-2.4,1.2-3.7.6-3.3,2-6.9,1.3-9.9C5,16,2.4,11.3,0,5.2c3.3.4,5.1,1,6.8.7A91.75,91.75,0,0,0,17.1,3.2c2.5-.7,4.9-2,7.4-2.4C27.3.1,30.2.3,34.1,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VegaCarreño