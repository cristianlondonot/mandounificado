import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPopa = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91.74 108.19"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA POPA', municipio.toUpperCase())}
              className="cls-1"
              d="M81.3,68.49c1.6,1.7,3.2,2.8,3.8,4.3s.8,4.2,0,5c-5.7,5.1-11.8,9.9-17.9,14.7-.8.6-2.5,0-3.5.5-1.7.8-4,1.8-4.5,3.3-1.2,3.1-1.6,6.6-2.7,11.9-2.6-3.9-4-6.6-5.9-8.9-2.4-2.9-4.9-6.1-8-8-5.4-3.2-11.3-5.4-17-8.1a13.07,13.07,0,0,1-3.6-2.7c-1.1-1.1-1.6-3-2.9-3.5-6.9-2.7-10.6-7.1-9.3-15,.2-1-1-2.4-1.8-3.4-3.3-4.1-6-8.2-5.3-14,.2-1.6-1.8-3.5-2.7-5.1,8.3-9.1,16.8-18.2,25-27.6,2.2-2.5,3.1-6.1,4.9-9,1.5-2.5,3.2-4.3,6.4-1.4,4.4,3.9,9.7,3.9,15.1,2.1,2.2-.7,4.6-.7,6.7-1.4,5.2-1.7,9.7-1.9,12.1,4.2.1.3.5.8.8.8,9.4,1,8.6,9.7,11.6,15.4,3.4,6.4,6.8,12.9,8.8,19.8,1,3.5-.4,8.2-2,11.9C87.5,59.19,84.2,63.49,81.3,68.49Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaPopa