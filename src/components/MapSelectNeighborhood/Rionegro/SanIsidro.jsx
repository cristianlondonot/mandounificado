import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanIsidro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79.94 73.64"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN ISIDRO', municipio.toUpperCase())}
              className="cls-1"
              d="M41,73.64c-2.3-1.5-5.3-2.5-7-4.6-6.3-7.7-14.6-9.6-23.8-9.4-4.1.1-7.9-.7-9.6-4.9-.6-1.6-.9-3.9-.2-5.2.6-1,3.1-1,4.7-1.4,1.2-.3,3.1,0,3.6-.7A63.52,63.52,0,0,0,15.4,37c2.5-5.2.5-7.8-5.4-9.1-2.6-.6-5-2.3-7.5-3.4,1.3-2.4,2.6-4.9,4-7.2.9-1.4,2-2.7,3.3-4.4,3.3,1.8,6.4,3.9,9.9,5.3,9.2,3.6,14,1.2,15.4-8.4.6-4.1,1-8.2,5.3-9.1,4.1-.8,9-1.2,12.8.1,7.7,2.7,14.8,7.1,23.4,7,3.5-.1,4.2,2.9,2.3,5.2-5.5,6.6-9.1,15.4-20.1,15.5-3.1,0-6,3.9-9.2,5.6-4.3,2.3-2.6,6.3-3.4,9.7-.8,3.6-2.7,6.9-4,10.3a6.83,6.83,0,0,0-.6,3.4c.3,2.6,1.5,5.2,1.4,7.8C43.1,67.94,41.9,70.44,41,73.64Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanIsidro