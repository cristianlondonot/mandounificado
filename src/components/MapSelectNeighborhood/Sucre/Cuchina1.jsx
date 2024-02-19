import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cuchina1 = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.73 77.89">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUCHINA 1', municipio.toUpperCase())}
              className="cls-1"
              d="M59.36,70.61c-8.3-4.3-8.5-4.2-10.4.3-3.2,1.9-5.7,2.5-6.5,3.9-2.2,4.3-5.9,3.2-8.6,2-3.3-1.4-3.5-4.2-1.3-7.7s.5-9.2,8.6-9.1c-2.3-3.4-3.6-5.8-5.4-7.8-10.1-10.9-20.3-21.5-30.3-32.5-2-2.2-3.2-5.4-4.4-8.2-3-7.8.5-11.8,8.9-10.5a13.21,13.21,0,0,0,4.8-.6c3.2-.8,5.6-.7,7.9,2.7,3.7,5.7,10.4,7,16.6,5.4,3.3-.9,7.2,0,10.8.4,3.2.4,6.3,1.2,9.4,1.7-3.7,6.3-5.6,13.1-2.3,20.1a9.33,9.33,0,0,0,5.4,4.3c5.9,1.7,9.8,7.3,7.5,12.8C67.06,55.51,63.16,62.71,59.36,70.61Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cuchina1