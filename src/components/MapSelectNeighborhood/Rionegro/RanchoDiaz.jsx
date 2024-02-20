import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const RanchoDiaz = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116.9 118.6"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('RANCHO DIAZ', municipio.toUpperCase())}
              className="cls-1"
              d="M116.9,108.8c-1,2.3-2.6,5.8-4.4,9.8-2.9-2-4.5-5.4-6.8-8.5-2.9-3.9-5.1-6.4-2.4-11.5-10.7,4-5.9-10.7-12-9.9-1.2-2.9-2.1-5.2-3.5-8.6,2.5-5.9-1.7-11.2-9.9-11.8-3.3-.2-7.2-.2-10.6-4-3.3-3.8-8-6.2-11-11.1-1.7-2.8-6.7-5-10.7.3-2.3-5.1-5.5-6.7-10.6-7.7-4.8-1-8.4-6.9-12.9-10-2.6-1.7-6.1-2.1-10.2-3.5C8.3,25.3,3.8,16.7,0,9.3,4.7,6.2,9.3,3.2,14.2,0c.3.4.8,1,1,1.6,2,8.2,6.7,11.4,15.5,11.2,6.1-.1,10.3,5.2,11.5,11.7,1,5.4,3.4,8.5,9.5,6.4,1.1-.4,2.6-.3,3.6.2,7.4,3.7,14.8,7.4,21.9,11.4,1.5.8,3,3.2,3,4.8-.3,5.3,3.3,6.7,7.1,7.6,6.6,1.6,13.4,2.8,20.1,4,5.4,1,7.2,3.7,5,8.5-1.8,4-1.6,8.9-7.1,11.2-2.8,1.2-.7,7.7,2,10.5,1.9,1.9,2.7,5,3.9,7.6,1.9,3.9,3.6,7.7,5.7,12.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default RanchoDiaz