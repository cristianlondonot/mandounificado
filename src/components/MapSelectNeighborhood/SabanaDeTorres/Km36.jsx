import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Km36 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.72 149.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('KM 36', municipio.toUpperCase())}
              className="cls-1"
              d="M77.72,149.7c-9.8-2-19-3.8-28.3-5.7.9-6.1-2.8-11.4-8.2-14.1-6.2-3.1-12-7.2-17.8-11.1-.7-.5-1-2.2-.9-3.3.4-6.3-3.6-11.7-9.9-12.3S3.72,97.9,2,93.6c-1.8-4.5-4.1-10.1,1.6-14.5a180.18,180.18,0,0,0,13.7-12.4c.9-.8,1.9-2.6,1.5-3.3-2.6-5.5-4.3-12.1-8.6-15.9-9.6-8.7-11.3-13.1-6-24.8.9-1.9,1.6-3.8,2.4-5.7,2.2-4.9,4-8.5,11.3-6.4,8.7,2.5,17.5.4,23.8-7.4.8-1.1,2.1-1.7,4-3.2,1.8,5.5,3.4,10.2,5,15,4.8,14,9.8,28,14.2,42.1,1.3,4.2.7,9,.9,13.5.5,7.7.3,15.5,1.5,23.2,1.5,9.5,6.2,18.9,5.6,28.1C72.52,131.7,75.82,140.3,77.72,149.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Km36