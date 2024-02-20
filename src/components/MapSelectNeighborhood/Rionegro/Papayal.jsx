import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Papayal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 92.12"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PAPAYAL', municipio.toUpperCase())}
              className="cls-1"
              d="M84.3,65.82v11.1c0,8.2-5,11.5-12.9,9.4-4.5-1.2-9.2-1.5-13.8-1.7-.9-.1-2,1.8-3,2.7-2.8,2.4-5.9,4.1-9.2,1.2-9.6-8.4-11.6-8.2-19.5,3.6-.8-3.9-1.4-6.8-1.8-9,2.8-2,4.8-3.4,7.3-5.2-3.5-1.1-5.8-1.6-7.9-2.6-7.8-3.6-15.6-.9-19.9,6.9-1,1.9-2.2,3.6-3.6,5.2,2.9-9.3,6.9-17.8,16.4-22.3,7.5-3.6,11-10.8,12.4-18,1.7-8.8,9.1-10.5,14.6-14.8,1.7-1.3,4.6-1.2,7-1.7,6.9-1.4,9.4-5.6,7.7-12.5-.3-1.4-.8-2.8-.8-4.1.1-2.8-.6-7.1.9-8.2,3.9-2.7,7.9-8.6,13.6-4.3,3,2.2,4.1,7,7.1,9.2,4,3,2.3,7.4,3.9,10.9,1.5,3.5,4.4,6.8,3.8,12.1-.4,3.3-1.9,11.6,6.7,14,3,.8,4.4,7.5,6.7,11.7-1,1.9-2.1,4.2-3.2,6.3-3.9.1-8.2.1-12.5.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Papayal