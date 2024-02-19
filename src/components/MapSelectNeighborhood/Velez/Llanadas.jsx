import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Llanadas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.43 53.63" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LLANADAS', municipio.toUpperCase())}
              className="cls-1"
              d="M22.9,48c-2.8,1.9-5.5,3.7-8.3,5.6-2.3-8.2-8.2-15-6.5-24.2.4-2-3.6-4.7-5.5-7.2C1.6,21,0,19.63,0,18.43c.2-5.5.9-11.1,1.6-16.6A2.92,2.92,0,0,1,2.7,0c6.8,4.4,13.5,8.5,19.9,12.9,2.3,1.6,4,3.9,6,5.9,5.5,5.4,11.1,10.7,16.3,16.3,4.5,4.9,2.8,11.1-3.5,12.7C35.3,49.43,29.1,53.43,22.9,48Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Llanadas