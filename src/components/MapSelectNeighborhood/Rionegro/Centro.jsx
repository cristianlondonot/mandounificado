import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Centro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94 53.76"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CENTRO', municipio.toUpperCase())}
              className="cls-1"
              d="M91.3,30.21c.9,6.5,1.8,12.5,2.7,19.6-2.1,3.1-5.5,4.2-10.9,3.9-5.7-.3-10.1-2.3-15.1-4.5-4.5-2-10.5-.6-15.8-.7-2.5,0-5.1-.2-7.6,0-3.9.4-6.3-.9-8-4.7C34.4,39,30.3,38,25,40.31c-7.4,3.3-14.7,0-17.7-7.3-1.7-4-4.6-7.6-7.3-11.9C2.8,11.21,13,6.41,21.7.81c3.2-2.1,9.5.5,14.4,1v1.8c1.3-1.1,2.6-2.2,4-3.3.1.1.5.3.5.5-.8,4,2,4.1,4.6,3.9,8.3-.5,9.4-1.4,13.8,10.2,3.6,9.8,8.8,12.2,19.7,11.3C82.7,25.91,87,28.81,91.3,30.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Centro