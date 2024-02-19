import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanPedro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.2 259.8" >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('SAN PEDRO', municipio.toUpperCase())}
              className="cls-1"
              d="M459.5,36.4l-3.1-3.1v3.1h-3.1l-2.8,3.1h-9.1V36.4h-6.3V30.5H422.9l-6.3-6.3-2.8-3.1-3.1-5.9-9.1-3.1L395.3,9h-3.1V3.1h-15V0h-6.3l-2.8,3.1V0h-6.3V3.1h-3.1V6.2h-5.9V9h-3.1l-3.1,3.1L343.8,9h-6.4l-3.1,3.1-2.9,3h-5c.7,4.7,1.4,9.4,2.5,14a41.82,41.82,0,0,0,2.2,7.1,38.74,38.74,0,0,0,3.4,5.5c2.5,3.3,5.1,6.7,5.7,10.9.7,5-.9,9.9-2.9,14.3-1,2.3-2.2,4.5-3.4,6.7s-2.4,4.5-3.8,6.7c-.7,1.1-1.4,2.1-2.1,3.2s-1.6,2.1-2.2,3.2a44.26,44.26,0,0,0-2.8,6.8,29.89,29.89,0,0,1-3.1,6.5,37.34,37.34,0,0,1-3.9,5c-2.9,3.2-6.1,6.1-9,9.2a37.88,37.88,0,0,0-7.7,10.6c-1.8,3.8-3.5,7.8-5.5,11.5a39.54,39.54,0,0,1-7.5,10.2,26.27,26.27,0,0,1-10.5,5.7,51.61,51.61,0,0,1-13,1.8,44.92,44.92,0,0,1-12.6-1.6,29.67,29.67,0,0,1-18.5-14.7c-2.2-4-3.8-8.4-5.6-12.5a100.68,100.68,0,0,0-6.6-12.6,28,28,0,0,0-4.1-5,43.45,43.45,0,0,0-5.4-4.2c-3.8-2.5-7.8-4.6-11.8-6.7-.2-.1-.2-.3-.2-.5a17.56,17.56,0,0,1-4-.6,19.85,19.85,0,0,1-4.7-2.1,30.57,30.57,0,0,0-5.1-2.6c-3.5-1.4-7.1-2.5-10.6-4.1a47.21,47.21,0,0,1-9.8-6.7c-3.2-2.6-6.3-5.4-9.4-8.1a124.13,124.13,0,0,0-9.8-7.8c-3.3-2.3-6.8-4.4-10.3-6.4s-7.1-4-10.6-6a59.63,59.63,0,0,1-10-6.6c-1.2-1-2.2-2.1-3.3-3.1s-2-1.7-3-2.6a12.52,12.52,0,0,1-2.3-2.3,3.36,3.36,0,0,1-.5-1.4h-.1a6.93,6.93,0,0,0-2.5,2c-.6.7-1.2,1.5-1.9,2.2a13.08,13.08,0,0,1-5.2,3.4c-2.1.8-4.2,1.2-6.3,2a39.45,39.45,0,0,1-5.7,2.2,36.1,36.1,0,0,1-13.9.2c-4.6-.7-9.2-1.8-13.9-2-2.3-.1-4.6,0-6.8-.3a40.13,40.13,0,0,0-6.8-1.1c-3.9.1-7.2,2.9-10,5.3-3.4,2.9-6.9,5.6-10.2,8.5-3.6,3.1-7.1,6.3-10.6,9.5C7.8,70.3,4.9,72.9,3,76.4a31.89,31.89,0,0,0-3,9.5,15.87,15.87,0,0,1,3.5,2.2,36.91,36.91,0,0,1,4.6-.8,60.24,60.24,0,0,0,10.3-1.9c3.1-1,6.1-2.3,9.1-3.4s6.4-1.6,9.6-2.4a97.22,97.22,0,0,0,9.6-2.9c6.3-2.2,12.5-4.8,18.7-7.1A81.34,81.34,0,0,1,80,65.4a40.21,40.21,0,0,1,12-.6c3.3.4,7.1,1.3,8.9,4.4a8.05,8.05,0,0,1,.5,6.1c-.7,2.6-2.4,4.7-3.8,7a17.94,17.94,0,0,0-2,3.9,27.2,27.2,0,0,0-1.3,5.1c-.6,3.2-.9,6.7-2.2,9.7-1.1,2.6-3,4.8-3.7,7.5a26.26,26.26,0,0,0-.6,4.8,24.42,24.42,0,0,0,.2,5.4c.4,2.8,1.5,5.4,2.3,8.1a17,17,0,0,1,.6,7.1,23.91,23.91,0,0,1,10.6-1.7c3,.1,7-.1,9.3,2.2a9.56,9.56,0,0,1,2.3,4.6c.5,1.8.8,3.7,1.2,5.5a32.55,32.55,0,0,0,1.5,4.4,20.61,20.61,0,0,0,2.1,4.2c1.7,2.5,4.6,4.3,7.7,3.7,2.5-.5,3.9-2.8,4.8-5,1.1-2.5,1.6-5.2,2.7-7.7a12.57,12.57,0,0,1,1.8-3.2,10.54,10.54,0,0,1,3.9-2.7c3.1-1.3,6.6-1.3,10-.9a42.58,42.58,0,0,1,4.9,1,19.17,19.17,0,0,1,5.5,2.4c1.5,1,2.9,2.4,4.6,3.1a2,2,0,0,0,2.2-.3,7.54,7.54,0,0,0,1-1.7c1.6-3.1,5.3-4.3,8.6-4.1a19.2,19.2,0,0,1,9.3,3.5,30.6,30.6,0,0,1,7.7,7.1,25,25,0,0,1,2.5,3.8c1.1,2.1,2.1,4.3,3.1,6.4a22.61,22.61,0,0,0,1.6,2.6,6,6,0,0,1,1.1,2.6c.3,1.9-.5,3.8-1.1,5.5-.7,1.9-1.6,3.9-1.2,6a15.48,15.48,0,0,0,2.2,5.1h0a29.66,29.66,0,0,1,5.2.8,48.16,48.16,0,0,0,5.2,1.1c3,.3,6.2-.5,9.1,1a35.17,35.17,0,0,1,7.4,5.2,24.52,24.52,0,0,1,5.3,6.7,9.67,9.67,0,0,1,.5,7.1c-.8,2.6-2.6,4.3-4.6,6a23,23,0,0,0-5.1,6.5,17.46,17.46,0,0,0-2.2,8c-.1,3.1,1.2,6,2.8,8.7a4.67,4.67,0,0,1,.9,3.8,13,13,0,0,1-1.4,3.2,14.09,14.09,0,0,1-1.8,4.4c-.8,1.3-1.7,2.6-2.4,4a8,8,0,0,0-.9,4.8,15.06,15.06,0,0,0,3.5,8.2l.2-.2a16.27,16.27,0,0,1,4.9-2.9,43.93,43.93,0,0,1,6.1-2.1,43.38,43.38,0,0,1,6.2-1.6,35.66,35.66,0,0,1,7.3-.2c2.5.1,5.1.3,7.6.5s5.3.5,7.9.8a35.89,35.89,0,0,0,.8-3.5c.3-2,.6-3.9.9-5.9s.8-3.9,1.3-5.9c.9-3.8,2-7.6,3-11.4s1.6-7.8,2.8-11.6a79.26,79.26,0,0,1,4.2-10.5c3.3-6.7,7.3-13.1,11.1-19.5A183.56,183.56,0,0,1,297.3,169a47.58,47.58,0,0,1,14.1-13.1c6.8-4,14.4-6.3,22-8.1,4-1,8-1.8,12-2.8s8.1-2.1,12.1-3.1,8-1.9,12-2.6a45.17,45.17,0,0,1,9.7-1.2,12.16,12.16,0,0,1,4.6.9,11.45,11.45,0,0,1,3.8,2.7,25.72,25.72,0,0,0,3.9,3.5,25.46,25.46,0,0,0,5,2.4,32.08,32.08,0,0,0,6.3,1.4l2-1.8,2.8-3.1,3.1-3.1V125.6l3.1-2.8v-3.7l2.8-6.3V110l3.1-3.1v-3.1h3.1v-3.1h3.1l3.1-2.8,2.8-3.1h3.1V85.7l3.1-3.1V67.1l3.1-6.3,2.8-3.1h12.2l3.1-2.8,3.1-6.3,3.1-5.9,2.8-3.1V36.5h-8.7Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SanPedro