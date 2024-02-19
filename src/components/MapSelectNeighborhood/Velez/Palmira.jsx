import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Palmira = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.3 17.52" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PALMIRA', municipio.toUpperCase())}
              className="cls-1"
              d="M32.3,6.8A49.53,49.53,0,0,1,31,14.5c-.4,1.2-1.9,3-2.9,3a157.21,157.21,0,0,1-16.8-.6c-1.8-.2-3.6-1.7-5.2-2.8C4.2,12.8,2.4,11.3,0,9.6.2,8.1.6,5.8,1.1,2.5,4.2,4,6.9,5.2,10.5,7c2.9-2,6.7-4.7,10-7C24.8,2.4,28.6,4.6,32.3,6.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Palmira