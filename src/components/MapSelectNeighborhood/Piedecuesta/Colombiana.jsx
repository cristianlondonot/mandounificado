import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Colombiana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.26 55.67" {...props}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('COLOMBIANA', municipio.toUpperCase())}
              className="cls-1"
              d="M64.26,21.87c-7.7.8-10.2,7.8-13.9,12.7-3.6,4.7-11.4,9.8-17.6,8.8-5.4-.9-9.8-.3-12,5.6-.3.9-.8,3.2-1.8,2.5-7.4-5.5-10.7,4.3-17.4,4.2,2.3-4,4.5-7.7-.6-11.2-2.4-1.7.3-4.6,1.7-5.2,9.5-3.6,14.1-12.4,20.7-19.1A17.4,17.4,0,0,1,34,14.87c5.8-.5,9.9-2.3,11.2-8.6C46.76-1.83,53,0,58.46.67c6.1.7,11.2,5.4,17.8,4.5-1,3.3-5.4,6.2-1,10.3,1.5,1.4.5,3.5-2.3,3.5a11.86,11.86,0,0,0-8.8,3C64.06,22,64.26,21.87,64.26,21.87Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Colombiana