import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const QuebradaLarga = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.6 89.24" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUE BRADA LARGA', municipio.toUpperCase())}
              className="cls-1"
              d="M48,55.42c-2.4.6-5.8,1.4-9.1,2.5a71.14,71.14,0,0,0-7.5,3.3c-.8.4-2.1,1.4-2.1,1.9,1,7.7-7.4,12.2-6.3,20.3.6,4.5-6.4,7.2-10.6,5.1C6.1,85.22-.1,82.22,0,73.22c7.8,2.2,8.4-5.1,11.1-9.6,1.8-3-.2-5.1-3.7-4.9-1.8.1-3.5.8-5.9.9,13.3-5.8,10.6-18.4,12.6-28.8.2-1.2-2.1-2.8-3.8-4.9.1-.4.4-2,.6-2.9,9.7,1.6,16.6-3.5,23.4-8.8.8-.6,2.4-.4,3.6-.6,4.4-.9,8.3-2.2,11.4-6.1,3.9-4.7,9.2-7.8,17.3-7.5-1.4,4.7-2.2,9.3-4.2,13.2-1.8,3.5-5,6.2-8.1,10,.4.9,1.6,3.1,2.6,5.1-2.2,2.4-4.1,4.5-6.4,7,3.1,1.4,5.5,2.6,6.9,3.2C54.3,44.22,51.3,49.52,48,55.42Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default QuebradaLarga