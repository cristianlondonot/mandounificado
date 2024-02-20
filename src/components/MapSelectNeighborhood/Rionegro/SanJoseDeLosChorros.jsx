import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanJoseDeLosChorros = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 83.18 67.32"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN JOSE DE LOS CHORROS', municipio.toUpperCase())}
              className="cls-1"
              d="M34.98,67.32c-2.9-2.4-5.9-4.8-8.8-7.3-4.1-3.6-7.2-3.4-12.7.7-1.8-2.2-4-4.2-5.4-6.6-2.5-4.3-4.7-8.7-6.6-13.3-.9-2.3-.7-5.1-1.2-7.7-.9-4.7.3-7.9,4.9-10.2,9.2-4.7,9.2-15.3.5-21.9,2.3.4,4.5.8,6.8,1.1,2.2.3,4.7,1.1,6.5.4C25.68-.18,32.78.92,39.58.22c7.4-.8,14.2.7,20.9,3.2,1,.4,2.6.6,3.4.1,7.7-4.9,12.8,0,19.3,5.5-5.7.8-10.2,1.9-14.8,2.1s-6.5,1.6-5.2,6.4c.2.7-2,3-2.6,2.8-5.2-1.4-8,.9-9.7,5.7-5.3-.5-9.3.4-9.6,7.1-.1,1.6-2.6,3.6-4.4,4.5-5.8,3-6.8,7-4.6,13,1.9,5.1,2.8,10.6,4.1,16-.4.1-.9.4-1.4.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanJoseDeLosChorros