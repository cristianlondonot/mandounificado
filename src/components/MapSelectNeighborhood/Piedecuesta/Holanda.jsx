import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Holanda = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.06 144.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('HOLANDA', municipio.toUpperCase())}
              className="cls-1"
              d="M50.35,0c3.5,8,11.1,9.4,17.6,11.2s10.6,6.3,16,9.3c1.2.7,2.5,2.2,1.6,3.6-3.7,6.2.5,9.3,4.5,12.6,1.1.9,2.5,2.1,2.6,3.2.5,13.4,9.7,23.1,15.5,34,4.3,8,.6,11.5-3.9,15.1C99,93.2,93.55,97.3,87,100.1s-12.2,9-12.2,17.3c-.1,9.2-7.2,16-8.1,24.9a2.26,2.26,0,0,1-2.8,1.6c-8.5-3.4-17.6-1.5-26.1-2.8-7.2-1.1-13.6.2-20.2,1.5-4.1.8-8.5,4.8-9-4-.2-4-4.9-3.9-8.4-1.8-.7-3.4,1.1-5.4,3.6-6.5,11.8-5.3,17.3-15.6,22.3-26.5,3.1-6.7,5-14.2,13.1-17.2a3.69,3.69,0,0,0,2-2.7c.1-9.7,6.9-17.9,6.4-27.7-.1-1.4-.1-3.3.7-4.1,10.1-9.9,1.4-18-3-25.9A44.43,44.43,0,0,0,39,17.7c-4-4.1-2.1-10,3.5-11.9C46.75,4.2,46.75,4.2,50.35,0Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Holanda