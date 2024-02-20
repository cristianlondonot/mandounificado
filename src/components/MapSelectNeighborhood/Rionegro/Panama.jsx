import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Panama = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.2 78.36"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PANAMA', municipio.toUpperCase())}
              className="cls-1"
              d="M12.3,16.17c9.6-.5,12.6-2.9,11.5-7.9,2.4,1.1,5.2,3.4,8.3,3.7,3.3.3,6.9-.8,9.9-2.2,1.3-.6,1.5-3.5,2-5.4.4-1.4.3-4.1.8-4.2,1.7-.3,4.4-.3,5.1.7,5,7.5,12.5,7,20,7.2,3.2,0,6.3,2,9.4,2,4.8,0,9.7-1,14.9-1.6C84.4,19.07,74.9,29.67,65,40c-1.8,1.8-5,2.2-8.8,3.7v8.8c0,2-6.1,9-7.9,9.8-5.1,2.4-11.6,1.2-15.7,6.4-.9,1.1-3.2,1.1-4.8,1.7-2.5.9-6.1,1.1-7.2,2.9-3.2,4.9-8.6,3.1-12.6,5-1.9.9-6-5.8-7-9.2-2.8-9.2.9-17.3,3.4-25.7,1.6-5.3,4.1-10.2,5.7-15.5C11.3,24.17,11.5,20.37,12.3,16.17Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Panama