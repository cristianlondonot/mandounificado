import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Doradas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.8 98.38" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DORADAS', municipio.toUpperCase())}
              className="cls-1"
              d="M81.8,66.83c-7,6-.6,10.5,4,16.5-5.1,1.8-9.1,3.1-12.8,4.7-4.8,2.1-10.7,2.1-13.4,8.1-.7,1.5-4.3,2.5-6.4,2.2-8.9-1.4-17.8-2.8-26.3-5.4-3.4-1-6.9-4.4-8.5-7.7C11.7,71.73,5.8,57.83,0,44.93c4.8-3.5,9-6.3,12.9-9.5,7.3-6,14.5-12,21.6-18.3,3.3-2.9,7.2-5.7,8.9-9.5,3.9-8.6,15.2-9.2,21.7-5.4,4.1,2.4,8.5,4.1,13.5,6.4-4,4-3.4,10.2-9.8,11.2-.9.1-1.5,3.5-1.9,5.4-.8,4.1-.6,8.6-2.1,12.4-3,7.7-1.7,13.4,5,18,2.1,1.5,3.6,3.7,5.6,5.5A51.71,51.71,0,0,0,81.8,66.83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Doradas