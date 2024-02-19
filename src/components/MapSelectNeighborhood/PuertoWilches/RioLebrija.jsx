import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const RioLebrija = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.68 20.9">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('RIO LEBRIJA', municipio.toUpperCase())}
              className="cls-1"
              d="M13.68,11.21c-3.27-1.47-4.9-4.29-3-10.82C-5.06-2.56,6.21,11.85,0,20.89,5.41,21.15,9,14.87,13.68,11.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default RioLebrija