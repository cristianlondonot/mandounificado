import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaMuzandaBaja = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.78 101.08"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BADILLO', municipio.toUpperCase())}
              className="cls-1"
              d="M48.05,78.76h3l-.92.8c11.41,4.07,23.61,2.91,34.92-1.8,1,0,1-7,2-7,12,2,19,3,19-11,5,3,11,5,14,3,5.55-3.71,5-11.6,6.85-17.57l-.06-.07-1-.49H124.4l-.5-.5-.5-.5-.44-.94V40.75l.44-.5.5-.44.5-.5,1.44-.5,1-.5.94-1.49v-.94l-.5-.5-.44-1.94-.5-.5-.5-.44-.5-.5H123.9l-.94.5H120l-.5-.5-.44-.5V31l-.5-.45-.5-1-.5-.94-.44-.5-.5-.5-.5-.94-.5-.5h-.94l-.5-.5h-1.44l-.49-.44-.5-.5-.44-1v-.94h.44v-.5l.5-.49,1-.45h1.94l.94.45h1.44l.5-.45h.5v-.5l.5-.49v-.94l-.5-.5v-.5l-.5-.5-1.44-1.44h-1l-.94.5-.94.94-.5.5h-.5l-.49-.5V17.5l.49-2.49V12.63l-.49-1-1.44-.94v-.5H108.4l-1.44.5h-1.44v-.5l-1-.5-.45-.94v-.5h-.5v-.5l-1,.5H99.21v-.5h-.5l-.44-.94-.5-.5V3.88l.5-.5V1.44h-.5L96.28.5,95.83,0h0C91.09,5,92,11.84,86.05,16.76c-2,1-4-1-6-2-1,0-3,3-3,2-11-1-22,2-33,0,0,2,2,5,1,7-12.48,9.59-27.71-1.05-42.17,2.48v1.39l-.44,1h.44L2.44,31.5h-.5V32l-.5,1.94V45.12L0,48l.94,3.88v2.43l.5,1.94V64l.5,3.44v3.87l.5,3.88.44.94.5,1.93,1,3.94,1.44,4.31,3.88,5.37.94.95,1.44,1.43L14,96l2.43,2.44,3,2.64C29.53,94,41,87.55,50.13,79.56,49.43,79.31,48.74,79.05,48.05,78.76Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LaMuzandaBaja