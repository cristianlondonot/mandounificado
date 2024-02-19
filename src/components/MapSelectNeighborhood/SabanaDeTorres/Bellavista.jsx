import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Bellavista = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.39 84.34" {...props}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BELLAVISTA', municipio.toUpperCase())}
              className="cls-1"
              d="M31.65,0c3.6,6.6,6.2,13,10.3,18.2,2.3,3,7,5.2,10.8,5.7,14.7,1.9,29.5,3.1,44.3,4.2,4.7.3,7.2,2.1,8.7,6.5,1.1,3.3,2.5,6.8,4.7,9.3,3.4,3.9,1.8,7.1-.7,10-3.1,3.7-7.2,6.6-9.9,10.5a63.14,63.14,0,0,0-7.2,13.9c-1.9,4.8-4.7,3.7-8.1,2.6a43.29,43.29,0,0,0-7.2-1.2c-3.4-.5-6.8-.8-10.1-1.3-1.9-.3-4.1-1.3-5.8-.8-6.6,2.2-11.6-2.3-17.3-3.6-2-.5-5.1-1.2-6.1-.2-1.4,1.3-1.4,4.2-1.7,6.4-.1,1,.5,2,.8,3.1-8.3,3.1-14.9-1.4-21.6-4.4a86.85,86.85,0,0,1-13.1-7.1,7.65,7.65,0,0,1-2.4-6.1c1.5-8.4,2-17.4,5.7-24.8C12.35,27.6,21,15.3,28.85,2.6A18.87,18.87,0,0,1,31.65,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Bellavista