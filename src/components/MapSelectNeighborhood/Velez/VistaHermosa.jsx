import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VistaHermosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.5 49.03" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VISTA HERMOSA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,19.43c.8-.9,2-2.3,3.2-3.6,1.9-2,3.7-3.4,2.5-7.2-1.6-5.4,4.2-9.9,9.9-8.3,10.7,2.9,21.3,6,32,8.8,2.1.5,4.5-.7,6.6-.2,4.4,1,8.6,2.9,13,3.7s8.7.4,13,1.1c3.4.5,6.6,1.7,10.3,2.7C84.3,28.63,71.6,35.23,71.4,49c-6-.5-11.7-.6-17.3-1.6-7.3-1.3-14.4-2.1-20.7-7.9s-15-8.7-22.6-13C7.3,24.33,3.9,21.83,0,19.43Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VistaHermosa