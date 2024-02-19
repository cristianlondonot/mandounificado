import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const OjoDeAgua = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185.44 101.79"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('OJO DE AGUA', municipio.toUpperCase())}
              className="cls-1"
              d="M178.59,5.17c-.4,5.4,1.6,11.4,6.3,16.7,1.1,1.3.2,4.5.2,7l-6.9,1.4c-2.7-4.1-5.9-3.9-10.9-3.1-8.2,1.4-13.2,6.4-19.4,10.6-4.5,3.1-11.1,5.6-16.3,4.9-12.6-1.6-18.2,5.9-23.8,14.5A100,100,0,0,1,97.19,70c-8.6,9.1-20.6,9.7-30.2,15.5-7.3,4.5-13.9,3.7-21.3.6-2.2-.9-5.9-.3-8,1a50,50,0,0,0-12.1,9.3c-3.9,4.2-8,5.6-13.6,5.4-13.5-.4-13,0-10.8-13.3,1.2-7.1.3-14.6.7-21.9a6.22,6.22,0,0,1,2.8-4.5c7.8-3.6,15.8-6.7,23.6-10.4,1.4-.7,3-3.2,2.8-4.6-.6-4.2-2.1-8.3-3-12.6a15.86,15.86,0,0,1,.6-7c3,4.4,5.2,2.5,8.3.8,8.9-4.8,15.5-13.4,25.9-15.5,5.7-1.2,11.6-1.5,17.3-2.6,7.2-1.4,14.2-1.5,21.3.8,2.6.8,5.9-.4,8.9-.8,1.5-.2,2.9-1.1,4.4-1,14.4,1,27.6-3.3,40.6-8.7a8.2,8.2,0,0,1,4.4-.3C165.79,1.77,171.69,3.37,178.59,5.17Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default OjoDeAgua