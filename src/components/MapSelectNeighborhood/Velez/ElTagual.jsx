import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElTagual = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.12 84.32" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL TAGUAL', municipio.toUpperCase())}
              className="cls-1"
              d="M0,72.4c.8-1.3,1.5-3.5,3-4.5C10.3,62.7,17.7,57.7,25.3,53c4.2-2.6,7-5.5,7.2-11,.3-7.5,1.9-14.9,2.9-21.9,2.7-3.8,5.5-8,8.5-12a25.71,25.71,0,0,1,3.9-3.4C50,2.9,52.2,1.1,53.7,0c0,.1.1,1.9.2,3.7,13,5.3,13,5.3,8.5,18.5a4,4,0,0,1-1.2,2.1c-7,3.8-9.3,11.1-13.2,17.2A7.72,7.72,0,0,0,46.4,46c.4,7.4-1.6,13.6-8.2,17.7a2.28,2.28,0,0,0-.8.9c-2,5.2-3.8,10.6-6.1,15.7-.8,1.7-3.5,4.3-4.3,4C18.2,80.7,9.6,76.7,0,72.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElTagual