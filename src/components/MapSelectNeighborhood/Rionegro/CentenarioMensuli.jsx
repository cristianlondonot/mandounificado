import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentenarioMensuli = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 173.75 130.01"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CENTENARIO MENSULI', municipio.toUpperCase())}
              className="cls-1"
              d="M46,10.2c2.8-.5,5.8-1.8,8.3-1.2,10.1,2.5,15.2-.8,18.1-9,5,4.8,9.9,9.3,14.4,14s9.6,7.8,16.4,8c12.7.5,25.4,1.6,38.1,2.2,4.2.2,8.4-1,12.5-.5,8.9,1.1,11.5,9.4,16.2,15.2a52.48,52.48,0,0,1,3.8,6.1c-6.6,1-13.2,1.7-19.6,3.2-2.5.6-4.4,3.2-6.8,4.6-6.1,3.5-12.3,7-18.6,10.3-7.1,3.7-14.6,6.8-21.4,11-2.4,1.4-3.9,5.1-4.8,8-2.7,9.7-4.4,19.8-7.6,29.3-1.7,5.2-2.5,9.9-.9,15.1.3,1-.1,2.3-.1,3.5-6,.2-7.3-4.2-8.3-8.2-2.6-10.7-6-12.8-16.5-9.7-1.2.4-2.6,0-4.7,0,.3-1.6.6-3,.8-4.4.6-4.3.1-7.8-3.1-11.4a95.54,95.54,0,0,1-12.3-18,16.56,16.56,0,0,0-22.5-7.2c-10.8,5.6-10.9,5.4-27,5-1.3-3.7,1.2-5.1,4-6.2a9.31,9.31,0,0,1,2.9-.1c12.4-.3,12.3-.3,13.6-12.6.4-3.5,1-6.9,1.1-10.4.1-4.3.2-7.5,5.3-10.1,3.9-1.9,6-7.6,8.7-11.8,1.1-1.7,1.6-3.8,2.4-5.7C41.05,16.3,43.45,13.2,46,10.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CentenarioMensuli