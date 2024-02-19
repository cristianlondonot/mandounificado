import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Manco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.86 128.5">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MANCO', municipio.toUpperCase())}
              className="cls-1"
              d="M15,128.48a2.12,2.12,0,0,1-.3-.7c4.7-8.6,1.3-17.9,2.5-26.9.1-.9.4-2.2,0-2.8-7.1-10.4-3.3-24.7-12.7-34.3-2.7-2.7-2.7-6.8-3-10.6-.6-8.5-3.7-17.1,1.5-25.1,1.7-2.7-2.7-4.6.5-7.9,3.9-4.1,7.9-4.9,12.9-5.5a19.09,19.09,0,0,0,9.1-3.5c6.9-5.6,15.1-5.6,23.1-6.4,4.6-.4,9,.7,13.1-3.5,3.3-3.5,6.8,1.2,10.2,2.2,2.7.8,1.6,3.5,2,5.7.8,4.8-1,9.6,1.3,14.5,2.4,5.2-2.1,10.6-3,16-1.1,6-2.1,11.9-2,18,.1,6.6-3.5,12.8-7.2,16.7-4.5,4.7-9.9,9.9-16.3,12.6-5.1,2.1-7,5.7-7.9,10.3-1.9,9.2-8.7,15.1-14.5,21.7C21.46,122.38,21.56,129,15,128.48Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Manco