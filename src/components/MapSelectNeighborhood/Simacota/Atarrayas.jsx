import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Atarrayas =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 109.85" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ATARRAYAS', municipio.toUpperCase())}
              className="cls-1"
              d="M0,74.8a22,22,0,0,1,2.4-2.2c10.8-6.4,9.9-11.9,3.3-22.2C2.1,44.8,3,41.2,9.2,39c7.6-2.7,15.6-5.2,20.2-12.7a17.31,17.31,0,0,0,2.3-5C34.2,11.9,40.6,5.8,50.1,0c0,4.2-.2,7.4,0,10.5.3,4.4-.3,9.4,1.7,12.9,1.7,2.9,6.4,4.1,9.8,6.1C60.3,36.8,65.5,44.2,73,45.8c0,.5-.1.9-.1,1.4-1.5-.3-3.3,0-4.5-.9-4.3-3.1-6.7-.7-9.1,2.6a29.35,29.35,0,0,1-5.2,5.9c-4.3,3.4-4.4,6.5-.2,10.9,0,4.7-1.1,9.2.3,12.8,1.6,4.2.7,7.6-.4,11.3-1.5,5.1-.3,9.4,3.5,13.1a34.67,34.67,0,0,1,2.5,2.9c-2.9,5.3-11.6,5.4-17.6.3-5.1-4.3-9.7-9.9-15.6-12.7C16.7,88.6,9.3,80.8,0,74.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Atarrayas