import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VeinteDeJulio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140.8 150.59"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CEINTE DE JULIO', municipio.toUpperCase())}
              className="cls-1"
              d="M9.3,100.99c1.7-3.2,2.7-5.1,3.3-6.1,2,.2,4.7,1.2,5.2.5,1.2-1.7,2.1-4.2,1.7-6.1-.6-3-2.8-5.3,2.9-4.9,2.3.2,4.9-2.4,9.4-4.8-5-2.4-8.3-3.9-12.8-6.1-.1-3.8-4.1-6.3-8.8-6.9,2-2.6,4.8-4.8,5.7-7.6,1.6-4.7-2.8-5.9-5.9-7.8-1.1-.7-2.7-2.1-2.6-3,.8-6.7-4-9.8-7.4-12.5C6,26.19,11.7,17.09,17.5,7.89c5.4,1.5,6.4.9,10.1-7.4,1.2,2,1.9,3.4,2.8,4.7,3.9,5.5,7.8,5.5,12.8,1,2.7-2.5,6-4.5,9.4-6.1,1-.5,3.3,1.1,4.7,2.1,4.5,3.2,8.8,6.8,13.5,9.7,1.8,1.1,4.6.7,8.4,1.1.5,2.5,1.2,6,2.1,9.5,1.2,4.7,2.4,9.5,7,8.4,8.5,6.1,7.7,19,20.8,19.8-1.8,8.9,7.5,7.4,11.4,11.5-2.7,6.3-6.2,12.4-7.8,18.9-1.3,5.4-.8,11.4-.3,17.1.1,1.1,4.4,2.9,6.5,2.5,3.6-.7,5.1.8,6.9,3.2,1.6,2.2,3.9,4,5.7,6.1,2.5,3,5.9,4.9,3.2,10.5-2,4-.9,9.9-.1,14.8.3,1.9,3.4,3.4,6.2,5.9-.9.9-2,2.9-3.6,3.5-5.8,2.1-11.7,3.8-18.3,5.9-.8-1.7-1.2-4.8-3-6.1-2.8-2.1-6.7-4.6-9.8-4.2-8.6,1.3-16.4-5.6-24.9-1.8-.5.2-1.2.1-1.8-.1-14.2-4.9-28.4-9.8-42.6-14.7-1.1-.4-2.4-1.4-2.7-2.4-1.7-7.1-6.4-12-11.9-16.1-1.4-1.1-3.4-1.6-5.2-2.2-2.5-.7-4.9-1.2-7.7-2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VeinteDeJulio