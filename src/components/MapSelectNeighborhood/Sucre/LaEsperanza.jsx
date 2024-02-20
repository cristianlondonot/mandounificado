import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaEsperanza = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 115.46 113.15"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA ESPERANZA', municipio.toUpperCase())}
              className="cls-1"
              d="M111.71,60.42c3.2,4.4,4.4,9.1,0,14.6-2.8,3.6-5.9,7.7-1.7,12.9,1,1.3.1,5.4-1.3,7.2-4.1,5.7-8.9,10.9-13.5,16.2-2.6,3-11.7,2.1-14.5-1.1a6.28,6.28,0,0,0-4-1.9c-6.1-.1-7.8-2.7-5.5-8.4.9-2.3,2-4.6,2.2-7,.2-1.9-.3-4.9-1.5-5.6-4.5-2.5-6.5-6.3-7.5-11.1-1.6-7.6-8.6-7.6-14.1-9.7-.5-.2-1.6-.3-1.8,0-5.9,8.1-14.1,1.3-20.9,3.5a52,52,0,0,0-7.9,3.8c-1,.6-1.7,2-2.7,2.3-5.4,1.6-11,3-16.9,4.6A11.68,11.68,0,0,1,.21,77c3.2-10,6.6-20,9.7-30.1,2.6-8.4,4.3-17.3,7.7-25.4,2.9-6.8,7.5-12.9,12-18.9,2.4-3.2,5.7-3.3,9.8-1.2,13.2,6.5,26.5,13.1,40.3,18.2,6.4,2.4,11.6,5.8,14.5,10.9,4.4,7.7,11,12.2,18.3,15.9,4.6,2.4,2.4,6.2,2.6,9.4C115.51,57.22,113.31,58.62,111.71,60.42Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaEsperanza