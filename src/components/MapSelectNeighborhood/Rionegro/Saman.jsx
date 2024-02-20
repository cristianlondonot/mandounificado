import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Saman = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.66 77.29"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAMAN', municipio.toUpperCase())}
              className="cls-1"
              d="M57.11,77.29c-7.4-2.7-13.6-4.8-19.6-7.3-7.8-3.4-15.2-4.1-22.9,1.9.8-2.1,1.5-4.2,2.3-6.3,1.3-3.4,4.8-6.5,1.3-10.6-.4-.4-.2-1.9.2-2.4,4.3-5,1.7-9.4-1.3-13.5-4.5-6.2-7.7-13.5-14.9-17.5-3-1.6-2.8-3.9-.3-6.6,1.5-1.6,1.8-4.4,2.7-6.9,2.9,1.3,6.2,2.7,7.3-3.9.3-1.9,7.1-5,9-4,5.5,2.8,13.3,4.7,12.2,13.8-.1.5.4,1.5.7,1.5,5.2.7,7.5,5.7,11.2,7.9,9.6,5.5,12.1,14.5,14.8,23.8a48.27,48.27,0,0,1,1.8,6.2,4.83,4.83,0,0,1-1.1,3.7C54.61,63.39,53.61,67.59,57.11,77.29Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Saman