import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Plazuela = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 87.35 80.95"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PLAZUELA', municipio.toUpperCase())}
              className="cls-1"
              d="M87.35,72.91c-9.1,1.6-16.4,2.9-23.6,4.3-1.1.2-2.4.7-3.2,1.4-2.9,2.7-4.6,4.1-4.7-1.7-.1-3.6-7.5-5.7-13-4.1-5.8,1.7-11.6,3.4-18,5.3-.4-7.4-4-13.2-.5-19.6.6-1.1-.2-3.9-1.3-5-4.1-4.4-3.9-9-1.8-14.1,1.8-4.3.6-7.6-3.3-10.4-5.1-3.7-10.1-7.6-14.7-11.9-4.8-4.6-4.3-5.8,1.6-8.9,1.1-.6,1.2-3.2,1.8-4.8.4-1.1.8-2.2,1.3-3.3.8.7,1.9,1.2,2.4,2.1,1.9,3.5,3.5,7.1,5,10.2,3.1-1,6.1-1.4,8.6-2.8,1.5-.9,2.8-3.2,3-5C27.45.01,29.05-1.39,33.35,1.51c-3.5,5.9,2.1,9.7,3.1,14.7.4,2.1,1.1,4.1,1.5,6.2.5,2.1.2,5.5,1.4,6.1,2,1,5.2,1,7.4.1,6.4-2.6,12.4-.8,12.4,5.8,0,8.8,6.4,11.3,11.2,15.6,3.2,2.9,6.9,4.9,6.1,10.5-.3,2.1,2.5,4.9,4.3,7,1.4,1.6,3.5,2.9,6.6,5.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Plazuela