import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaGuayana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70.51 96.57"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA GUAYANA', municipio.toUpperCase())}
              className="cls-1"
              d="M48.1,0c4.3,6.1,8.6,12.1,13,18.1,1.7,2.3,3.4,4.8,5.6,6.4,4.7,3.3,3.2,8.2,3.8,12.5.1.7-.8,1.6-1.4,2.3-3.1,3.9-6.2,7.8-9.4,11.6-2.6,3-5,6.2-8.2,8.4-6.2,4.3-10.1,9.8-10.4,17.3-.3,8.3-.3,8.4-8.5,8.3-1.8,0-4.6.8-5.4,2.1-2.8,4.5-7,5.6-11.7,6.3-1.9.3-4.1.6-5.5,1.7-5,3.9-7-.3-7.8-3.5A98.51,98.51,0,0,1,0,72.7c-.1-1.7,2-3.6,3.3-5.3,5-6.7,9.9-13.4,15-20a24.5,24.5,0,0,1,4.6-3.8,15.1,15.1,0,0,0,2.6-1.8C31.6,34.9,38.2,28.4,43.4,21c2.4-3.5,2.2-8.9,3-13.5A39.62,39.62,0,0,0,46.5.6,10.41,10.41,0,0,0,48.1,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaGuayana