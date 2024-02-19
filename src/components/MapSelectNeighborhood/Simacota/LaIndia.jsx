import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaIndia =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.99 88.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA INDIA', municipio.toUpperCase())}
              className="cls-1"
              d="M26.4,88.9c-1-14.9-1-14.9-12-15.5,1.5-4.1,3-7.8,4.2-11.7,2-6.2.3-8.6-6-9.6a12.49,12.49,0,0,1-3.9-1.8A29.24,29.24,0,0,0,0,47.4C1.6,39.7,3.3,32,4.8,24.8c6,1.7,11,3.3,16,4.6,1,.3,2.4-.5,3.5-.9,1.6-.5,3.4-.9,4.5-1.9,2.2-1.9,5.2-3.9,5.8-6.3.8-3.2,1.3-5.4,5.1-6.2,2.9-.6,4.6-2.7,4.4-6.2-.1-2.5.9-5,1.4-7.9a13.82,13.82,0,0,1,2.4,1.4c11.5,11.1,22,23.5,34.8,32.9,10,7.4,10.7,15.5,7.8,25.1-1.6,5.2-5.6,9.6-8.9,14.2-1.4,1.9-3.6,3.3-5.4,4.9.4,1.6.8,3.2,1.3,5.1-2.5-.5-4.5-.8-6.6-1.2.4-.8.7-1.7,1.1-2.5-6.6,6.5-13.7,2.5-20.9,1.5-.5-3.8.2-9.1-6.3-7.5-2,.5-3.8,2.1-5.4,3.5C35.3,80.9,31.2,84.7,26.4,88.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaIndia