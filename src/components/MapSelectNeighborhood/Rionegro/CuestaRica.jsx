import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CuestaRica = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.01 113.27"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUESTA RICA', municipio.toUpperCase())}
              className="cls-1"
              d="M1.4,24.2c3,1.3,6.2,2.3,9,4.1,4.1,2.6,8.2,1.6,11.5-1.7,2.2-2.1,5.9-2.7,9-3.6a13,13,0,0,1,5.2-.1c9.5,1,16.2-3.5,21.2-11.1.6-.9,1.5-2.1,2.4-2.2,5.6-.4,9.2-3.6,13.6-6.7C78-.4,85.8.7,92.2,0c.5-.1,1.9,1.5,1.8,1.8a92.68,92.68,0,0,1-4.5,8.9c-2.2,3.5-6.6,4.9-7.4,10.2-.5,3.1-4.8,5.6-7.5,8.3-1.6,1.6-4,2.8-5.1,4.7-4.8,8.5-9.9,16.9-14.7,25.4a115.41,115.41,0,0,0-8.3,19.5,10,10,0,0,0,1.2,8.1,139.11,139.11,0,0,0,15.1,15.6c3.5,3.1,3.1,5.6-.2,7.9-7.3,5.1-20.3,4-23.7-8.2-.1-.5-.3-1.2,0-1.6,5.7-9.6-1.6-16.5-5.2-24.2-1-2.2-2.9-4-4.1-6.1C23.7,60.2,18.1,49.9,11.9,40c-2.3-3.6-5.8-6.5-8.8-9.7C2,29.1,1,27.8,0,26.5A17.61,17.61,0,0,0,1.4,24.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CuestaRica