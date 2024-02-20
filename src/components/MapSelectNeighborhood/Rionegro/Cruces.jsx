import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cruces = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 97.5 92.6"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CRUCES', municipio.toUpperCase())}
              className="cls-1"
              d="M97.5,72.2C84.9,80.9,74.6,76.5,65,67.8c-3.3-3-6.5-4.2-11-2.9a18,18,0,0,1-8,.1c-10-2-13-1.1-18.4,7.4-2.8,4.5-4.8,9.5-7.1,14.3-.9,1.8-1.6,3.7-2.6,5.9-5.1-3-5.8-7.5-4.7-11.7,1.7-6.9.6-13.2-.9-20A73.82,73.82,0,0,0,2.7,37.3C.5,33.7.8,28.5,0,23.8,10.9,19.3,20.5,13.7,20.2,0c4.7.1,6.1,1.8,7.6,5.2C30.2,10.4,32,17,39.6,18c1.5.2,3,1.7,4.1,3,3.5,4.1,7.7,6.1,13.3,5.6,1.9-.2,3.9,1,5.8,1.7,3.7,1.3,7.7,2.3,11,4.3,2.2,1.4,4.5,4.2,4.9,6.7.7,3.9.9,7.3,4.3,10.1,1.8,1.4,2.6,4.7,2.8,7.3.4,5.7.9,10.7,7.8,12.3C95,69.1,96.1,71,97.5,72.2Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cruces