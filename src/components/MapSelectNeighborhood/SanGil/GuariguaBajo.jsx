import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const GuariguaBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.62 63.3" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('GUARIGUA BAJO', municipio.toUpperCase())}
              className="cls-1"
              d="M129.2,53.3c-3.9,5.6-9.2,5.1-15.1,2.7-2.9-1.2-6.7-1.9-9.7-1.1C95.9,57,87.5,60,79.1,62.7a7.94,7.94,0,0,1-2.2.6H41.6a14,14,0,0,1,0-2.9c2.4-7.7.5-10.4-7.2-12.2-3.8-.9-8.7-2.8-10.5-5.8-6.1-10-16-17.7-18.4-30.2C4.8,8.4,1.9,4.9,0,1.3A11.32,11.32,0,0,1,1,0C3.9,1.4,7.2,2.4,9.6,4.4A61.41,61.41,0,0,0,50.3,19.1c4.6,0,9.2-.2,13.8.1,8.7.6,17.3,1.4,25.9,2.2a53.86,53.86,0,0,0,24.5-3.6c4.8-1.8,13.5,2.5,14.9,7.3,1.3,4.3,2.8,8.7,3.2,13.1.2,2.8-1.5,5.8-2.2,8.8A46.57,46.57,0,0,0,129.2,53.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default GuariguaBajo