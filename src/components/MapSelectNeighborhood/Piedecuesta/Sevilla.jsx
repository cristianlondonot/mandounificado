import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Sevilla = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.26 97.09" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SEVILLA', municipio.toUpperCase())}
              className="cls-1"
              d="M8.36,41.21a9.18,9.18,0,0,1,4.5,5c7.1-8.2,9-17.4,5.6-27.4-1.4-4.1.6-8.7-2.6-12.5-.6-.7,2.5-2.9,4.4-2.2a14.8,14.8,0,0,0,11.5-.2,4.81,4.81,0,0,1,5.9,2.5c1.7,3.9,4.8,4,7.5,2.8,6-2.6,12.1-1,18.2-1.1,5.2,0,8.8-1.7,12.6-5.6,3.8-4.1,10.6-2.6,13.9.4,4.7,4.2,10.6,3.8,15.4,7.5-5.8,8.8-16.9,16.9-8.1,30.1-10.1,6.3-21.8,9.8-31.2,17.8-3.6,3.1-8.8,4.3-13.2,6.3-11.5,5-21,13.6-32.8,18.3-6.9,2.7-6.9,7-2.4,11.2-4.8,5.5-7.1,2.6-9.8-2.3-1.1-2.1-2.1-5.5-5.7-5.4a1.14,1.14,0,0,1-.6-.3c-.7-.7-2.3-1.5-.9-2.7,4.6-3.8-1.8-11.1,4.4-14.1,5.2-2.6,2.7-7.8,4.3-11.6,1.4-3.1-.4-6.7-1.7-9.5C6,45.11,7.56,43.41,8.36,41.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Sevilla