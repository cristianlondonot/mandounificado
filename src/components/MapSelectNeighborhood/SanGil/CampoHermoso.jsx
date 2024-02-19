import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CampoHermoso = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.5 61.04" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAMPO HERMOSO', municipio.toUpperCase())}
              className="cls-1"
              d="M0,8.1c1.7,0,4.3.1,6.9,0,10.8-.7,21.5-1.6,32.3-2,9.1-.3,18.6-1.6,27.3.4,8.9,2,16.7-.7,25-1.5,8.5-.8,16.9-1.5,25.4-2.4C122.3,2,127.7.9,133.1,0c1.5,6,3.4,13.3,5.4,21.3-3,.5-5.7,1.3-8.4,1.4-6.4.1-10.8,2.2-13.4,8.7-.9,2.2-5.6,3.6-8.6,3.8C93.5,36.3,82,42.7,72.2,53.4,64.4,62,45,63.4,35,57.3c-1.8-1.1-4.7-2.5-6.1-1.8-7.6,3.6-11-1.9-15.4-6.1C6.4,42.8,5.7,32.9.4,25.4c-.5-.7-.3-1.9-.3-2.8C0,17.6,0,12.8,0,8.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CampoHermoso