import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Magdalena = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.5 61.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MAGDALENA', municipio.toUpperCase())}
              className="cls-1"
              d="M2,57.78c-3.4-5.3-2.6-9.6,3.4-13.1,12-6.9,23.8-14,35.7-21,5.6-3.3,11-7.1,17-9.6,7.2-2.9,14.9-4.6,22.4-6.9C86.4,5.38,92.3,4,98,1.68c6.6-2.6,12.5-2.1,18.9.9,3.5,1.6,7.7,1.7,13.6,2.9-4.3,4-7.9,7.5-11.8,10.7-2.8,2.4-6,4.5-9,6.8-5.1,3.9-10.2,7.8-15.4,11.7-4,3.1-8.2,6-12.1,9.2-2.7,2.1-5.1,2.5-7.4-.5-1.9-2.4-3.6-5.1-5.9-7.1-3.8-3.3-7.6-4.4-13.2-2.8-10.2,3-15.7,10.6-21.1,18.4C28,61.38,20.1,64,10.2,59.38,7.9,58.28,5.2,58.38,2,57.78Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Magdalena