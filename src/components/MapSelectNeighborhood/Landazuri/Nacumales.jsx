import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Nacumales = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.05 49.8">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('NACUMALES', municipio.toUpperCase())}
              className="cls-1"
              d="M62.45,2.6A13,13,0,0,0,57.85.4a4.71,4.71,0,0,0-1.7-.4c-.3,0-.3,0-.3.1a5.85,5.85,0,0,0-.4,1.9,4.77,4.77,0,0,1-2,3,5.44,5.44,0,0,1-3.3.6c-1.5-.2-3-.6-4.5-.9-1.7-.4-3.3,0-5,.1a26.15,26.15,0,0,1-2.8,0c-.4,0-1.2-.1-1.6.2s-.3,1.1-.4,1.5a4.11,4.11,0,0,1-2,2.3c-1.3.6-2.9.2-4,1.2s-1.7,2.5-3,3.5c-.7.5-1.4.9-2.1,1.4s-1.3,1.1-2,1.6c-1.2.9-2.4,1.8-3.7,2.6a28.84,28.84,0,0,0-3.8,2.2c-1.9,1.6-2.6,4.2-4.6,5.7a4.27,4.27,0,0,1-3.6.8c-1.5-.3-2.8-1-4.3-1.3a12.29,12.29,0,0,0-2.7,6.3,13.92,13.92,0,0,0,1,6.4c.4,1,1,2,1.4,3s.7,2.2,1.1,3.2a6,6,0,0,0,2,2.7c.8.6,1.6,1.1,2.3,1.7l.4-.4,2.6-1.3h2.4l2.6-2.6L17,43.1l1.3-1.3h2.6L22,40.5V36.8h1.3l1.3-1.3L27,36.8h2.6l1.3-1.3V29.4L32,28.1h1.3l2.6,1.3H37l1.3-1.3v-5H37V21.8h-2.5V19.4l1.3-1.3h1.1l1.3,1.3v1.1l1.3-1.1,1.3-1.3h1.1l2.6,1.3h1.3V16.8l1.1-1.3h2.6l1.3-1.1h1.1V13.1h1.3l1.3-2.6,1.3-1.1,2.4-1.3h3.7l2.6-1.3h.6A10,10,0,0,0,63.35,4,1.42,1.42,0,0,1,62.45,2.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Nacumales