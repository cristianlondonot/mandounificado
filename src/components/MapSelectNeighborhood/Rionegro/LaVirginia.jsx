import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaVirginia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.55 90.12"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA VIRGINIA', municipio.toUpperCase())}
              className="cls-1"
              d="M91,77.42c-5.9,5.1-10.3,8.9-14.8,12.7-2.6-3.9-5.7-8-8.1-12.6-2.5-4.8-6.4-7.4-11.3-9-6.1-2-12-5-18.3-6.4-4.2-1-8.9-.4-13.3.3-6.8,1.1-17.4-2.4-20.3-7.6-.7-1.2-.6-2.8-1-4.2-.5-1.8-1.2-3.6-1.7-5.4L0,44.92c2.1-2.3,3.8-6,6.4-6.8,5.2-1.5,5-3.7,2.7-7.3-.4-.6-.3-1.4-.5-2.7,3.4-.4,5.5-5.3,9.8-2.2.4.3,2.1-.8,2.8-1.6,4-4.7,9.6-7.7,11.5-14.7,1-3.7,6.5-6.1,10-9.1.3-.2.9-.6,1-.5,4.2,3.1,9.8.2,13.2,1.7C62,3.92,69.2,4,72.1,11.12c.7,1.8,4.5,2.4,8,4,4.4,12.9,9.3,27.3,14.1,41.7a5,5,0,0,1,.1,3.4c-1.3,3.1-3.6,5.9-4.2,9.1S90.7,75.72,91,77.42Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaVirginia