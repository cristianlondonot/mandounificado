import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Piletas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 93.94 106.5"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PILETAS', municipio.toUpperCase())}
              className="cls-1"
              d="M12.34,18.8c7.6,0,14.8.2,21.9-.1,2.6-.1,6-.8,7.5-2.6,4.3-5,8.4-4.5,14.6.4,1.1-6.1,2-10.9,3.1-16.5,1.1,1.3,1.8,2.3,2.7,3.1,1.8,1.6,3.4,3.6,5.5,4.5,3.2,1.4,8.3,1,9.8,3.2,5.1,7.7,9.9,15.6,7.9,26.1-1.9,9.6-5,19.9,1.5,29.4.9,1.3.9,3.5.5,5.1-1.3,5.3.9,7.6,6.6,8.1-4.7,3.2-8.9,6.3-6,12.6.3.7-.3,2.2-.9,3-3,3.9-6.1,7.7-9.1,11.4-3.9-4.6-8-9.5-12.3-14.4-.3-.4-1.1-.8-1.5-.7-10.4,2.8-19.9-4.9-30.6-2.4-4.2,1-9.3-2.6-14.1-3.3-3.6-.5-7.6-.3-11.2.7-3.7,1-5.5,1.7-5.4-3.4.1-3.7-1.2-7.4-2.2-11.1-1.2-4.4-.8-7.7,1.9-12,4.5-7.3,11.8-11.6,16.8-18.4,2.9-3.9,2.3-7.2-.6-8.7-5.7-2.9-5.8-7.7-6.4-14Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Piletas