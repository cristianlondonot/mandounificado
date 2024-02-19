import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaBodega = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 307.48">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA BODEGA', municipio.toUpperCase())}
              className="cls-1"
              d="M13.8,290.8c1.8,3.6,3.6,7.4,6.5,10.3,3.9,4.1,9.7,5.9,15.1,6.3a39.74,39.74,0,0,0,9.1-.5c2.8-.5,5.7-1.1,8.1-2.8,4.7-3.3,6.2-9.1,8.3-14.2,1.2-2.8,2.7-5.4,3.3-8.4a21.76,21.76,0,0,0,.1-5.1l-.3-4.8a25.9,25.9,0,0,1,.7-9.2,20,20,0,0,1,4.8-7.9,59.41,59.41,0,0,1,6.9-5.5,31.79,31.79,0,0,0,6.8-6.9c1.7-2.4,2.8-5.1,4.6-7.4a13.2,13.2,0,0,1,6-4.1.56.56,0,0,1,.6.1c.1-.2.1-.4.2-.6.8-3.1.5-6.5,1.1-9.6.6-3.3,2.4-6.1,4.5-8.8a47.06,47.06,0,0,1,3.6-4.2,50.71,50.71,0,0,1,4.4-3.7,10.3,10.3,0,0,0,2.6-2.5,2.75,2.75,0,0,0,.2-2,30.25,30.25,0,0,1,0-8.5c.3-1.4.8-3.3,2.1-4,.8-.5,1.8-.3,2.5-.7a8.69,8.69,0,0,0,1.6-1.7c1.1-1.5,2-3.1,3-4.7s1.9-2.9,2.7-4.5a20.65,20.65,0,0,0,1.8-10.1l-.9-.9c-1.4-1.3-3.7-1.4-5.4-2-2.6-.9-5.4-3-4.6-6.1.7-2.7,3.2-4.8,5.1-6.8a11.45,11.45,0,0,0,2.7-3.8,9.39,9.39,0,0,0,.5-4.7c-.2-1.8-1.4-3.2-1.8-4.9s-.2-3.3-.2-5c-.1-4.2-5.1-3.6-8-4.1a.74.74,0,0,1-.5-.6c.4-8.3-3.5-15.9-7.5-22.9a68,68,0,0,0-4.6-6c-1.2-1.6-2.3-3.6-1.7-5.6.8-2.5,3.6-4.2,5.9-5.1,1.3-.5,2.6-.9,3.8-1.5a6.09,6.09,0,0,0,2.6-3.1c.7-1.5,1.2-3,1.8-4.4s1.1-2.5,1.7-3.8a18.65,18.65,0,0,1,2.2-3.9,5.47,5.47,0,0,1,3.5-2.2,7.86,7.86,0,0,0,2.6-.8,9,9,0,0,0,2-1.4,25.76,25.76,0,0,0,3.2-3.4,47.85,47.85,0,0,0,2.9-4.4l-1.1-1.2V52.8h-1.3V51.5l-1.3-1.1V46.6H125V44.2l-1.3-1.3V41.6h-1.1V39.2h-1.3V36.6l1.3-1.1V32.9l1.1-1.3V30.5l-1.1-1.3V27.9l-1.3-1.3V25.5L120,24.1V20.4h1.3V19.1l1.3-1.1V14.2h1.1V13.1l1.3-1.3V3.1l-1.3-1.3V.5l-.5-.5c-1.2,1.4-2.4,2.8-3.6,4.1a68.44,68.44,0,0,0-8.2,11.2c-5.2,9.1-10,18.5-14.6,28s-9,18.9-13.5,28.3c-1.1,2.3-2.3,4.7-3.4,7s-2.4,4.6-3.5,7A100.28,100.28,0,0,0,71.9,100a58.31,58.31,0,0,1-2.2,7.1c-.9,2.4-1.9,4.7-2.9,7.1-.8,1.9-1.5,3.8-2.3,5.7l3.3,2.7,1.3,1.1-1.3,2.6L50.3,164.9,13.2,244.4l-3.7,7.4L2,269.3,0,274C7,276.5,10.6,284.5,13.8,290.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaBodega