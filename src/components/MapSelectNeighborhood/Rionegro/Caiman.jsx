import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Caiman = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92.29 79.74"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAIMAN', municipio.toUpperCase())}
              className="cls-1"
              d="M0,58c6.1-1.9,7.3-6.9,8.9-11.9.6-2,2.9-3.5,4.4-5.2.8-.9,2.4-2.1,2.2-2.7-2.6-8,4.6-11.2,7.8-16.3,2.3-3.7,5-7.1,7.9-11.2a25.07,25.07,0,0,1,5.4.1c5.5.9,8.1-.7,7.2-5.9C42.9-.56,46.4.24,49.4,0c2-.1,4,0,7.6,0,5,7.2,10.8,15.5,16.5,23.8a10.7,10.7,0,0,1,1.3,3.1c2.3,7.9,4.4,15.7,11.9,20.8,3.6,2.4,5.9,6.1,3.6,11.1-.5,1.1.3,3,.8,4.4,2.1,5.9,1.6,11.3-3,16.5a17.91,17.91,0,0,1-2-2.8c-4.9-9.5-13-13-23.2-13.1-8.3-.1-16.7,0-24.9-1.2-8.7-1.2-17.1-4.1-25.7-5.5C8.4,56.44,4.2,57.64,0,58Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Caiman