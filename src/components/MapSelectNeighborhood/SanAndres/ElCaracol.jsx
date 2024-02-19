import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCaracol = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.28 103.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL CARACOL', municipio.toUpperCase())}
              className="cls-1"
              d="M28.9,20.1c5-1.4,9.7-2.2,13.9-4.2,2.9-1.4,5.1-4.3,7.6-6.5,3-2.7,5.2-6.1,10.3-6.3S70.9,1,75.3,0c-1.6,5.4-3.1,10.6-4.8,15.8s-1.1,10.3,2.2,14.5c4.8,6,3.5,13.2,5,19.8.3,1.5-.4,3.7.4,4.7,5.6,7.2,2.6,14.2.1,21.4-1.4,3.9-1.7,8.1-2.9,12.1-1.6,5.2-3.6,10.2-5.4,15.3-4.8-2.4-8.7-4.1-12.4-6.3a21.79,21.79,0,0,1-6.3-5.4c-3.9-5.4-7.9-9.5-15.4-6.6a4,4,0,0,1-3.6-1.2c-2.4-4.3-6.4-5.2-10.8-6.2-1.8-.4-3-3.1-4.5-4.7C11.4,67.6,5.8,62,0,56.1a43.66,43.66,0,0,1,2.6-5.3C7,44.5,11.3,38.1,16.2,32.1a20.38,20.38,0,0,1,8.2-5.6C29.3,24.6,29.4,24.9,28.9,20.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElCaracol