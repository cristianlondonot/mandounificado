import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VillaNueva = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.77 116.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VILLA NUEVA', municipio.toUpperCase())}
              className="cls-1"
              d="M96.5,109.1c-2,1.2-4.3,3.7-5.9,3.3-10.5-2.1-20.5-2.2-30.5,4.3-1.6-3.3-2.5-6.6-4.5-8.9-1.7-1.9-4.8-4-7.1-3.8-8.5.7-14-2.4-19.4-9.3S16,83,9.3,77.3c-3-2.6-6.2-5-9.3-7.5,3.9-4,7.6-7.2,10.6-11.1a36.55,36.55,0,0,0,5.8-10.6c3.1-10.6,10.5-19.9,9.4-31.9-.3-3.5.7-7.6,5.8-9.2,3.4-1.1,6.1-4.6,9-7C50.8,5.1,53.1,16.5,59,25.5,64.6,34,68.6,43.4,76,51c5,5.1,9.1,11.1,15.7,14.5.8.4,1.2,2.5,1.2,3.8,0,6.5,2.8,11.2,8.6,14.4,3.8,2.1,6.5,10.7,4.7,13.8C102.9,101.4,99.7,105.2,96.5,109.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VillaNueva