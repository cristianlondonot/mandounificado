import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PlataDePlatano = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.2 64.75" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PLATA DE PLATANO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,12.22c5.3-2.5,9-4.7,13-5.8,1.4-.4,4.2,1.7,5.2,3.3,3.9,6.2,5.3,6.6,11.4,2.6,1.3-.9,3.4-1.6,4.7-1.2,10.5,3.2,19-.8,27.2-6.8,6-4.5,13.2-4.4,20.3-4.2s14-.2,21-.1c1.9,0,4.5.4,5.4,1.6a173.1,173.1,0,0,1,11.6,16.8c1.2,1.9.8,4.8,1.3,7.2.8,3.5,1.6,6.9,7.1,4.9-1.3,4.2-2.9,6.3-7.8,7.2-5.8,1.2-10.9,5.2-16.5,7.5-7.5,3.2-16.4,3.6-21.4,11.7-.6,1-4.3.6-6.4.1-6.5-1.5-12.1-2.1-17.4,4.1-2.3,2.8-7.8,5.8-12.6,1.4-.8-.8-2.8-1.4-3.6-.9-6.3,3.2-6.6-1.2-8-5.5-3-9.1-5.9-18.4-10.4-26.8-2.2-4.2-7.8-6.6-12.1-9.6C8.5,17.22,4.5,15.12,0,12.22Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PlataDePlatano