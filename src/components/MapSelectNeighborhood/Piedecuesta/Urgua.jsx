import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Urgua = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.3 105.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('URGUA', municipio.toUpperCase())}
              className="cls-1"
              d="M.1,82.89c4.6-4.5,10.2-8,11.7-15a15.81,15.81,0,0,1,4.8-8.3c3.7-3.5,2.7-9.5,4.9-14.1.8-1.6.4-4.2,1.6-5.3,8.7-8,8.8-21.3,18.1-28.8,2.3-1.9,2.6-4.6,2.9-7s1.7-3,3.3-3.9c2.6-1.6,4,1.1,4.4,2.2,2.4,7.5,9.4,6.7,14.3,6.9,9.4.3,14.9,5.2,18.3,12.6,4.7,10.3,14.3,12.7,22.9,17.2-1.8,9.8-7.5,19-8.7,29.4-.4,3.8-2,4.3-4.9,3.9-1.8-.3-3.6-1.4-5.3-1.2-3.9.5-4.2,8.2-11.1,4.7-2.4-1.2-7.9,5.1-12.4,6.2C54.3,85,49.2,96.29,39.7,98.59c-9.8,2.3-18.6,10.1-30.5,4.8-9-4-10-2.5-8.1-12.5.6-3.1-1-5.4-1.1-8.1C.3,82.69.1,82.89.1,82.89Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Urgua