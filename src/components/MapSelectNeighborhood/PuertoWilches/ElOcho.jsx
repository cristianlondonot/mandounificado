import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElOcho = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.91 172.26" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('EL OCHO', municipio.toUpperCase())}
              className="cls-1"
              d="M50,171.66c0-1,1-4-2-3,6-3,6-10,3-15,5,3,13,1,11-6,0-2-5,0-7-2a6.38,6.38,0,0,1,0-6h4c3-7,1-18,11-14,1-10,2-23-11-27-1,0,0-3,0-5-1-5,7-6,5-12h3c-3,4-1,7,3,9,1-6,2-11,6-17,1-2,0-5,0-5,6.27-3.13,10.18-7.84,14.44-12.14l.09-.2L92,52.45l1-2.88.5-2.94.44-2.93V40.32l-.44-1.44v-1L93,37l-.5-.5-.5-.94V29.69l-.44-1-1-1.44L90,25.82l-.45-1.94V22.39H90v-1h-.45v-.94H90l.49-.5h1v-.5H92L91.53,19v-.5L91,18v-.5l-.5-.44.5-.5v-.5H89.09l-.49-.49.49-.45h.5l.45-.5V13.2h.49l.5-.5.5-.5V10.26H92V9.32h-.44V7.88H92l.5-.5v-.5H93v-1l-.5-.45-.5.45-.44-.45V3H92V2.07l.5-.5V0C85.19,1.51,77.83,3.53,74,9.66c-9,12-14,32-28,36,1,2-2,3-1,5-7-1-6,7-11,9-2,1-5,2-6,4-5,3-9,7-13,9-10,5-4,14,4,19-2,1-4-1-6-1,2,1,7,2,6,5-.66,2-2.62,2.64-4.74,2.3,3.6,1.83,7.26,4.7,5.74,4.7-11,3-7,17-16,23H0c2,0,4,1,6,2,4,4,7,7,12,10,2,1-4,4-3,8,2,0,3,0,4,1,0,4-2,9-6,11a68.9,68.9,0,0,1,8,3c2.83,2.83,5.51,5.66,8.35,8.23.88.55,1.77,1.13,2.65,1.77C37,174.66,44,169.66,50,171.66Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElOcho