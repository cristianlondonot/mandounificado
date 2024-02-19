import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Gaital = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.98 92.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('GAITAN', municipio.toUpperCase())}
              className="cls-1"
              d="M35.5,69.5C25.5,59.7,15.8,49,0,43.7c9.4-5,18-9.6,26.6-14.4,2.3-1.3,5-2.8,6.1-5C37.4,15,43.3,7.1,53.1,2.7c.9-.4,1.6-1.6,2.5-2.7,1.5,14.5,9.9,22.1,24.6,23.1a60.82,60.82,0,0,1,14,2.7c5.8,1.8,10.4.6,15.1-2.9,2.8-2,6.3-3.1,9.5-4.5.5.6,1.1,1.1,1.6,1.7-1.5,2.9-2.8,5.9-4.4,8.7-5.8,10.2-7.9,20.1,2,33.1,6.3,8.3,8.6,21.2,5.8,30.8-2.2-3.1-4.2-5.7-6-8.6-5.9-9.3-16-12-25.1-16.2-10.9-5.1-22-9.7-33-14.7-5.1-2.3-10.2-1.5-13.7,2.9C42.7,60.4,39.2,64.9,35.5,69.5Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Gaital