import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Lugencio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 43.41" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LUGENIO', municipio.toUpperCase())}
              className="cls-1"
              d="M73,3.51c-11.3,2.8-13.7,12.2-16.3,21.3-2.2,7.8-4.8,9.2-13.4,6.5-6-1.9-12-3.7-18.4-3.5-3.8.1-6.2.7-7,5-.6,2.8-1.7,6.6-3.8,7.7-3.5,1.9-8,2-12,2.9-.8-3.6-2.1-7.2-2.1-10.7.1-3,3.9-4.2,6-4.4,8.3-.6,14-5.2,19.8-10.4,7.2-6.5,16.9-8.5,24.9-13.7.6-.4,2.4,1.2,3.6,1.8s3.2,1.3,3.7-.4C61.7-5.59,67.8,3.41,73,3.51Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Lugencio