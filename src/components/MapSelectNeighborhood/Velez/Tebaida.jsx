import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Tebaida = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.5 60.69" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('TEBAIDA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,7.5C5.1,1.2,11.4,1.2,18,1.9c1.6.2,3.2-.4,4.9-.6C26.6.9,30.3.4,34.1,0c.6,4.9,1.9,9.9,1.5,14.8-.4,4.5.1,7.5,4.1,9.8,3.2,1.8,6.1,4.2,9.8,6.8-1.5,1.8-3.1,3.3-4.1,5.2-2.7,5.3-6,10.5-7.5,16.2-1.8,7.2-3.5,9-10.8,7.3-1.8-.4-3.7-.2-5.4-.7-4.3-1-7.9-2.6-8.1-8.1-.1-2-1-4.7-2.5-5.8-5.5-4.2-6.9-9.8-7.5-16.2C2.8,21.8,1.2,14.2,0,7.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Tebaida