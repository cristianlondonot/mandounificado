import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const QuebradaNegra = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.34 50.85">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUEBRADA NEGRA', municipio.toUpperCase())}
              className="cls-1"
              d="M27.34,1.3c-3,.4-6-.1-9-.3A31.25,31.25,0,0,1,14,.6L11.64,0a14,14,0,0,1,1,3.5,5.44,5.44,0,0,1-1.1,3.9c-1.8,2.4-4.9,3.4-6.9,5.6C1.34,16.4.34,21.6,0,26.1a43.39,43.39,0,0,0,.3,7.2c.3,1.8.8,3.6,1.1,5.4.3,2,.6,4.1,1,6.1.4,1.7.8,3.7,2,5,1.4,1.6,4,1.1,5.7.3,2-1,3.7-2.3,5.9-2.6.1-2,0-3.9,0-5.9a24.52,24.52,0,0,1,.7-7.6c.8-2.5,1.9-5.1,1.5-7.8a.91.91,0,0,1,.3-.7V25a12.81,12.81,0,0,1,1.1-3.3,21.77,21.77,0,0,1,2-5c1.7-2.7,4.9-4.1,6.6-6.7.9-1.4.7-3.1.8-4.7a8,8,0,0,1,1.3-4.2A15.64,15.64,0,0,0,27.34,1.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default QuebradaNegra