import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElFical = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111.03 141.02"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL FICAL', municipio.toUpperCase())}
              className="cls-1"
              d="M89.64,113.63c-.8.3-1.7.5-2.5.8,3.2,6.4-2.7,13.7,3,20.9-10-1.5-18.6,1.6-27.6,1.2-3-.1-6.3-1.2-8.4,3.1-1.4,2.9-4.1.5-6.1-.5l.1.1c-2.5-3.9-6.3-4.5-10.4-4.1s-6.5-.2-5.3-5.6c1.4-6.4-.7-12.9-1.7-19.3-.1-.9-.5-2.1-1.1-2.4-9.9-4.9-12.7-17.9-24.1-21.1l.1.2c.1-4.5,3-9.1-.9-13.3-1.1-1.1-.2-2,.5-3,3-4.3,2.3-8.7.4-13.2s-3.3-9.3-3-14.3c.1-1.4.6-3.3-.1-4.2-7.1-8.9,2.6-11.6,6-16.6.5-.8,1.7-1.2,2-2C16.74,5.53,32,5.93,43.84.73c2.4-1.1,6.3-1.5,7.6,2.8A2.6,2.6,0,0,0,52.84,5c12.8,1.4,20.3,11.1,27.6,19.4,7.6,8.6,15.5,17.4,20.4,28.1.9,2,1.6,3.3,4,4.3,6.1,2.5,7.3,8.5,5.3,14.6-3.2,10.1-8.3,19.4-12.3,29.1-1.5,3.6-5,6.4-7.9,9.2-1.6,1.5-1.1,2.7-.5,4.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElFical