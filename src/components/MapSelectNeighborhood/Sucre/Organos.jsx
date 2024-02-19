import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Organos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.2 66.37" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('ORGANOS', municipio.toUpperCase())}
              className="cls-1"
              d="M0,37.9c10.8,0,17.6-5.5,24.4-11.9,3.4-3.2,9-4.3,13.8-5.8,5.6-1.8,11.5-2.7,17.1-4.4,6.9-2.1,13.5-5,20.4-6.9C87.4,5.7,99.1,3,111.3,0c1.5,6,4.6,10,11,9.9a115,115,0,0,0-2.6,11.3c-.7,5.2,2.7,8.6,7.9,8.9,3.5.2,7,1.1,10.4,1,1.6-.1,3.2-1.8,4.6-2.9,1.1-.9,2-2,3-3,.5,1.4,1.6,2.8,1.6,4.2-.2,5.3-.9,10.6-1.5,18-3.6.6-8.8,2.6-13.9,2.2-10.9-.8-19.8,2.6-26.9,10.5-6.2,7-13.6,7.2-21.7,5.1a38.49,38.49,0,0,0-4.9-.8c.8-1.6,1.7-2.8,1.9-4,.2-1.6-.3-3.3-.5-5-5.1,1.6-10.2-6.2-15.4-.2a7.55,7.55,0,0,1-1.6,1c-.9-2.5-1.7-4.9-2.9-8.6-4,1.4-9,1.8-12.2,4.5-8,6.8-16.8,4.5-24.9,2.5C12.1,51.8,9.9,49.2,0,37.9Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Organos