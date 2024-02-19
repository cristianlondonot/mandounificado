import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPio = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.8 127.73" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PIO', municipio.toUpperCase())}
              className="cls-1"
              d="M58.3,0c6.1,5.6,10.3,10.1,10.5,18.7.2,9.1,4.7,18,9.6,26.1,2.3,3.7,3.5,7.5,2.5,11.9a2.23,2.23,0,0,0,0,1.4c4.9,7.2,1.4,16.1,5,23.5,1.2,2.3,0,3.8-1.2,5.7-2.4,3.7-3.2,8-.6,11.8,3.7,5.3,5.9,10.7,5.5,17.5-.2,3.2,2,6.5,3.2,9.8-4.1,1.9-7.3,2.1-11.3-1.7-7.1-6.6-16.8-6.8-26-7.3-5-.3-9.6-1.7-14.3-2.6-5.7-1-11.1-3.1-17.1-3.5-8.7-.6-12.6-5.4-14.6-14.3C8.2,91.1,6.6,85.1,6.9,79,7.1,73.7.3,74.7,0,69.6c9.9-1.7,19.2-5.9,28.6-9.5,1.7-.6,3.1-2.2,2.9-3.7-.7-8.8,6.4-8.8,11.7-10.5,7.7-2.4,8.3-4.1,2.8-9.9-1.7-1.8-3.2-4-5-5.6-5.9-5.3-5.6-7.2,2.1-10C53.9,16.4,58,11.3,58.3,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPio