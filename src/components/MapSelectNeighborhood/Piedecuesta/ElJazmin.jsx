import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElJazmin = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.86 81.9">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL JAZMIN', municipio.toUpperCase())}
              className="cls-1"
              d="M75.56,0c-1,4.4,3.2,8.7.6,13.8-.5,1-2.9,5.8,2.6,5,.3-.1.7.2,1.1.4-.3.8-.7,1.7-1,2.5-3.2,8.4-5.4,17.1-7.9,25.7-1.7,5.9.4,12.2-2.2,18-.9,2.1-.9,4.6-1.6,6.8-3.6,10.6-8.1,12.1-18,6.5-8.8-4.9-15.7-11.7-21.5-19.9-.4-.6-.9-1.4-1.5-1.5C13.26,54.7,11.66,40.2,2,34.2c-2.7-1.7-2.8-4,.9-5.6,2.8-1.1,5.1-3.3,7.7-4.7,4.7-2.4,7-.9,6.8,4.1-.1,1.3-.6,3.2,1,3.8s3.3.7,4.7-.6c2.4-2.3,5.9-3.9,7.4-6.3,5.2-8.6,14.1-8.8,22.1-11.4.4-.1,1.2.2,1.4-.1C59.66,7.1,70.26,8.4,75.56,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElJazmin