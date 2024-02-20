import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Sardinas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 43.45 56.83"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SARDINAS', municipio.toUpperCase())}
              className="cls-1"
              d="M15.4,55.53c-1.8.4-3.2.7-5.5,1.3.7-2.9.9-5.3,1.8-7.5,2.8-6.8,2.3-12.8-1.6-19.5C5.9,22.63,3.5,14.43,0,6c2.9-.9,4.8-2.1,6.7-2.1,7.3-.1,14.4-.3,21.5-3.3,4-1.7,8.8,0,10.7,5.3,1.4,3.8,3.5,7.5,4.2,11.4.3,1.7,1.5,5.1-3.3,6.1-3.9.9-7.4,4.6-10.5,7.7-2.8,2.8-3.6,7.7-8.9,7.7-.4,0-.9.8-1.1,1.3-1.2,3.4-2.4,6.7-3.3,10.2C15.6,51.83,15.7,53.63,15.4,55.53Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Sardinas