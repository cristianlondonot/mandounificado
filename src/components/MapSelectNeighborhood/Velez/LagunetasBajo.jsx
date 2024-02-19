import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LagunetasBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.5 31.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LAGUNETAS BAJO', municipio.toUpperCase())}
              className="cls-1"
              d="M25.8,17.6c.8,1.4,1.2,3,2.3,4.1,1.6,1.5,3.9,2.3,5.2,3.9,1.2,1.4,1.5,3.6,2.2,5.5-2-.2-4.4.2-5.9-.8-6.6-4.1-14.1-2.1-21-3.4-3.1-.6-7-2.8-8.3-5.4-1-2.1.7-6.5,2.6-8.7C5.2,10.3,9,9.1,12.4,7.2c-1.3-2.4-2.2-4.1-3.1-5.7C9.8,1,10.4.5,10.9,0c2.4,2.5,4.8,4.9,7,7.5,2.8,3.3,5.3,6.8,8,10.3C26,17.8,25.8,17.6,25.8,17.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LagunetasBajo