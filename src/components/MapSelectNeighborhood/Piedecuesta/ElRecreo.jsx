import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElRecreo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.5 87.07">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL RECREO', municipio.toUpperCase())}
              className="cls-1"
              d="M71.5,51.9c-3.7,1-9,4.9-8.1-4,.1-1.5-2.1-1.7-2.7-1.1-2.5,2.2-7.8-.6-8.4,4.8-.2,1.6-.2,3.2-.5,6.6-4.5-8.8-10.4-4.3-13.3-1.8-3.4,2.8-3,7.8.6,12.5,2.1,2.7.8,7.9-3,10.5a16.75,16.75,0,0,1-6.2,2.9c-5.6.9-11.2.8-16.3,4.1-2.4,1.5-6.5.4-8-2.4s-3-.6-5.6-.1C7.4,72.6,7.8,60.4,9.5,48.6,11,38,14.9,28.4,18.8,18.7a6.63,6.63,0,0,0,.9-1.9c.6-4.3,2-7.2,7.3-7.2,5.5,0,4.4-6.6,8.1-9.6,3.1,6.4,6.7,12.6,9.2,19.2A54.75,54.75,0,0,0,59.7,41C63.6,44.4,69.2,46.3,71.5,51.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElRecreo