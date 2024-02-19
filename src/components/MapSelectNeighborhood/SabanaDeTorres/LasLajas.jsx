import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasLajas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124.55 134.66"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA LAJAS', municipio.toUpperCase())}
              className="cls-1"
              d="M0,117.2c5.9-4.9,11.4-9.5,17-14.1.3-.3.8-.5,1-.9,1.7-5.3,3.8-10.4,4.9-15.8.7-3.6.5-6.5,5.5-7.6,2.2-.5,3.8-4.9,5.3-7.8,1.3-2.4,1.5-5.6,3.1-7.6,3.7-4.4,3.3-11.6-1.4-15-3.6-2.6-6.8-5.7-10.4-8.3-3.4-2.4-2.5-3.9.3-5.9,1.3-.9,2.9-2.4,2.9-3.7.3-8.8.1-17.7.1-26.5l-2-.6c3-1.3,6.1-2.5,8.1-3.4,1.9,4.1,3.3,7.3,4.7,10.5a5.9,5.9,0,0,1,.7,2.5c-.5,8.7,3,15,11,18.8.4.2,1,.6,1,.9.2,7.6,7.4,10,11.3,14.5,6.6,7.6,15,13.5,22.7,20.1,2.5,2.1,5.5,3.9,7.3,6.5,2.5,3.7,3,8.7,9.3,8.6,1.4,0,2.6,4.1,4.4,5.9,3.6,3.5,6.8,7.2,12,9.3,6.7,2.6,3.9,10.5,4.8,15.9.8,4.6,2.6,10.7-2.7,14.9-.4.3.5,2.4.8,3.7-5.2-.3-10.3-1.2-15.3-.8-6.2.6-12.4,2.5-18.6,3.3-2.5.3-5.1-.7-7.7-.8-6.5-.1-13.1-.1-19.6-.1-11.4,0-23,1-34.2-.3C15.7,132.3,7.9,124.6,0,117.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LasLajas