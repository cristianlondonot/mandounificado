import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanIsidro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.6 85.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN ISIDRO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,79.5a21.84,21.84,0,0,1,1.1-5.2c2.7-6.6,5.6-13.1,8.5-19.6a12.6,12.6,0,0,1,6.9-7.3c4-1.8,6.5-7.7,8.7-12.3,3.2-6.8,5.1-14.1,8.2-21,1.6-3.5,4.7-6.3,7-9.5C41.5,3,42.3,1.2,43,0a115.25,115.25,0,0,0,6.2,10.7c.5.6,3.9.2,5-.8,2.4-2,4.1-4.8,6.2-7.3,6.9,11.3,13.2,22.1,20.1,32.6a25.76,25.76,0,0,1-.9,29.2c-1.7,2.2-2.5,6.5-1.6,9,2.1,5.6-.3,6.8-4.9,6.9a16.2,16.2,0,0,1-4.4,0C56.9,77,46.1,79.2,37.2,85.9c-5.7-4-10.2-7.8-15.3-10.5-1.7-.9-4.9.4-7.3,1.2C10.2,78,6,79.8,1.7,81.4,1,80.7.5,80.1,0,79.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanIsidro