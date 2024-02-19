import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BuenosAires = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.61 203.01" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BUENOS AIRES', municipio.toUpperCase())}
              className="cls-1"
              d="M95.61,181.59c-2.8,5.3-36.7,22.1-41.5,21.4-3.9-9.8-7.2-19.4-11.7-28.4-2.2-4.4-6.2-8.1-10.1-11.2-5.8-4.6-5.6-11.2-7.2-17.2-2.9-11.4-5.3-22.9-7.9-34.4L10,79.39c-.2-.9-.5-1.8-.7-2.7-2.1-9-4.3-17.9-6.1-26.9-1.4-7.1-3.4-14.4-3.2-21.5.4-12,7.8-20.6,16.6-27.9.8-.7,2.8-.3,4.2,0,8.3,1.5,17,2.1,24.8,5.2,5.1,2,9.5,7.2,12.8,11.9a14.73,14.73,0,0,1,1.8,12.8c-.6,2.1,1.4,5.1,2.3,7.6.9,2.3,2,4.4,3,6.6,1.8,3.7,3.6,7.3,5.3,11a16.7,16.7,0,0,1,.9,4c.7,8.5-2.2,16.2-4.5,24.1-1.5,5.4-.3,11.5-.5,17.3-.2,6.8-1.2,13.6-1,20.4.3,7.5.7,15.2,2.8,22.3,1.4,4.6,5.4,9,9.4,11.9,4.2,3.1,6.2,6,6.1,11.2C83.91,177.89,84.51,178.49,95.61,181.59Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BuenosAires