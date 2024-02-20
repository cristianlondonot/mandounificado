import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Primavera = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116.57 57.47"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PRIMAVERA', municipio.toUpperCase())}
              className="cls-1"
              d="M23.2,57.47c-.5-1.1-1.6-2.6-1.9-4.1-1.3-7.6-3.6-9.2-11.1-10C6.7,43,3.5,40.57,0,38.27c18.9-1.1,19.1-15.8,21.6-29.2C27.8,13,31.3,7.87,35.7,6a13.36,13.36,0,0,1,7.2-1c3.2-3.7,5.8-3.7,10-.3,1.6,1.3,6.3-.6,9.3-1.8,11-4.6,11.3-4.6,16,6.9,1.9,4.7,3.3,9.7,10.2,8.9,2.9-.3,5-.4,6.1-3.9.8-2.8,3.1-3.9,6.5-2.5s7.3,2,11,2.9c4.7,1.1,5.4,3.3,3.8,8.2-2.4,7.3-9.2,9.1-14.7,12.2-7.5,4.2-14.4,8.8-18.3,16.9-.2.5-.6,1.3-.9,1.3-5.2.6-10.5,1.5-15.7,1.5-5.8,0-11.5-.8-17.3-1.2-4.6-.4-9.3-1.4-13.8-.9C31.3,53.47,27.7,55.67,23.2,57.47Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Primavera