import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Huchaderos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90.08 113.01"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('HUCHADEROS', municipio.toUpperCase())}
              className="cls-1"
              d="M90.08,48.1c-3.3.5-6.6.9-9.8,1.6-1.5.4-4.1,1.7-4,2.3,1,6.8-4.7,9.5-7.9,13.8-2.7,3.6-8.4,6.9-3.1,11.9-3.2,3.2-6.1,6.3-9.4,9.1-.8.7-2.6.5-3.9.5-8.9-.5-16.4,5.8-16.2,14.5.1,2.7,2,5.4,3.2,8.2-3.4,1-6.3,1.9-9.2,2.6-8.8,2.2-11.4-5-15-10.2-4.9-7.2-9.4-14.6-14-22a5.21,5.21,0,0,1-.6-4c3-8.3,6.1-16.6,9.5-24.6.7-1.5,3.2-2.2,4.8-3.5,4.9-4.1,11-7.5,14.4-12.7,3.7-5.9,9.9-11.9,5.9-20.6C44.88,14.2,46,4.4,51.48,0c0,5.7-.7,12,.3,18,.5,3.4,3.5,6.5,5.7,9.6a160.51,160.51,0,0,0,11.4,14.7c1.2,1.3,4.4,1.6,6.4,1.1C83.38,40.9,83.38,40.8,90.08,48.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Huchaderos