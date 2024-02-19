import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MoyaJovina =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.3 173.2">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MOYA JOVITA', municipio.toUpperCase())}
              className="cls-1"
              d="M12.3,83C10.9,70.6,10.1,69,0,57.2c4-1.3,7.5-2.9,11.1-3.4,9.4-1.4,23.4-15.6,25.8-26.2.5-2.1,2.6-3.8,4.1-5.6s3.3-3,4.3-4.9c1.4-2.7,1.9-5.9,3.4-8.6S52.4,3.4,55,0c4.5,4.2,8.8,8.3,13.2,12.4A7.33,7.33,0,0,0,70.5,14C81.6,17.6,89,26.3,98,32.8c3.9,2.9,9.6,3.3,14.3,4.7-2.3,15.5-4.6,31.6-7,47.7a22.45,22.45,0,0,0,4.4,17.3c-1.3,5.6-2.2,10-3.4,14.3s-2.9,8.4-4.3,12.6c-1.6,4.9-3,9.9-4.7,14.7-2.8,7.8-5.7,15.6-8.8,23.3a5.77,5.77,0,0,1-3.5,3c-6.3,1.1-12.7,1.8-20,2.8,1.5-5.9,3.1-12,4.8-18.1.1-.5.7-1.1.5-1.5-2.8-7.4,2-12.1,5.4-17.9s6.2-11.6,10.4-16.9c3.2-3.9,1.7-7.7-2.9-9.2-5.6-1.9-10.2-4.4-13-10.1-2.7-5.4-8.1-4.9-13.3-4.7-9.1.2-18.2.1-27.3-.2-1,0-2.4-1.6-2.7-2.8C23.2,81.4,23,81.2,12.3,83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MoyaJovina