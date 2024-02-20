import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Miramar = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 49.5 63.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MIRAMAR', municipio.toUpperCase())}
              className="cls-1"
              d="M49.5,7c-9,1.3-9,1.3-6.4,10.6C36.2,19.5,33,23.7,34,31.2c.3,2.4-2.4,5.1-3.5,7.8-3.3,8-6.4,16-9.6,24.2C13.9,61,9.4,58.7,7.6,52,6.7,48.5,3,45.8,0,42c5,.9,8.4-.5,10.2-5.1.3-.9,2.2-1.3,3.4-1.7,5.9-1.8,7-5.9,2.5-10.2,2.5-3.3,4.7-6.9,7.7-9.7,3.2-3,6.4-5.5,5-9.2,5.1-2,9.9-3.8,15.9-6.1C45.7,1.5,47.3,3.8,49.5,7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Miramar