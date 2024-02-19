import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Queraga = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.73 90.23" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUERAGA', municipio.toUpperCase())}
              className="cls-1"
              d="M.53,5.83c8.4,3.2,16.7,7,25.4,9.5,5.6,1.6,12,2.8,17.6,1.8s10.4-5.3,15.5-8c5.9-3.1,11.7-6.6,17.9-8.8,2.3-.8,7.1-.5,7,4.7v.6c.7,16.8,2.8,18.2,20.8,12.8,3.6,16.3,7.2,32.5,11,49.2-7.9-2.8-15.4-4.8-22.4-8.1-14.2-6.7-26.7-3.3-38.3,5.7-4.7,3.7-8.6,8.5-13.5,12-6.5,4.5-13.6,8.2-21.7,13,0-4.6-.3-7.6,0-10.5,2.1-19.4-5.7-35.5-16.8-50.4a12.56,12.56,0,0,1-2.8-10.7C1,14.53.53,10.23.53,5.83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Queraga