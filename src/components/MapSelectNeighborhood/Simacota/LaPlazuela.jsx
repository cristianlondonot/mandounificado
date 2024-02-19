import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPlazuela =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.22 134.85">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PLAZUELA', municipio.toUpperCase())}
              className="cls-1"
              d="M68.22,94.83c-3.6,1.9-5,2.7-7.7,4,4,3.6,7.5,6.7,12.7,11.3-1.3,5.4-3.2,13-5.1,20.5-6.3.1-12.5-3-17,3.3-.5.7-3.7.2-5-.7-4.1-3-7.5-1.7-11.2.8-1.3.9-4.7,1-4.9.6-.9-2.4-2.1-5.4-1.3-7.5.9-2.4,3.4-5.1,5.8-5.8,5.4-1.7,6.1-6.3,7.4-10.3,1.7-5.1-1.7-8.1-5.8-10a34.42,34.42,0,0,0-8.5-2.3c-4.6-.8-7.7-2.8-9-7.6-1.4-5.2-6.2-4-10.1-4.3a8,8,0,0,0-2.9.8c-1.8-10.9-3.7-21.5-5.3-32.1-.4-2.5-.6-5.6.5-7.6,3.7-6.7,3.1-14.1,2.7-20.9-.5-8.9,3.3-13,10.8-15.9,2.3-.9,4.4-3.4,5.8-5.7,2.5-4.1,4.7-7,10.1-4.5,5.9,2.7,12.2,4.7,18.1,7.4,5.5,2.5,7,7.8,7.9,13.3.3,1.9.7,4.6,2,5.5,4.9,3.1,6.7,7.8,7,12.8s-1,9.8-1.7,14.7a23.76,23.76,0,0,0-.6,3.7c.1,3.7-.1,6.6-5.2,6.3-2.8-.1-4.4,5.7-2.6,9,1,2,2.3,3,0,5.6-2.5,2.9,1.6,10,5.3,11.2C62.92,91,64.92,92.73,68.22,94.83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPlazuela