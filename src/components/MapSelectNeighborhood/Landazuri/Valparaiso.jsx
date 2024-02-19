import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Valparaiso = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128.32 105.96"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VALPARAISO', municipio.toUpperCase())}
              className="cls-1"
              d="M3.62,31h0c-.2.1-.4.4-.6.6a.1.1,0,0,0-.1.1.1.1,0,0,1-.1.1,11.26,11.26,0,0,0-2.4,2.9,2.6,2.6,0,0,0-.4,1.5c.2.6.8.9,1.3,1.2,1.1.7,2.4,1.2,3.2,2.3a7.47,7.47,0,0,1,1.3,3.5c.7,5.1-1.7,9.8-2.6,14.7-.2,1.1-.4,2.3-.6,3.5a6,6,0,0,0,.4,3.5c.6,1.1,2,1.6,3.1,2.1s2.4,1,3.6,1.4c2.9,1,6.1.8,9.1.9a23,23,0,0,1,4.5.5,15.93,15.93,0,0,1,4.2,1.9c2.5,1.6,5,3.3,7.9,4,2.7.6,5.6-.4,8.2.7.1,0,.2.1.4.2s.1,0,.2.1a.55.55,0,0,1,.3.5,13.25,13.25,0,0,1,1.6,2.5,2.88,2.88,0,0,1,.3,1.6,5.44,5.44,0,0,0,0,1.8c.6,2.1,3.1,3.4,4.7,4.7a11.54,11.54,0,0,0,2.9,2,5.56,5.56,0,0,0,3.6.1c2-.4,4.1-1.1,6.1-.4a9.56,9.56,0,0,1,4.6,3.6c1.4,1.7,2.5,3.6,4.1,5.2.8.9,1.6,1.7,2.3,2.6s1.3,2,2,3.1c.5.8,1.1,1.8,2.1,1.9a5,5,0,0,0,2.7-.7c1.5-.9,2.5-2.5,4-3.6s3.6-1.5,5.5-2.1a11.41,11.41,0,0,0-2.2-5.2c-1.1-1.7-2.1-3.4-2-5.5.2-2.6,1.8-4.8,2.4-7.3a5.24,5.24,0,0,0-.1-3.5,24.26,24.26,0,0,0-1.4-2c-1.2-1.9-1-4.5-.5-6.5a12.45,12.45,0,0,1,3.5-5.8.75.75,0,0,1,.8-.1,18.84,18.84,0,0,1,2.4,1.4,2.51,2.51,0,0,0,1.4.6,4.82,4.82,0,0,0,2.2-1.5,21.6,21.6,0,0,0,2.5-2.7c2.8-3.4,5-7.2,7.9-10.6a39.67,39.67,0,0,0,3.9-4.4c1-1.5,1.1-3.2,1.5-4.9a6.76,6.76,0,0,1,2.1-3.4c1.4-1.1,3-1.9,4.3-3.1a64.3,64.3,0,0,0,8.1-9.2l.1-.1c.1-.5.3-1,.4-1.4l-1.1-1.2v-2.6h-1v-1.1h1.3v-2.6h-1.3l-1.3,1.3h-2.4v-1.3l-1.3-1.3h-7.5l-1.3,1.3h-.2c-.6.9-1.3,1.8-1.9,2.7a7,7,0,0,1-3.2,2.7,13.31,13.31,0,0,1-4,.5c-3.1.1-6.1,1.2-9.3,1a7.92,7.92,0,0,1-4.2-1.5,19.9,19.9,0,0,1-3.6-2.9c-2.1-2.2-2.9-5.3-4.4-7.9a10.32,10.32,0,0,0-2.9-3.3,4.45,4.45,0,0,0-3.4-.5c-2.3.4-4.9,1.6-7.2.8a4.25,4.25,0,0,1-1.7-1c-.5-.4-.5-1-.8-1.5-.9-1.4-2.9-1.4-4.3-1.4-3.5-.1-7.5.7-10.6-1.3-2.1-1.4-5.9-4.6-8.4-2.6s-2.4,5.3-3.6,8a11.86,11.86,0,0,1-2.6,3.3c-1.1,1.2-1.7,2.7-2.8,3.9s-2.6,2.1-3.7,3.4a24.21,24.21,0,0,0-2.6,4.7c-3.1,5.6-10.1,6.7-15.9,6.9-1.7.1-3.4.4-5.1.5a9.86,9.86,0,0,1-2.4-.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Valparaiso