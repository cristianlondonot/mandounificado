import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Irlanda = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.35 115.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('IRLANDA', municipio.toUpperCase())}
              className="cls-1"
              d="M66.15,0c12.2,11.4,25.9,19.2,39.2,26.3-4.5,8.6-9.9,17.3-13.8,26.6C88,61.7,86.45,71.4,83,80.3a101.69,101.69,0,0,1-15,26.4,75,75,0,0,0-5.5,8.5c-3.5-3.1-6.4-5.9-9.7-8.3-3.7-2.7-5.6-11.1-4.3-16.3a17.19,17.19,0,0,0-.9-9.5c-1.7-4.3-3.3-8.1-1.2-12.9.8-1.9-.3-5.9-2-7.3-2.9-2.5-6.8-3.8-10.4-5.6-.4-.2-1.1-.2-1.1-.4-2.5-10.6-10.4-7.9-17.6-7.5-1.3.1-2.7-1.8-4-2.9-2-1.9-4-3.9-5.6-5.4-1.8-5-3.5-10-5.4-15-1.2-3.3,2.1-9.7,5.8-10.1,8.4-.9,16.8-1.3,25.2-1.9,2.1-.2,5.1.3,6.1-.9C41.75,6,47.85,6.5,53.45,5,58.35,3.6,62.65,1.4,66.15,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Irlanda