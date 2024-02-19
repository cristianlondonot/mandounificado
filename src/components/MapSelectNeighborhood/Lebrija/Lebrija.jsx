import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Lebrija = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.63 28.77">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LEBRIJA', municipio.toUpperCase())}
              className="cls-1"
              d="M44.1,4.67a15.28,15.28,0,0,1-4.6-1.4,18.84,18.84,0,0,1-2.4-1.4c-.8-.5-1.5-1.1-2.3-1.6-1.7-.9-3.1.7-4.3,1.7A10.54,10.54,0,0,1,27,4.07c-2.2.6-5.3.6-6.9-1.3-.9-1-.8-2.8-2.6-2.7a8,8,0,0,0-4.1,1.8c-1,.8-2,1.8-3.4,1.7s-2.7-1.1-4.2-1.1a.37.37,0,0,1-.3-.1c-.3,1.1-.7,2.2-1.1,3.3-.5,1.4-1,2.9-1.5,4.3a4.35,4.35,0,0,1-1.4,2.1,3.61,3.61,0,0,1-1.5.8c2.1.4,4.1,1.7,6,2.5,1.1.5,2.3.8,3.4,1.4a4.86,4.86,0,0,1,1.4,1.1,3.13,3.13,0,0,0,1.1.9,14,14,0,0,0,4.1.1,5.71,5.71,0,0,1,2.9.4,5.25,5.25,0,0,1,1.7,2.2c.6,1.1,1.1,2.2,1.8,3.3a12.28,12.28,0,0,0,2.6,2.5,7.09,7.09,0,0,0,3,1.5,22,22,0,0,0,3.1-3c1.5-1.7,3-3.9,5.1-4.9a7.77,7.77,0,0,1,6.5-.1,3,3,0,0,1,.8.4c-.1-1.7,0-3.3-.2-5s-.8-3.8,0-5.4c.3-.5.7-1,1-1.5a2.37,2.37,0,0,0,.2-2A8.24,8.24,0,0,1,44.1,4.67Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Lebrija