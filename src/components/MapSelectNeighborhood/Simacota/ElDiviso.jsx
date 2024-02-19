import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElDiviso =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.51 141.2" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL DIVISO', municipio.toUpperCase())}
              className="cls-1"
              d="M71.8,33.6c-4.4,5.8-8,10.5-11.3,15.3a5.77,5.77,0,0,0-.7,3.7A69,69,0,0,0,61,62.9c.3,1.6,1.7,3.1,2.7,4.6.5.7,1.7.9,2.3,1.6,5.3,6.8,8.1,7.2,14.9,1.2,2.2,3.3,8.9,1.9,8.3,8.4-.1.7.4,2,.3,2.1-5.8,2.6-1.7,7.8-3,11.9-7.2-2.2-11.9-.1-14.7,7.2-.9,2.4-4.7,4-7.6,5.2-7,2.8-8.9,5.7-9,12.9-.2,7.7-1.1,15.4-1.7,23.2-8.5-.8-8.7-4.4-7.1-10.8.4-1.7-.3-3.9-1.1-5.6-.9-2-3.5-3.6-3.6-5.5-.3-4.8-3.1-5.4-7.1-5C34,107,30.2,103.4,23,102.9c-1.5-.1-3.6-2.2-4.1-3.7C17,93.4,14,89.1,7.9,87.1c-1.4-.4-2.5-2.3-3.2-3.7C3,79.9,1.7,76.3,0,72.1c5.6-10.7,11.6-23,18.2-35C24.6,25.6,31.5,14.5,38.4,3.3,40.3.2,43.5-1.1,47,1.1c3.2,2.1,5.9,1.9,9.4.4C58.3.7,61.3,2,63.6,3c.4.2-.2,3.7-1.1,5.3-3.4,6-1.9,12.3-1.2,18.4.1,1.2,2.1,2.5,3.4,3.3A57.8,57.8,0,0,0,71.8,33.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElDiviso