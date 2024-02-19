import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaRetirada = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 70.4" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA RETIRADA', municipio.toUpperCase())}
              className="cls-1"
              d="M13.4,38.8c1.2,2.4,2.3,4.8,4.6,9.5,3.3-5.1,5.3-8.7,7.8-11.9,2.7-3.4,8-6.2,8.4-9.6,1.1-9.3,8.4-11.2,14.5-13.4,5.2-1.8,11.5-.8,17.3-.7,3.9.1,6.4-.6,8.4-4.5,1.5-3,5.1-5,8.6-8.2-5.3,24.3-2.9,47.4,1,70.4-11.5-.6-22.9-1.2-34.3-1.6-2.1-.1-4.3,1.1-6.4,1-3.2-.3-6.8-.5-9.4-2-5.7-3.4-10.7-8-16.3-11.5C15,54.6,11.6,54.2,8,53c2.9-6.3-3.3-9.2-8-12.8a15.93,15.93,0,0,0,1.3-1.3C5.3,38.8,9.1,38.8,13.4,38.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaRetirada