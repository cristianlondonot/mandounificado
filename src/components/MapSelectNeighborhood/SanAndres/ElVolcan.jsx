import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElVolcan = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 189.38 118.62"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL VOLCAN', municipio.toUpperCase())}
              className="cls-1"
              d="M8,59.34l1.8-.3c7.2-2.4,13.9-5.5,17.7-12.6,4.5,1.1,9,1.8,13.1,3.4,5.1,2,9.3.5,14.3-.5,5.9-1.1,11-3.9,16.5-5,7.3-1.5,11.3-6.9,16.9-10.3,4.3-2.6,9-4.6,13.2-7.5,5.2-3.5,11-6.8,14.9-11.6,6.1-7.4,13.2-11.5,22.4-14,10.7-3,19.1,1.9,28.3,4.9a48.19,48.19,0,0,1,7.2,2.7c5,2.5,10.1,4.4,10.5,11.9.4,7.8,3,15.4,4.5,23.1.6,3.1-6.2,12.1-10.7,13.3a21,21,0,0,0-12.7,8.9c-1.4,2-5.1,2.8-7.8,3.2-11.8,1.5-21.3,7.2-30.8,14-4.9,3.5-11.3,5.4-17.3,6.5-8.6,1.6-17.5,1.1-26.1,2.7-10.5,1.9-19,7.3-24.1,17.3a4.89,4.89,0,0,1-4.1,1.9c-10.9-1.1-20.6,3.2-30.6,6.3a27.93,27.93,0,0,1-10,.9c-4.5-.2-9.1-1-15.1-1.8,0-4.5-.1-9.5,0-14.5,0-1.6.8-3.1.6-4.6-.8-6.6,1.1-11.2,7.6-14.4,5.3-2.6,6.2-9.3,3.4-14.8A90.62,90.62,0,0,1,8,59.34Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElVolcan