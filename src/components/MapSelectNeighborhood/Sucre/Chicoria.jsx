import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chicoria = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.03 110.5" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHICORIA', municipio.toUpperCase())}
              className="cls-1"
              d="M74,81.3c-9.4,10.3-18,19.7-26.6,29.2-.8-.3-1.5-.7-2.3-1-.1-2.1-.4-4.2-.4-6.2-.1-8.9-5.8-14.9-14.6-15.1-5.3-.1-11,1.4-13.4-5.8-1.6-4.8-5.7-9.3-5.7-13.9-.1-7.5-6.5-10.6-8.8-16.4-1.5-3.9-4.4-6.8.5-10.7s9.8-7.9,13-13c5.6-8.9,9.8-18.6,14.8-28.4,7.5,5.3,14.8,11.5,16.1,22.8.4,3.9,3.5,7.4,4.3,11.3,1.5,7.5,2,15.2,3.5,22.7C56.73,67.6,63.33,75.6,74,81.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Chicoria