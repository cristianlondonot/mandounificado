import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoJazmin = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.32 108.26" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTO JAZMIN', municipio.toUpperCase())}
              className="cls-1"
              d="M20.9,108.26c-.9-10.4-2-20.4-.6-30.6,1.1-7.8-2.2-9.6-9.5-6.7C7.9,72.06,5,73,0,74.66c3.4-7.2,6.4-12.7,8.6-18.6.6-1.6-.6-4.5-1.8-6.1-3.5-4.8-3.9-10.3.9-13.4,8.4-5.4,10.9-14.7,16.4-22A110,110,0,0,1,35.8,1c1.4-1.3,5.5-1.2,7.5-.2,3.3,1.8,6.1,4.8,8.9,7.5,3.3,3.2,6.5,5.1,11.4,3.6,5.8-1.7,12.1,5.1,10.7,11s-3.9,11.6-3.7,17.3a80,80,0,0,0,4.2,22.2c1.8,5.5-1.3,16.5-6.3,19.4-3.4,2-6.1,5.1-9.2,7.7-3.8,3.3-8.3,3.6-12.7,1.9-5.8-2.2-9.5.8-13,4.4-3.6,3.8-6.9,7.9-10.4,11.7C22.9,108.06,22.1,108,20.9,108.26Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltoJazmin