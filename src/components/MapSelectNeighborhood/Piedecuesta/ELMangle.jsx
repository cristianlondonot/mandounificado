import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElMangle = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.9 145.25" {...props}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL MAGLE', municipio.toUpperCase())}
              className="cls-1"
              d="M112.57,12.79c2.1,0,4.3.1,6.4-.1,2.4-.2,4.6-.8,2-3.8-1.9-2.2-1.6-4.3.2-6.3,1.1-1.2,1.9-3,4-2.5,2.3.5,1.7,2.5,1.8,4.1.2,4.4-1.6,10.2,2.3,12.7,5.3,3.4,9.5,8.5,16,10.2,6.2,1.7,7.7,6.2,2.4,9-11.2,5.8-14.5,16.9-20.7,26.2-3,4.5-7.7,8.4-9,13.3-2.5,9.8-9.1,19.4-3.8,30.1.6,1.3,1,1.9.2,2.8-8.3,9-11.5,20.2-14.3,31.7-1.5,6.1-4,6.6-8.2,2a59.39,59.39,0,0,1-6.8-9.6c-3.7-6.1-7.3-12-13.8-16.1-3.3-2.1-4.9-7.1-6.9-10.9-2.6-4.8-5.7-6.6-10.7-3.3-4.1,2.6-8.3,2.2-12.7.3-4.8-2-8.9-3.1-15-.7-6.5,2.6-15,.6-22.5-.1-2.1-.2-3.2-2.8-3.4-5.6-.5-5.9,1.9-11,3.6-16.2,1.4-4.3,2.5-8.6,2.3-13.2l-.1.1c3.7-5.2,8.2-7.9,15-5.9,4.7,1.4,9.5-1.3,14.6-.2,2.3.5,7.3-2.3,6.7-7.1-.6-5.1,2.4-5.5,6-5.4,8,.3,15.8,2.1,23.7,3.5,13.5,2.4,19.7-1.7,24.3-14.6,1.8-5.1,2.1-11.3,8.7-14.4,3.6-1.7,3.3-8.3,8-10.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElMangle