import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PaloDeCuches = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 183.2 111.15"
      >
        <path
          fill={getColorByCarencias('PALO DE CUCHES', municipio.toUpperCase())}
          className="cls-1"
          d="M19.5,47.8l4.1,2.3,3.8,1.8h7.9l2,2h3.8l2,2,3.8-2h2l2-2h7.9l2,2h7.9l1.8,2v3.8l2,2v4.1l4.1,1.8,1.8,2,2,3.8h2l2,4.1,1.8,3.8,2,2,2,4.1v3.8l2,2v3.2c4.3,1.5,8.6,3.1,12.8,4.7s8.2,3.3,12.2,5.1a73.65,73.65,0,0,0,10.1,4.1c2.9.8,6.5,1.5,9.2-.2,1.6-1,2.4-2.6,3.3-4.2,1.2-2.2,2.4-4.5,3.5-6.8s2.2-4.7,3.2-7a23.22,23.22,0,0,0,1.5-7.4c.4-3.9,1.4-7.7,2.2-11.6a48.26,48.26,0,0,1,3.4-11,14.69,14.69,0,0,1,2.8-4.2,13.72,13.72,0,0,1,4.5-2.8c3.3-1.3,6.9-1.4,10.4-2a14.62,14.62,0,0,0,4.6-1.5,10.09,10.09,0,0,0,3.6-3.8,25.53,25.53,0,0,0,3.7-13.2,20.52,20.52,0,0,0-3.8-12.2,42.23,42.23,0,0,0-9.3-9.1,67.46,67.46,0,0,0-9.9-6.9c-3.4-1.8-7.5-3.1-11.2-1.6-3.4,1.4-6.2,4.1-9,6.4s-5.9,4.8-9.5,5.7c-4.1,1-8.5-.5-12.3-2-4.3-1.6-8.5-3.6-13-4.3l-1.3,1.3v9.9l-2,1.8-1.8,2h-2v-2h-2l-2-1.8-1.8-2H86.2l-1.8-2v-2L80.3,14H72.4v1.8l-2,2-1.8,2H64.9l-2-2H47.1v-2H43.3v2H37.4v-2l-2-1.8V9.9l-2-2V0h-2V2H29.6V4h-2V6h-2V7.8l-1.8,2v2h-2v2l2,1.8v2l-2,2H17.7v-2H11.8L7.7,21.7v1.8H1.8v6.1l2,1.8v5.9l-2,2L0,41.3v2l1.8,2v1.8H19.5Z"
        />
      </svg>
    </div>
  )
}

export default PaloDeCuches