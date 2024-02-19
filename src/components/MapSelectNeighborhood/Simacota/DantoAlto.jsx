import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const DantoAlto =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.05 114.95" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DANTO ALTO', municipio.toUpperCase())}
              className="cls-1"
              d="M9,20.35c5.4,1.5,10.7,3.2,16.1,4.4,5,1.1,8-1.6,8.9-6.8a4.21,4.21,0,0,1,2.1-2.7c5.1-1,5.9-4.4,5.6-8.8s.9-7.5,6.6-6.1c3.4,5.1-1,8.9-2.9,12.8-1.2,2.6-3,5-.4,6.7,2,1.3,5.1,1.1,7.7,1a64.89,64.89,0,0,0,8.8-1.6A14.76,14.76,0,0,0,65,18c7.6-4.5,15.1-9,23-13.7,1.2,3.6,2.7,7.7,4.1,11.8-5.7,5.9-4.2,12.5,4,16.6,0,4.5-2,7.1-6.2,9.4-7.6,4-13.4,10.4-15.7,18.8-2.7,10.1-10.4,13.8-19,17-3.8,1.4-9.1,1.3-9.5,7.1a25.88,25.88,0,0,0,1.3,8.7c.5,1.7,2.3,2.9,3.2,4.6,3.4,6.7-1.3,15.7-8.7,16.7a4.85,4.85,0,0,1-3.3-1.7,119.47,119.47,0,0,1-7.9-10.8c-2.7-4.2-5.1-8.6-7.7-12.8a24.8,24.8,0,0,1-3.9-13.6c0-4.1-2-8.1-2.8-12.3-.7-3.7-.8-7.5-1.8-11.1-.4-1.7-2.2-4.2-3.5-4.2a9.67,9.67,0,0,1-9.5-7.3c-1.3-4.5-2.5-9.8,3.6-13,1.8-.9,2.5-3.7,3.8-5.7A10.43,10.43,0,0,0,9,20.35Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default DantoAlto