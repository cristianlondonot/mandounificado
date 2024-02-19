import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Altamira = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 35.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTAMIRA', municipio.toUpperCase())}
              className="cls-1"
              d="M22.8,19.5c-2.3,5.3-4.4,10.2-7,16.2-3.6-4.4-7-9.4-11.2-13.6S1,13.6,2,8.4C2.5,5.7.7,2.5,0,0,5.9,1.5,11.5,2.7,17,4.5c1.4.4,2.4,2.8,3,4.4C21.2,12.7,22,16.6,22.8,19.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Altamira