import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPablo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99.7 114.0"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PABLO', municipio.toUpperCase())}
              className="cls-1"
              d="M99.7,76.79c-4.1,7.9-7.3,15.5-7.6,24.1-.3,7.3-5.4,12.2-12.4,13.1-5.6.7-9.9-2.9-12.5-10.4-3.2-9.3-5.6-10.9-16.7-11.4-1.5-5.8-2.2-5.8-7.6-3.6-2.3.9-5.4.5-8-.2-4.7-1.3-8.4-1-12.2,2.6-2.9,2.7-6.9,4.2-10.5,6.2-.4-.6-.8-1.2-1.2-1.7,2.7-5.7,5.9-11.2,7.7-17.2.8-2.6-.5-6.4-1.8-9.1-2-4.3-3.2-8.1-.6-12.6a5.8,5.8,0,0,0,.6-4.4c-3.8-8-3.4-16.3-2.6-24.8.1-1.1-2.6-3-4.4-3.7a99.46,99.46,0,0,0-9.7-3c-.1-.6-.1-1.2-.2-1.8,1.7-.6,3.4-1.9,5-1.8,5.1.6,7.6-1.9,9.8-6.2,3.4-6.8,11.3-7.7,16.8-2.6s17.6,3.9,24.7-2.2c.7-.6,1.4-1.4,2.1-2,5.8-5.5,6.7-5.5,12.5.3.8.8,1.5,2.1,2.5,2.4,10.1,2.5,9.5,11.5,11.7,18.9a20.72,20.72,0,0,0,3.6,7.1c5.1,6.3,7.4,12.8,3.9,20.8-1.4,3.1-1.7,6.7-2.9,9.9-1.9,5,0,8,4.6,10.1A28.5,28.5,0,0,1,99.7,76.79Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPablo