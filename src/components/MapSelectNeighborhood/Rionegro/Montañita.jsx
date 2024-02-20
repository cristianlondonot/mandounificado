import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Montañita = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.1 60.63"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MONTAÑITA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,59.7q9.3-10.5,4.6-19.2c7.9-3.5,9.5-8.6,6.8-22.9,13.6,2.3,15.7-6.1,14.2-17.6.7.2,1.4.5,2.1.7,1.1,5.6,2.3,11.1,3.1,16.7.5,3.4.2,7,.1,10.5-.1,4.2-.4,8.4,6.2,7.1-.5,7.9-.8,15-1.4,22.1-.1,1-1.6,1.8-2.4,2.7-4.5-5.4-8.2,1.3-12.4.8-3.6-.4-7.2-.7-10.8-.8-3-.2-6-.1-10.1-.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Montañita