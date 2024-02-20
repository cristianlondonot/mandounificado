import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Tachuela = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.95 70.6"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TACHUELA', municipio.toUpperCase())}
              className="cls-1"
              d="M36.19,0c5.1,3.8,7.5,9,9,15.4,1.2,5.1,5,9.8,8.2,14.2,3.1,4.2,3.3,7.4,1.1,12.5-4,9.2-11.4,12.5-19.8,15.2-6.9,2.3-14,4.4-20.7,7.2-2,.9-3.1,4-4.6,6.1-2.6-3.2-5.9-6.9-8.7-10.9a6,6,0,0,1-.3-4.9c3-6.9,6.2-13.7,9.5-20.6.9-1.8,1.7-4,3.2-5,2.8-1.8,2.9-4,3.8-7,1.4-5.1,5.5-9.7,9.1-14C28.69,5.2,32.49,2.9,36.19,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Tachuela