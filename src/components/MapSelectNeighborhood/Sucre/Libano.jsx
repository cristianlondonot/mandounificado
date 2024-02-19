import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Libano = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.6 104.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LIBANO', municipio.toUpperCase())}
              className="cls-1"
              d="M112.2,76.3c-6-3.4-11-2.9-15.2,3.1-.7,1-2.5,1.2-3.8,1.7-3.8,1.5-7.5,3.1-11.4,4.5a128.67,128.67,0,0,1-13.3,4.3c-6.6,1.6-13.4,2.2-19.8,4.4-2.7.9-4.5,4.7-6.7,7.1-2.6,2.9-5.3,4-8.3.2-1.3-1.6-3.4-2.5-4.7-4-3.5-4-6.7-7.3-12.9-8.2-5.6-.8-10.7-5-16.1-7.6C26.6,55.1,53.2,28.3,81.4,0c8.5,1.1,19.9,1.9,31,4.2,3.3.7,6.2,5.1,8.3,8.4,1.9,3.1,3.5,4.9,7.6,5.1,5.3.2,10.7,1.5,15.9,2.8,8.1,1.9,15.7.9,23.1-4.7,5.1,3.9,10.2,7.8,14.3,10.9-9.1,8.2-17.4,15.7-25.8,23.2-3.7,3.3-7.6,6.4-11.6,9.4-5.8,4.4-6.3,6.6-2.1,12.8,3.3,4.8,6.8,9.4,10.2,14.2.6.8.8,1.8.2,4.1A105.67,105.67,0,0,1,142,84.8c-6-3.9-12.5-4.3-19.2-3.4-4.3.5-8,0-9.8-4.5A1.83,1.83,0,0,0,112.2,76.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Libano