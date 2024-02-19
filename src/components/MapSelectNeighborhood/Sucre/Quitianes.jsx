import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Quitianes = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.58 62.49" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUITANES', municipio.toUpperCase())}
              className="cls-1"
              d="M41.38,2.79c-1.2,6.6-4.4,13.8-3.1,20,2.3,11,9.7,18.9,18.3,23.3-8-1.4-12.9.8-17.4,5.9-3.8,4.3-9.4,7-14.3,10.5-4.2-7.1-8.1-13.5-11.9-20-3.5-5.9-6.7-12.1-10.5-17.9-3.5-5.4-3.7-8.4,2-11.9,6.2-3.8,13.2-6.5,20-9.4C30.28.79,36.28-2.41,41.38,2.79Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Quitianes