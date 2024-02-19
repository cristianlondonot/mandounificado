import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const BocasDelRosario = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.26 99.67" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('BOCAS DEL ROSARIO', municipio.toUpperCase())}
              className="cls-1"
              d="M8.34,81.09c14,4,25,8,37,17a6.2,6.2,0,0,0,4.38,1.58l.6-.29.5-.5V96.45l-.5-.5h-.94l-.5-.44-.5-.5-.49-.5V93.07l.49-.5.5-.44h1.94l.44-.5h.5l.5-.5.5-.94v-.5l.5-1V87.26l-.5-.94-.5-1-.5-.5-.5-.94.5-.5v-.5l1-1,.5-.45v-1l-.5-.5-.5-.44-.5-.5h-.5l-.94-.5-.5-.94V74.63l1-.94.44-.5,1-.49H53.7l.5-.5v-.94H52.26l-.5.49h-.94v.45H49.38V69.82h.44v-1.5l.5-.44v-1l.5-.5v-.94h-.5v-1H47.89l-.5.49h-.45l-.49-.49V64H46V62.07h.5v-.5h1.93v.5h1.94v-.5h.5v-1h.44V59.13h-.44v-1h-.5v-.5h-.5l-.44-.45H46v.45H44.51V56.7H45l.49-.5h2.88l.5-.5v-.94h-1l-.5-.5h-.94l-.5-.5v-.94h.5l.49-.5.45-.5.5-.44v-.5h.49l.5-.5h1.94l.44-.49H53.7l.5.49h.5l.49.5h.45l.49.5h.95l.49-.5v-.5h.5v-.94l.5-.5v-.49h.5V48h.44v-.44H60l.5-.5h.94l.5-.5h.94V47h1v.5h.49V48h.45v.5h.49V48h.5V47l.5-.5V46l.44-.44v-.5l.5-.5v-.94l.5-.5v-.5l.5-.44V39.26h-1l-.5-.5H64.83l-.45-.5-.49-.5v-.5h-.5V34.38l.5-.49V33l.49-.5V30h-.49v-.44H61v-.5h-.44V25.19H60V24.7H56.13V20.32l-.49-.44v-1h-.45v-.5H54.7v-.94h-.5V17h.5V16h.49v-.5h.45v-.94h.49V11.57h-.49V8.7h.49V8.2h.5l.45-.5h.49V7.26h.5v-.5h.5v-1h.5V3.82h.44V2.88H60v-.5h.5L61,1.89h.5V1.44H62V0C51.5-.74,41.61,9.72,36.34,7.09a23.62,23.62,0,0,0-5.63-1.95c2,6,.2,12-2.37,18-6,12,6,28-2,40-3.46,4.33-12.18,3.4-20.3,1.13l-.23.23v.49L3.37,66.88,1.44,69.82,0,71.25C2,75.38,3.58,79.5,8.34,81.09Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BocasDelRosario