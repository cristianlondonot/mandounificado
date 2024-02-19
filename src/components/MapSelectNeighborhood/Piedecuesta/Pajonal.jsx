import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pajonal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.83 117.8" {...props}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PAJONAL', municipio.toUpperCase())}
              className="cls-1"
              d="M54.46,117.8c-7-3.7-13.1-9.1-21.5-9.5-3.5-.1-2.5-3-2.3-4.8,1.2-10.6,1.3-21.1,1.4-31.7.1-9-4.5-16.3-7.5-24.2-.8-2.1-3.4-3.9-1.6-6.2,4-5.1.4-6.8-3.3-9-4.8-2.9-9.4-6-14.1-9.1-7.7-5.1-7.4-9.7.9-14.2,4-2.1,8.4-3.1,11-7.8,1.6-2.9,5.8-.2,8.1.8,5.2,2.1,10,4,15.9,2.4,3.9-1,7.3.5,9.2,5.3,1.7,4.2,4.9,8,10.6,7.9,2.1,0,2.1.3.9,2.7-.6,1.3-1,3.2.6,3.7,12.6,4.1,8.6,14.6,8.5,23.1s-4,16.9-1.1,25.7c.7,2.2-.9,2.8-2.9,2.5-6.5-.8-7,3.4-6.6,8.1,0,.4.6.8.7,1.2,1,4.8-1.2,11.2,2.7,14.1S72.36,96,77,95.5c1.5-.2,3.7-.9,4.6.7s-.6,3-1.7,4.3a26.78,26.78,0,0,0-3.6,5.2c-2.8,5.8-5.5,10.1-13.1,5C58.56,107.6,55.16,110.8,54.46,117.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Pajonal