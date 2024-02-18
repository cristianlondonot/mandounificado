import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Funcial = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99.11 71.33"
      >
        <polygon
          fill={getColorByCarencias('FUNCIAL', municipio.toUpperCase())}
          className="cls-1"
          d="M97.1,65.54v-2l-2-2V55.74l-2-2L91.31,50V48l-2-2v-6h-2l-2-1.79v-4H81.51l-2,4h-2l-1.78,1.79v2h-2v-9.8l-2-2V28.34l-2-2-1.78-2H60.13l-2-3.78h-2l-1.79-2h-6v-2H42.53V12.75l-2-2-1.78,2-2,1.78h-4l-2,2H26.94l-2,2H21.14l-1.78,2-2-2h-2v-2H9.56l2-3.79,1.78-4,2-5.79L16.91,0c-.6.54-1.21,1.08-1.8,1.63a40.11,40.11,0,0,0-4.58,5.08,32.3,32.3,0,0,0-4.11,6.61c-.64,1.47-1.51,4,.73,4.49a9.7,9.7,0,0,1,2.07.39,2.7,2.7,0,0,1,1.31,1.47c.56,1.34.11,3-.22,4.39a21.62,21.62,0,0,1-1.73,5c-.91,1.74-2.19,3.19-3.23,4.85A23.48,23.48,0,0,0,2.19,45C2.05,46.88,2,48.82,2,50.75A34.13,34.13,0,0,1,1.09,57C.76,58.54.36,60,0,61.53H1.76l2,2h9.58l2,2h2l2,1.78H32.73l4,2,5.79,2h4l11.58-2H89.31l5.79-2h4Z"
        />
      </svg>
    </div>
  )
}

export default Funcial