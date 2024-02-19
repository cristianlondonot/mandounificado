import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const GuariguaAlto = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.6 99.17" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('GUARIGUA ALTO', municipio.toUpperCase())}
              className="cls-1"
              d="M149.3,95c-7.7,1.4-15.7,5.1-22.9,3.9-16.2-2.7-32.3-.5-48.3-2.1a63.38,63.38,0,0,1-33.6-13.7c-5.2-4-11.6-6.7-17.8-9.1-8.4-3.2-17.2-5.6-26.7-8.7,12.1-5.5,11.8-16.8,13.5-25.8,10.5-2.8,20.2-4.9,29.6-8,3.4-1.1,6.6-4.3,8.6-7.4,5.1-7.5,10.5-12.3,20.6-9.4,7.7,2.2,14.8-2,18.3-9,1.8-3.5,9.1-6.8,13.6-5.4,6.1,1.8,12,2.9,18.1,0a4,4,0,0,1,3.5.6c.5.6.1,2.4-.4,3.4-1.8,3.7-2.7,7.2.2,10.9a6.68,6.68,0,0,1,1,3.1c.8,10.4,1.6,20.7,2.4,31.1a9.28,9.28,0,0,0,.7,3.3c3.5,7.4,5.4,15.2,6.7,23.3.7,4.3,4.8,8.2,7.8,11.9,1.6,2,4.2,3.1,6.4,4.7A14.14,14.14,0,0,0,149.3,95Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default GuariguaAlto