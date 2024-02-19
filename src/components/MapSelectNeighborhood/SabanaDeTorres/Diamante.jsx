import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Diamante = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.72 68.83" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DIAMANTE', municipio.toUpperCase())}
              className="cls-1"
              d="M0,44.69c1.3-6.5,2.8-12.5,3.7-18.6.5-3.5,1.4-5.5,5.1-7.1,7.5-3.2,14.3-7.8,21.6-11.4,3-1.4,8.2-.5,9.6-2.6,3.7-5.3,6.5-7.2,11.2-1.6,10-1.9,9.9,7.3,13.2,12.4,3.8,5.9,4,12.5,2.3,19.3-1.4,5.5-3.2,11-3.5,16.6-.6,10.8-8.2,12-16.1,13.3a1.93,1.93,0,0,1-1.3,0c-5.3-2.1-9.3,8.4-15.2,1.4-3.5-4.2-7.2-8.2-10.8-12.3C12,45.29,11.9,45.29,0,44.69Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Diamante