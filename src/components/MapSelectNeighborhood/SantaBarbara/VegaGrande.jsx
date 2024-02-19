import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const VegaGrande = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 197.57 317.32"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('VEGA GRANDE', municipio.toUpperCase())}
              className="cls-1"
              d="M4.3,285.2v1.9l1.9,3.7V294c.8.5,1.6,1.1,2.4,1.7,7.8,5.9,13.8,14.2,22.6,19,4.4,2.4,9.3,3.5,14.2,1.8,4.4-1.5,8.1-4.7,11.8-7.4a188.22,188.22,0,0,1,29-17.3c2.4-1.2,4.9-2.3,7.4-3.3,2.1-.9,4.3-1.5,6.4-2.3a12.05,12.05,0,0,0,5.9-4.5,29,29,0,0,0,2.9-6.8,21.89,21.89,0,0,1,3.2-6.5,15.52,15.52,0,0,1,5.3-3.9c1-.6,2-1.1,3-1.8a22.06,22.06,0,0,0,3.2-2.9c2.1-2.2,4.1-4.5,6.4-6.6,4-3.8,9.1-6.4,14-9s10.1-4.7,14.6-7.8a13,13,0,0,0,4.2-4.2,10.9,10.9,0,0,0,1.4-4.3c.6-3.7.7-7.5,2-11.1a7.34,7.34,0,0,1,3.3-4.2c.8-.4,1.6-.8,2.3-1.2a17.26,17.26,0,0,0,2.8-1.9,10.7,10.7,0,0,0,2.6-2.6c1-1.7,1.8-3.4,2.6-5.1a7.74,7.74,0,0,1,1.9-2.8,11.66,11.66,0,0,1,3.6-1.6c3.4-1.2,7.7-2.1,10.1-4.9a9.48,9.48,0,0,0,1.9-4.5,23.15,23.15,0,0,0,0-8.3c-.8-5.1-2.5-10.1-1.9-15.3a16,16,0,0,1-4.4-.3,18,18,0,0,1-7-2.6c-3.7-2.4-6.3-6.1-8.7-9.8-1.2-1.9-2.3-3.9-3.6-5.7-1.5-2.2-3-4.4-4.4-6.7a91,91,0,0,1-7.4-14.6c-1.9-4.9-2.8-10.1-3.7-15.3a65.7,65.7,0,0,0-1.6-7.7c-.8-2.8-1.6-5.6-2.2-8.4-1.3-5.7-2.4-11.4-3.6-17.1-.4-2.2-.9-4.3-1.4-6.5-.4-1.9-.8-3.8-1.4-5.7s-1.5-3.4-3.3-4.1-4-.6-5.7-1.9c-4.8-3.5-5.4-9.6-4.9-15,.6-6.5,2.4-12.8,3-19.3.3-3.8.2-7.8-1.3-11.2l-.4.4h-1.7L124.3,11l-5.4-3.7H106l-5.4,1.9H96.7l-5.4,1.9L85.9,13l-9.1,1.7H71.4L67.9,13l-3.7-1.9L62.3,7.4,58.8,5.7,53.4,3.8,47.8,1.9H44.3L40.6,0V12.9l-1.7,1.7v3.7h1.7V20h1.9l1.9,1.9,1.9,1.9H48v1.9l1.9,1.7v1.9L48,31.2v1.9h1.9v9.1h1.9v1.7H49.7v1.9h1.9v1.9l-1.9,1.7v5.4l-1.9,1.7v3.7l-1.7,1.9v3.5l-1.9,1.9L42.3,71l-1.9,1.9-1.7,3.7-1.9,1.9-1.9,1.9v1.9L33,85.8l-3.5,3.5V93H27.6v1.9l-1.9,1.7L24,100.3v1.9l-1.9,1.7v3.7l-1.9,3.7v8.9l1.9,3.7v1.7l3.5,3.7v3.5l1.9,1.9,1.9,1.9v3.5l1.9,1.9v5.4l-1.9,3.7v3.5l-1.9,3.9v12.6l-1.9,3.5v7.3l1.9,1.9v16.4l-1.9,1.7v3.7l-1.7,1.9L20.2,211l-1.9,1.9-1.7,3.5V222l-1.9,3.5v1.9l-1.9,3.5v3.7l-1.9,3.5-1.7,5.6-3.7,3.7v1.7L3.6,251l-1.7,3.7v1.7L0,260.1V280l1.9,3.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default VegaGrande