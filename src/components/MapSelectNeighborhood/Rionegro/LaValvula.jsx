import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaValvula = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 113.1 102.1"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA VALVULA', municipio.toUpperCase())}
              className="cls-1"
              d="M68.6,68.6c-1.8-3.6-3.6-7.1-5.5-10.9,4.5-3.7,4.7-9.1,1.7-13.6-1.4-2.2-6-2.7-9.3-3.4-2.9-.6-5.5.3-7.8-3.6-1.4-2.4-8-4.3-10.6-3.1-4.7,2.3-9.3,4.3-14.4,5-6.2.8-9.3,5.7-11.4,10.5-1.6,3.8-3.4,3.7-5.9,3.1-1.6-5.8-2.6-11.3-4.7-16.4-1.8-4.4.1-6.4,3.1-9,3.3-2.8,5.9-6.4,8.3-10.2,3.3-1.2,8.5.7,9.4-5.8.1-.5,2.1-1.1,3.2-1.1,8.5.1,8.9-.2,7.1-8.1,4.5-.7,9-1.3,13.8-2-.8,2.2-1.3,3.8-1.5,4.3,4.4,2.8,8.2,5.3,12.1,7.5,2.3,1.3,4.8,3,7.2,2.9,5.8-.3,9.4,2,12.4,6.8.7,1.2,3.6,1.9,5.1,1.5,4.4-1.2,5.4,1.2,6.1,4.5,2,9,6.2,16.3,13.2,22.8,5.5,5.1,8.6,12.7,12.5,19.4.6,1.1-.6,3.4-1.1,5-1.5,4.5-4,8.8-4.4,13.4-.3,2.6,2.6,5.6,4.2,8.4.5.8,1.1,1.6,1.7,2.4-2.9,1.3-5.4,2.5-7.1,3.2-2.5-8.5-4.6-17.2-7.8-25.5-2.9-7.5-6.6-8.1-14.4-6.8-4.9.8-10.2-.7-15.2-1.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaValvula