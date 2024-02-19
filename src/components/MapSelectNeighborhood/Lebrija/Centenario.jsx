import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cementenario = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.7 109.27">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('CENTENARIO', municipio.toUpperCase())}
              className="cls-1"
              d="M.6,99.27c1,.7,2,1.4,3,2.2a55.24,55.24,0,0,0,6.2,4.6,29.37,29.37,0,0,0,7.6,3c1.1.2,2.6.5,3.4-.5s.5-2.3.5-3.4c-.1-1.5-.2-3-.2-4.5a6.83,6.83,0,0,1,1-4,5,5,0,0,1,3.6-2.1c1.8-.3,3.6-.3,5.5-.5.9-.1,2.9-.3,2.6-1.6a.57.57,0,0,1,.4-.7,21.86,21.86,0,0,1,3.6-.3,12,12,0,0,0,3.3-.5c1.5-.7,2.4-2.1,4.1-2.5a.57.57,0,0,1,.7.4,12.06,12.06,0,0,0,2.8,4.9,14.58,14.58,0,0,1,2.8,4.6,19.75,19.75,0,0,0,.8,2.6,6.48,6.48,0,0,0,1.7,2c1.1.9,2,1.8,1.8,3.1a11.24,11.24,0,0,0,8.8.7c4.8-1.3,10.1-4.4,15.1-2.3a30.77,30.77,0,0,0,3.8,1.6,3.35,3.35,0,0,0,3-.8,7.93,7.93,0,0,1,2.5-1.5,3.74,3.74,0,0,1,2.9.5c.4-1.4,1-2.9,1.5-4.3a39.51,39.51,0,0,0,1.6-5.9A48.37,48.37,0,0,1,96.4,89a35,35,0,0,1,2.6-5.1,11,11,0,0,0,1.9-4.8,9.29,9.29,0,0,0-.5-2.9,7.71,7.71,0,0,0-1.4-2.1,4.23,4.23,0,0,1-.2-4.7,15.66,15.66,0,0,0,1.2-3,6.52,6.52,0,0,0,.2-2.4c-.2-1.9-1.1-3.7-1.4-5.6a19.89,19.89,0,0,1,.3-4.9c.2-1.3,1.1-3.6-.2-4.6-.8-.7-2-.7-2.2-1.9a3.23,3.23,0,0,1,1.5-3.3,5,5,0,0,1,3.4-.3c1.1.2,2.2.6,3.3.8a5.77,5.77,0,0,0,4.2-1c2.5-1.8,3.7-5.1,4-8.1a6,6,0,0,0-.1-2.3,7.46,7.46,0,0,1-.4-2.6,4,4,0,0,1,.9-2.1,15.76,15.76,0,0,1,1.5-1.2c1.2-1.4,1.3-3.5,1.4-5.3a25.22,25.22,0,0,1,1.1-6.1c.6-2.1,1.4-4,2.1-6.1.4-1.3.7-2.7,1.1-4a3.57,3.57,0,0,1-2.6-.7A11.79,11.79,0,0,1,115.9,2a4.35,4.35,0,0,0-3.1-1.8,18.14,18.14,0,0,0-8.6,1.1,20.21,20.21,0,0,1-3.2,1.1,1.88,1.88,0,0,0,.2.8,3.51,3.51,0,0,0,.8.5,3.31,3.31,0,0,1,1.9,2.4c.2,1.3,0,2.7.1,4a8.83,8.83,0,0,1,.2,2.8,1.3,1.3,0,0,1-1.4.9,19.63,19.63,0,0,1-4.1-.4c-1.7-.2-3.5-.5-5.3-.6a17,17,0,0,0-4.5,0c-.9.2-1.3.8-1.9,1.4a12.81,12.81,0,0,1-2.6,2.6,16,16,0,0,1-8,2.5c-3.2.2-6.4-.5-9.6-.7a14.11,14.11,0,0,0-4.6.3,38.37,38.37,0,0,0-3.5,1.8,9.88,9.88,0,0,1-3,.3c-1.2,0-2.4,0-3.6-.1-1.9-.2-4.3-.4-5.8-1.8a.52.52,0,0,1,0-.8c.9-1.1.6-2.5.1-3.7a12.79,12.79,0,0,0-2.3-3.7c.1,4.4.4,8.8.1,13.2-.1,2-.1,4.2-1,6-.7,1.6-2.1,2.8-2.9,4.3-.9,1.8-.8,4.1-1,6.1a20.48,20.48,0,0,1-1.6,6c-.8,1.8-2.2,3.2-3.2,4.8-1.2,2-2.1,4.1-3.2,6-2.2,3.8-4.1,7.7-6.2,11.6-2,3.7-4.8,6.8-7,10.3s-3.8,7.1-6.4,10.2a36.35,36.35,0,0,1-4.6,4.2c-.9.7-1.9,1.4-2.8,2.2-.8.6-1.5,1.3-2.2,1.9A6.06,6.06,0,0,1,0,98.77C.1,98.87.4,99.07.6,99.27Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Cementenario