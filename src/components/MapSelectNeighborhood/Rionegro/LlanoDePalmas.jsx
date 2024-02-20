import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LlanoDePalmas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 106.72 89.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LLANO DE PALMAS', municipio.toUpperCase())}
              className="cls-1"
              d="M88.8,0c4.9,4.5,9,7.1,11.5,10.9,2.4,3.6,3.7,8.3,4.3,12.7,1.2,8.1,2.3,16.4,2.1,24.6-.1,3.5-3.4,7-5.2,10.5-.8,1.5-2.5,3.1-2.4,4.5,1,9.1-6.2,10.2-11.9,12.8a5.36,5.36,0,0,1-1.1.5c-9.9,3.4-9.9,3.4-8.6,12.7-4-3.7-7.9-6.8-13.5-4.2a3.15,3.15,0,0,1-2.4-1.1c-2.7-3.8-4.7-8.1-7.8-11.4-4.5-4.9-9.1-10.1-14.7-13.6-4.5-2.8-10.4-4-15.9-4.7-2.3-.3-5.4,2.2-7.5,4.2-3.9,3.7-7.3,3.4-9.6-1.3C3.9,52.7,1.8,48.2,0,44.6,3.9,40.8,7.5,37,11.3,33.5c1.4-1.2,3.8-2.6,5.1-2.1,8.3,3,13.7-2.7,20-5.9,3.6-1.8,6.1-7.7,11.3-2.7,4.8-2.7,10.7,2.8,15.7-2.4,2.2-2.3,6.9-1.9,10.1-3.5a21.59,21.59,0,0,0,6.4-5.3C83.2,7.8,85.9,3.8,88.8,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LlanoDePalmas