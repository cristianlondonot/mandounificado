import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MataPiña = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 103.38 145.25"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MATA PEÑA', municipio.toUpperCase())}
              className="cls-1"
              d="M103.38,126.16c-7.3,6.4-13.8,12.8-21.2,18-2.6,1.8-7.4.9-11.1.6-11.2-1.1-22.5-2.1-33.5-4.1-4.1-.7-8.3-3.3-11.4-6.3-7-6.7-8.9-15.7-10.6-25-.9-5.1-4.7-9.6-7.2-14.5a57.41,57.41,0,0,1-3.3-7.1c-1.9-5.2-6.2-11.3-4.8-15.5,2.2-6.4,2.4-13.4,7-19.4,4.3-5.7,6.9-13.2,8.3-20.3C17.68,21.56,22,11.66,27,2c1.6-3.1,9.6-2.4,13.8,1.2,2.3,2.1,4.1,5.1,6.7,6.5,4.7,2.6,9.7,5.8,14.8,6.2,13.4,1.1,13.3,1,15,14.5,1.2,9,4.1,17.9,6.4,26.7.5,1.7,1.9,3.2,2.9,4.8.8,1.3,2.5,2.7,2.4,3.8-1.9,11.8,2.4,22.7,3.9,34,.5,3.8-2.4,7.3-.4,12.3C96.18,121.26,95.28,121.56,103.38,126.16Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MataPiña