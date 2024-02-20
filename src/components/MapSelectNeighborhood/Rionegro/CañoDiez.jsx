import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoDiez = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 196.11 97.15"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO DEIZ', municipio.toUpperCase())}
              className="cls-1"
              d="M19.41,88.87c-2.9-3.8-5.4-1.4-7.4,2.6-.6,1.3-.9,2.8-1.7,3.8-2.2,2.7-4.4,2.5-6.1-.7-.4-.7-.8-1.6-.6-2.3C5.61,81.77,1.11,72.07,0,61.87c-.1-1,.9-2.4,1.8-3.2,8.2-8,12.8-17.4,13.9-29.1.6-6,1.1-9.4-6.2-9.4v-10.8C17.61,6.17,25.61,2.47,34.01.17c3.7-1,9,2.8,12.1,1.3,4.8-2.2,7.1-.2,10.8,1.5,4.4,2.1,9.6,2.6,14.6,3.8.8,12.3,12.2,10.6,19.8,13.8,5.3,2.2,10.9,3.3,12.1,10.4.9,5.4,5.1,7.3,9.8,9.8,8.9,4.6,18,8.1,27.8,6.6,6.9-1.1,12.8,2.7,19.3,1.6,3.2-.5,6.4-1.2,9.5-1.2s6.2.9,9.3,1.4c5.7,1,11.4,2,17,2.9-5.8,8.9-22.5,14.5-34.8,12.6-6.5-1-13.2-.5-19.7-.9-3.1-.2-6.3-.3-9.2-1.3-5.9-2.2-11.3-2.7-15.7,2.8-2.9,3.6-6.8,4.7-10.2,2-9.1-7.1-15,.1-21.8,4-.9.5-1.5,1.4-2.2,2.2-7.4,7.3-7.2,6.8-16.9,3.6-10.3-3.5-21.4-4.7-31.6-.4-5.5,2.6-9.7,8-14.6,12.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoDiez