import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaCristalina = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.5 107.12"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LA CRISTALINA', municipio.toUpperCase())}
              className="cls-1"
              d="M0,72.1c1.5-2,2.7-4.5,4.6-5.8,5.2-3.3,4.9-9,6.6-13.7.2-.5-1.3-1.6-2-2.4,1.6-1.9,3.3-3.9,4.3-5-1-2.7-2.8-5.1-2.3-6.7.8-2.7,3-3.8,6.5-2.5,4.1,1.6,12.7-6.4,12.3-10.8-.5-5.3,1.1-6.5,6.3-4.7,1.5.5,3.2.7,4.8,1.1C43.3,11.1,48.8,4.2,59.7,1.8,59.5,1.2,59.2.6,59,0c1.4,1.4,2.9,2.7,4.3,4.1,1.6,1.7,3.2,5,4.7,5,3.2,0,4.7-2.8,4.2-6.3A8.2,8.2,0,0,1,72.4.6c2.7.4,5.1.5,7.5,1.1,1.1.3,2.8,1.2,3,2.1,1.5,6.2,5.9,4.7,11.6,3.7-5.7,2.2-6.5,5.3-4.9,9.4,2.2,5.5-.8,10.1-3.2,14.6C79.5,44.5,83.6,56,91,67c5,7.3,3.1,21.9-3.6,27.7a28.9,28.9,0,0,0-7.6,9.1c-2.2,4.5-4.6,3.8-7.7,1.6-7.4-5.2-14.8-10.5-22.3-15.7a7.2,7.2,0,0,0-3.2-1.1c-2.9-.4-3.4-1.5-3.1-4.7a49.6,49.6,0,0,0-1.1-14.8c-.9-4.4-6.8-6.9-11.7-6.2-2.8.4-5.6.1-8.4.2a14.16,14.16,0,0,0-5.5,1c-5.2,2.7-10.2,5.8-15.2,8.7A7.74,7.74,0,0,1,0,72.1Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaCristalina