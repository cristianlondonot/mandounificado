import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const LaLoma = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 259.3 289.4"
      >
        <path
          fill={getColorByCarencias('LA LOMA', municipio.toUpperCase())}
          className="cls-1"
          d="M113.8,277.3l2.6,2.6,2.3,5v4a22.75,22.75,0,0,1,2.6.2,19.67,19.67,0,0,0,4.2.1,30.88,30.88,0,0,1,4.3.1c1.2.1,2.4.3,3.4-.4a3.75,3.75,0,0,1,2.5-.8c.4,0,.8.2,1.2.2a6.11,6.11,0,0,0,1.3-.3,10.18,10.18,0,0,1,3.5-.3,4.84,4.84,0,0,0,3.4-1.3,2.13,2.13,0,0,0,.7-1.5,8,8,0,0,0-.3-1.5c-.1-1.1.6-1.9,1.2-2.8a4.71,4.71,0,0,1,1.5-1.9,5.09,5.09,0,0,1,2.2-.4,3.41,3.41,0,0,0,2.2-.7,16.18,16.18,0,0,0,1.9-1.8c.8-.7,1.7-1.2,2.5-1.9a7.89,7.89,0,0,0,2.1-2.7,9.93,9.93,0,0,0,1.2-3c.2-1.2.4-2.7,1.4-3.4.1-.4.3-.7.8-.5,2.7.8,3.7-3.1,4-5.1a8.08,8.08,0,0,0,.1-1.6,3.71,3.71,0,0,0-.4-1.5c-.3-1.1.8-2,1.5-2.6.9-.8,1.6-1.8,2.8-2.2,1.5-.5,3.2-.4,4.7-.8,1.8-.4,3.3-1.4,5.2-1.7a11.52,11.52,0,0,1,5.2.4c2.6.8,5.5,2.7,8.3,2.2-2.7-4-5.5-7.9-9.4-10.7-.4-.3-.4-1.1.2-1.2a34.92,34.92,0,0,1,10.2-.8,13.67,13.67,0,0,1,4,.9c.5.2,1.1.9,1.6.8s1-.5,1.6-.5a2.39,2.39,0,0,1,1.4.5c.3.2.5.5.8.6.5.3,1.3-.2,1.7-.5a7.46,7.46,0,0,0,.9-1.5,2.34,2.34,0,0,1,1-1.2c.2-.1.4,0,.6,0,.4,0,.2.1.4-.1.4-.6.6-1,1.3-1.3a3.28,3.28,0,0,1,1.7-.1c.6.1,1.1.2,1.3-.5a7.57,7.57,0,0,0,.1-1.5c0-1.2-.2-2.3-.2-3.5,0-.4.3-.6.7-.7.9,0,1.7-.3,2.5-.3a2,2,0,0,1,1.9.8,4,4,0,0,1,.2,1.9,19.42,19.42,0,0,1-.2,2.4c-.1.6-.2,1.7.3,2.2.2.3.7.1,1,.1a2.53,2.53,0,0,1,1.7.2c1.5.6,1.8,1.9,1.9,3.3.1.5.1,1.2.6,1.5a1.17,1.17,0,0,0,1.7-.4c.3-.6.3-1.3.7-1.8a2.34,2.34,0,0,1,1.8-1.1c1.6-.2,3.4,1.2,4.3,2.4a3.05,3.05,0,0,1,.5,2.6c-.2,1-.7,1.9-.3,2.9a2.83,2.83,0,0,0,2.5,1.7c.7-.1,1.1-.8,1.3-1.4a9.38,9.38,0,0,0,.6-5.2,12.47,12.47,0,0,0-1.5-2.8,2,2,0,0,1,.1-2.3c.6-.7,1.4-1,1.3-2.1a4.57,4.57,0,0,1-.2-2c.4-1.8,3.3-1.7,4.7-1.6a38.86,38.86,0,0,0,4.8.1,41.8,41.8,0,0,1,5-.2c1.1.1,2.5.2,3.1,1.3a17,17,0,0,1,.5,2.4c.3,1,.9,1,1.8.7a8,8,0,0,0,2.2-1.3c.2-.2.7-.5.7-.8s-.5-.7-.7-.9a8.92,8.92,0,0,1-1.5-2.7c-.3-.8-.6-1.9-1.4-2.3s-1.7-.3-2.4-.7a15.29,15.29,0,0,1-2.7-1.7h0a.63.63,0,0,1-.8-.2,7.31,7.31,0,0,1-.7-1.9c-.2-.7-.5-1.2-1.2-.7s-1,1.4-1.2,2.3a7,7,0,0,1-.9,2.4,4,4,0,0,1-4.9.9,21.48,21.48,0,0,0-2.6-1.4,20.61,20.61,0,0,0-2.6-.3,4.49,4.49,0,0,1-3.4-2,12.1,12.1,0,0,0-1.9-2,3.14,3.14,0,0,1-1.3-1.9c-.2-1.4.9-2.5,1.9-3.3s2.4-1.6,2.5-3c.1-1-.9-1.7-1.2-2.6-.2-.6-.4-1.5.1-1.9s1.2-.4,1.4-1.1a3,3,0,0,0-.3-1.6,14.77,14.77,0,0,0-2.1-.1,2.38,2.38,0,0,0-1.2.3c-.5.3-.5.7-.7,1.2a5.26,5.26,0,0,1-1.6,2,10.62,10.62,0,0,0-1.6,2.1,5.53,5.53,0,0,1-1.9,1.4,3.74,3.74,0,0,0-1.3,1.2c-.8,1.3-2.1,2.3-3.5,1.3a14.48,14.48,0,0,1-1.7-1.8c-.5-.5-.8-1-1.5-.6-1.2.8-2.2,1.6-3.8,1.3a8.08,8.08,0,0,1-3-1.7,5.07,5.07,0,0,0-1.5-.7c-.8-.1-1.1.3-1.4.9-.6,1.1-1.3,2.4-2.8,1.9-1.3-.4-1.2-1.9-1.8-2.8a.9.9,0,0,1-.1-.5c-.1-.1-.2-.2-.1-.4a3.49,3.49,0,0,1,.6-1.7c.3-.5.8-1.1.6-1.8-.1-.4-.3-.2-.5.1a10.63,10.63,0,0,0-.9,1.1,6.39,6.39,0,0,1-1.3,1.5c-1,.6-2.4.3-3.4.1-1.9-.3-4.2-.3-5.3-2.2-1.4-2.3-1.2-5.3-1.2-7.9,0-1,.5-2.9-.4-3.6-.4-.3-.9-.4-1.3-.7a5.73,5.73,0,0,1-1.1-1.1c-.6-.7-1-1.3-1.9-1.5s-2.2-.1-3.1-.6c-2.2-1-1.4-4.3-1.6-6.1a5.43,5.43,0,0,1,0-2.2,3.46,3.46,0,0,1,.8-1.6c.4-.6.3-.9-.1-1.5a2.28,2.28,0,0,1-.4-1.6,10.71,10.71,0,0,1,1.4-3.5c.3-.7.6-1-.1-1.5a15.37,15.37,0,0,1-3-2.2,11.3,11.3,0,0,1-1.9-3.2.75.75,0,0,1,.1-.8c1.1-.9,3-1.9,2.5-3.6v-.1c-.6-1.2-1.8-2-2.4-3.2a8.59,8.59,0,0,1-.5-3.9c0-2.7-1.2-5.3-1.4-8a6.08,6.08,0,0,1,.6-3.5c.6-1.1,1.7-2,1.8-3.2,0-.3.2-1,0-1.2a1.06,1.06,0,0,0-.5-.2,3.22,3.22,0,0,1-1.5-2.1,12.16,12.16,0,0,1,0-3.3c.1-1.1.1-2.4-.8-3.1-.3-.2-.5-.6-.2-.9,1.1-1.5,2.2-3.6,4.2-4,2.6-.5,5.4,1.2,7.6,2.3a8.67,8.67,0,0,0,4.4,1.3,12.8,12.8,0,0,0,3.9-.7,44.51,44.51,0,0,0,7.8-3.3,64.72,64.72,0,0,0,6.9-3.6c2.3-1.6,3.2-4,4.3-6.4a9.88,9.88,0,0,1,2.1-3.2,18.18,18.18,0,0,1,3.5-2.7c2.4-1.6,5.2-3.1,8.2-2.7s4.9,2.7,7.4,4.2a37.64,37.64,0,0,1,5.9,3.9,15.89,15.89,0,0,1,3.9,5.4c.5,1.1.8,2.2,1.4,3.3a2,2,0,0,0,2.4.8c3.2-.6,3.5-4,2.8-6.6-.4-1.7-1.1-3.3-1.6-4.9s-.7-3.1-1.2-4.7c-1-3.1-3.2-5.3-5.5-7.5a30,30,0,0,1-3-3.2c-.9-1.2-1.7-2.5-2.6-3.7a27.65,27.65,0,0,0-7.7-6.3,31,31,0,0,0-9.3-3.6c-1.6-.4-3.2-.7-4.8-1.1s-3-1-4.4-1.5c-4.9-1.9-9.8-3.3-14.6-5.4a35.07,35.07,0,0,1-12.7-8.5,19.58,19.58,0,0,1-4.4-7.3,12.21,12.21,0,0,1,.7-8.4c1.1-2.5,3-4.7,3.6-7.4a9.45,9.45,0,0,0-.8-6.8,5.58,5.58,0,0,0-2.5-2.3c-1.2-.6-2.6-.5-3.9-.7a3.29,3.29,0,0,1-2.8-1.7,17.39,17.39,0,0,0-1.1-1.8,11.51,11.51,0,0,0-1.7-1.4c-2.7-2.1-5.8-3.5-8.7-5.1-3.2-1.7-6.3-3.5-9.5-5.2-2.9-1.6-5.8-3.6-9-4.2-1.3-.3-2.7-.1-4-.6s-1.8-1.6-2.8-2.4c-1.9-1.7-4.6-.4-6.7,0a7.32,7.32,0,0,1-6.6-1.9,4.65,4.65,0,0,0-2.1-1.3,8.62,8.62,0,0,0-4.2.6,12.13,12.13,0,0,1-3.7,1.1,13,13,0,0,1-3.4-.2c-6-.9-11.4-3.6-16.9-6a23,23,0,0,0-5-1.8,23.93,23.93,0,0,1-4.6-1.2,7.13,7.13,0,0,1-3-2.4c-.5-.7-1-1.4-1.6-2.1L78.8,1.4V4L73.6,6.6,71,9.2H68.7l-2.6,2.3-7.6,2.6-2.6,7.6-2.6,7.6-5,5.2-5.2,5.2L40.5,42l-2.3,2.6-5.2,5-5,2.6-7.9,2.6-5,5L9.9,67.7,7.6,75.3,9.9,85.5v7.9l2.6,5L9.9,106l-5,5.2-2.6,2.6L0,116.1v20.4l2.3,10.2v10.5L4.9,170l2.6,17.8L9.8,193l2.6,7.6v15.5l2.6,5.2v2.3l2.6,2.6v2.6h2.3l5.2,2.6v2.3h2.6l5,2.6,2.6-2.6H50.8l2.3,2.6,5.2,2.6,2.3,2.6,5.2,2.3,2.6,2.6h2.3V249l2.6,2.6,2.6,2.3,2.6,5.2,2.3,2.6,2.6,2.3h17.8l5.2,2.6,5,2.6,2.6,2.6v5.5Z"
        />
      </svg>
    </div>
  )
}

export default LaLoma