import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VillaEva = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.8 107.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VILLA EVA', municipio.toUpperCase())}
              className="cls-1"
              d="M177.8,83c-.4,7.9-.7,14.8-1.1,22.5-3.8-2.3-7.8-4.6-11.7-7.1-4.9-3-9.7-6.1-14.5-9.2-1.2-.8-2.9-1.6-3.4-2.8-2.9-6.9-7.1-7.3-13.1-3.7-2.5,1.5-5.9,1.7-8.7,2.7-4.9,1.7-9.6,3.7-14.5,5.6a18.35,18.35,0,0,1-3.6,1.5c-12.7,1.3-25.3,2.9-38,3.5-7.3.3-10.2,4.7-13.2,10.4-5.3,2.3-8.4-1.9-11-5.5-4.4-6.1-8-12.8-12.1-19.1-2.2-3.3-5-6.2-7.2-9.5-4.3-6.5-10.3-2.4-15.6-2.5-3-.1-6,.7-9,1.1-.4-.8-.7-1.5-1.1-2.3,8-4.9,15.9-10,24.1-14.6,3.7-2.1,8.6-2.4,11.9-4.9a183.06,183.06,0,0,0,20.6-17.7c8.9-8.8,18.3-15.9,30.9-18.5,3.2-.7,6.5-4.4,8.3-7.6,3.8-6.5,9.7-5.3,15.3-5a38.79,38.79,0,0,1,12.2,2.3,20.78,20.78,0,0,1,8.1,6.6c3.2,4.3,5.6,9.2,8.4,13.8,1,1.7,3,3.2,3.1,4.9.5,7.5,5.1,10.8,10.6,12.2-.6,12-1.1,23.4-1.6,34.8-.3,5.9,12.2,13.5,18.2,11.2C172.8,85.08,175.3,84,177.8,83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VillaEva