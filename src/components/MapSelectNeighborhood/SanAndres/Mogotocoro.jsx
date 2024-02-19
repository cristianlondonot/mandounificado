import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Mogotocoro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100.07 154.75"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MOGOTOCORO', municipio.toUpperCase())}
              className="cls-1"
              d="M96.33.25c1.4,6.9,3.1,13.4,3.7,20,.3,3.8-1.1,7.7-2.1,11.5-2.1,7.7-3.5,15.4,1.1,22.4-4.5,3.2-8.9,6.1-13.1,9.3-6.9,5.2-7.2,10.2-1.5,17,1.6,1.9,2.1,4.7,3.3,7.5a19.57,19.57,0,0,1-2.9.3c-1.9-1.1-3.7-2.2-5.5-3.3-1,2.4-2.3,4.8-3.1,7.4-2.9,9-2.6,18.6-8,27.3-3.9,6.4-7.5,11.7-14.6,14.1-1.2.4-2.2,1.7-3.1,2.8-4.3,5.1-8.6,10.2-12.8,15.3l-.9-2.1c-3.1-.3-6.3-1.2-9.1-.6-4.7,1.1-9.1,3.2-15.6,5.6-1.3-23.7-2.3-46-3.9-68.2-.4-6-2.6-11.8-4-17.7C1.33,57-3.27,45.15,3.53,33c1-1.8.3-4.3,1-6.3,4-11.3,11.1-15.7,24-13,12.2,2.6,23.1-.7,34.3-4.3,10.4-3.3,20.9-6.2,31.3-9.2C94.63-.15,95.23.05,96.33.25Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Mogotocoro