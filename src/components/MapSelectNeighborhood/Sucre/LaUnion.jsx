import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaUnion = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.24 80.58">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA UNION', municipio.toUpperCase())}
              className="cls-1"
              d="M4.14,69.15c.3-2,.6-3.5.8-5.1-.3-.1-.5-.2-.8-.3-1.2,1.9-2.4,3.7-3.9,6.1,0-5.3-.7-10.2.3-14.8.6-2.6,3.7-4.8,6.1-6.8,3-2.5,6.2-3.8,1.8-8.5-4-4.2-1.6-10-.4-15,1.7-7.2-.1-13.8-2.4-20.7,4.9-5.4,7.2-4.8,13.7-1.7,12.8,6.1,17.9,19.4,27.9,27.9a60.42,60.42,0,0,0,35.4,14.8c3.7.3,7.5-1,13.6-1.9-5.6,5.5-9.5,11.1-14.9,14.3-9.1,5.4-16.3,12.6-23.3,20.1-2.7,2.8-5.6,2.5-9.2,2.9-8.3,1-13.9-4.1-20.8-6C20.34,72.35,12.44,71,4.14,69.15Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaUnion