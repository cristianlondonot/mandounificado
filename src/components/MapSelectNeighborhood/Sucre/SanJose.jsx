import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanJose = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119 69.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN JOSE', municipio.toUpperCase())}
              className="cls-1"
              d="M72.1,69.1c-1.6-6.5-6.7-7.6-12.3-8.4-3.3-.5-6.4-2.2-9.6-2.8a28.15,28.15,0,0,0-7.1.2c-1.5.1-3.1,1-4.3.7-5.9-1.6-11.8-3.6-17.6-5.4-.6-.2-1.4,0-1.8-.4C14.7,48.6,10,44.9,4,51.1c-.4.4-1.6-.1-4-.3,1.7-2.4,2.8-4.1,4-5.7.4-.5,1.2-.7,1.4-1.2C9.7,33.8,14,23.8,18,13.6c.4-1-1.3-2.9-2.3-5,1.8-3.8,4.4-6.7,10.1-6.4,3.5.2,7.1-2,10.6-2.2,1.4-.1,3.1,2.2,4.5,3.7,2.2,2.3,3.8,5.9,6.4,6.9,6.7,2.6,10.3,6.9,11.4,13.8.3,1.6,2,3,3.3,4.3,4.4,4.5,8.9,8.9,13.3,13.4,3.5,3.5,6.8,7.1,10.2,10.7.8.8,2,1.4,2.5,2.3,3,5.4,5.9,6.8,12.3,3.3,4.9-2.7,11.8-1.9,18.7-2.7-.5,4.2-1,8.4-1.7,14-4.9-1-9.9-1.2-14.3-3-7.3-2.9-14.2-3.7-21.5-.4-3,1.2-6.3,1.8-9.4,2.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanJose