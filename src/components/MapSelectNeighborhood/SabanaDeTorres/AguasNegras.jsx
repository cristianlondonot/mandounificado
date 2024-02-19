import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AguasNegras = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.71 129.6">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('AGUAS NEGRAS', municipio.toUpperCase())}
              className="cls-1"
              d="M11.55,3c0,1.4.5,3-.1,4.1-3.2,6.8,3.4,7.6,6.4,9.6,3.2,2.1,7.2,1.1,8.5-3.9.2-.7,3.6-1.5,4.5-.8,5.4,4.1,10.1,8.9,18.2,6,2.4-.8,6.1,4.3,9.9,1.2,1.3-1.1,2.9-2.7,3.1-4.3,1.4-11.8,1.3-11.8,13.3-13.7A22.79,22.79,0,0,0,78.65,0c2.8,5,6.1,9.2,14.2,4.7-4.5,6.2-1.7,9.9,1.6,13.6,4.3,4.9,6.8,9.7,4.2,16.9-1.9,5.1-.8,11.3-2.1,16.7-1.8,7.5-3.6,15.3-7,22.2-6.4,13.4-4.7,24.4,6.1,34.7,1.9,1.8,2.1,6,1.9,9.1-.1,1-3.8,2.5-5.8,2.5a85.67,85.67,0,0,1-16-1.3c-9.1-1.7-17.3,2.1-26,2.9-1,.1-2.7.6-2.9,1.4-1.8,5.4-6.7,5.1-10.8,6.2-5.4-7.6-6-7.8-14.5-3.6-6.9,3.4-10.1,1.4-10.4-6-.2-5.3-.8-10.6-1.4-15.9A5,5,0,0,0,8,100.7c-9.9-6.9-6.6-17.2-6.7-26.4-.1-3.5,2.7-7,3.2-10.7,1.2-8.2,2.3-16.5-2.1-24.3C-2,31.9.05,17.2,6,11.2,8.05,9.1,9.35,6.3,11.55,3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AguasNegras