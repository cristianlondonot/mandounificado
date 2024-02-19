import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Caribe = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.56 133.53" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CARIBE', municipio.toUpperCase())}
              className="cls-1"
              d="M72.87,133.53c-12.7-7.6-25.4-15.6-38.6-22.7-8.2-4.4-17.3-7.3-25.8-11.2-1.8-.8-2.7-3.6-4.1-5.4-1-1.3-2.6-2.3-3.3-3.7s-1.5-3.9-.8-4.9c3.9-5.8,8.6-10.9,12.2-16.9,3.3-5.6,6.5-11.6,8-17.9,3.1-12.8,6.8-25.2,13.4-36.7,1.2-2,1.5-4.6,2.7-6.5,1.6-2.5,3.3-6,5.6-6.7,4.2-1.2,8.9-1,13.3-.7,1.4.1,3.2,2.2,3.8,3.8,1.2,3.3,2.6,6.9,2.4,10.3-.9,11.9,7.4,18.1,15,24.4,3.3,2.7,4.5,4.9,3.6,8.9a62.33,62.33,0,0,0-.9,10.6c-.2,8.1,2.1,17.4-1,24.1-4.2,9.2-1.7,17.3-1.6,26C76.87,116.73,74.27,125,72.87,133.53Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Caribe