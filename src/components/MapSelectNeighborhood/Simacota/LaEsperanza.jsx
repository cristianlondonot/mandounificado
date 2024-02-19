import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsperanza =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.64 119.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA ESPERANZA', municipio.toUpperCase())}
              className="cls-1"
              d="M42.81,119.7c-1.7-2.9-2.8-4.9-3.9-7-.5-.9-1.4-2-1.3-2.9.8-6.3-3.2-11.3-4.4-17-1-4.6-4-6.9-9.1-7.4-4-.4-7.8-2.3-12.7-3.8-.7-2.2-2.5-6.1-3.1-10.2a16.3,16.3,0,0,1,1.3-9c3.5-6.8,2.7-11.3-3.8-15.1-7-4.2-7.3-5.9-2.9-12.7a66.41,66.41,0,0,0,4-8.1c3.6.4,7.4,2,9.3.8s2.5-5.3,3-8.3C20.31,13,21,6.9,22,0c3.5,1.3,5,2.6,3.8,6.4-2.1,6.3-.4,8.1,6.2,6.8a14.16,14.16,0,0,0,6.8-3.4c3.7-3.8,8.2-3.2,10.8-.3,4,4.5,6.6,2.2,10,.2,1.7-1,4.3-2.3,5.7-1.6,1.8.9,3.9,3.5,4,5.4.4,11.2,6.4,19.4,12.7,27.8,2.7,3.5,4.2,8.1,5.6,12.4.3,1-1.6,3.2-3,4.1s-4,.5-5.2,1.6c-1.8,1.6-3.8,4-3.9,6.1-.1,1.7,2,4.2,3.7,5.2,3.9,2.4,4.8,5.9,2.3,9.4-3.1,4.4-5.6,9.3-8.6,13.8a22.28,22.28,0,0,1-4.6,4.6c-4.2,3.6-9.2,6.6-12.4,10.9C52.21,114.6,48.31,118.8,42.81,119.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaEsperanza