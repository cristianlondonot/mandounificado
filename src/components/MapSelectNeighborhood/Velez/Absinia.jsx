import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Absinia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.74 67.18">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ADSINIA', municipio.toUpperCase())}
              className="cls-1"
              d="M28.22,0c-.3,10.8,4.8,17.8,11.7,23.3a46.46,46.46,0,0,0,15.2,8.1c11.3,3.4,22.9,5.7,35.5,8.8.8,4.4-2.4,8.4-7.9,10.7-5.2,2.2-9.4,4.3-10.3,11-.7,5.7-6.2,5.4-10.6,5.2-5.8-.2-11.5-1-17.8-1.6,2.7-9.6-5.8-14.2-11.5-20.3-2.2-2.3-5.2-4-7-6.6-4.8-6.8-12.2-9.8-18.9-14.1-3.1-2-6.9-6.4-6.6-9.3.4-4.1,5.2-5.5,9.9-4.5s8.8-.3,11.7-4.7C23,3.9,25.32,2.6,28.22,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Absinia