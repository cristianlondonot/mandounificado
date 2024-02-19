import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Porvenir = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.62 38.67" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
            fill={getColorByCarencias('PORVENIR', municipio.toUpperCase())}
              className="cls-1"
              d="M42.72,10.57c-3.1-1.2-5.1-4-8-5.5a.65.65,0,0,1-.2-.9c.6-1.3.8-2.9-.6-3.6a9.39,9.39,0,0,0-4.7-.5,61.73,61.73,0,0,0-6.2.8c-1.9.3-3.8.7-5.7,1.1a14.47,14.47,0,0,1-3,.4c0,.2,0,.4-.2.5-2.2,2.6-5.6,3.4-8.4,5.3-3.1,2.2-3.5,5.8-4.8,9.1a13.09,13.09,0,0,0-.9,2.8,4.2,4.2,0,0,0,.7,2.4,3.91,3.91,0,0,1,.3,3.9,3.71,3.71,0,0,0-.4,2.5,17.23,17.23,0,0,0,.7,2.1,12.52,12.52,0,0,0,1.8,4.1,8.77,8.77,0,0,0,3,2,25.43,25.43,0,0,1,2.8,1.6,3.81,3.81,0,0,0,1.7-.8c.8-.7,1.4-1.8,2.6-2.1a4.73,4.73,0,0,1,1.7.1c.6.1,1.3.3,1.7-.2a11.94,11.94,0,0,0,.8-1.6,7.1,7.1,0,0,1,1-1.4,6.5,6.5,0,0,1,5-2.4c2.3-.1,4.6.6,6.9.9a7.65,7.65,0,0,0,4.2-.7,18.83,18.83,0,0,1,3.9-1.6h0a.37.37,0,0,0-.1-.3,15,15,0,0,1,.7-5.1,17.21,17.21,0,0,1,1.6-4.5c1.5-2.6,3.6-4.7,5-7.3A21.16,21.16,0,0,0,42.72,10.57Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Porvenir