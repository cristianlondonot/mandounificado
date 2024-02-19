import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaRefaelDeLaArenosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 121.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN RAFAEL DE LA ARENOSA', municipio.toUpperCase())}
              className="cls-1"
              d="M63,37.6c-4.9,9.3-9.7,18.5-14.7,27.6-.9,1.6-2.9,2.6-4.3,3.9s-3.6,2.8-3.7,4.3c-.7,8.7-4,15.4-11.7,19.9A5.19,5.19,0,0,0,26.8,96c-3.6,8.5-7.1,17-10.9,25.9-4.2.1-7.2-1.5-9.1-5.9-1.5-3.4-4.3-6.3-6.8-9.9,4.2-8.2,7.5-17.6,21.4-19.4-5.2-4.2-8.1-7.1-11.5-9.2-6.6-4.1-6.5-5.6-3.7-12.7,3.3-8.4,9.4-14.4,14.9-21.1,2.8-3.4,4.5-6.6,1.2-11.2C18.4,26.9,15.5,20.6,12,14.1,17.3,9.8,23.5,4.9,29.6,0,35,17.7,51.6,25.6,63,37.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaRefaelDeLaArenosa