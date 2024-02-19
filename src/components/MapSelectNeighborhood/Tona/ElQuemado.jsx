import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElQuemado = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 237 220"
      >
        <path
          fill={getColorByCarencias('EL QUEMADO', municipio.toUpperCase())}
          className="cls-1"
          d="M16.6,174.2a27.92,27.92,0,0,0,9.1.5,27,27,0,0,0,4.9-1.2,11.67,11.67,0,0,1,3.7-.8,9.68,9.68,0,0,1,4.1.8,38.37,38.37,0,0,1,3.5,1.8,5.81,5.81,0,0,0,3.9.6,9.58,9.58,0,0,0,3.1-1.4c2-1.2,3.9-2.7,6.2-3.4a9.22,9.22,0,0,1,6.9,1c4.7,2.4,7.7,6.9,12,9.9a.62.62,0,0,1,.2.7,41,41,0,0,1-4.2,6.6,20.93,20.93,0,0,0-3.3,7.1c-.1.3-.3,1.3-.1,1.4s.8-.3,1-.5c3.3-2,6-5.1,9.6-6.6,2.3-.9,4.9-1.2,7.1.2,2,1.3,3.3,3.5,4.6,5.4a35.53,35.53,0,0,0,2.3,3.1,21.32,21.32,0,0,0,3.3,2.8,53.34,53.34,0,0,0,7.2,4.4,25.77,25.77,0,0,1,6.1,4.9,34.91,34.91,0,0,0,5.6,5.3c1.8,1.2,3.9,1.7,5.9,2.6l.9.6c.1-.1.2-.2.2-.3,1.5-2,1.9-4.8,2.4-7.1a20.59,20.59,0,0,1,2.5-7.2,8.67,8.67,0,0,1,3.2-2.8,17.2,17.2,0,0,1,4.6-1.1c4.2-.7,7.2-3.7,10.2-6.5a53.7,53.7,0,0,1,4.4-3.7,35.52,35.52,0,0,0,4.7-4,9.9,9.9,0,0,0,2.8-5.1c.4-2,.3-4,.6-6,1-7,8.1-10.4,12.7-14.9,2.8-2.8,4.5-6.3,6.3-9.7,2-3.7,4-7.4,6.1-11,4.2-7.1,8.9-14,14.9-19.8a197.21,197.21,0,0,0,16.8-18.6,232,232,0,0,0,14.5-21.1,83.71,83.71,0,0,0,5.8-11.6A64.5,64.5,0,0,0,237,58.1l-1.2,1.1h-6.6l-1.9-1.9V55.1h-2.2V52.9l-2.2-2.2V48.8L221,46.6l-2.2-2.2-2.2-1.9V40.3l-2.2-2.2L212.2,34l-1.9-2.2-2.2-2.2V27.4L204,23.3V21.1l-2.2-2.2V14.8h-2.2V12.6l-2.2-2.2V8.2l-1.9-1.9V4.1l-2.2-2.2V0h-6.6l-1.9,1.9H174.1V0h-17l-2.2,1.9H153l-2.2,2.2h-4.4V6.3h-1.9V8.2h-2.2v2.2l-4.4,4.4H136l-2.2,1.9h-8.5v2.2h-2.2l-2.2,2.2L119,23.3l-2.2,1.9v2.2l-2.2,2.2v2.2L112.4,34l-1.9,1.9v4.4l-2.2,2.2v1.9h-2.2v2.2H91.3V44.4H89.1l-2.2-1.9H82.8V40.3H78.4l-1.9-2.2H74.3l-2.2,2.2H69.9v2.2H68v1.9H65.8v2.2H63.6v2.2H61.4v1.9H57.5l-2.2,2.2v4.4l-2.2,1.9v2.2l-2.2,2.2-2.2,2.2v8.5H46.8v1.9l-2.2,2.2v2.2l-2.2,2.2-2.2,1.9H38.3v2.4H36.1L34,88.9H32v2.2H29.8l-2.2,2.2H23.5v2.2H21.3l-2.2,1.9-2.2,2.2v2.2H15v4.1H12.8v17l2.2,2.2V138H12.8v1.9l-2.2,2.2-2.2,2.2v6.3H6.5v2.2H4.3v4.1l-2.2,2.2v8.5H0v4.1C5.6,171.4,11.1,173.2,16.6,174.2Z"
        />
      </svg>
    </div>
  )
}

export default ElQuemado