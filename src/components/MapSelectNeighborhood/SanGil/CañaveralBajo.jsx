import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañaveralBajo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 108.43" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑAVERAL BAJO', municipio.toUpperCase())}
              className="cls-1"
              d="M11.5,108.43c-.7-8.1-.3-16.1-2.3-23.4-1.5-5.6.4-12.7-5.8-17-.8-.6.2-3.5-.1-5.2-1-4.7-2.2-9.3-3.3-13.6,2.2,0,4.9.2,7.6,0,4.7-.5,9.4-.5,9.3-7.8,0-2.7,3.4-6.4,6.2-7.9a48.06,48.06,0,0,1,14.3-4.7c4.6-.9,6.7-3.1,6.6-7.6v-1.7c.1-8.7,1-10.6,9.6-10.2,9.9.4,17.4-4.5,25.6-8.3a10.89,10.89,0,0,1,2.5-1,7.3,7.3,0,0,1,2.2.3,41.5,41.5,0,0,1-2,4.7c-3,4.7-2.1,9.6,1.3,12.9,3.6,3.6,3.9,7.4,3.9,11.8-.1,11.1,0,11.1,10.9,11.5.7,0,1.5.2,3,.3a25.11,25.11,0,0,1-9.7,15.7,289.2,289.2,0,0,0-22,19.3c-2.5,2.5-2.8,6.9-4.7,10.1-.8,1.4-2.8,3-4.3,3.1-4.7,0-9.1.2-12.5,4.2-.8.9-2.3,1.2-3.6,1.6-5.4,1.9-10.8,3.7-16.2,5.8C22.9,103.43,17.9,105.73,11.5,108.43Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañaveralBajo