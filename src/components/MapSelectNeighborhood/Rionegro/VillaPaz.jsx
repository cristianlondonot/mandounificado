import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VillaPaz = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 112.85 139.11"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VILLA PAZ', municipio.toUpperCase())}
              className="cls-1"
              d="M84.8,136c-7.4,1.1-14.2,2.1-21,3-5.8.8-8-2.9-9.9-7.6a21.74,21.74,0,0,0-5.4-7.4c-3.6-3.4-8.3-5.9-11.4-9.7-5.7-7.1-13.7-7.6-21.3-7.3-3.6.1-4.6-1.4-6.3-3.2C7,101.3,4.8,98.5,0,94.6c3.1-2.3,6.2-4.5,9.3-6.9,6.4-4.8,7.3-11.7,7.2-19.1,0-6.2-2.5-11.1-5.7-16.4C4.9,42.4,3.4,31.6,9.7,21c2.7-4.6,4.4-9.1,2.5-14.7-.6-1.8,1.5-4.5,2.2-6.3,3.4,3.2,6.4,5.8,8.9,8.6,1.4,1.6,2,3.8,2.9,5.7,2.4,4.9,4.7,9.8,7.1,14.7.6,1.3,1.8,2.3,2.3,3.6,2.3,6.7,8.5,10,15.6,8.5,1.9-.4,4.9-.7,5.8.3,3.1,3.6,7,3.3,11.1,3.7,5.7.5,10.2,2.7,13.4,8.2C86.1,61.1,92,68.2,97.4,75.6c.6.8,1.7,1.3,1.9,2.1,1.5,6.7,6.1,10.9,11.3,14.7,3,2.2,2.9,4.2.3,7.1-4.6,5.2-9.5,10.3-11.1,17.7-.4,2.1-4.7,4.6-7.3,4.7-7.4.2-7.2,5.4-7.9,10.3C84.7,133.3,84.8,134.5,84.8,136Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VillaPaz