import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanRafael = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 81.09 54"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN RAFAEL', municipio.toUpperCase())}
              className="cls-1"
              d="M78.3,33.98c-4,2.6-3.4,5.3-1,8,1,1.2,2.9,1.9,3.3,3.2.6,2,.7,4.5,0,6.4-.3.8-3.1.9-4.8,1-1.6.1-3.4-.9-4.7-.3-9.6,4.4-15.7-.3-22.7-6.5-5.1-4.5-12.6-7.1-19.5-8.5-5.8-1.2-3.5,4.8-3.8,7.2-4.9.4-9.7.8-14.4,1.1-.8.1-1.6.1-2.4-.1-3.2-.9-7.7-14.5-5.6-17.1,3.1-4,3.2-9.5,8.1-13.1,3-2.2-2-4.9-4.7-6.5-2.1-1.2-4.1-2.6-6.1-3.9.5-.7.9-1.5,1.4-2.2,1.7.9,3.7,1.6,5.1,2.9,3.8,3.4,6.5,1.9,9.2-1.4,4.4-5.5,8.7-5.5,13.5-.4.7.7,1.7,1.7,2.5,1.6,10.3-1.8,12.9,5.8,16.5,12.7,1.4,2.6,3.6,5.5,6.2,6.7,7.5,3.3,15.5,6,23.9,9.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanRafael