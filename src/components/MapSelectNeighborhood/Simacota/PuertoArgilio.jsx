import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PuertoArgilio =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.5 94.61">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PUERTO ARGILIO', municipio.toUpperCase())}
              className="cls-1"
              d="M8.1,90.6c-.4-2.3-1.1-5.1-1.4-7.9s-.8-5.8,0-8.4C10.1,62.6,9.3,59.3,0,52c6.3-4,11.3-8.8,9.6-16.7,2-.7,4.2-.7,5.2-1.9,4.9-5.9,9.4-12.1,14.3-17.9a7.15,7.15,0,0,1,5.4-2c4.1.5,8.1,2.4,12.2,2.7,5.4.3,7.7-3.5,8.7-8.4.4-1.9.7-4.8,2-5.5a15.26,15.26,0,0,1,7.9-1.1,20.26,20.26,0,0,1,7.6,3.2C78.5,8.2,80.3,8,83.8,1.9A18.58,18.58,0,0,0,84.9,0c4.3,2,4.3,2.1.6,5.9-6.7,6.7-6.6,15.8.8,21.8,2.2,1.7,5.2,2.3,6.8,3,1.2,4.7,2.4,9,3.5,13.3s2.5,8.6,2.7,12.9c.3,8.1.4,9.2,7.2,17.8-5.8,4.6-11.7,9.3-18.1,14.4C84.5,78.3,74,78.2,66.2,74.2c-4.3-2.2-9.5-.3-12.3,4.2-2.9,4.8-6.4,7.9-12.2,9-1.8.3-3,3.8-4.4,5.8-.3-.6-.7-1.2-1-1.8-4.3,1-8.6,1.9-12.8,2.8a6.71,6.71,0,0,1-3.1.3C16.3,93.4,12.4,92.1,8.1,90.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PuertoArgilio