import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaCeba = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 78.59 97.5"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA CEBA', municipio.toUpperCase())}
              className="cls-1"
              d="M16.5,97.5c-1.5-4-2.4-8.2-4.6-11.5-1.5-2.3-4.8-3.5-7.6-4.7-4.4-1.9-5.4-5.1-3.1-8.8,3.6-5.6,4.7-11.1,2.2-17.4-1.9-4.8,1.5-6.5,5-7.9,2-.8,5.2-.8,5.8-2.1,1.2-2.8,1.2-6.1,1.5-9.2.1-1.2,0-2.4,0-4,10.1,6.2,17.1,2.4,18.7-9.8,9.2-2.4,9.2-2.4,9.2-11.7,3.5-1.2,7.1-2.2,4.9-7.4-.3-.7,1.6-2.2,2.3-3,3.3,10,6.3,19.9,10,29.6,1,2.6,4,4.6,6.6,6.2,6.4,4,7.7,7.2,6.1,14.7a7.6,7.6,0,0,0,2,6.1c3.3,3.2,4.2,6.3,1.5,10.2-5.2,1-10.8,1.5-16,3.2-3.1,1-5.8,3.7-8.5,5.8C41.4,84.5,30.5,93.8,16.5,97.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaCeba