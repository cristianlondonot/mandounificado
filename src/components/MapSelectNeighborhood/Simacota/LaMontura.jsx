import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaMontura = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 135.84 114.87"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA MONTURA', municipio.toUpperCase())}
              className="cls-1"
              d="M76.24,3.77v-.2c-1.5-.2-3-.5-4.5-.8-4.1-.9-8.2-2-12.4-2.5a29.7,29.7,0,0,0-10.7.5c-6.8,1.5-12.8,5.3-18.6,9a58.47,58.47,0,0,0-8.1,6,47.88,47.88,0,0,0-6.8,8.1c-4,5.9-6,12.8-9.7,18.8a58.57,58.57,0,0,0-4.2,7.2c-.8,1.8-2,4.7-.6,6.5a18.78,18.78,0,0,0,2.5,2.4c.9.8,1.9,1.6,2.8,2.4,1.2,1.1,2.3,2.3,3.6,3.3a54.76,54.76,0,0,0,4.9,3.5c3.3,2.1,6.8,3.9,10.3,5.8s6.9,3.9,10.3,6a93.29,93.29,0,0,1,9.6,6.9c3.1,2.6,6.2,5.3,9.3,8s6.2,5.4,9.5,7.8a38.38,38.38,0,0,0,10.1,5.1,55.73,55.73,0,0,1,10.1,4.3,20.49,20.49,0,0,0,4.7,2.3,21.27,21.27,0,0,0,4.4.7,37,37,0,0,1,4.1-8.2c1.9-3.1,3.9-6.1,5.7-9.3,3.4-6.1,4.5-13.1,5.7-19.9.6-3.4,1.2-6.9,2.1-10.2a47.36,47.36,0,0,1,3.7-9.7,61.59,61.59,0,0,1,12.8-16.4c2.5-2.3,5.6-4.4,7.5-7.2.5-.8,1-1.5,1.5-2.3h-1.6v-9.1h-3.1l-2.8-3.1h-3.1v-5.9h-12.3l-6.3,2.8H88.54v-2.8h-3.1v-3.1h-5.9V7.37Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaMontura