import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Centro = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 219.1 197.45"
      >
        <path
          fill={getColorByCarencias('CENTRO', municipio.toUpperCase())}
          className="cls-1"
          d="M7.2,94.1A7.71,7.71,0,0,0,8.6,92c.8-1.5,1.3-3.2,2.2-4.7.7-1.2,1.7-2.4,3.1-2.3a4.64,4.64,0,0,1,4,3.1c.6,1.7-.2,3.5-1.1,5s-2.1,2.8-2.7,4.4.2,3.4.9,4.9c.7,1.3,1.8,2.8,1.7,4.3-.1,1.8-2.1,2.1-3.5,2.3a40.48,40.48,0,0,1-4.9.1c-.8,0-1.5-.1-1.9.5a11.11,11.11,0,0,0-.7,1.6,28.17,28.17,0,0,0-.7,3.1c-.1.5-.2.9-.3,1.4a29.31,29.31,0,0,1,.5,2.9c.3,1.6.5,3.2.7,4.8a35.49,35.49,0,0,0,.6,4.7,9.53,9.53,0,0,0,3.3,5.4c4.7,4,10.9,6.2,16.8,7.5,3.2.7,6.4,1.1,9.5,1.6a25.7,25.7,0,0,1,7.2,2,38,38,0,0,1,7.4,5.2,19.39,19.39,0,0,0,4.3,2.7,32.31,32.31,0,0,1,4.2,2c2.3,1.3,4.3,2.9,7,3.5,2.5.5,5.1.1,7.7-.2a43.51,43.51,0,0,1,10.2.1,20,20,0,0,1,7,2.7c2.7,1.6,5.3,3.2,8.1,4.6a71.2,71.2,0,0,1,8.5,4.8c1.3.9,2.6,2,3.9,2.9a28.17,28.17,0,0,0,3.8,2.1,41.46,41.46,0,0,0,7.8,2.4,71.67,71.67,0,0,1,8.9,2.1,50.34,50.34,0,0,1,8,4.1,14,14,0,0,0,3.3,1.5c1.1.3,2.3.5,3.4.7,1.7.3,4.3.5,5.5,2a.9.9,0,0,1,.1.5c2.3.8,4.4,2.2,6.8,2.7a16.14,16.14,0,0,0,4.9.2l5.2-.3a82.94,82.94,0,0,1,8.6-.2c5.1.2,10.7,1.1,14.7,4.6,4.6,1.5,9.8,1.9,14.6,2.1a31.45,31.45,0,0,0,10.6-1.2l1.3-1.3h-3v-3l-3-2.7h-3l-2.7-3h-6l-3-3h-8.6l-3-2.7h-2.7v2.7H172.5v-2.7h-3v-3l-6-6h-2.7l-6-3-3-3H128.5l-2.7-2.7h-3l-3-3-3-3-2.7-3v-3h-3v-2.7l-3-3-3-3V125.4h-2.7v-3h-3V107.8l3-2.7,2.7-3h3v-3h3V90.5h3v-6l2.7-2.7v-3l-2.7-3V64.2l-3-3-3-2.7v-3h-3v-3l-2.7-3V40.9l-3-3V29.4h3v-6h-3v-3h-3l-3-2.7-2.7-3v-3l-3-3h-3L81.7,6H79V3L76,0H67.6V6h-3l-3,2.7v3h-3v3H55.9v3h-9v2.7H44.2v6H32.6v-3h-3V38h3l2.7,3H32.6v2.7L35.3,47l3,2.7v3l-3,3-2.7,3h-3l-3,2.7-3,3H15v3H12.3V73H15v3H12.3L15,79H12.3v3l-3,2.7-3,3h-3v3l-3,3v2.7l-.3.4a12,12,0,0,0,4.2-.7A14.21,14.21,0,0,0,7.2,94.1Z"
        />
      </svg>
    </div>
  )
}

export default Centro