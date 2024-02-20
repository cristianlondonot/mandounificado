import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Malparaiso = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 88.39 120.48"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MALPARAISO', municipio.toUpperCase())}
              className="cls-1"
              d="M7.6,78.22c-2.8-7.6-5.2-14.3-7.6-21,7.5-1.5,11.9-6.8,12.9-14.4.8-5.7,2.5-11.3,3.7-16.9.8-4,1.2-8.1,2.4-11.9.6-2.1,2.7-3.7,3.8-5.8,1.2-2.3,1.8-4.8,3.1-8.2,2.3-.2,3.7,1.3,5.5,5,5.7,11.2,7.3,23.6,11.1,35.3,1,3.2,3.7,5.9,5.6,8.8,1.5,2.3,3,4.7,4.7,7,1.3,1.8,2.8,3.4,4.4,5.3-2.9,8.4-1.8,17.6.9,26.1,1.2,3.6,6.3,6.2,10,8.7,5.7,3.8,11.8,7,17.4,10.8,1.6,1.1,3.3,4.3,2.8,5.5-.8,1.9-3.5,3.6-5.6,4.1-7.3,1.5-14.7,2.3-22.1,3.6-7,1.2-12.1-1.8-14.2-8.5a20.59,20.59,0,0,0-1.7-3.3c-1-2.3-1.9-4.6-3.1-6.8-1.7-2.9-3.4-7.8-5.7-8.2-5.5-.9-8.7-4.2-12.6-7.2-2.3-1.8-5.8-2.3-5.4-6.6.1-.7-3.6-2.1-5.6-2.4C10.6,76.92,8.9,77.92,7.6,78.22Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Malparaiso