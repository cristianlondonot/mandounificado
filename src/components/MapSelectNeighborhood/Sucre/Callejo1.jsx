import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Callejo1 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.9 45.43" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CALLEJERO 1', municipio.toUpperCase())}
              className="cls-1"
              d="M60.3,4.23c5,12.2,9.3,22.7,13.6,33.3-3.4-.7-7.6-2.6-11.7-2.3-9,.6-18.5,1-26.8,4.1-4.8,1.8-8.6,3-13.5,2.1-1.4-.3-3.1.7-4.5,1.5-7.2,4-10,3.5-13.8-3.7-1.7-3.3-2.5-7.1-3.6-10.7.4-.6.9-1.2,1.3-1.8,6.4,2.1,12.9,3.9,19.1,6.5,5.2,2.2,9.9.1,9.7-5.8-.2-6.6,2.5-11,7.8-14.6,1.6-1.1,2.7-3.5,3.3-5.6,2.3-7,5.7-8.8,12.7-5.9C56.6,2.33,59.2,3.73,60.3,4.23Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Callejo1