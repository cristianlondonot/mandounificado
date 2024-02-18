import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const CentroCampo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 89.9 50.3"
      >
        <path
          fill={getColorByCarencias('CENTRO CAMPO', municipio.toUpperCase())}
          className="cls-1"
          d="M88.3,23l-1.4-1.4a9.14,9.14,0,0,1-1.4-.7,33.85,33.85,0,0,1-9.1-6.8,16.26,16.26,0,0,0-3.8-3.6,46,46,0,0,0-5.2-1.9c-2.2-.7-4.5-1.4-6.7-2.1A50.88,50.88,0,0,0,54,4.7c-2-.4-4-.6-5.8-1.7a24.33,24.33,0,0,1-3.4-3A12.42,12.42,0,0,0,42,6.8c-.3,2.5-.2,5.1-.5,7.6a18.78,18.78,0,0,1-5.6,11.3,19.73,19.73,0,0,1-11.1,4.9,19.42,19.42,0,0,1-6.8-.1,17.56,17.56,0,0,1-6-2.9A55.77,55.77,0,0,0,0,21.1c.8,4.7,2.8,9,6.9,11a11.6,11.6,0,0,0,4.3,1.2v3.3l2,2v2L17,42.4v6.1l4.1,1.8h1.8V46.5l2-2v-2l2,2h2l1.8-2,4.1-1.8,3.8-2,2-2h5.9l2,2v2l2,1.8h3.8l2-1.8v-2h2v-2h9.9l1.8,2,2,2h4.1l3.8,1.8H84l1.8-1.8h4.1V36.6h-2V32.8h2v-2l-2-2V23Z"
        />
      </svg>
    </div>
  )
}

export default CentroCampo