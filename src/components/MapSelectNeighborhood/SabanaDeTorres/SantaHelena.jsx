import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaHelena = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.37 99" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SANTA HELENA', municipio.toUpperCase())}
              className="cls-1"
              d="M11.27,0c3.7,2.5,7.2,4.8,12.3,8.2-12.1-3-13.8-1.8-15,8.8-.4,3.3-.8,6.6-1.3,9.8-1,6.9,3.9,10.4,11.1,13.6,2.2,1,4.8.9,7,1.7a39.6,39.6,0,0,1,5.2,2.4c.6,4.1,1.1,7.3,1.5,10.5a7.78,7.78,0,0,1,.1,3.7C26.67,70.8,21,82.8,15.47,94.9c-.6,1.3-.9,2.7-1.4,4.1-7.3-3.6-9.3-9.5-5.1-16.3,3.6-5.9,2.5-10.1-1.4-16-4.2-6.4-6.3-14.8-7.4-22.5-.8-5.5,1.4-11.5,2.5-17.2a81.55,81.55,0,0,1,2.7-12.1C6.87,9.8,9.17,5,11.27,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SantaHelena