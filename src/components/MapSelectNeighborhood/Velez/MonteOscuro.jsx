import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MonteOscuro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.5 54.52" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MONTE OSCURO', municipio.toUpperCase())}
              className="cls-1"
              d="M67.8,0c6.6,12.7,3.4,23.9-2,34.8-5.4-.8-11.1-5-16.9.9-6,6,1.7,11.6-.4,17.3-8.6,0-17.4-.1-26.2.1-2.9.1-5.9,1.9-8.5,1.3-4.1-.8-8-3-13.8-5.3,3.2-1,4.8-2,6.2-1.9,7.3.6,15-4,17.6-10.8,2.1-5.6,2.8-12,9.3-15.1,1-.5,1-3,1.8-4.4.6-1.2,1.8-3.1,2.5-3C45,14.8,48.3,8.7,53,4.8c.8-.7,2.7-1.4,3.1-1C61.5,8.9,64.7,5.4,67.8,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MonteOscuro