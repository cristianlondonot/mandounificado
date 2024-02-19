import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Quebraditas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.94 60.9" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('QUEBRADITAS', municipio.toUpperCase())}
              className="cls-1"
              d="M45.87,40.1A29,29,0,0,1,49,34.7c1-1.3,1.9-2.7,2.9-4,.8-.9,2.4-2.3,2-3.6s-2-2.2-2.9-2.8c-1.1-.7-2.5-1.5-2.7-3s.3-3,.4-4.4a14.11,14.11,0,0,0-.7-5.4c-1.1-2.9-3.8-5.6-7.1-5.7a.63.63,0,0,1-.6-.5,6.65,6.65,0,0,1-3.4-.9c-1.2-.6-2.2-1.4-3.6-1.5-2.7-.3-4.3,1.7-5.7,3.7-1.2,1.7-2.9,3.1-5.1,3s-3-1.7-3.8-3.4A12.57,12.57,0,0,0,14.77,1a4.45,4.45,0,0,0-2.9-1,.55.55,0,0,1-.2.5c-1.3,1.6-1.2,3.7-1.3,5.7a6.72,6.72,0,0,1-1.6,4.3,34.12,34.12,0,0,1-3.9,3.7,10.2,10.2,0,0,0-3,4.4c-.5,1.5-1,3-1.6,4.5-.2.6-.5,1.1,0,1.6a19.39,19.39,0,0,0,3.4,2.1,35.8,35.8,0,0,1,3.9,2.9A26.21,26.21,0,0,1,16,45.1c.2,1.3.1,2.7.7,3.9s2.3,1.6,3.6,1.8c3.3.3,6.6-.6,9.9-.4,2.8.1,5.5.7,7.6,2.7a12.38,12.38,0,0,1,2.5,3.9,14.71,14.71,0,0,0,2.1,3.9,5.9,5.9,0,0,1,1.4-.2,20.73,20.73,0,0,0,6.4-2,3,3,0,0,1-.7-.5c-1.7-1.4-1.8-4-1.8-6,0-1.3.4-3.1-.6-4.1a6,6,0,0,0-2.3-1,5.56,5.56,0,0,1-1.7-.9c-.3-.2-.2-.7,0-.9A23.26,23.26,0,0,0,45.87,40.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Quebraditas