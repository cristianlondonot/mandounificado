import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Calichana = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 110.25 74.61"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CALICHANA', municipio.toUpperCase())}
              className="cls-1"
              d="M10,31.21a19.11,19.11,0,0,0-2.4-.7c-9.2-2.1-9.5-2.3-3.6-10.1,3.9-5.1,5.4-10.9,6.2-16.9.6-3.8,2.8-4.7,4.8-1.8,8,11.6,19.2,10.6,30.9,8.9a8.5,8.5,0,0,1,4.2.2q10.2,3.45,20.4,7.2a11.73,11.73,0,0,1,5.2,3.5c3.5,4.6,6.5,9.6,9.9,14.4a11,11,0,0,0,4.4,3.9c.7.3,2.3-1.9,3.6-2.9,3.2-2.5,6.3-5.3,9.8-7.3,5.5-3.3,3.7-8.2,3.6-12.9,0-1.8-.2-3.5.5-5.3,1.4,6.3,6.5,13.1-2,18.4-.7.4.1,3.3.2,5.6-5.1,1.4-6.6,5.3-3.5,11.3-1.9.2-3.4,0-4.3.5-2.3,1.5-4.8,3-6.4,5.1-2,2.5-2.9,6-5,8.4-.8.9-3.8-.1-5.7-.5-2.3-.4-4.5-.9-6.7-1.4-.3,2.2-.7,4.3-.9,6.5-.3,2.5-.4,5.1-.5,7.3-3.2.8-5.8,1.4-8.4,2,.6-.6,1.2-1.3,1.9-1.9-4.4-3.3-9.5-6.1-12.9-10.2-2.9-3.5-3.2-8.9-5.5-13-3.9-7.2-8.4-14.2-12.7-21.2a28.48,28.48,0,0,0-2.3-2.6c-4.9-6.6-13.8-8.8-20.7-4.7-1.1.7-1.7,2.7-1.9,4.2s.5,2.9.7,4.4C10.76,29.91,10.36,30.31,10,31.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Calichana