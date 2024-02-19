import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanMiguel = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.84 89.82" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN MIGUEL', municipio.toUpperCase())}
              className="cls-1"
              d="M28.12,67.62c-3.7-1.1-6.8-1.4-9.2-2.9a50.21,50.21,0,0,1-10.4-8.5C1.62,48.62-2,40,1.12,29.42c2.2-7.5,3.6-15.2,5.2-22.9,1.3-6.2,6.5-6.4,10.8-5.7,5,.9,9.4.2,14.2-.3,4.5-.5,10-1.7,14.7,2.9,2.9,2.9,8.1,3.4,12.2,5.3a35.87,35.87,0,0,1,8.8,5.4c11.5,10.4,22.8,21.1,34.2,31.6,4.3,4,6.1,7.3,3.2,13.9-3.1,6.8-2.9,15.2-3.9,22.9a59.8,59.8,0,0,0-.1,7.3c-5.4-.7-10.4-1.3-15.4-2.2-1.2-.2-2.2-1.6-3.1-2.6-2.9-3.3-5.7-6.2-10.9-6-1.6.1-3.6-2.7-5.1-4.5-3.2-4.1-5.6-9-9.4-12.4C49.32,55.42,35.52,58.72,28.12,67.62Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanMiguel