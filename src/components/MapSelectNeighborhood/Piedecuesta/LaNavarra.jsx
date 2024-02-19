import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaNavarra = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.5 74.59" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA NAVARRA', municipio.toUpperCase())}
              className="cls-1"
              d="M31.53.39a25.82,25.82,0,0,1,9.1,1.4c5.8,2,11.7-.9,17.6-.9,7.7,0,15.3-1.5,23-.6,1.7.2,2.2,1.1,3,2.3,1.3,1.8,3.4,4,5.6,2.3,4.4-3.4,8.5,0,12.8-.1,4-.1,3.7,4.1,4,6.9.8,6.7,2.6,13.2,4.1,19.8.9,3.9,2.6,4.8,6.5,4.4,5.2-.6,10.4-.2,15.6-.3,2.9,0,4.9.4,2.8,4a18.28,18.28,0,0,0-1.4,4.7c-2.3,8.8-2.1,8.5-9.3,3.3-3.1-2.2-7.1-3.1-10.8-4.4-2.7-1-5.3-1.9-7.3-4-4.3-4.7-8.9-7.2-14.8-2.2-1.4,1.2-3.6-.2-5.4-.4-6.8-.8-13.5-.9-19.5,3.6-3.2,2.4-8.1,2.4-11.5,2.4-12.8-.2-17.4,9.5-23.4,17.3-4.7,6.1-9.9,10.9-16.9,14-3.9,1.7-7.5.2-8-3.1-1.2-6.9-5.8-13-4.8-20.3.9-7-3.3-13.4-2.4-20.3.9-6.4-.1-14.7,3.6-18.7,5.2-5.7,12.7-10.8,21.6-11C26.93.39,28.63.39,31.53.39Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaNavarra