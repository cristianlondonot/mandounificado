import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Jaboncillo = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27.17 92.8"
      >
        <path
          fill={getColorByCarencias('JABONCILLO', municipio.toUpperCase())}
          className="cls-1"
          d="M25.77,11.8h-1.6V10.2h-1.6V8.6H21V7.2h-1.4V5.5H18l-1.6-1.6h-3.2V.8l-.8-.8a15.84,15.84,0,0,0-3.9,2.9,7.66,7.66,0,0,0-2.6,4.8c0,1.6.6,3.2.5,4.8s-1,3.1-1.3,4.8-.5,3.6-.8,5.4a15.44,15.44,0,0,0-.4,3A19.27,19.27,0,0,0,4,28.1c.1,1.7.4,3.5.4,5.2a12.41,12.41,0,0,1-1,5c-1.1,2.7-3.2,5.4-3,8.4a.52.52,0,0,1,.2.4,56.33,56.33,0,0,1-.4,7.1,54.25,54.25,0,0,0-.1,7c.1,2.4.4,4.7.7,7.1v.2c.2.1.4.2.4.5a21.64,21.64,0,0,1,0,3.6c.1.8.1,1.7.2,2.5a.47.47,0,0,1-.5.5h0a28.5,28.5,0,0,0-.3,2.9,14,14,0,0,0,.6,2.8,39.34,39.34,0,0,0,2,5.4c.8,1.6,1.9,3.1,2.8,4.6a10.93,10.93,0,0,1,.8,1.5v-.7h1.4l1.6-1.4,1.6-1.6V87.5h3.1V85.9h1.6l-1.6-1.4V81.3l1.6-1.6V73.4h-1.6V60.8l1.6-1.4V56.2l1.6-1.6V42l1.6-1.6,1.4-1.6V37.4h1.6V35.8l1.6-1.6V31.1h1.6V27.5h-1.3V24.4l1.6-1.6V19.6l1.4-1.4V13.5h-1.4Z"
        />
      </svg>
    </div>
  )
}

export default Jaboncillo