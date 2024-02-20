import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoDoradas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 98.22 136.2"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO DORADAS', municipio.toUpperCase())}
              className="cls-1"
              d="M48.9,28.2c2.3-.9,3.9-1.5,6.4-2.6-1.8,3.3-3.2,5.8-5,9.2,2.5.1,3.9.2,5.6.3v8.6h-4.6c.5,4.4,1,8.4,1.6,13.2.5.2,1.8.5,3,1.1,4.6,2,7.6,4.6,4.9,10.3-.9,2-1.1,4.8-.6,7,.3,1.2,2.9,1.9,5.3,3.4-.3,9.1,2,11.5,13.4,13.2,4.1.6,8.8,1,9.6,6.8.2,1.2,1.6,2.6,2.8,3.1,6.6,2.9,7.7,8.1,6.5,15-1.9-.7-3.8-1.4-6.1-2.3-.7,2.1-1.9,4.1-2.1,6.1-1.1,9.6-4.7,13.4-14.1,14.3-1.4.1-2.7,1-4.1,1-4.6.1-9.7,2-11.7-5.2-1.4-4.8-15.1-10.8-20-9.7-.9-2.4-1.9-4.8-2.9-7.2-2.9-7.4-6.2-14.7-8.5-22.3-1.9-6.1-2.4-12.5-3.9-18.7-.8-3.1-2.5-5.9-3.5-8.9-1-2.8-2.3-5.6-2.4-8.5-.3-6.7.1-13.5-6-18.4-.4-.3-.8-1.1-.8-1.6C11.4,22.8,4,12.6,0,0c3.8,1.2,7.1,1.8,9.9,3.3,5.1,2.8,9.7,6.4,14.8,9.1,4.4,2.4,8.2,6.7,14.4,4.3,1.4-.5,4.6,2.7,6.3,4.7,1.4,2,2.3,4.5,3.5,6.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoDoradas