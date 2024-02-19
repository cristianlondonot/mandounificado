import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPedregosa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.97 144.8" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA PEDREGOSA', municipio.toUpperCase())}
              className="cls-1"
              d="M20.34,78c3.5-4.8,2.9-9.3-2-13.3-2.8-2.2-6-4.1-8.2-6.7-3.6-4.1-7.2-8.5-9.6-13.3-1.1-2.3-.4-6.4,1-8.8.8-1.4,4.8-1.6,7.2-1.2,16.1,2.6,32.2,5.5,48.2,8.5,6.8,1.2,8.6-.2,10.9-6.7,4.2-12.1,8.9-24,13.6-36.5,5.2,2.1,9.8,3.7,14.3,5.7,23.6,10.1,46.2,21.8,66.2,38.2,4.4,3.6,3.1,6.4,1.7,10a11,11,0,0,1-2.7,3.5c-13.6,13.6-21.5,31-31,47.2-5.9,10.1-9.7,21.5-14.4,32.3-1.1,2.6-2.4,5.2-3.6,7.9-17.5-14.2-34.3-28.5-51.8-41.9-6.1-4.7-14-6.9-20.6-11S27,82.9,20.34,78Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPedregosa