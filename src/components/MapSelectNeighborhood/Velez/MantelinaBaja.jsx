import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MantelinaBaja = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.64 62.12" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MANTELINA BAJA', municipio.toUpperCase())}
              className="cls-1"
              d="M21.06,0c5.9,6.3,9.8,11.9,15.1,15.7,3.7,2.7,3.7,5.2,3.3,8.7-1.1,9.7-2.7,19.5-3.3,29.3-.3,5.2-3.5,8.1-7.2,8.4-3,.3-7.2-2.2-9.2-4.8s-2.2-6.7-2.7-10.2.3-7.5-.5-11c-1.9-8.6-6.7-14.4-16.3-14.4C-1,12.4,2.46,7.2,10.56,5.1c1.8-.5,3.4-1.8,5.1-2.7C17.86,1.4,20.06.4,21.06,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MantelinaBaja