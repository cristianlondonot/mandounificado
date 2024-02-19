import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElPolo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.57 80.9" {...props}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL POLO', municipio.toUpperCase())}
              className="cls-1"
              d="M50.19,80.9c-2.2-9.3-9.4-9.4-15.7-10.4-2.7-.5-4.4-.9-4.4-3.9,0-.4-.4-.8-.7-1.2-8.1-7.9-13.8-17.1-13.4-29.5-.6.2-1.2.3-1.9.5-1.4,2.5-2.7,4.9-4.3,7.7-2.9-5-1.4-12.5-8.9-14.9-.9-.3-1.3-5.3-.3-7.4C4.09,14.6,8,7.5,11.59,0c2,5.3,1.3,11.4,8.8,12.7,5.2.9,9.5,2,12.4-4.1,2.6-5.4,8.3-5.5,12.6-1.2,4.1,4.2,9.5,6.8,15,8.4C68,18,75.49,31.2,72,38.4c-2.1,4.3-2.6,7.7,1.2,11.3a6.89,6.89,0,0,1,1.6,8.4c-.8,1.6-1.7,3.6-1.5,5.3,1,7.7-2.6,8-7.9,5.1-3.3-1.8-5.5-.1-7.3,1.9C55.39,73.3,53.29,76.7,50.19,80.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElPolo