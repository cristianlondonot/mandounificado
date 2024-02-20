import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Miralindo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 129.16 96.39"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MIRALINDO', municipio.toUpperCase())}
              className="cls-1"
              d="M129,0c1,10.3-2.4,19.6-7.9,28-3,4.6-7.7,8.2-10,13-3.3,7.2-5.5,15-7.5,22.7-2.3,9-3.9,18.3-6.1,27.4-.3,1.2-2.2,2.6-3.5,2.8-9.6,1-19.3,1.7-29,2.4-3.8.3-7,0-10.7-2.7-5.2-3.8-11.1-6.7-18.4-7.1-5.3-.2-11-4-15.5-7.5-1.6-1.3-1.2-6.9.1-9.7,3.9-7.7,3.5-15.4,1.5-23.2-1-3.9-1.5-8.7-4.1-11.4-2.3-2.4-7.1-2.4-10.9-3.5-2.3-.7-5.1-.9-6.7-2.3-.8-.8.3-3.9.9-5.9,1-3.1,2.7-6,3.2-9.2.5-3.6,2.2-4.8,5.4-4.4,8.8,1,16.6-1.5,24.3-5.8,6.7-3.7,13.6-.9,17.5,5.8s7.8,13.3,12.7,19.1a10.91,10.91,0,0,1,2.5,10c-1.1,6.1,1.2,8.4,7,6.8,10.1-2.7,10.2-2.4,13.7,7.8,1.2,3.5,4.3,6.5,7,9.3,1,1,3.9,1.2,5.1.4s2.4-3.5,2-4.9c-3.5-12.2,3-22.7,5.6-33.8.8-3.5,2.2-7,2.6-10.6.5-5.5,3.6-7.8,8.6-9.2C122,3.7,125.28,1.7,129,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Miralindo