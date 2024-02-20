import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const MiraFlores = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.5 61.28"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MIRAFLORES', municipio.toUpperCase())}
              className="cls-1"
              d="M94.5,7.93c-8.2,5.8-15.2,10.5-21.9,15.5-5.4,4-6.7,9.8-6.4,16.2.2,4.3.4,8.9-.8,12.8-.7,2.2-4.2,4.4-6.8,4.9-8.8,1.7-17.8,2.9-26.8,3.9-2.1.2-5-.2-6.5-1.5-5.5-5.1-12-7-19.1-8.2-2.4-.4-4.5-2.3-6.2-3.2,3-5.7,5.8-10.8,9.1-17.1,6.5-.1,10.6-6.4,15.9-11.8,6.7-6.8,15.2-11.8,22.9-17.5.9-.6,1.8-1.3,2.6-1.9,2.2,6.7,7.8,8,13.5,3.8C66.8,1.73,70.8,1,74.4,0c.8-.2,2.8.7,2.8,1.2.6,7.5,6.2,6.1,10.8,6.2C89.7,7.63,91.2,7.73,94.5,7.93Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default MiraFlores