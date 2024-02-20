import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasVegas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 134.5 172.27"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LAS VEGAS', municipio.toUpperCase())}
              className="cls-1"
              d="M58.7,172.27c.6-4.7.5-9.4,1.9-13.6,2.7-8,0-15.1-1.8-22.7-1.2-5.2.8-11.3,1.8-16.9,1-6.1-.6-8.4-6.9-8.3-3.4.1-6.9,1-10.3.7-7.2-.5-11.3-5.8-15.6-10.8-3-3.5-5.1-8.9-11.9-4.7-2.7,1.6-7,.3-10.4,1.2-2.3.6-4.1,2.7-5.5,3.7.5-1.8,1.4-4.8,2.2-7.5a23.17,23.17,0,0,0,17.2-9.3c3.6-4.6,8.4-8,10.3-14.7,1.2-4.3,8.1-8,13.2-10,2.8-1.1,7.2,1.9,11.5,3.2,2.9-3.7,6.4-8.1,9.5-12.7.4-.7-1-3.2-2.2-4.1s-3.1-.9-4.6-1.3a12.44,12.44,0,0,0-.4-1.6c2.2-1.2,4.3-2.5,6.5-3.6s4.7-1.9,6.4-3.5c1.2-1.1,1.4-3.3,2-5l-5.1-1.5c-1.8-.5-3.5-1.1-5.4-1.7,5.2-4.4,9.1-8.2,13.5-11.4,4.7-3.5,11.2-4,15.2-9.4,1.4-1.9,6.5-.9,9.8-1.7a15.61,15.61,0,0,0,6.4-2.9c3.1-2.6,5.6-2.9,9.2-.7,4.3,2.7,9.1,4.4,13.6,6.5,1.6,7.4-1.6,15.7,2.8,23.3.9,1.5.7,4.5-.2,6.1-2.6,4.5-1.5,8.5.8,12.5,2.6,4.3,3.8,8.5-.8,12.4-.7.6-.9,1.7-1.3,2.5-1.6,3.5-3.2,7-5.2,11.2,3,4.3,2.8,7.3-2.6,12.5-3.9,3.7-3.2,5.6.8,9,2.8,2.4,4.3,6.8,5.3,10.6,1.3,5.1,1.4,10.6,2.4,15.8,1.1,6.4-3.9,16.1-9.7,19.6-4.4,2.7-8.7,5.3-10.6,11.4-.9,2.8-6.5,4.9-10.3,6-5.2,1.5-10.1,5.2-16.2,2.7C73.6,159.27,67.9,169.77,58.7,172.27Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LasVegas