import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CruzRoja =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.3 72.99">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CRUZ ROJA', municipio.toUpperCase())}
              className="cls-1"
              d="M58.5,3c1.9-1,3.6-2.4,5.6-2.8,1.7-.4,4.7-.2,5.4.9,1.3,2,2.3,5.1,1.7,7.3-1.7,6.3-4.3,12.3-6.5,18.5a4.5,4.5,0,0,0-.2,2.8c1.4,4.9.4,9-2.9,13.1-2.3,2.9,1.1,6.7,7.4,8.2,1.9,6.6,3.9,13.6,6.3,22-2.5-1-3.4-1-3.4-1.3C69.5,63.19,61.2,59.19,57,52c-.5-.9-3-1.3-4.1-.9-5.6,1.9-11.1,4.1-16.8,6.3-3.7-5.1-7.3-9.3-14-10.2-3.7-.5-7-3.7-10.7-5.4a82.14,82.14,0,0,0-8.4-3c3.7-5,10.2-8.3,9.2-16.6C11.3,14.59,4.8,12,0,7.79c.5-.8,1.1-1.5,1.6-2.3,8.7,3.7,17.4,7.3,25.9,11.2,1.3.6,1.9,2.6,3.2,3.4,2.2,1.3,4.8,3,7.1,3,1.6,0,3.8-2.6,4.5-4.5,1-2.5,1.6-4.6,4.8-4.3a2.73,2.73,0,0,0,1.6-.4l9-11.4A2.18,2.18,0,0,1,58.5,3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CruzRoja