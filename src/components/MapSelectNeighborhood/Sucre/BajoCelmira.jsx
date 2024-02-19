import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BajoCelmira = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.05 76.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BAJO CELMIRA', municipio.toUpperCase())}
              className="cls-1"
              d="M49,0c0,6,3.2,9.8,9.1,12,1.7.7,2.3,3.8,3.8,5.5,2.1,2.3,4.2,5.2,6.9,6.3,6.2,2.6,12.8,4.3,19.3,6.2a16.68,16.68,0,0,0,5,.5c5.7.2,10.8,6.9,9.8,12.5-1.7,8.9-3.2,17.9-4.9,26.8-.2,1.1-1.1,2.9-1.6,2.9-6.7-.7-11.9,5.1-19.6,2.8-12.5-3.8-24.4-8-33.2-18.1-4.2-4.9-7.5-10.6-12-15.3-5.6-5.8-12.4-10.5-20.9-10.9-2.8-.1-5.7,1.5-9.6,2.6-2.8-2.2.2-3.5,2.7-4.4,5.6-1.9,11.5-3.1,17-5.3,2.7-1.1,6-3.5,6.8-6.1,2.4-7.1,4.8-12.6,14.1-11.8C43.83,6.4,46.33,2.4,49,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BajoCelmira