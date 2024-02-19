import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaTablona = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.6 68.91" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA TABLONA', municipio.toUpperCase())}
              className="cls-1"
              d="M29.2,24.9c-.9-7.2-1.7-14.1-2.7-22.1,6.4,3.1,11.6,4.7,15-2.8,6.8,1.8,13.6,3.7,20.3,5.4a9.22,9.22,0,0,0,3.7,0c2.4-.4,6.2-2.1,6.8-1.3,4,5.2,8.4,10.6,10.6,16.7,1.6,4.6,1.6,9.5,6.3,12.4.7.4,1.1,1.6,1.4,2.5,1.5,4,3,8,5,13.3-2.5,4.4-6,10.6-9.5,16.8-1.7,3-3.1,4.7-6.3,1s-7.8-4-12.6-4.3C59.6,62,52,59.9,44.4,58.6c-9.6-1.6-19.3-2.5-28.7-4.7C10.3,52.7,5.3,49.7.1,47.5A19.27,19.27,0,0,0,0,45.1c5.8-1.6,11.7-3.1,17.5-4.7,1.6-.4,4.1-1.2,4.3-2.1.8-4,.8-8.2,1.2-12.7C25.1,25.5,27,25.2,29.2,24.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaTablona