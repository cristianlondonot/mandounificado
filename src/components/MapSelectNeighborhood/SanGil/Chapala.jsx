import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chapala = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.96 86.4" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHAPALA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,45.21c6.4-5.2,13.1-10.1,19.1-15.7,2.3-2.1,3.5-5.6,4.6-8.7,1.3-3.7,1.8-7.7,2.6-11.2,13.1-2.1,25.6-4.2,38-6.1C73.2,2.11,82.2.81,91.2,0c2-.2,4.1,1.8,6.5,2.9,0-.3.2-1.6.3-2.8h-.2v22.6c.4.1.8.1,1.2.2.4-1.4.7-2.8,1.1-4.4.5.2,1.3.4,1.3.7.4,4.3.2,8.8,1.2,13,1.6,6.3-2.7,11.3-2.7,17.2,0,1.3-1.2,2.6-1.6,4-.7,2.1-2,4.5-1.5,6.3,1.5,5.3,4,10.3,5.6,15.6a7.25,7.25,0,0,1-.7,5.4c-.5.9-3.6,1.4-4.2.8-3.9-4-9-3.8-13.4-2.8-9.9,2.2-19-.4-28.2-3-8.4-2.3-18.8,1.9-23.4,8.9a5,5,0,0,1-4.4,1.7c-2.2-.8-4.1-2.6-6-4.1-4.3-3.4-9-6.4-12.6-10.5a32.89,32.89,0,0,1-6.3-12c-1.3-4.2-1.1-8.8-1.6-13.3C1.1,46,.5,45.61,0,45.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Chapala