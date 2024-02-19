import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VizcainaBaja =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.72 128.3" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VIZCAINA BAJA', municipio.toUpperCase())}
              className="cls-1"
              d="M68.89,116.7c-4.4,3.5-9,5.2-15,4.1-2.4-.5-5.5,3.1-8.3,4.8-5.8-6-12.1-6.1-18.5-.9-1.8,1.5-4.5,1.9-8.9,3.6,5.4-10.7-2-14.3-6.8-19-2.7-2.6-3.7-4.8-2.1-8.8C11.49,95,8.19,90.4,4,87.2S-.61,81.3.59,75.9c1.9-8.6,6.9-14.9,11.2-22,3.6-5.9,6-12,4.9-19.9-.9-6.5,2.8-13.6,3.9-20.5,1.1-6.7,7-9,9.9-13.5,1.7,8.1,3.3,15.5,5.1,23.9-7.9,3.2-6.1,12.2-7.6,19.8-1,5.4,1.6,7.7,7.3,8,4.3.2,8.5,1.2,12.8.9,3-.2,5.9-1.8,9.3-2.9,2.7,3.7,6.3,7.3,12.8,4.6,1.1-.5,3.1,1.1,4.7,1.8l-.2-.1c1.7,4.7,3.3,9.4,5.2,14,1.6,3.8.9,6.1-2.3,9.1-6.8,6.6-12.3,14.7-13.1,24.4-.3,4.3,2.6,8.8,4.1,13.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VizcainaBaja