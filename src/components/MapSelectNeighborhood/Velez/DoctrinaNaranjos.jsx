import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const DoctrinaNaranjos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.8 22" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DOCTRINA NARANJOS', municipio.toUpperCase())}
              className="cls-1"
              d="M11.29,22C7.39,15.2-2.71,11.5.69,0c6.7,2.7,13.6,5.2,20.2,8.4,1.9.9,4.1,3.9,3.9,5.7s-3.2,3.3-5.2,4.4C17.19,19.9,14.49,20.7,11.29,22Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default DoctrinaNaranjos