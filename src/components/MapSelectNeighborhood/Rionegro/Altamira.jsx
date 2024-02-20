import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Altamira = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 133.28 124.1"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ALTAMIRA', municipio.toUpperCase())}
              className="cls-1"
              d="M133.2,102.3c-9.5-3-7.9,4.1-9.5,8.6-.8,2.3-2.4,4.2-3.7,6.4-1.2,2-2.3,4.1-3.8,6.8-3.7-.9-8.1-2.1-13-3.3.9-6.2-3.1-7.8-8.8-7-4.9.7-9.8,1.9-14.8,2.9-.6-.5-1.7-2.3-3.4-3-6.1-2.7-6.2-7.7-5.5-13,.9-6.2,3.3-12.6-3.1-17.5a2.53,2.53,0,0,1-.6-2.1c.4-6.1-2.6-7.9-8.4-10.1-4.9-1.8-12.5-2.1-14.4-9.6-.3-1.1-1.7-2-2.8-2.9-6.6-5.9-13.1-11.8-19.8-17.4-3.5-2.9-7.3-5.9-11.5-7.5-5.6-2.2-7.5-6.7-8.3-11.4C.6,15.4.6,8.5,0,0,4.8,3.2,8.5,5.8,12.3,8.2c1.9,1.2,3.8,2.9,5.9,3.2,4.7.8,9.7.5,14.4,1.4,4.9,1,10,2.2,14.5,4.5,7.4,3.8,14.6,5.9,23.1,4,3.2-.7,7.1,1.8,10.7,3,2.1.7,4.9,2.9,6.2,2.2,8.3-4.3,16,1.3,23.6.8,8.9-.6,6.9,3.8,8.6,9,3.1,9,9.1,16.9,12.9,25.6,1.6,3.6,1,8.4.8,12.6-.1,2.1-1.9,4.2-2.8,6.3a9.86,9.86,0,0,0,.1,9C132.1,93.2,132.2,97.4,133.2,102.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Altamira