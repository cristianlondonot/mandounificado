import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanClaver = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.61 135.39" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN CLAVER', municipio.toUpperCase())}
              className="cls-1"
              d="M44,129.14c2,5,13,7,21,6,2,0,4-6,1-7-4-2-4-7-8-7,2-7,1-13,5-20,3-4,1-10,3-16,3-9-2-16-11-20h2c-3-11-2-16,5-26,0-1,4-2,6-1-1.14-2.85.32-5.06,1.61-7.35v-.42H66.73l-.5-.5V27.49h-.5l-.44.44v-.44h-.5V27h.5v-.5l.44-.5V24.05l-.44-.49V22.12h.44l.5-.45v-.49h-.5v-.5h-.94l-.5-.5-.44.5v.5l-.5-.5-.5-.5h-.5l-.44.5-.5.5h-.5v-.5l-.49-.5-.5-.5h-.44l-.5-.44-.5-.5-.44-.5V17.3l-.5-.5v-.5H58v-.94h-.5v-.5H57v-.49H55.6v-.45h-.5v.45h-.5v-.45H53.16v-.5h-.49l-.45-.49v-.5h.45V12h-1v.94h-1l-.5.49h-.44v-.49h-.94l-.5.49h-.5l-.44.5h-.5l-.5.45v-.95l-.5-.49-.44-.5V12h-1l-.5.44H42.53L42,12l-.45-.5V11l.45-.5V6.12l-.45-.5V4.68l-.5-.5V2.74L42,.8l.4-.8C38.18,4.31,34.27,9,28,12.14c0,0,1,3,0,5-4,6-5,11-6,17-4-2-6-5-3-9H16c2,6-6,7-5,12,0,2-1,5,0,5,13,4,12,17,11,27-10-4-8,7-11,14H7a6.38,6.38,0,0,0,0,6c2,2,7,0,7,2,2,7-6,9-11,6,3,5,3,12-3,15,3-1,2,2,2,3-.26-.08-.52-.14-.78-.2A4.79,4.79,0,0,0,3,116.14C16,119.14,37,112.14,44,129.14Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanClaver