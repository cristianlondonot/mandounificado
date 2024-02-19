import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LomaDeLaCandela = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.81 101.53">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LOMA DE LA CANDELA', municipio.toUpperCase())}
              className="cls-1"
              d="M60.31,81.9c-3.8-2.7-4.5-1.7-7.4,1.8-5.6,6.9-13.5,12.2-21.1,17.1-3.3,2.1-6.6-.6-7.9-4.7-.5-1.7-1.1-4.1-2.4-4.8C9.11,83.9,9.91,70.9,7.41,59.2c-1.5-7-3.9-13.8-5.6-20.8A68.76,68.76,0,0,1,0,26.6c-.2-6.1,5.6-7.7,9.5-8.8,1.8-.5,6,4.1,7.7,7.1,3.4,6,6,6.8,11.2,1.6q3.9,6.45,8.7.6c2.7-3.3,5.3-6.9,8.5-9.6,3.5-2.9,7.7-5,11.7-7.3.7-.4,2-.1,3,.2,10.1,3.4,13.2,1.2,14.2-10.4h10.3c-4.9,6.2-8.9,11.9-13.7,17-6.9,7.3-14.7,13.8-21.3,21.3-2.2,2.5-2.9,7.3-2.5,10.8.8,6.9,3.6,13.6,4.3,20.5.5,4.3,2.4,5.6,5.8,6.8,1.5.6,2.6,2.3,3.9,3.6A18.18,18.18,0,0,1,60.31,81.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LomaDeLaCandela