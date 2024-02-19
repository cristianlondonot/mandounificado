import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElFiloDeLaCuchilla = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.5 94.4" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL FILO DE LA CUCHILLA', municipio.toUpperCase())}
              className="cls-1"
              d="M79,88.7c1.5,1.4,2.4,2.3,3.9,3.7l-7,2a8.33,8.33,0,0,1,.4-1.5c-3.6-1.1-7.2-2.8-10.8-3.1-3.4-.3-5.1-1.8-7.6-4-4.3-3.8-10.1-6.1-15.4-8.7-2.7-1.3-5.9-1.8-8.7-3A23.84,23.84,0,0,1,21.7,63.5C18,57.2,11.2,52.6,5.6,47.5,4.3,46.3,2.4,45.7,0,44.4,8.5,29.4,16.9,14.7,25.3,0c.8.3,1.6.5,2.4.8,0,5.3.6,10.7-.1,15.9-1.2,8.2,4.1,10.7,9.8,13.6,3.6,1.8,6.6,4.9,10.2,6.6,3,1.4,6.5,1.7,9.8,2.4.5.1,1.5-.5,1.7-.3,4.7,4.5,11.7,3.2,16.4,6,6,3.5,11.6,3.6,17.8,4,8.1.5,14.2-1.2,19.7-8.5,5.1-6.8,12.3-13.3,22.8-10.5a3.52,3.52,0,0,0,2.5-.2c7.2-5.5,15.2-1.3,24-2.5-4.3,9.4,4.1,12.1,8.2,16.5,3.3,3.5,4.5,6.8,5,11.9-12.2-6.2-9.1,8.4-15.9,9.1-4.8,1.4-9.7,2.8-14.6,4.2l-3-5.4c-3.3-6.4-8.5-7.4-14.8-3.6-2.4,1.4-5.9,1.1-8.5,1.6.3,6.1.6,11.7.9,17.5-9.2-2.3-17-.8-24.5,3.2-.7.4-1.8,1.2-2.3.9C86.1,80,83.5,85.8,79,88.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElFiloDeLaCuchilla