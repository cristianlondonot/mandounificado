import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LosLlanitos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 167.74 103.13"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('LOS LLANITOS', municipio.toUpperCase())}
              className="cls-1"
              d="M167.74,40.07c-9.1.6-14.3,5.7-20.3,11.6-11.5,11.1-25.4,18.9-41.1,24-7.7,2.5-15.1,6.8-22.4,11.1-10.3,6.1-20.2,13.3-32.2,15.9-3.3.7-5.7,1-8.5-2.2s-7.4-4.7-10.9-7.2c-6.9-4.9-12.1-10.4-11.8-20.2.2-8-2.1-15.9-11.5-19.1-2.1-.7-3.6-2.7-3.8-5.6-.1-2.3-.4-5.5-1.9-6.5-7.4-5.3-.6-7,2.3-8.9,6.1-4,14.5-4.3,18.5-11.8.7-1.4,2.2.1,3,.4,6.9,2.5,11.3-.7,14.8-6,11.4-17.3,28.9-20.7,46-7.6,3.4,2.6,6.1,1.6,6.9-1.7.9-3.8,2-3.4,4.5-1.9,5,3,9.6,6,10.3,12.8.6,5.6,3.7,11.1-2.6,15.5-1.1.7-.3,2.6.8,3.7,3.9,4.3,9,6.8,14.1,9.1,3.3,1.5,5.1-1.5,5-4.1-.3-7.8,3.3-11.4,10.9-11.3,6.9.1,9-6.1,10.9-10.3,3.5-7.6,6-3.1,7.5.1,2.6,5.4,5.8,10.5,8.6,15.8C165.64,37.07,166.94,38.07,167.74,40.07Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LosLlanitos