import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cuchina2 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.91 57.13" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUCHINA 2', municipio.toUpperCase())}
              className="cls-1"
              d="M14.58,5.73c6.7-1.9,12.3-3.7,17.9-5.1,1.6-.4,3.5.4,5.2.5,2.6,0,5.3-.1,7.9-.3,1.8-.1,4.7-1.2,5-.7,1.3,2.2,2.8,5.1,2.2,7.2-.9,3-3.8,5.2-5.4,8.1-1.2,2.1-1.6,4.5-2.9,8.4-2.5,1.1-7.3,2.2-10.7,4.9-3.7,2.9-7.6,6.8-9,11.1C21.38,50.43,17,52,7,57.13c-6.3-3.8-7.3-9.1-6.9-16.5C.58,32.33,2,26,8.58,20,12.48,16.63,13.08,9.63,14.58,5.73Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cuchina2