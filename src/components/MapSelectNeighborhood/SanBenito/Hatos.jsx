import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Hatos = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 432.5 536.5"
      >
        <path
          fill={getColorByCarencias('HATOS', municipio.toUpperCase())}
          className="cls-1"
          d="M427.4,38.5V34.1H418v-5l-5-5V19.5c-1.7,0-3.3.1-5,.2-6.3.4-12.7,1.3-19,2-2.8.3-5.8.9-8.7.7a5.69,5.69,0,0,1-4.2-1.9,9.13,9.13,0,0,1-1.7-4.2,40.78,40.78,0,0,0-1.6-6c-1.5-3.6-4.5-6.5-5.1-10.3-5.9.5-8.7,6.1-12.8,9.7a55.25,55.25,0,0,1-7.9,5.8c-2.9,1.8-6,3.2-9,4.9a72.24,72.24,0,0,0-12.5,8.8,86.91,86.91,0,0,0-10.4,11.4c-1.8,2.3-3.6,4.6-5.5,6.9a65.15,65.15,0,0,0-5.5,7.2,26.44,26.44,0,0,0-3,8.7,23,23,0,0,1-3.1,8c-2.8,4.4-6.7,8.1-10.6,11.5-4.2,3.7-8.6,7.1-12.9,10.7s-8.1,7-11,11.6-5.2,9.3-8.7,13.3h.7c1-.1,1,1.5,0,1.6l-5.1.3a128.24,128.24,0,0,0-18.6,2.7c-3.1.7-6.2,1.5-9.2,2.5-2.8.9-5.6,1.9-8.4,2.7-5.2,1.5-11.1,2.8-14.8,6.9-4,4.3-6.4,10-9,15.2a183.05,183.05,0,0,1-9.9,16.4c-3.5,5.4-7,10.8-10.1,16.4-3.2,5.9-5.7,12.2-8.7,18.3s-6.5,12.2-10.1,18c-2.4,3.9-5.6,7.4-8.3,11.1a49.68,49.68,0,0,0-3.9,6.2,11.66,11.66,0,0,0-1.5,5.8v.1c.1.1.2.1.3.3a23.86,23.86,0,0,1,3,5.7,13.86,13.86,0,0,1-.1,10.4c-1.7,3.9-5.2,6.6-8.8,8.6-3.3,1.9-6.7,3.5-10.2,5.1a47.22,47.22,0,0,0-8.7,5.1,16.08,16.08,0,0,0-5.4,7.9,22.55,22.55,0,0,0-.8,5.8c0,2.1.3,4.2.2,6.3-.1,2.9-.8,6-2.9,8.2a13.8,13.8,0,0,1-7.7,3.6c-4.1.7-8.3.3-12.4.6a21.46,21.46,0,0,0-7.1,1.5,13.13,13.13,0,0,0-4.8,3.9,11,11,0,0,1-5.2,3.1c-2.2.6-4.4.4-6.7.5a10.49,10.49,0,0,0-6.9,2.7,25.49,25.49,0,0,0-4.7,5.7,31.28,31.28,0,0,0-3.4,6.2c-.7,2.2-1.1,4.4-1.9,6.5A11.14,11.14,0,0,1,40,345a45.91,45.91,0,0,0-5.1,3.5c-3.4,3.2-3.7,8.4-4.2,12.7a39.61,39.61,0,0,1-1.3,6.7,27,27,0,0,1-3.6,6.4c-2.9,4.3-6.2,8.3-8.9,12.7a40.35,40.35,0,0,0-3.6,7.2c-1,2.5-1.6,5.2-2.4,7.8a38.4,38.4,0,0,1-5.7,12.7c-2,2.6-4.1,5.2-5.2,8.3l3,6.7,9.9,9.9V444h5v5h9.4v5H41.6l9.9,5h5v4.4l4.4,5,5,5,9.9,4.4v5h9.4l5,5,5,5,4.4,5h9.9l9.4,4.4h24.2l5,5h14.3v5h24.2l5,9.4H196l9.9,9.9,9.4,5v-9.9l9.9-9.9v-4.4l5-5V483.1l4.4-5V463.8l5-4.4,5-5,5,5,4.4,4.4v5h9.9l9.4-9.4V425.2l5-5v-4.4l5-5v-5h19.3V381.2h23.7v-4.4h5v-5l-9.4-9.4v-5l-5-5V333.1l5-5v-9.4h-5v-5l-5-5h-4.4l-5-5h-5V289.4h5v-5h5v-5h4.4v-5l-4.4-4.4V251.2l4.4-5V222l-4.4-4.4h4.4v-5h5v-5h14.3v5h14.3l5-5v-9.4l5-5v-9.9l5-4.4h5l4.4-5h5v-5h5V154.6h5v-5l4.4-5v-4.4l5-5h5l5-5h9.4l5-5h4.4l5-4.4v-9.6l-5-5V82l5-5V72.6l4.4-5V43.4Z"
        />
      </svg>
    </div>
  )
}

export default Hatos