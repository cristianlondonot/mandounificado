import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPradera = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 182.81 136.44"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PRADERA', municipio.toUpperCase())}
              className="cls-1"
              d="M124.9,135.24c-8.5-1-15.9-2.1-23.4-2.5-1.6-.1-3.4,2.1-5.8,3.7a26.8,26.8,0,0,1-.9-5.2c0-4.1-1.1-6.3-5.8-5-1.3.4-2.9-.3-4.4-.7-4.2-1.2-8.3-2.5-12.5-3.7-4.7-1.4-10.5-.2-13.5-5.8a2.36,2.36,0,0,0-2-.9c-5.8,2.2-8.9-2.6-13.1-4.7-3.7-1.8-8-2.3-11.9-3.8a18.27,18.27,0,0,1-6-3.9c-2.9-2.6-5.3-5.4-9.8-2.5-1.5.9-4.2.5-6.1,0-3.1-.9-5.9-2.4-9.7-4,1.3-3,2.7-6.5,4.3-10,3.3-7.6,2.8-9.3-4.2-11.6,3-1.7,6-3,8.4-5,2.9-2.4,1.6-4.7-.6-7.2s-4.8-5.5-4.7-8.2c.2-3.9,2.6-7.2,7.7-7.9,3.8-.5,6.6-2.4,7.4-7.4.5-2.8,5-5.3,8.2-7,7.8-4,12.7-10.3,15.7-18.2,1.9-4.9,4.3-7.5,10.2-7,5.1.5,10.3-.8,15.4-1,2-.1,4.1.8,6.2.9,8.2.1,16.4.1,24.6.1.5,0,1-.5,1.4-1,5.1-6.2,12-5.8,19.4-5.7-.6,5.6.6,9.3,7.3,7.9,1.1-.2,2.5.9,3.7,1.4,6.6,3,9.4,1.5,10.4-4.9,3.8-.4,7.4-.9,9.9-1.1a55.08,55.08,0,0,1,3.4,6.2c2.9,7.4,9.8,10.9,15.3,15.7,7.3,6.4,13.2,13.6,12.5,24.3-.3,4,.7,8,.9,12,.3,9.2-6.5,12.3-13,16.6a40.1,40.1,0,0,0-14,16.4,15.38,15.38,0,0,1-4.3,5.2c-2.3,1.9-5,3.3-2.6,7,.3.5-.8,2.8-1.8,3.3-6.6,3.7-13.3,7.3-20.1,10.7-3.7,1.9-4,4.9-3.5,8.4A30.84,30.84,0,0,0,124.9,135.24Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPradera