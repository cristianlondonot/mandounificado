import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cuba = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.5 79.3">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUBA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,31c7,.5,13.8,1.6,18.8-5.6,1.3-1.9,5.5-1.9,8.4-2.9.2-2.3.3-4.3.4-5.5C38.8,11.2,49.5,5.6,60.1,0c.5.3,1,.7,1.5,1-4.7,13.7,2.7,24.9,5.9,37.5C62.3,50.6,51,60.4,48.3,74.3c-5.8,1.6-11.7,3.1-18.8,5-1.5-4.6-3-9.3-4.6-14-.8-2.5-1.1-6.4-2.8-7.1C12.2,54,14,42.4,7.5,36.2,5.3,34.3,2.5,32.8,0,31Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cuba