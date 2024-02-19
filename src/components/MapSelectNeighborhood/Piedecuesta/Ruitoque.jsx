import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Ruitoque = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.24 124.89" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('RUITOQUE', municipio.toUpperCase())}
              className="cls-1"
              d="M38,4c2.6-2.6,6.5,3.1,8.8-1.4,4.5,2.6,8-1.7,12.1-2.1,2.2-.2,4.1-1.3,5.5.9a4.71,4.71,0,0,1-.5,5.9,28.23,28.23,0,0,0-1.8,2.9c-3.4,5.2-3.4,5.2,1.9,8.6-5.8,2-9.7,3.8-2.1,9.1,2.6,1.8,1.4,7.9-.3,11.7-3.1,6.6-3.8,13.4-3.8,20.5,0,4.6-2.8,9-3.5,13.2-1.8,10.4-8.2,18.4-11.4,27.9-1.3,3.8.5,6.4,3.4,8.1,3.7,2.3,6.2,5.8,9.3,8.6,1.4,1.3,3.3,3.6,1.9,4.7-2,1.5-5.1,1.9-7.8,2.3-1.9.3-3-1.2-3.2-3-.3-3.4.6-9-3-9-6.8-.1-14.2-4.2-20.8,1.2-1.6,1.3-2.8,3.3-5.4,2.2,1.7-8.4-6.9-22.1-17.2-27.3,8.1-7.6,8.5-12.8,2.2-21.8a10.81,10.81,0,0,1-1.7-10.4c2.3-7.6,2.2-15.7.8-23.8-.6-3.5-.4-7-.5-10.6,6.1.2,5.5-8.4,11.4-8.5.3.2.5.4.8.6,2,4.3,5.1,5.1,9.1,2.9.8-.5,1.7-.9,2.5-1.3,5.7-3.1,11.4-5.9,17.7.1-1.9-4-3.6-7.4-4.4-11.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Ruitoque