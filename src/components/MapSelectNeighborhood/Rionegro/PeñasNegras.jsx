import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PeñasNegras = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46.24 42.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PEÑAS NEGRAS', municipio.toUpperCase())}
              className="cls-1"
              d="M46.24,2.5c-.7,7.2-.7,14-2.1,20.4-1.4,6.6-4.1,12.9-6.2,19.3-6.4-12.2-17-18.4-30.3-20.5-5.1-.8-8-4.3-7.6-9.8C.24,8.2.74,4.6,1.14,0,7.64,6.4,14.54,4.3,22,2.8,29.84,1.3,38.14,2.5,46.24,2.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PeñasNegras