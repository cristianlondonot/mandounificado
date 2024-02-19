import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SitioNuevo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.38 61.7" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SITIO NUEVO', municipio.toUpperCase())}
              className="cls-1"
              d="M33.15,58.66c8-12-4-28,2-40,2.56-6,4.38-12,2.37-17.94C26.05-1.77,12,2.89,0,4.29L1,6.21,3.42,8.59l1,1.49.49.45,1.94,2,1.44,1.94.5,1.44.5.49.94,1.94.5,3.38v1l.5,2.43L11.62,28l.5,1.94.49.94,1.44,1.49.5.45v3.43l.94,1.94,1,1.44,1.44,1.93.5,1,.94,2.88.5,2.93-1.44,1.44-.5,1-1.44,1.94-.5.44-.94,1.94-1,1.49-.49.5-.5,2.44-.22.21C21,62.07,29.68,63,33.15,58.66Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SitioNuevo