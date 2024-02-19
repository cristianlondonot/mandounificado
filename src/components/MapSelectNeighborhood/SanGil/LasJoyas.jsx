import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LasJoyas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 173.08 139.21"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LAS JOYAS', municipio.toUpperCase())}
              className="cls-1"
              d="M161.19,139.21c-7.7-5.9-15.4-11.9-23.3-17.6a87.14,87.14,0,0,0-14.3-8.8c-1.9-.9-5.1-.1-7.4.9-7.3,3.1-14.5,6.3-22.7,5.5a23.58,23.58,0,0,0-4.6.1l-71,11.4c-2.8.4-5.6.8-8.4,1.3-6.8,1.2-8.3.2-9.3-6.3-1.6-10,7.4-22.2,16.9-25.7,7.3-2.7,14-7.4,20.5-11.8a128.42,128.42,0,0,0,15.1-12.5c5.7-5.3,10.9-11.3,16.7-16.5,2.7-2.4,6.3-4,9.7-5.4,4.8-2,7.3-5.5,7.4-10.6.4-11.8.9-23.6.8-35.4,0-5.2,2-6.7,6.9-7.5,8.7-1.4,16,2.2,23.5,5.4a4.53,4.53,0,0,1,2.1,1.7c3.6,9,11.7,13.2,19.2,17.9,4.6,2.9,10,4.9,14,8.6,2.9,2.7,4.4,7.2,6,11.1a134,134,0,0,1,5.1,15.1c.6,2,0,4.4,0,6.6-.1,4.8-.3,9.6-.2,14.4,0,2,.7,4.1.9,6.1.2,1.5-.6,3.6.2,4.5,6,6.6,6.8,15,8,23.2.3,1.9-.1,5-1.3,5.8-6.5,4.2-9.7,9.9-9.2,17.9A6.87,6.87,0,0,0,161.19,139.21Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LasJoyas