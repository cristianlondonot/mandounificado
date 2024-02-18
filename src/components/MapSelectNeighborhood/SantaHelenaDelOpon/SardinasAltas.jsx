import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SardinasAltas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124.7 112.7"
      >
        <path
          fill={getColorByCarencias('SARDINAS ALTAS', municipio.toUpperCase())}
          className="cls-1"
          d="M1.4,98.4l4.1,4.1v3.8l1.8,2.3v3.8h6.1v.3a6,6,0,0,0,1.9-.6,24.27,24.27,0,0,0,4.9-3.5c1.6-1.4,3.2-2.7,4.8-4.1a37.81,37.81,0,0,0,4.9-4.9c1.4-1.7,2.9-3.3,4.4-4.9a47.49,47.49,0,0,1,9.8-8.1,44.53,44.53,0,0,1,12.8-5.1A138.93,138.93,0,0,1,71,79c5-.7,10-1.3,15-2,2.5-.4,5-.7,7.5-1.2a56.76,56.76,0,0,0,7.1-1.8,83.87,83.87,0,0,1,10.8-3.3,67.14,67.14,0,0,0,7.8-1.5,11.67,11.67,0,0,0,3.5-1.4,5.5,5.5,0,0,0,.9-.7,8.6,8.6,0,0,1,.1-1.6,30.08,30.08,0,0,0,1-6c0-1.8-.2-3.6-1.6-4.9a11.35,11.35,0,0,0-2.3-1.5,37.18,37.18,0,0,1-3.4-1.9,43.73,43.73,0,0,1-11.3-9.7c-3.7-4.6-6.3-9.9-9.3-15a43,43,0,0,0-5.5-7.9A20.78,20.78,0,0,0,85,13.9c-2.5-1.2-5-2.1-7.6-3.2-2.4-1-4.7-2-7.1-3.1A150.23,150.23,0,0,1,56,0L54.7,1.3v2l-1.8,2H46.8L43,7.1H41l-2,2-3.8,2v2h-2v4.1l2,1.8h2v2L39,23v3.8H37.1l-2,2-2-2h-2L29.3,25H21.4v1.8l-2,2v2l-2,2-2,1.8v2l-1.8,2-2,2-2,1.8-2,2-1.8,2v2h-2v3.8l2,2v2L3.8,58v2l-2,2v3.8L0,67.8V93.5l1.8,2v2.9Z"
        />
      </svg>
    </div>
  )
}

export default SardinasAltas