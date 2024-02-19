import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Gualillo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.99 54.75" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('GUALILLO', municipio.toUpperCase())}
              className="cls-1"
              d="M48.94,0c1.6,1.1,4.6,2.1,5,3.8s-1.4,4.3-2.8,6c-2.7,3.2-5.9,5.9-8.9,8.9a1.27,1.27,0,0,0-.5,1.1c.3,5.2.5,10.3,1.1,15.5.3,3,1.3,5.9,1.8,8.8.1.9-.3,2.4-.9,2.7C35.34,51.1,27,58,17,53c-6.4-3.2-14.9-5.1-16.9-13.9A6.1,6.1,0,0,1,1.34,34c8.7-9.9,17.1-20.2,30.1-25,3.9-1.4,7.1-4.6,10.8-6.7C43.94,1.2,46,.9,48.94,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Gualillo