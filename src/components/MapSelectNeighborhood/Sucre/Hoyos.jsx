import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Hoyos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.6 88.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('HOYOS', municipio.toUpperCase())}
              className="cls-1"
              d="M0,32.52c.3-.4.5-.7.6-.7,9,.1,14.9-5.4,20.3-11.6A3.58,3.58,0,0,1,23.7,19c13.5,3.4,22.2-5.5,32.1-11.8,3.8-2.4,8.9-3.2,13.4-4.3A131.8,131.8,0,0,1,86.8,0c2.2-.2,4.5,1.5,6.8,2.3-.9,1.5-1.5,3.3-2.8,4.4-6.4,5.4-12.7,10.9-19.5,15.8-2.9,2.1-6.6,3.1-10.1,4.1C56.1,28,50.8,28.72,45.7,30c-2.4.6-6.4,1.6-6.7,3.1-.7,3.1-.5,7.4,1.2,9.8,4.4,5.9,10.1,10.9,14.8,16.6a82.4,82.4,0,0,1,7.4,11.1c1.9,3.2,1.2,4.9-2.8,6.1-7.7,2.3-16.3,1.6-22.6,8.7-2.9,3.3-7.8,3.9-12-.6-4-4.4-9-7.8-13.4-11.9-1.3-1.2-2.7-2.9-2.9-4.5C8,62,8.5,55.42,7,49.22,5.8,43.42,2.4,38,0,32.52Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Hoyos