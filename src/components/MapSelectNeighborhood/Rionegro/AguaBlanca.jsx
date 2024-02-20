import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AguaBlanca = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140.6 119.06"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('AGUA BLANCA', municipio.toUpperCase())}
              className="cls-1"
              d="M78.7,2.2c3.1,1.7,6.1,3.5,10.5,6-.6-3.6-.8-5-1.3-8.2,2.7,2.4,4.1,3.7,5.6,5,4.2-2.1,8.1.5,7.9,5.7-.2,3.2-1.3,6.5-.9,9.7s2.2,5.9,3.5,9.5c1.2-.5,2.6-1,4.1-1.6-.3.9-.7,1.7-1.2,3,3.3.2,6.8,2.7,8.3-2.9.3-.9,3.3-1.6,4.9-1.6,5.1.3,10.5,3,14.5-2.7.1-.1,3.1,1.8,6,3.5-9.9,1.9-9.8,2.1-10.2,10.3-.3,7.3-1.3,14.6-2,21.9-.4,4.6-1.3,9.2-1.1,13.8.1,2.2,2.2,4.3,3.4,6.4a40.35,40.35,0,0,1,3.6,8c-7.3-2.9-14.7-6.7-16.3,7,5,1.9,10.8,4.1,17,6.5a44.68,44.68,0,0,1-3.2,3.5c-2.6,2.6-4.5,5.1-2.2,9,.6,1,0,3.5-.9,4.2s-3.5,1.2-4.5.5c-3.9-2.6-7.5-5.7-11.3-8.5-1.2-.9-2.7-2.3-3.9-2.2-7.8.9-10.5-6.2-15.7-9.4-4.9-3-5.9-6.5-5.1-12.6.9-6.8-1.3-14-2.5-21-.2-1.4-1.8-3.4-2.9-3.5S80.1,63,79,64.1a9.51,9.51,0,0,0-1.5,2.2c-5.7-.8-10.8-1.4-16-2.1.6-4.4,1.3-9.1,1.8-13.9a3.32,3.32,0,0,0-1.7-2.6c-.8-.3-2.6.4-2.8,1.1-3,8.8-11.5,7.4-17.8,8.6-7,1.3-13.2,2.4-17.9,8.7-2,2.6-6.9,3-9.1,3.8-5.5-7.7-9.9-14-14-19.7,8,3.1,13.8-1.9,19.2-8.7,1.4-1.8,4.3-2.4,6.6-3.5,4.3-2,8.8-3.7,12.9-6.1,1.8-1.1,2.8-3.6,3.7-5.6a39.4,39.4,0,0,0,2.7-8.2,6.31,6.31,0,0,0-.7-4.5c-1.5-2.1-5-4.1-2.2-6.6A15.38,15.38,0,0,1,52,3.4c3.6.1,7.3,2.2,10.8,3.8C70.6,11,73.3,10.2,78.7,2.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AguaBlanca