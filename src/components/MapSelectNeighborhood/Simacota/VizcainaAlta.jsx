import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VizcainaAlta =  ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.73 164.7">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VIZCAINA ALTA', municipio.toUpperCase())}
              className="cls-1"
              d="M99.5,164.7c-4.6-3.8-8.7-8.3-13.7-11.2a230.74,230.74,0,0,0-27.4-13.3c-4.7-1.9-10.2-1.6-15.3-2.6a5.59,5.59,0,0,1-3.2-2.5c-4.3-6.9-8.6-13.8-12.7-20.8-3.4-5.7-7.1-11.3-9.6-17.3C14,88.2,6.6,83.3,0,76.9c4.1-5.7,9.6-9.4,17.6-9.9,3.7-.2,7.4-2.1,10.9-3.8,5.8-2.9,11.9-5.5,17-9.5,6.4-5,12.6-10.4,13.5-19.8.7-7,2.6-13.7,9.1-18.8C72,12,73.5,5.9,76.7,0c3.4,4.4,7,9,10.6,13.8a1.55,1.55,0,0,1-.1,1.6c-3.7,4.8-1.3,8.1,2.2,11.5,1,.9.9,3.3.7,4.9-.8,7-1.7,13.9-2.7,20.9-.2,1.5-.6,3.7-1.6,4.3s-3.1-.4-4.4-1.1c-3.1-1.9-5-1.6-6.7,2.1a109.09,109.09,0,0,1-6.5,11.5c-1.9,3.2.3,8.7,5,12.1,8,5.7,7.9,6.9,3.3,15.2-1.4,2.5,0,6.5.3,9.9.1,1,1.4,2,1.4,3,.1,7.6,3.2,9.5,11.2,9.1,4.6-.3,11.9,2.1,13,9.9a108.35,108.35,0,0,0,3.3,15,36.39,36.39,0,0,0,3.3,6.9c1.6,3.2.5,5.2-2.6,6.5-2.6,1.2-5.1,2.5-7.7,3.8C99,162.1,99.2,163.4,99.5,164.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VizcainaAlta