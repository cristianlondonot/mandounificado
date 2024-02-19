import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pedregal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.29 98.02" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PEDREGALES', municipio.toUpperCase())}
              className="cls-1"
              d="M70.49,20.87c2,1,0,3,1,4-9,0-17,3-25-2-1,0-2,2-2,4-7-1-16-1-18-6A28.33,28.33,0,0,0,8.29,0l0,.09-.5,2.43L7.25,4.9v1l-.44.94V8.78l-.5.5-.5.94-.5,1-.44.5-.5.94-.49,1v.44l-.95,2-.49.5L1.94,19l-.5,1.49L1,22.4,0,25.78l.5,1.43v1L0,31.59v1.94l.5,1.93v.95l1.44,2.93.5,2.93.94,3.38.5,1.44.49,2.44V54.4l-.49,2.38-.5.5-.45,1v.45l-.49,1v1.5l-.5.94v1.94l.5,1.44v1.93l-.5,3.44-.5,3.37v.45L1,75.21l.94.5,2.43,1.44,1.44,1.5L8.25,81l.94,2.49,1,1.94.5,1.44,2.38,2.88L15,92.71l1,1.44,1.94,1.44,1.94.5,1.43.49,1.44-.49,1.94-.5,1.94-.44,1.44-.5,1.49-.5,1,.5.49.94.94,1,.5.45,1,1h.44l1-.49h.5l.94-1,.5-1,.94-1.44,1-.5,1.44-.44,1-1,.44-.94,1.5-1,.94-.49.5-.5,3.37-1.44,2.44-.94,1.44-1,1-.44.94-1.5.5-1.44.49-.5.45-1,1.93-1.94,2.94-2.44L63,75.21l1.94-1.93,1.49-.45h.94l.44.45h1l1.94-.45,1.94-1,1.93-.94L77,69.4,78.89,68v-.5l1-.94,1.44-1.44,1-1.93,1.93-1c1.07-13.76,13.84-24.26,18-36.26C94.53,32.3,81.76,24.34,70.49,20.87Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Pedregal