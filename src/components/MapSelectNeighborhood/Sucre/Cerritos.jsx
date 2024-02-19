import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cerritos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.41 67.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CERRITOS', municipio.toUpperCase())}
              className="cls-1"
              d="M13.6,67.1C9.4,56.4,9.1,56.2,0,57.8c1.4-1.5,2.1-3.1,3.2-3.4C16.9,51,20.3,38.5,26.7,28.5a61.55,61.55,0,0,1,6.5-8.7c5.8-6.2,11.3-12.9,18-18C54.2-.5,59.7.4,64,0c.5,0,1.5.6,1.5.9.2,6.6,2,13.8-.1,19.6-2.5,7.2-8.3,13.3-12.7,19.7a9,9,0,0,1-3.4,3.3c-5.8,2.3-11.8,4.2-17.6,6.6-1.7.7-3.8,2.5-4,4-1,6.5-7.1,8.3-10.6,12.5C16.4,67.3,14.7,67,13.6,67.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cerritos