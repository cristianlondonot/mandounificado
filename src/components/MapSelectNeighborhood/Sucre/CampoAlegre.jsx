import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CampoAlegre = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.3 85.18" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAMPO ALEGRE', municipio.toUpperCase())}
              className="cls-1"
              d="M0,16.8c1-.5,2.6-.8,3.6-1.7,4-3.8,8.2-7.1,14.2-7.3,1.8-.1,3.5-2,5.3-3C24.5,4,26,2.7,27.5,2.6,45.7,1.6,63.8.6,82,0c4.9-.1,9.5,1.9,13.3,6.5C68.9,15.8,62.4,38,55.7,59.3c-7,1-14.1,1.8-21.1,3.1-1.4.3-3.5,2.4-3.4,3.5.9,7.4-4.8,11.5-8.2,16.5-2.6,3.8-9.2,3.7-11.3-.3a49.89,49.89,0,0,1-5-14.5C5,57,4,46.3,2.7,35.6c-.4-3.5-.8-7-1.3-10.5A79.94,79.94,0,0,0,0,16.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CampoAlegre