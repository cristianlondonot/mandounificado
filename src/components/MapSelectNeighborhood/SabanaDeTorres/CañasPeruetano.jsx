import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañasPeruetano = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.14 71.26" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑAS PERUETANO', municipio.toUpperCase())}
              className="cls-1"
              d="M112.14,18.76c-2.9,2-4.3,3.6-6,4-10.3,2.9-20.8,5.2-31.1,8.3a92.07,92.07,0,0,0-16.2,6.7c-11.2,6-22.2,12.3-33.1,18.8-7.4,4.4-14.5,9.3-22.9,14.7-1.1-6.3-5.5-9.8-.5-16.8,3.9-5.6,7-14.3,1.8-22.4-1.4-2.2-1.2-5.4-1.5-6.9,5-2.3,12.2-3.3,13.6-6.7,3.9-9.4-6.7-10.4-11.7-15,2.1-3.4,3.8-5,7.5-1.5,3.3,3.2,7.3,5.8,11.1,8.5,7.2,5.1,14.9,8.3,24.1,7.6,10.6-.8,21.3-1.1,32-1.4,3.5-.1,7,1,10.5.9,4.6-.1,9.2,4.1,13.9-.5C104.64,16.16,108,17.86,112.14,18.76Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañasPeruetano