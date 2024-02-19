import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const RioSucio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.1 64.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('RIO SUCIO', municipio.toUpperCase())}
              className="cls-1"
              d="M78.6,58.3c-5.4-2.4-9.2-4-13-5.8-8.1-3.9-11.7-2.1-13,6.7-.2,1.6-.6,3.2-1,5-3.4-1.6-6.2-3-9.2-4.4-1.1-4.7-.1-11.2-7.2-12.3-4.9-.7-10.2-.8-10.5,6.6C16.6,52.3,9.5,43,0,54.1c.7-5.3,1.2-9,1.6-12.7.2-1.9.7-3.9.2-5.6C-1.9,23.1,2,18.4,15.1,20.5c5.1.8,9.3-.3,14.2-2.7C37.7,13.6,43.4,7.3,48.5,0c4.6,9.9,13.8,11.8,21.9,14,5.2,1.4,7,4.6,9.2,8.1s4.1,6.7.3,11.6c-2.7,3.4-2.1,9.6-2.5,14.6C77.3,50.6,78.1,53.3,78.6,58.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default RioSucio