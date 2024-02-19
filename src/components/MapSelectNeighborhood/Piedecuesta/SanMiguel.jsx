import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanMiguel = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.53 111.7">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN MIGUEL', municipio.toUpperCase())}
              className="cls-1"
              d="M67.2,85.5c-4.8.5-8.2,4.8-13,4.2-.5-.1-1.5.8-1.5,1.3-1,13.8-13.7,13-22.1,17.3-1.7.9-4.1,1.2-6.5,3.4-.2-3.7,2.4-4.3,3.1-6.1,1.4-3.5,1.2-6.1-.4-10.2C21.9,82.6,10,73,9.2,58.3c-.1-2.2-1.8-3.3-3.3-4.4C2.9,51.9,1,49.8,3,46s-1-6.1-3-8.5c1.2-1.6,2.3.4,2.9.1,7.9-4.5,17.7-2.6,25.3-7.7s8.9-11.5,3.4-18.8c-1.8-2.4.4-4.6,1-4.3,3.3,1.5,5.4-4,9.7-.3S47.9,4.3,49.5,0c1.4,4.1.2,9.7,6.8,8.7,1.6-.3.5,1.6.3,2.6-1,4.6,1,8.3,5.3,9.2C71.1,22.6,79.2,43.8,75.7,52c-1.7,4-6.1,7.5-11.1,8.6-3.4.7-5.8,2.8-8.2,4.9-3.3,2.9-3,7.1.3,9C61.5,77.3,62.8,82.5,67.2,85.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanMiguel