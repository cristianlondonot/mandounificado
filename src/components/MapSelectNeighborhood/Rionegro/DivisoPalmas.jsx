import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const DivisoPalmas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 137 81.9"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('DIVISO PALMAS', municipio.toUpperCase())}
              className="cls-1"
              d="M137,55.9c-6.7,7.3-12.2,13.4-17.8,19.3-.7.8-2.5.9-3.8.8-6.3-.2-6.3-.2-9,5.9-5.9-4.2-11.5-8.7-17.5-12.5-2.3-1.5-5.6-1.7-8.5-1.9-4.1-.2-8.2.1-12.4.2-.9,0-2.3-.4-2.6,0-2.8,3.5-6.3,2.4-9.5,1.2-6.3-2.5-12.5-2.3-18.8-.4-1.4.4-15.2-10.5-15.4-11.9-.5-3.4-.4-7.1-1.9-10.1A237.57,237.57,0,0,0,7.9,25.7c-.6-1-3.2-.8-4.8-1.1-1-.2-1.9-.5-3.1-.8,2.3-2.1,4.1-3.8,4.9-4.5,8.3-1.8,15.7-3.3,23.6-5a19.41,19.41,0,0,1-.2-4.2c.1-1.2.6-3.3,1-3.3C36,6.2,40-2.5,47.9.7a4.48,4.48,0,0,0,2.3,0C62.3.1,66.4,4.6,64,17.3c-1,5.2.7,6.8,5.1,8.1,2.5.8,4.3,3.3,6.6,4.8,6,4,11.8,8.2,18.1,11.7,2.3,1.3,5.7,2,8.1,1.3,3.8-1,5.9.3,7.5,3.2,2.4,4.4,4.3,7.5,11,6.1C125.4,51.6,131.2,54.6,137,55.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default DivisoPalmas