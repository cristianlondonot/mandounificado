import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroPobladoCerrito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 151.53" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CENTRO POBLADO CERRITO', municipio.toUpperCase())}
              className="cls-1"
              d="M6.8,88.6C4,83.8,4,73.5,7.8,69.6,1.7,66.1,4,60.3,4.5,55.4,5.3,48.1,7.3,40.8,8,33.5c.7-8,2.2-8.7,9.5-6.2,4,1.4,9.1,0,13.7-.5,7.6-.9,9.5-7.6,13.7-12.5C50.1,8.1,55.7.4,65.1,0c3.2-.1,8.3,1.8,9.6,4.2,4.1,7.9,10.2,9.8,20.1,8.2.7,15.2,1.5,29.7,2.2,44.8-5.5-.7-9.7-1.4-14-1.8-5.2-.4-8.7,1.8-11.3,6.5-3.1,5.6-7,10.7-10.4,16.1-1.3,2-3.6,4.5-3.2,6.2,2.1,7.8-4.2,13.4-4.9,20.4-.3,3.8-1.9,7.7-3.5,11.3-1.9,4.5.4,6.7,3.5,9.1,4.5,3.6,4.2,6.5-.9,8.9-12.1,5.6-24.2,11.1-36.5,16.3-8,3.3-12.4.4-13.5-8.2-1-7.2-2.3-14.5-2.3-21.7,0-5,2-9.9,2.7-15,.5-3.3-.2-6.9.3-10.2C3.2,93.2,5,91.6,6.8,88.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CentroPobladoCerrito