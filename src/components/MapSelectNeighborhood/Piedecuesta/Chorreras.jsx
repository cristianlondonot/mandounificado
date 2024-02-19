import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chorreras = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 73.89" {...props}>

        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHORRERAS', municipio.toUpperCase())}
              className="cls-1"
              d="M.88,47.4c6.4,4.8,9.6,4.2,14.7-2.9.5-.7,1.2-1.7,1.9-1.8,7.7-1,5.9-6.9,5.5-11.5-.4-5.8,4.5-14.4,10.2-15.2,4.3-.6,5.7-2.7,5.7-6.5C38.78,4.6,40,.2,45.58,0s10.2,6.5,8.6,12.4c-1.7,6.4,1.3,9.5,6.7,11.5,1.4.5,2.9-.3,3.8,2.1,3.2,8.6,5.4,9.5,14.2,7.3,7.8-2,9.2-1.4,15.1,6-5.7,1.1-10.6,4.6-16.9,2.7-3.6-1.1-4.8,1.6-3.4,4.5s1,6.1.8,9c-.4,6.3-2.8,7.5-8.5,4.9-2.9-1.4-6.9-1.8-8.9-.4-6.6,4.8-14.3,2-21.3,3.6-5.4,1.2-10.3,2.3-14.5,5.8-3.3,2.7-7.6,3.1-11.5,4.4-2.6.9-6.5-5.9-5-9.4s1-6.7-1.9-8.4C-1.32,53.4.08,50.5.88,47.4Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Chorreras