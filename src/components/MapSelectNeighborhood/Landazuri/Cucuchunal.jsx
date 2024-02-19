import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cucuchunal = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.63 117.59">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CUCUCHUNAL', municipio.toUpperCase())}
              className="cls-1"
              d="M1.23,27.8A12.44,12.44,0,0,0,0,33.5c.6,4,3,7.5,5.8,10.3,1.4,1.4,3,2.8,4.5,4.1s2.8,2.2,4.2,3.4c1.1,1,2.2,2.2,2.2,3.8,0,1.9-1.4,3.5-2.5,4.9a54.4,54.4,0,0,1-9,8.3,28.58,28.58,0,0,0,7.6,5.7,7.92,7.92,0,0,0,4,1.3,10.9,10.9,0,0,0,3.5-.7,17.79,17.79,0,0,1,3.8-1,12.75,12.75,0,0,1,3.9,0c5.3.6,10.4,3,14.9,5.8a.61.61,0,0,1,.1,1,34,34,0,0,0-3,2.3,4.44,4.44,0,0,0-1.7,3.2c0,.6.6,1,.8,1.5.6,1.7-.5,3.6-1.7,4.7-1.9,1.9-7.1,3.9-4.4,7.2,2.4,2.8,6.4,3.7,9.6,5.1a22.42,22.42,0,0,1,6.6,4.4,62.64,62.64,0,0,0,5.7,4.5,33.56,33.56,0,0,0,5.7,3.5c1.5.7,3.8,1.4,5.1-.1a8.06,8.06,0,0,0,1.4-3.3,14.76,14.76,0,0,1,1.3-3.5c1.5-2.4,3.9-4.4,4.7-7.3a10.57,10.57,0,0,0,.2-3.1,13.73,13.73,0,0,1,.2-3.5,14.65,14.65,0,0,1,2.7-5.8c.8-1.2,3-2.9,4.4-1.5a13.24,13.24,0,0,1,1.2,2,6,6,0,0,0,3.1,2.1c1.8.5,3.3-.3,3.5-2.2.2-2.3-1.4-4-2.2-6-.5-1.2-.7-2.7.7-3.4a11.69,11.69,0,0,1,2-.6,13.32,13.32,0,0,0,1.9-.5c-.6-.7-1.3-1.3-1.8-2a13.18,13.18,0,0,1-1.8-3.3c-.5-1.5-.8-2.9.8-3.8a16.27,16.27,0,0,1,2.3-1.1,3.55,3.55,0,0,1,1-.2h.5c.3-.2.4-.7.5-1a5.82,5.82,0,0,0,.3-1.9,15,15,0,0,0-.2-2.2c-2.6-1.3-5.6-3.3-5.3-6.2.2-1.9,1.6-3.5,2.5-5.1a9.3,9.3,0,0,0,1.2-2.7,17.11,17.11,0,0,0,.3-3.9,22,22,0,0,0-.7-3.7,4.2,4.2,0,0,0-.9-1.9c-.7-.8-2-.9-3-1.2a6.7,6.7,0,0,1-3.9-3.1,22.25,22.25,0,0,1-2.1-5.6c-.6-2-1.4-4-2-6a28.8,28.8,0,0,0-2.6-6.9c-2.2-3.6-6.9-4.5-10.6-5.7a37.86,37.86,0,0,1-11.9-5.9c-1.8-1.4-3.3-3.1-5.1-4.4A14,14,0,0,0,42.13.1c-.1,0-.2-.1-.3-.1a34.61,34.61,0,0,1-.3,3.7,48.39,48.39,0,0,1-2.2,8.3,88.56,88.56,0,0,1-3.4,8.5c-2.5,5.5-5.8,10.5-8.6,15.8a47.57,47.57,0,0,0-2.8,7.1,13.47,13.47,0,0,1-3.7,6,.65.65,0,0,1-1.1-.5,2.84,2.84,0,0,0-.9-1.9,9.17,9.17,0,0,1-1.3-2.1,49,49,0,0,1-2.4-5.2c-1.5-4.1-1.6-8.3-2-12.6A15.29,15.29,0,0,0,12,22.3c-1.6,0-3.2-.1-4.8-.1s-3.1,0-4.6.1A21.18,21.18,0,0,1,1.23,27.8Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cucuchunal