import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chingale = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.2 75.92" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CHINGALE', municipio.toUpperCase())}
              className="cls-1"
              d="M36.29,75.83v-4c2-1,6,2,7,1,7-9-5-24,11-21C51.67,61,55.91,62.88,62,63.92v-.86h.5v-.5l.5.5.5.45h.44l.5-.45h.5v-.5h.44v-.49h-.44v-.45h-.5l-.5-.5h1.94v-.49l-.5-.5v-.5h-.44l-.5.5h-.94v-.94l-.5-.5-.5-.5v-.94h1.44v-1.5l-.44-.49V52.82h.44l.5-.44h.5l.44-.5V49l-.44-1-.5-1.44V43.63l.94-.44.5-.5,1.49-1,.94-.5.5-.44.44-.5.5-.94.5-1V36.88l-.5-.5-.94-.5-.5-.44H66.82l-.49-.5-.5-.5V33.5l-.5-.56V31.51l.5-1v-.49l1-1,.5-.5.34-.16a6.08,6.08,0,0,1-4.37-1.58c-12-9-23-13-37-17C21.52,8.24,19.91,4.13,17.94,0l-.5.5L16.5,2.88,15,4.82l-.94,1.5L12.12,8.25H10.19l-1.94.94-1.44.5-1.94.94-1.49,1-.45,1-1,1.44-.5,1.44L1,16.5,0,18.44v1.44l1,2.44,1.93,1.93,3.88,2.88,1.94,1.44,1.44,1,2.43,3.37,2.88,2.94,1.94,3.43,1.44,2.38.5,1.94-.5,1.94L18.38,47l-.44,1.49L16.5,51.38l-1,1.94-.94,1.44v3.43L16,60.63l1.44,1.93L18.38,65l1,2.88.5,1.94.27,1.59a51,51,0,0,0,8.14.42C27.29,76.83,33.29,75.83,36.29,75.83Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Chingale