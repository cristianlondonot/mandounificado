import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'


const Km80Veracruz = ({municipio, filterMap}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 138.01 268.51"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('KM 80 VERACRUZ', municipio.toUpperCase())}
              className="cls-1"
              d="M105.8,268.51c-4.2-8.9-8.6-17.1-12-25.7-2.2-5.6-2.2-12.2-4.5-17.7-5.4-12.9-11.7-25.4-17.5-38.1-.6-1.4-.8-3-1.3-4.4-2.8-8.3-4.5-17.4-8.9-24.8s-11.9-12.9-17.9-19.4c-3.6-3.9-7-8-10.3-12.3-4.8-6.3-9.2-12.9-14-19.2a122.64,122.64,0,0,0-8.3-9.5c-2.9-3.1-3.5-6.2-2.8-10.7,1-6.4-.1-13.1-.4-19.6-.2-4-1.4-8.3-.4-12,1.9-7.3-3.2-10.6-7.5-15.8,1.7-1.4,3.3-3,5.2-4.3q18.15-12.9,36.3-25.6c.4-.3.8-.5,1-.9,4.9-12.1,14.8-7.9,23.7-7.4,6.5.4,13,.4,19.5.6,5.3.2,10.4.8,13.6,6,1,1.6,2.5,3.4,4.2,3.8,10.5,2.6,16.5,9.4,19.4,19.4,2,6.7,3.9,13.5,6.3,20,1.8,4.7-1,7.4-3.9,9.2-10.5,6.6-19.1,15.1-26.6,24.8-3.4,4.5-4.1,8.3-.8,13.7,6,9.8,10.2,20.8,16.5,30.4,6.1,9.3,13.8,17.5,21,26,3.2,3.8,3.6,7.2.4,11.2-1.1,1.4-1.3,3.7-1.3,5.6-.5,20.5-.8,41.1-1.5,61.6-.1,3.3-1.3,7.3-3.4,9.7C122.1,251.91,113.9,260,105.8,268.51Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Km80Veracruz