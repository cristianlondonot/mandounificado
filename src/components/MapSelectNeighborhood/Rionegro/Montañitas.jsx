import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Montañitas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57.26 77.47"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MONTAÑITAS', municipio.toUpperCase())}
              className="cls-1"
              d="M9.18,71.32c.6-7.1,1.2-13.3,1.7-19.5.3-4.2.8-8.8-4.2-8C4.38,32.32,2.18,21.52.08,10.62-.92,5.22,7.38-1.78,12.48.42c6,2.6,12.3,4.9,17.6,8.7,2.5,1.8,2.7,6.6,4,10.1.7,2,1,4.9,2.4,5.8,7,3.9,7.4,11.6,6.7,16.9-1,7.2,3,9.8,6.5,13.7,1.5,1.7,2.7,3.9,3.6,6.1,1.4,3.2,2.6,6.6,3.6,10,.4,1.4.6,4.1,0,4.4-1.8.9-4.8,1.9-6,1-3.6-2.7-7.2-6.2-11.8-4.4-7.7,3.2-14.1-.6-21.1-2-2.4-.5-5.1.3-8.8.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Montañitas