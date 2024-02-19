import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaLaja = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.89 74.97" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA LAJA', municipio.toUpperCase())}
              className="cls-1"
              d="M.29,71.7c-.8-4.8-.1-9.4,4.2-12.6,6.5-4.8,4.6-11.4,4.6-17.8,0-2.5,0-5.3,1.2-7.3a67.41,67.41,0,0,1,8.4-10.9c1.3-1.4,3.8-2.8,5.5-2.5,17,2.9,27.9-5.4,37-20.6.6,4.2,1.4,7.2,1.3,10.1-.2,8.3,3.2,13.9,10.5,18,3.9,2.1,6.9,5.9,10.3,8.9,6.9,6.1,10.3,7.3,15.9-1.3,2.4-3.7,14.3-6.1,18.8-5,9.2,2.2,18.1,5.8,28,2.8,4.2-1.3,9.3-1.4,11.9,2.8-5.2,4.1-9.9,7.8-14.7,11.5a19.11,19.11,0,0,1-5.4,3,44.66,44.66,0,0,0-19,11.1c-3.9,3.9-7.8.4-11-1-9.1-3.9-17.8-2.5-26.1,1.5-7.3,3.5-14.4,4.5-21.9,1.5-5.7-2.3-11.3-4.1-17.3-.5-2,1.2-4.9.7-7.3,1.2-4.8,1-9.7,1.6-12.3,6.8-1.8,3.5-5.2,4.1-8.9,3.2C9.69,73.7,5.29,72.8.29,71.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaLaja