import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Miraflores = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.15 179.26" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('MIRAFLORES', municipio.toUpperCase())}
              className="cls-1"
              d="M50.85,179.26c-4.7-4.4-9.5-8.9-14.4-13.4-4.7-4.3-7.9-9.1-8.8-15.8-.5-3.4-4.6-6.3-7.1-9.5-.9-1.1-2.9-2.2-2.9-3.2.4-5.3-4.9-10.1-1-15.9.9-1.4-1.5-4.7-1.7-7.2-.7-9-1.2-18.1-1.8-27.1a5.61,5.61,0,0,0-.9-3.1C3,72.36,3,57.86.05,44.26c-.4-2,1.7-4.8,3-7a18.47,18.47,0,0,1,3.5-3.9c9.8-10.1,19.3-20.4,29.5-30,5.8-5.5,9.8-3.6,15.9,1,7.5,5.7,9.3,11.7,7,20.5-.6,2.3,2.8,5.6,5.2,9.9-2.7,4.1-6.2,8.9-9.2,14-1,1.7-1.8,4.8-1,6.1,3.6,5.6,3.3,11.3,2.5,17.5-.7,5.7.5,11.8-.9,17.2-2.5,10-6.3,19.7-9.5,29.5-.1.4-.7.7-.7,1.1-.8,12.9-.8,26,8.2,36.4,4.3,4.9,4.3,8.5.9,13.4C52.75,172.46,52.15,175.76,50.85,179.26Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Miraflores