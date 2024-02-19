import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Portones = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.27 102.3" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PORTONES', municipio.toUpperCase())}
              className="cls-1"
              d="M.77,56.6A37.06,37.06,0,0,0,1,72.5,37.18,37.18,0,0,0,2.87,79c.8,1.8,1.9,3.5,2.8,5.2s1.5,3.5,2.3,5.2a26.07,26.07,0,0,0,2.4,4.3c3.7,5.4,9.6,8,15.9,8.6a12.47,12.47,0,0,1,5-7.1c2.4-1.7,5.4-2.5,8.2-3.2,3-.8,6.2-1.4,9-2.8,1.6-.8,3.1-1.7,4.6-2.5a20.37,20.37,0,0,1,5.2-1.9,98,98,0,0,0,12-3.7,75.32,75.32,0,0,0,11.1-5.3c1.4-.8,2.8-1.5,4.3-2.2a13.4,13.4,0,0,0,3.7-2.5A22.64,22.64,0,0,0,92,66.9c.9-1.6,2-3,2.3-4.8a9.88,9.88,0,0,0-.6-5.1,25.31,25.31,0,0,0-2.1-4.4c-1.1-1.7-3.4-4.6-1.9-6.8.2-.2.4-.4.7-.3,4.6,1.6,9.5,2.8,14.3,2s9-3.5,12.7-6.6a.75.75,0,0,1,.9,0,9.66,9.66,0,0,0-2.3-2.2,12.36,12.36,0,0,1-3.9-4.3,23.17,23.17,0,0,0-3.4-4.8,22.05,22.05,0,0,0-4.5-3c-1.5-.9-2.9-1.7-4.3-2.7-2.6-1.8-5.1-4-6.4-7a12.41,12.41,0,0,1-1-5c0-1.2.1-2.4.1-3.6s0-2.6-.1-3.9-.1-2.9-.1-4.4a6.47,6.47,0,0,0-2,.4,14.42,14.42,0,0,0-6.2,4.4c-.8,1-.3,1.5.4,2.3a7.09,7.09,0,0,1,1.9,4.2c.1,1.5,0,3.7-1.5,4.6-1.2.6-2.6.3-3.9.2-1.8,0-3.2.7-3.7,2.6-.5,2.1,0,4.3-.6,6.4a7,7,0,0,1-3.3,4.2c-1.4.7-3,.6-4.6.7-1.2.1-2.4.2-3.5.4a5.58,5.58,0,0,0-2.1.9,11.32,11.32,0,0,0-1,1.3,12.88,12.88,0,0,1-1.6,1.7,14.11,14.11,0,0,1-6.8,2.8c-2.8.4-5.5.7-7.9,2.5a29.72,29.72,0,0,1-4.6,3.3,6.89,6.89,0,0,1-4.9,0,32.24,32.24,0,0,1-6.8-3.1,28.62,28.62,0,0,0-5.9-3.3,11.1,11.1,0,0,0-7.2.3c-4.1,1.5-7.5,4.5-11.5,6.3-.5.9-1,1.7-1.5,2.6a13.31,13.31,0,0,0-1.5,3.2,29.79,29.79,0,0,0-.9,4.3c-.2.9-.4,1.7-.6,2.6A.91.91,0,0,1,.77,56.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Portones