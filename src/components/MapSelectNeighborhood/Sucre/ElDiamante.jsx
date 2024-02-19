import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElDiamante = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.03 96.17" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL DIAMANTE', municipio.toUpperCase())}
              className="cls-1"
              d="M0,94.67c0-8.4-.11-16.7.1-25.1a7.26,7.26,0,0,1,1.5-3.9c5.4-7.3,7.2-15.1,3.7-23.9a4.84,4.84,0,0,1,.5-3.5c3.2-7.1,1.1-13.7-1.2-19.1,7.1-4.7,14.2-9.5,21.4-14.1,1.1-.7,2.89-.3,4.39-.4,1.3-.2,2.9-.1,3.71-.8,6.4-5.3,14.9-5.3,20.2.9,3.9,4.5,7.3,6.5,13.9,5.1,3.6-.7,8.3,4,12.8,6.5C74,24.67,68.13,32,61.82,39c-5.29,5.8-11,11.2-16.7,16.6-9.4,8.8-18.9,17.5-28.3,26.3-1.79,1.7-3.6,3.3-5.2,5.1-2.7,3-5.3,6.1-7.9,9.2C2.42,95.67,1.22,95.17,0,94.67Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElDiamante