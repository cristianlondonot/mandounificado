import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaUnionDeGalapagos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 146.8 71.83"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA UNION DE GALAPAGOS', municipio.toUpperCase())}
              className="cls-1"
              d="M27.8.64c13-1.7,25.3.1,37.7,3.9,5.9,1.8,12.6,1.1,18.9,1.6,5.2.4,10.4,1,15.5,1,5.8,0,9.1,3.7,12,7.8,2.2,3.1,3.9,6.7,6.1,9.7,1.4,2,3.3,4.4,5.4,5,7.2,1.9,9.3,6.8,9.9,13.5.2,2.1,2,4.5,3.8,5.8,5.1,3.9,7.4,8.8,7.8,15.1.1,2.2,1.1,4.3,1.9,7.2-1.4.2-3,.8-4.5.5-5-1.1-9.9-2.6-14.9-3.9-1-.3-2.7-.3-3.3.3-4.2,4.1-7.6,1.7-11.9-.2-3.7-1.7-8.3-1.9-12.5-1.8-6.9.2-13.2-.6-19.3-4.5-3.9-2.5-8.7-3.8-13.3-4.7-5.5-1-11.3-.7-16.9-1.6-2.2-.4-4.1-2.6-6.3-3.7-4.7-2.3-9.5-4.4-14.4-6.5-.7-.3-1.6,0-2.3-.3-8.6-4.1-17.2-8.3-25.8-12.5-.4-.2-.6-.9-1.4-2.2,2.1-1.5,4-3.9,6.2-4.2,4.7-.5,5.8-3.6,7-7.1.5-1.4,2-3.5,2.9-3.5,8.5.4,9.3-6,11-11.8A12.32,12.32,0,0,0,27.8.64Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaUnionDeGalapagos