import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Panama = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 117.95 114.74"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PANAMA', municipio.toUpperCase())}
              className="cls-1"
              d="M37.15,0c4.1,4.3,7.9,9,12.4,12.8,4.7,3.9,9,7.3,10.3,14.1.6,3.1,5.2,6.2,8.6,7.8,5.3,2.5,9.3,5.1,12.9,10.5,5.8,8.6,12.2,18,25.2,17.3,4.1-.2,8.4,1.8,11.4,2.4-5.5,9.1-10.9,18.5-16.7,27.6-1.8,2.9-5.1,4.8-7.1,7.6-2.9,4.2-5.2,8.9-8.5,14.6-6,.6-11-5.1-16.9-9.1-8.9-6-18.1-11.6-27.1-17.5-5.8-3.7-12-5-18.9-5.1-3.9-.1-7.9-2.9-11.6-4.8-.8-.4-1.5-2.5-1.3-3.6a41.17,41.17,0,0,0-6.4-32.5c-5-7.5-4.8-14,2.1-19.5C16.05,14.3,27.35,6.9,37.15,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Panama