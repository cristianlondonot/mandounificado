import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaCabaña = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.12 38.94" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA CABAÑA', municipio.toUpperCase())}
              className="cls-1"
              d="M40.62,38.94l.6-.9c1.1-1.5,2.5-2.8,3.7-4.3a10.83,10.83,0,0,0,2.1-5.2,28.1,28.1,0,0,0,.1-2.9,3.34,3.34,0,0,0-.6-2.2,4.82,4.82,0,0,0-2.8-1.5,9.79,9.79,0,0,1-3.7-1.4c-2.1-1.5-1-4.1-.3-6.1.5-1.2,1-2.3,1.5-3.4.3-.6.8-1.5.5-2.1a1.85,1.85,0,0,0-1.2-.7,10.55,10.55,0,0,0-2.4-.6,39,39,0,0,0-5.9-.1,11.89,11.89,0,0,1-4.5-.8,22.68,22.68,0,0,1-3.4-1.9c-2.2-1.4-4.7-3.1-7.5-2.8-2.4.3-4.8,2.8-7.3,1.6-1.2-.5-1.5-1.5-1.8-2.7-.5-1.8-2.5-.6-3.5.1a.54.54,0,0,1-.8-.2,21.83,21.83,0,0,1-2.2,2.1c-1.1,1-1.9,2.7-.4,3.8.8.6,1.9,1.4,1.3,2.6-.3.6-.9,1-1.2,1.6a4.83,4.83,0,0,0-.2,2.4v3.9h.4l1,1.2h2.3v-1.2h12.4v-1H18l1.2,1h1v1.2l1.2,1.2,2.3,2.2,1,1.2,2.3,2.3,3.3,2.2,3.3,1.2h2.3v1l-1.2,1.2v1.2l-5.6,5.5h8l3.3,1.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaCabaña