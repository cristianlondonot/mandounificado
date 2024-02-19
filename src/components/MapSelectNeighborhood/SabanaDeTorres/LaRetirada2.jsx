import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaRetirada2 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.43 121.7">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA RETIRADA 2', municipio.toUpperCase())}
              className="cls-1"
              d="M112,0c.9,6.3,2,12.6,2.6,18.9.5,4.7,2.7,6.2,7.4,6.3,8.1.2,16.6-2.1,24.1,3,1.4.9,3.5,2.6,3.3,3.4-.3,1.5-2.1,2.8-3.5,4-4.9,4.4-9.5,9.1-14.9,12.8-3.4,2.3-7.8,3.2-11.9,4.3-2,.5-4.5-.8-6.4-.2-9.4,2.8-18.8,5.7-27.9,9.3-2.3.9-5,4.4-5.2,6.8-.7,9.3-6.6,15.6-11.2,22.7a31.48,31.48,0,0,0-2.8,5.1c-4.6,12.1-15.6,18-23.3,25.3-6.3-6.6-12.4-12.3-17.7-18.6a114.18,114.18,0,0,1-11.8-17.5A236.17,236.17,0,0,1,.52,60.3a10.62,10.62,0,0,1,1-8.7c7.1-9.8,14.9-18.8,26.1-24.5,3.2-1.6,4.3-7.1,9.5-6.4,2.2.3,4.5,1.5,6.6,1.2,4.9-.7,11.7-.6,14.1-3.6,4.5-5.7,9.3-4.4,14.2-3.5s8.6,1.2,12.1-3.7c2-2.8,6.5-4.1,10.1-5.5C100.12,3.6,106.22,1.9,112,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaRetirada2