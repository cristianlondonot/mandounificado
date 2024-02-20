import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Berlin = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 95.12 129.4"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BERLIN', municipio.toUpperCase())}
              className="cls-1"
              d="M95.12,52a61.29,61.29,0,0,1-7,5.3c-3.7,2.2-3.6,4.8-1.6,8.1,3.2,5.4-.1,11.6-6.3,13.3-5.5,1.5-9.7,4.5-11.5,10.7-1,3.3-4.3,5.9-6.2,9.1-2.4,3.9-5.4,4.2-9.3,2.6a3.47,3.47,0,0,0-3.1.8c-3.1,4.4-7.1,8.7-8.5,13.7-1.4,5.2-.7,10.8-8.2,11.3-.5,0-.8,1.5-1.3,2.5-5.8-9.1-12.8-16.6-23.8-18.6,1.41-10.2-2-19.7-6.09-28.7-3.21-7-2.5-13.7-.71-20,1.1-4.1,5.91-7.1,9.1-10.6.4-.4,1.2-.4,1.5-.8,2.8-4.7,4.6-10.8,8.6-13.7,5.6-4,4-10.1,6.6-14.7.6-1-1.5-3.7-2.7-6.1,2.6-2.7,1.9-5.8-1.2-7.7,7.4-2.7,14.9-5.4,23.7-8.5-.3,4.4-.5,8.8-1,13.1-.3,2.6-1.4,5.2-1.7,7.8-.4,3.5-.5,6.8,2.9,9.4,1.1.8.8,3.4,1.7,5,1.7,3.2,3.1,6.9,5.7,9,1.5,1.2,6.1.3,7.9-1.2,3.2-2.8,5.5-3.2,9.4-1.2C79.32,45.5,87,48.4,95.12,52Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Berlin