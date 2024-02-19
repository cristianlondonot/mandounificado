import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cararito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.45 61.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CARARITO', municipio.toUpperCase())}
              className="cls-1"
              d="M46.3,61.2c-3.9-5-7.8-10.1-11.7-15.1-4.5-5.9-10.4-9.4-17-12.7S5.9,24.6,0,20c4.3-7.9,6-8.4,14.8-6.8,2.7.5,6.4-.2,8.4-1.9,6.4-5.2,13.3-5.2,19.6-1.7,5.7,3.1,8-2.2,11.8-3.2.9-.2.6-4.8.8-6.4,3.7,3.2,8.3,6.8,12.4,10.9a6.53,6.53,0,0,1,1.5,5.5,118.9,118.9,0,0,1-6.6,18.1c-1.9,4-4.5,8.2-7.9,10.9-5.4,4.1-7.9,9.4-8.5,15.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cararito