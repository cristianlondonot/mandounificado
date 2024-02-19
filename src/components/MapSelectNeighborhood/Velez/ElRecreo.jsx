import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElRecreo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.55 95.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL RECREO', municipio.toUpperCase())}
              className="cls-1"
              d="M36.1,0c2.9,2.4,5.5,4.2,7.7,6.3s4.8,4.5,6.1,7.4c4.7,10.1,8.8,20.3,4.2,31.8a7.5,7.5,0,0,0,.2,5.7c2.1,4.6,3.4,8.5.8,13.8-2,3.9-1.6,8.3-8.1,6.8-1.4-.3-4.3,2-5.2,3.8-3.3,5.9-9.2,7.1-14.7,8.8C22,86,18.3,88,20.4,95.6,13.2,88.2,7.4,92,0,95.5c2.2-7.3,3.6-13.6,6.1-19.3,2.1-4.7,4.9-8.5,1-13.9C4.5,58.7,3.5,54,2.2,49.6c-.4-1.2.3-3.2,1.2-4.3,3.8-4.5,8.4-8.5,11.8-13.3,3.6-5.1,6.1-11,9.5-16.2C28.3,10,32.6,4.6,36.1,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElRecreo