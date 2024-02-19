import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Boqueron = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.9 167.1" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BOQUERON', municipio.toUpperCase())}
              className="cls-1"
              d="M0,59.4c4.4-5.3,8.4-10.2,12.5-15.1.2-.3.5-.8.8-.8,6.2-.3,10.6-4.6,16-6.7,4.8-1.9,11-1.4,10.1-9.4a4.18,4.18,0,0,1,1.9-3.2C52.1,20.3,54.8,11.9,54.2,1.6A11,11,0,0,1,54.5,0a57.72,57.72,0,0,1,7,3.6,9.63,9.63,0,0,1,3.5,4c1.5,4.4,4.2,7.2,8.9,7.1,3.2,0,4.3,1,5.3,4.3,1.5,5.4,4.3,10.4,9.7,13.5,1.8,1,2.8,3.6,3.7,5.7,3.3,7.2,7.7,14.1,6.2,22.6a3.09,3.09,0,0,0,.8,2.1c7.4,8.1,6.8,18.1,6.8,28,0,1-.3,2.1.1,2.8,4.3,8.2-2.4,13.4-5.6,19.4-.7,1.3-3.5,2-5.4,2-4.7.1-6.2,2.4-6.4,6.8-.4,5.7-.4,11.8-2.5,17.1-3.7,9.3-8.7,18.2-13.7,28.1-5.9-7.3-11.4-14.1-17-20.8-4.6-5.6-9.2-11.3-14.2-16.5-3.3-3.4-9.1-5.4-10.9-9.3-2-4.4-6.5-8.4-5.3-14.1,1.1-4.9-1.8-8.2-4.1-11.9C15.2,84.3,9.3,74,3.2,63.7,2.3,62.3,1.2,61.1,0,59.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Boqueron