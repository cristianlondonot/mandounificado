import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaBarbara = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.81 155.13"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA BARBARA', municipio.toUpperCase())}
              className="cls-1"
              d="M75.6,15c7.5-11.6,18.6-13.9,30.3-15,5.3-.5,12.9,6.7,12.6,12.4-.6,10.7-1.8,21.4-3,32.1-.8,7.1-.3,13.5,5.5,18.6a20.6,20.6,0,0,1,3,4.1c3.1,4.6,5.1,10.6,9.4,13.7,6.1,4.4,7.3,9.9,8.3,16.4,1,6.7,3.3,13.4,3.1,20.1-.3,9.1-6.4,15.8-12.9,21.7-1.1,1-4,.2-6-.3-3.8-.9-7.5-2.3-11.3-3.2-3.1-.8-6.4-1.9-8,2.6-.3.8-2.6,1-4,1.3-4.7,1.1-9.4,2.5-14.2,2.9-3.5.3-7.2-.8-10.8-1.4-1.6-.3-3.2-1.6-4.7-1.4-7.5.8-14.9,1.9-22.3,2.9-.6.1-1.1.5-1.6.4-8.7-1.7-14.6,3.6-21,8-2,1.4-4.8,1.8-7.3,2.3-3.8.8-7.7,2-11.5,1.9-3.2-.1-6.4-1.8-9.2-2.7.7-8.9,1.1-17.2,2-25.4.2-1.4,1.7-3.5,3-3.9,4.9-1.2,10.1-1.5,15-2.7,3.3-.8,7.3-1.7,9.5-4,9-9.5,17.1-19.9,26.4-29.2a98.85,98.85,0,0,0,15.4-20.6,14.29,14.29,0,0,0,1.5-7.4c-.4-9.1-1.1-18.3,3.2-26.5C79.2,26.32,80.1,20.72,75.6,15Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaBarbara