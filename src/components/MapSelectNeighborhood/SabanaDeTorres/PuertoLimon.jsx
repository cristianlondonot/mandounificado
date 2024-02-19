import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoLimon = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.6 91.3">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUERTO LIMON', municipio.toUpperCase())}
              className="cls-1"
              d="M37,9.1c5.2,1,8.9,1.8,12.7,2.4C59.2,13,68.8,14.2,78.2,16c1.8.4,4.7,3,4.7,4.4-.5,8.8,5.4,10.1,11.8,11.3a34.31,34.31,0,0,1,5.9,2.2c-3.3,4.6-6,8.2-8.5,11.9-3.2,4.9-1.8,9.6,2,13.1,3.6,3.3,7.5,6.5,13.6,3.3,4.5-2.4,10-3.1,15-4.6.3.8.6,1.5.9,2.3-4.6,3.2-8.8,8.2-13.8,9.3-5.9,1.2-6.6,5-8.3,8.9C96.6,89.5,96,89.3,84.4,87.7c-7.7-1.1-15.8-.2-23.7-.2-5.2,0-10.3-.2-15.5.2C30.4,88.8,15.7,90,0,91.3c.6-7.9,1.5-15.9,1.8-24C2,61.6,1.3,55.8,1,50.1c0-.6-.7-1.4-.5-1.8C8.1,33.3,4.6,17,6,0c1.9,1.2,4.2,1.8,4.2,2.7.4,6.8,3.6,10.9,10.3,12.6s11.4-1.4,15.8-5.7C36.9,9.2,37.4,8.8,37,9.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuertoLimon