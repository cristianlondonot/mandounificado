import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const AguaBlanca2 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120.74 99.8"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BADILLO', municipio.toUpperCase())}
              className="cls-1"
              d="M113.3,99.8c-5.2-5.2-10.3-8.9-18-6.9-4.8,1.2-8.7-1.2-11.3-5.3-4.2-6.4-9.6-10.3-17.7-9.8-2.6.1-5.2-1-7.9-1.6-7.8-1.8-15.6-3.4-23.4-5.4a11.76,11.76,0,0,1-4.9-3.4,75.09,75.09,0,0,1-6.6-8.3c-2.3-3.4-4.8-6.7-6.1-10.5-2-5.8-4-7.3-10.3-7.1-2.4.1-4.7-1.8-7.1-2.8C1.1,37,2,35,3.3,33.6A41.54,41.54,0,0,1,8.9,29c1-.9,2.8-2,2.7-2.9-1.2-10,11.4-12.1,12-21,.1-1.6.9-3.2,1.4-5.1,1.3.4,2.4.7,3.4,1C34.1,3.1,40,5.1,45.5,7.6a25,25,0,0,1,7.3,5.2c2.6,2.6,5.2,3.1,8.9,2.4,9.4-1.7,19-2.6,28.4-4.4,4-.7,4.1,1,4.9,4a121.29,121.29,0,0,0,5.6,17.7,13.39,13.39,0,0,0,5.6,5.7C120.7,46.4,123.4,53,118.5,69c-1.2,3.8-2.5,7.6-3.4,11.5a12.28,12.28,0,0,0-.2,6.3C116.9,93.4,117.1,93.3,113.3,99.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default AguaBlanca2