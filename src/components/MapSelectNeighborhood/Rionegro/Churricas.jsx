import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Churricas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 87 83.9"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHURRICAS', municipio.toUpperCase())}
              className="cls-1"
              d="M87,0c-.5,13.7-.8,28.2-1.8,42.7-.4,6.2-2.8,12.3-3.5,18.6-.4,3.2.5,6.6,1.1,9.9.8,4.2-1,5.3-5,5.4a15.92,15.92,0,0,0-13.1,7.3c-2.9-3.6-6.7-6.4-12-1.2-.9.9-4.6-.1-6.4-1.2-2.7-1.6-5.9-3.7-7-6.3-2.8-6.3-12-6.8-12.7-15.2-.3-3.8-12.4-8.6-16.8-8.1C7,52.2,4,52,0,52c3-6.8,5.8-13.2,8.7-20,6.7,4.1,11,1.8,14.3-3.7.5-.9,1.9-2.3,2.3-2.1,5.7,2.2,7.1-.2,7.5-5.5.1-1.1,4.3-2.8,6.5-2.5,7.7,1,23.8-4,26.1-10.9,1.7-5.1,5.5-5.7,9.9-5.8C78.9,1,82.6.5,87,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Churricas