import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElCairo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52.68 111.67"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL CAIRO', municipio.toUpperCase())}
              className="cls-1"
              d="M52.36,12.17c-5.6,5.1.3,8.9.2,13.2-.1,3.3.2,6.7.1,10.1-.1,2.2-.6,4.4-.9,6.8-2-.1-4.6-.2-8.5-.4,4.9,8.3,2.1,13.7-3.2,19.4-3.6,3.9-5.7,9.3-7.9,14.3-3.1,7.3-5.1,15.1-8.7,22-2,3.7-6.3,6.4-9.9,9-2.7,2-5.9,3.3-9.3,5.1-1-6.2-3.1-12.7-1.4-19.8.3-1.3-.8-2.9-1.4-4.9,3.6-2.2,1.2-4.2.2-7.8-2.1-7.2-2.6-15.3.8-22.9,1.4-3.1,2.2-6.4,3.4-9.6,3.3-8.7,6.8-17.4,10-26.2,1.8-5.1,3.2-10.3,4.5-14.5a83.79,83.79,0,0,1,8.3-5.2c1.5-.7,3.9-1.1,5.2-.4C40.06,4.07,45.76,8,52.36,12.17Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElCairo