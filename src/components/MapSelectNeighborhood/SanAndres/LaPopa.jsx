import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPopa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.08 104.8" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA POPA', municipio.toUpperCase())}
              className="cls-1"
              d="M142.3.6c2,4.2,4.6,8.3,5.7,12.7.5,2.1-1.3,5.9-3.2,7.1-7.3,4.6-10.9,10.3-9.7,19.3.6,5.1-.6,10.4-1,16.4-5.5-4.1-11.5-8.1-16.9-12.8-3.2-2.7-5.1-3.8-8.3-.2-3.5,4.1-8,3.9-13.1,2.5a14.91,14.91,0,0,0-10.4.9c-5.9,3.2-10.8,8.4-16.9,11.3-7.1,3.5-15,5.7-22.6,7.9-9.2,2.7-19.1,3.7-25.8,11.2-2.2,2.5-2.3,6.8-3.3,10.3-2.5,8.6-7.4,15-16.8,17.6,3.5-7.1,7.1-14.2,10.6-21.3.5-1,1.3-2.1,1.3-3.2.1-7.5.1-14.9,0-22.4-.1-5,2.2-8.4,6.8-10.2,6.2-2.3,12.4-4.4,18.6-6.7,1.5-.5,3.3-1.2,4-2.3C47,29,57.7,26.5,66.7,23,81,17.5,96,13.5,111.8,14.9c2.8.3,5.7-1.2,8.6-1.6a44.06,44.06,0,0,1,8.9-.9c3.9.2,6.4-.8,7.5-4.9.7-2.6,2.3-5,3.5-7.5A5.11,5.11,0,0,0,142.3.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPopa