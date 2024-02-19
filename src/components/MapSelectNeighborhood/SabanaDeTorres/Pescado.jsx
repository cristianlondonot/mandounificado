import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pescado = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.3 140.57" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PESCADERO', municipio.toUpperCase())}
              className="cls-1"
              d="M122.5,128.19c-6.3-1.8-12.5-.6-19.4.9-8.2,1.7-17,.2-25.5.6-4.2.2-8.9.2-12.3,2.2-5.8,3.3-10.9,6-17.6,2.5-1.9-1-4.8,0-7.2.1-4,.1-8.7,1.6-11.7,0-6.5-3.4-10.4-1-14.6,3.3-4.5,4.5-6.5,3.5-8.7-2.7-.8-2.4-3.8-4.2-5.5-6,4.9-4.6,10.5-10.1,16.4-15.2,1.3-1.1,3.8-.7,5.8-1.1,7-1.6,8.6-4.1,7.7-11.1a25.16,25.16,0,0,1,.3-5.9c3.8-.6,6.3-1.4,8.6-1.2a8.28,8.28,0,0,1,5,2.7c4.5,5,8.7,3.2,13.4.3,3.2-2,6.9-3.2,10.4-4.6,6.4-2.6,13.1-4.1,17.6-10.4,2.6-3.7,7.3-5.9,11-8.8.8-.7,1.9-1.5,2.1-2.4,3-12.2,6.9-15.3,21.1-16.3,6.2-.4,12.4-.8,18.6-1.5,1.4-.2,3.5-1.3,3.9-2.5,1.9-5.2,4.7-10.7,4.8-16,.1-9.5-1.6-19.1-2.5-28.7-.1-1.5-.2-4.3.3-4.4a10.4,10.4,0,0,1,5.8-.1c6.2,2.1,12.1,6,18.3,6.6,5.9.5,13.2-.7,17.9-3.9,6.9-4.8,14.2-6.8,23.1-1.2a125.59,125.59,0,0,1,17.3,13.5c1.8,1.7,2.2,5.1,2.8,7.8,2.8,13.1-4.7,22.1-12.4,31-1.5,1.7-3.5,2.8-6,4.8,5,6.3,9.7,11.5,13.7,17.2,6.8,9.7,3.4,19-7.8,22.7a30.88,30.88,0,0,0-8.1,4.1c-4.4,3-8.4,5.3-14.3,4.1-6.1-1.2-12.6.4-16.9,5.5-5.9,7-13.6,7.2-21.5,6.1-4.8-.7-8.7-3-12.3,3.4-1.4,2.6-8,2.5-12.2,3.4C128.7,127.59,125.6,127.79,122.5,128.19Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Pescado