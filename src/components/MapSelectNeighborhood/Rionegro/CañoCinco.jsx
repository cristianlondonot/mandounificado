import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoCinco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 69.02 121.75"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO CINCO', municipio.toUpperCase())}
              className="cls-1"
              d="M26.03,121.75c.9-4.9.8-8.5-5.6-6.8-1.6.4-3.8-1.6-6.3-2.7-.6.5-1.8,1.4-3,2.4-2.4-3.4-4.5-7-7.6-.8-4-1.7-4-4.2-2.9-8.2,1.8-6.5,2.7-13.4,3.5-20.1.3-2-.5-4.4-1.4-6.4-2-4.7-4-8.7,2.2-12.4,1.7-1,2.1-6,1.6-9-2.2-12.7-1.7-15,7.6-24.7-2.9-1.7-5.6-3.3-7.7-4.6,3.6-7.3,6.8-14.1,10.4-20.8,1.4-2.6,3.5-5,5.6-7.1.7-.7,2.8-.7,3.7-.2,6.8,3.7,14.3,6.6,20,11.6,6.5,5.5,14.3,10.8,14.7,21.2.1,2.4,2.6,5.7,4.9,6.9,5,2.6,3.5,5.9.8,7.9-4.7,3.4-6.3,9.6-13.1,11.7-5.6,1.7-7.8,15.6-4.5,21.3,4.4,7.6.7,14.5-2.4,20.4-3.5,6.7-9.6,12.2-14.9,18-.9,1.2-3.3,1.5-5.6,2.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoCinco