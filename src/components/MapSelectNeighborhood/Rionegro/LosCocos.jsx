import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LosCocos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 63.3 80.97"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LOS COCOS', municipio.toUpperCase())}
              className="cls-1"
              d="M4.7,24.5C17.3,16.9,31.8,13.8,36.9,0c12.3,5.3,22,12.6,26.4,25.9-.6.4-2.5,1.4-4.3,2.7C54.6,32,51.5,36,50.9,42c-.5,5.1-1.3,10.5-3.4,15.1-1.6,3.6-4.9,6.7-8.1,9.1-6.7,5-13.8,9.5-20.9,14a7.36,7.36,0,0,1-4.4.7c-5.6-.6-11.7-8-12.7-13.7-.9-5.3-3.1-10.5,1-15.5C-3.7,41.9,8.6,34,4.7,24.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LosCocos