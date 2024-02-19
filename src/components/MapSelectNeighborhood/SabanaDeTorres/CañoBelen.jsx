import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoBelen = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.96 83.8" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO BELEN', municipio.toUpperCase())}
              className="cls-1"
              d="M11.76,0C24,5.8,33.66,14.7,47.06,15.2c5.3.2,10,0,6.7-7.6-.5-1.2.2-2.9.4-5,4.2,2,7.9,3.9,11.6,5.4,1.7.7,3.6.7,5.4,1,3.5.6,7.1,1.2,10.6,1.7,1.5.2,3.1.4,4.6.5,6.4.5,13.2-.2,19.1,1.8s10.6,6.8,17.5,11.5c-12.9.7-13.8,11.2-18.9,17.8-.7.9-1.2,2.9-.7,3.5,4.9,6.2,6.3,15.4,15.4,18.4-1.2,4.1-2.1,7.4-7.9,7.5-2.3.1-4.6,4.2-6.7,6.6-1.1,1.2-2,2.8-3.9,5.5-.7-2.6-1.3-3.4-1.1-4.1C102.76,66,92,60.1,84,53.4c-3.2-2.6-8.6-2.8-13.2-3.5-10.2-1.6-20.8-1.8-30.6-4.5-11.7-3.2-23.2-7-33.7-14.2-8.1-5.5-8.1-8.8-2.7-15.7C7.56,11,9.36,5.1,11.76,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoBelen