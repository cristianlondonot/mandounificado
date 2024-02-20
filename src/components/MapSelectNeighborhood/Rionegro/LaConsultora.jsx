import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaConsultora = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.9 157.87"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA CONSULTORA', municipio.toUpperCase())}
              className="cls-1"
              d="M10.5,157.7c4.9-6.6.3-13-4.9-14.7,2.5-3.1,6.1-6.3,7.6-10.2.5-1.3-4.4-4.6-7.2-7.4-.2-2.1-.4-5.3-.7-8.6-.1-.8-.5-1.9-.2-2.4,6.6-9.7-3.3-15.6-5.1-24.7,3.2,1,6.1,1.7,8.9,2.8,5.1,2,10.6.1,13.5-5,.8-1.4,1.5-2.8,2.2-4.1q13,3.2,17.4-10.1c.1-.4.2-.8.3-1.2,4.5-12.8,4.4-12.8-8-18.4.5-3.6,1.6-7.5,1.3-11.1-.3-2.6-2.1-6.7-4-7.2-3.9-1-4.6-3.5-6.1-6.4-1.8-3.4-5.3-6-7-9.5-4.1-8.2-3.9-8.3-1.2-19.5,2.6,3,4.8,4.9,6.3,7.3,2.1,3.5,4.4,4.8,9,5.1,9.3.7,18,1.4,26.2-4.2,1.2-.8,3.6.4,5.4.2,5.1-.4,10.3-.4,15.1-1.8,9.4-2.8,12.2-2.2,19.2,5.2,1.9,2,4.7,3.1,6.9,4.9,3.5,2.7,7.3,4.7,8.3,10.3.6,3.8,4.8,7,7.2,10.2-1.5,3.6-3.2,7.6-4.9,11.5-.2.4-.2,1-.4,1.1-10.6,6-10.4,19.5-18.9,27.1-1.8,1.6-1.2,6.2-1.3,9.5-.1,2.6,1,5.2-3.7,4.2-1.4-.3-4.2,3.3-5.2,5.6-1.9,4.1-3.6,7.9-8.8,8.4-.9.1-1.8.9-2.6,1.6-5.3,5.1-10.6,10.2-15.9,15.2,1.8,2.1,4.1,3.6,4.6,5.7.5,1.9-.4,5.6-1.6,6.2-3.1,1.3-6.9,1.9-10.2,1.5-2.6-.3-5-2.6-7.4-4-8.3-4.6-14.5-2.6-18.7,6.2-1.5,3.3-2.9,6.6-4.4,9.9-.3.7-1.2,1.3-1.2,2-.1,9.3,0,9.3-9.8,8.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaConsultora