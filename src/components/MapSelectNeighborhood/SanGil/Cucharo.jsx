import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cucharo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 148.65 160.21"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUCHARO', municipio.toUpperCase())}
              className="cls-1"
              d="M79.05,0c6.3,12.9,12.5,25.6,18.7,38.1,2.9,5.9,4.9,5.4,11.2,3.7,5.3-1.4,11.5,0,17.3.8,5,.7,9.8,2.7,14.8,3.3,6.8.8,9.5,4.8,6.1,10.5-4.9,8.1,1.2,15.1,1.5,23.5-7.7,3.1-16,6.4-24.4,9.7-3.7,1.5-5.4,3.5-4.9,8.2a113.59,113.59,0,0,1-.2,20.2c-.3,4.6-1.7,9.1-2.7,14.3-8.5.6-9,9.4-13.1,15.2A94.44,94.44,0,0,1,92.15,160c-.7.7-3.3-.6-5.1-.8-3.7-.3-7.9-1.8-11-.6-8.6,3.3-15.3,1.2-21.8-4.8-3.2-3-7.7-4.6-12.5-7.3-1.7-2.2-4.5-5.6-7-9.1-2.7-3.7-6-7.3-7.5-11.5a38.31,38.31,0,0,0-15.7-19.5A12.57,12.57,0,0,1,7,100.2c-2-5.9-3.4-12-5.1-18a10.1,10.1,0,0,0-.3-1.7c-2.8-8.9-2.3-8.1,5.7-13.7,7.2-5,13.2-11.9,19.6-18.2a101,101,0,0,0,6.8-7.7c5.6-6.9,10.9-14.1,16.7-20.8a49,49,0,0,1,9.8-9C66.35,6.9,73.15,3.4,79.05,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cucharo