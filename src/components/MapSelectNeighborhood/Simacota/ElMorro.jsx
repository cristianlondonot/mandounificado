import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElMorro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.7 118.66" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL MORRO', municipio.toUpperCase())}
              className="cls-1"
              d="M141.2,48.86v-26h-3.1v-2.8L135,17l3.1-3.1v-3.1l.2-.1a29.07,29.07,0,0,1-9.5-2.9,17.71,17.71,0,0,1-4.1-3.1,20.54,20.54,0,0,0-3.8-3.4c-2.9-1.6-6.4-1.4-9.6-.9a214.6,214.6,0,0,0-22.5,4.9c-4,1-8,2.1-12.1,3-3.9.9-7.7,1.8-11.6,2.8-7.2,2-14.5,4.7-20.5,9.2-5.2,3.9-9.4,9.1-13,14.5-3.7,5.6-7,11.5-10.5,17.3-3.9,6.5-7.8,13-10.7,20.1a60,60,0,0,0-3.3,10.7c-.8,3.9-1.8,7.8-2.8,11.7A111,111,0,0,0,1.6,106a93,93,0,0,1-1.6,9.2l7.8.9c5.6.5,11.1-.4,16.6-1.5,5-1,9.9-2.6,14.8-4a128.54,128.54,0,0,1,14.8-3.8c5-.9,10.2-1.6,15.2-1a35.14,35.14,0,0,1,7.3,1.6,49.22,49.22,0,0,1,6.1,3,36.91,36.91,0,0,0,6.4,2.9,49.7,49.7,0,0,0,7.7,1.4c5,.5,10,.5,14.9,1.3,2.4.4,4.9,1,6.3,2.7,2.2-4.2,4.9-8.2,7-12.3a259,259,0,0,0,19.3-48A8,8,0,0,0,141.2,48.86Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElMorro