import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPalmarona = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.04 172.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PALMARONA', municipio.toUpperCase())}
              className="cls-1"
              d="M150,76.3c-6.1,4.1-13.2,8.7-20.1,13.5-14.2,9.9-18.8,24.9-22.5,40.8-1.9,8-4.3,17.4-9.8,22.7-4.9,4.6-10.5,11.1-19.7,11.1-3.3,0-6.7,5.4-10.2,8.5-9.8-7.4-20.8-15.8-32-24-10.4-7.6-20.8-15.3-31.5-22.4-4.4-2.9-5.2-5.3-3.2-10.1A530.26,530.26,0,0,1,37,46a24.57,24.57,0,0,1,3.4-4.4c6.2-6,11.1-12.5,13.6-21.2,2.1-7,6.6-13.2,10.3-20.4,8.3,6.1,16.7,10.5,20.8,20.3,1.5,3.7,6.2,6.7,10.2,8.5,5.6,2.5,12.6,2,15.7,9,.2.4,2-.2,2.9.1,2.1.9,4.7,1.6,6.2,3.2C130.14,52.7,139.94,64.4,150,76.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPalmarona