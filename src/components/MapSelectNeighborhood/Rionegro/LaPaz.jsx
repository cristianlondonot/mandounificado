import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPaz = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60.4 85.08"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PAZ', municipio.toUpperCase())}
              className="cls-1"
              d="M60.4,70.5C54.6,75,50,78.7,45.2,82.2a5.67,5.67,0,0,1-4.3,1c-8-2.5-15.5-1-23,1.8-1.2.4-4.1-.7-4.4-1.6C11.9,77.6,9.7,72.7,2.9,71.7c-1.2-.2-2.2-1.5-2.9-2,1.5-5,2.8-9.1,4.3-13.7a16.38,16.38,0,0,0,2.3,2.8c5.6,4.3,9.4,3.7,13.2-2.5A27.07,27.07,0,0,1,34,44.5c2.7-1,4.7-3.8,8.2-6.8-5-1.6-8.3-2.6-11.8-3.7V0c6.3,1.1,8.8,4.1,9.7,9.6,1,6,3.2,11.8,4.9,17.7.2.7.7,1.4.9,2.1,2,8.3,3.9,16.6,6,24.8A26.75,26.75,0,0,0,54.4,60C56.3,63.4,58.4,67,60.4,70.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPaz