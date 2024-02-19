import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoFieras = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.05 98.6" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO FIERAS', municipio.toUpperCase())}
              className="cls-1"
              d="M52.88,76c-.4-11-3.8-13.7-15.1-14.4-2.9-.2-5.6-3.5-8.2-5.6-3.8-3.2-7-6.6-12.9-3.7-1.6.8-4.9-1.1-7-2.5-3.3-2-7.8-4.1-8.9-7.1-1.4-3.9-.8-9.2.8-13.1,1.6-3.6,5.2-6.9,8.8-8.8,8.3-4.4,15.4-12.3,26.5-9.5,1.3.3,3.8-2.1,5.1-3.8,1.7-2,2.7-4.6,4.3-7.5C59.18,12.1,74,18.6,89.48,23c9,2.6,18.6,3.4,28,4.4,11.9,1.3,22.8,3.8,29.1,15.7,2.3,4.4,2,12.3-1.7,15.5-5.1,4.4-11.2,5.6-17.5,6-5.1.3-8.2,2.4-9.7,7.5-.5,1.6-2.5,3.8-3.9,4C100,77.3,97.28,89.3,92,98c-9.4,3.1-9.2-6.6-13.8-9.7a56.75,56.75,0,0,0-7.9-4.7C64.88,80.9,59,78.6,52.88,76Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoFieras