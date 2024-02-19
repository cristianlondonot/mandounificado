import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Arcabuco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 125.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ARCABUCO', municipio.toUpperCase())}
              className="cls-1"
              d="M91.3,125.5c-9.4-9-17.9-16.4-25.3-24.7A60.29,60.29,0,0,0,38.8,83.2c-.8-.3-2-.1-2.4-.6-6.4-9-14.9-5.2-23.2-4.2-4.4.5-9.1-.8-13.2-1.3C2.7,65.3,8.4,54,5.9,40.3c2.5,1.9,4.8,3,6.2,4.8,5.4,7,14.7,9.9,22.1,5.4C42.4,45.6,49.9,40,59.6,37.4c5.5-1.4,9.6-8,15.1-10.4C87.1,21.6,90.5,7.9,102.3,0c4.8,6.1,9.8,12.4,14.8,18.8,1.1,1.4,2.5,2.8,3.5,4.3,1.1,1.7,2.7,3.6,2.9,5.4.8,13.9,5.4,17.4,18.6,13.5,8.4-2.5,8.4-2.5,13.9-.8,1.2,6.2,2.2,11.6,3.4,17s.9,12.3,10.1,11.7a10.55,10.55,0,0,1,.5,1.9c-2.3,2-4.3,5.1-7,5.9-9.2,2.7-18.7,4.6-28.1,6.7-3.8.9-5,2.6-2.6,6.2,3.3,4.9-2.4,16.3-8.4,16.4-1.2,0-2.6-1.6-3.6-2.7-3.9-4.4-6.9-4-11.7-.7C101.2,108.9,94.7,115,91.3,125.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Arcabuco