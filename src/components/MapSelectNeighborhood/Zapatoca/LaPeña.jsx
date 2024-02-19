import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaPeña = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 103.1 80.47"
      >
        <path
          fill={getColorByCarencias('LA PEÑA', municipio.toUpperCase())}
          className="cls-1"
          d="M91.6,30.07A12.73,12.73,0,0,1,86.5,26c-1.4-1.7-2.7-3.4-4.7-4.4s-3.6-1.7-4.9-3.5c-1.5-2.2-3.9-3.7-5.5-5.8A10.09,10.09,0,0,1,69.7,7c-.2-1.8-.5-3.8-2-4.9-2-1.4-4.7.1-6.9,0a24.39,24.39,0,0,1-4.6-.7L51.7.47c-4.3-.9-9.4-.9-11.8,3.5s-2.6,10.5-6.7,13.9a22.35,22.35,0,0,1-6.3,3.3,31.82,31.82,0,0,0-3.2,1.6,24.29,24.29,0,0,0-3,2.6c-1.4,1.4-3.2,2.9-5.4,2.8s-4-1.5-5.7-2.7S5.8,22.57,3.8,24a10,10,0,0,0-2.1,2A12.88,12.88,0,0,1,0,27.57v.7l1.6,1.6v5.3l1.8,3.3v10.4l1.8,1.8H8.5l1.8,1.6,1.8,1.8h5.1l1.8,1.8,1.8,1.8h3.3v1.6h3.5l1.6,1.8v1.8h5.3l1.6,1.6,1.8,1.8h3.5v1.8H43l1.8,1.8,1.8,1.6v2l1.8,1.6v1.8h5.1l1.8,1.8H70.6l1.8,1.8h3.5v-1.8h1.6v-1.8H81l3.3,1.8h3.3v-1.8h1.8l3.5,3.5,1.6-1.8v-3.5l1.8-1.6-1.8-5.3V58h1.8l3.5-1.8,3.3-1.8V35.57A100.9,100.9,0,0,0,91.6,30.07Z"
        />
      </svg>
    </div>
  )
}

export default LaPeña