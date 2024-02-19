import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CañoBonito = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 92.41" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CAÑO BONITO', municipio.toUpperCase())}
              className="cls-1"
              d="M70.3.11c.3,5.7-4.2,12,2.1,15.9,2.3,1.4,6.2.2,9.4.2-1.6,6.7-2.2,14.8-9.5,20.5a100.76,100.76,0,0,0-14.7,14.5,18,18,0,0,0-4.2,9.7c-.5,8.4-5.3,14-12.3,15.7-7.3,1.8-10.7,5.8-13,12a33.87,33.87,0,0,1-2.2,3.8C20.1,80.61,14,70,9.7,58.71c-1.8-4.8-.8-10.2-9.7-8.1.3-.7.5-1.4.8-2.1,6.8-4.6,13.7-9.1,20.5-13.7,4.1-2.8,9-4.9,12.2-8.5,6.3-7.3,11.6-15.5,17.6-23.2A7.63,7.63,0,0,1,55.9.21C60.5-.19,65.1.11,70.3.11Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CañoBonito