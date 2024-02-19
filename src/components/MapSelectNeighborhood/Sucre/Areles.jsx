import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Areles = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 147.17 101.96"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ARELES', municipio.toUpperCase())}
              className="cls-1"
              d="M146.83,53.5c-1-1.3-2-2.8-3-4.2.5-.2,1.1-.4,1.6-.6.6,1.9,2.2,4.3,1.6,5.4-1.6,2.9-3.9,6.1-6.7,7.7-7.9,4.6-13,11.2-16.7,19.4-1.1,2.3-4.5,3.8-7,5.3-8.4,5-16.9,9.9-25.4,14.7a6.84,6.84,0,0,1-4,.7c-5.5-.8-10.9-1.8-16.4-2.7-.4-.1-1,0-1.2-.2-5.4-6.8-13.6-6.3-20.9-7.9-2.4-.5-5.1-.2-7.6-.2-3.7,0-8.1,1.5-11,0-7.1-3.6-11.9-.6-16.8,3.7-3.7,3.2-7.2,2.9-8.4-1.4A218.88,218.88,0,0,1,0,69.1c-.3-1.8,1.5-4.4,3-5.9,6.5-6.8,13-13.6,20-19.8,5.9-5.1,11.4-10.2,13.5-18.1.5-1.7,2.5-3.2,4.1-4.4,4.4-3.4,8.9-6.8,13.5-9.9,3.2-2.1,6.3-3.8,10.4-.4,6.3,5.4,13.4,7.2,20.4,1.1,16.7,13.5,23.3,10.9,30.5-11.7,8.7,8,12.6,16.7,6.6,28.5-1.3,2.5.9,8.6,3.4,10.7C131.93,44.6,139.53,48.8,146.83,53.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Areles