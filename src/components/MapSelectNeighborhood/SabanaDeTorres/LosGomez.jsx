import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LosGomez = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.1 74.67" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LOS GOMEZ', municipio.toUpperCase())}
              className="cls-1"
              d="M69.5,1.3C75,7.2,80.2,13.4,86,18.8c2.3,2.1,6,2.8,9.3,3.8,2.7.8,5.8.5,8.4,1.5,15.5,5.9,29.3-1.2,43.6-5,7-1.8,13.9-4,20.9-5.5,1.3-.3,3.6,1.5,4.5,2.9,2.6,4.1,4.7,8.5,7.4,13.6-3.8.6-7.8,0-9.7,1.7-6.2,5.4-13.8,4.7-20.9,6.8C130,44.3,111,52,91.5,57.7c-16.6,4.8-33.7,7.7-50.6,11.6a144.9,144.9,0,0,0-17.2,4.5c-6.1,2.3-8.3-.1-9.8-5.7C9.6,52.1,4.8,36.2,0,19.5c1.6-.2,3.8-1.1,5.7-.6,6.9,1.6,12.1-.6,17.6-5.1,6-4.9,12.8-9.6,20-12.2C49.6-.6,57,.4,63.9,0,65.7.4,67.6.8,69.5,1.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LosGomez