import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SantaLucia = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86.54 137.7"
      >
        <path
          fill={getColorByCarencias('SANTA LUCIA', municipio.toUpperCase())}
          className="cls-1"
          d="M44.5,118.8v15.4l1.5,3.5a27.29,27.29,0,0,0,3-6.5,25.42,25.42,0,0,0,1.4-6.2c.2-2.1.3-4.3.7-6.4a50.82,50.82,0,0,1,4.1-11.9A76.84,76.84,0,0,1,62,94.9c2.5-3.4,2.4-7.8,4.3-11.5.1-.2.2-.3.4-.3l.9-3.3a37,37,0,0,0,1.8-8c.2-2.9-.2-5.8-.2-8.7a32.78,32.78,0,0,1,1.4-8.3c.7-2.8,1.5-5.6,2.2-8.4a62.28,62.28,0,0,0,1.7-8.6c.2-1.8.5-3.8,2-5.1,1.2-1,2.8-1.5,4-2.5a17.44,17.44,0,0,0,3-4c1.5-2.5,3.6-5.8,2.9-8.9-.6-2.7-3.1-4.2-5.5-5.2a44,44,0,0,0-8.8-2.4c-1.3-.3-2.6-.5-3.8-.8a22.72,22.72,0,0,1-5.5-2.5,18.24,18.24,0,0,0-7.9-2.1c-2.7-.2-5.4-.4-8.1-.7A45.19,45.19,0,0,1,34.4,0H32.9V2l-2,2,2,2v5.7h-2l-1.8,2v1.8h1.8v2H27.2v9.7h-2v3.7H23.4v2h1.8v7.7H23.4v3.9h-2v1.8l-2,2v3.9l-2,1.8h-2l-1.8,2h-2v5.9l-2,2h-2L5.8,65.7h-2v2h-2v3.9L0,73.4v3.9H1.8V81l2,2H7.5l3.9,3.9v1.8l2,2h5.7l2,2h2l1.8,2v1.8l2,2v2h2v2l1.8,1.8,2,3.9,2,2,2,1.8,2,2,1.8,2h2Z"
        />
      </svg>
    </div>
  )
}

export default SantaLucia