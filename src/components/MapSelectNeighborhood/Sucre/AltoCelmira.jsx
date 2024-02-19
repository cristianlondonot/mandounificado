import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AltoCelmira = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.23 87.58" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTO CELMIRA', municipio.toUpperCase())}
              className="cls-1"
              d="M54.7,87.58c-2.3-6.6-6.9-6.9-12.4-7.8-7.7-1.2-15.2-4.4-22.6-7a7.73,7.73,0,0,1-4.4-4.1c-1.7-4.3-4.3-6.9-8.4-9.2-2.5-1.4-3.1-6.7-4.2-10.3S.7,41.58,0,39c2.3-6.5,4.2-12.5,6.5-18.2a10.54,10.54,0,0,1,4-5C17.6,12.38,24.2,8.58,29,2c2.7-3.6,11.1-1.9,13.5,2a34.76,34.76,0,0,0,7.9,9.2c1.2.9,4.8-.2,6.6-1.4,3.9-2.9,5.4-1.2,6.8,2.5.8,2.2,2.2,4.2,1.7,6.1-.5,5.7-2.9,12-1.1,16.9,5.1,13.8,2.4,26.9-1,40.1C62.3,80.88,58,83.68,54.7,87.58Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AltoCelmira