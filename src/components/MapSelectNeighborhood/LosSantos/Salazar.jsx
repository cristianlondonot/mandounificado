import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Salazar = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 158.4 167"
      >
        <path
          fill={getColorByCarencias('SALAZAR', municipio.toUpperCase())}
          className="cls-1"
          d="M150.3,66c-2.1-4.9-4.4-10.8-9.5-13.1-1.5-.7-3.2-.8-4.8-1.4a18.53,18.53,0,0,1-5.1-3c-3.3-2.5-6.4-5.6-10.5-6.9-8.6-2.7-18.4,1.6-26.5-3.3-7.7-4.6-11-13.9-15.4-21.2C76,13,73.3,8.5,69.3,5.8a46.15,46.15,0,0,1-5-3.7A8.27,8.27,0,0,1,62.6,0l-.3.3a4,4,0,0,0-2.9,3.6c-.3,1.6-.3,3.3-1.1,4.8a10.42,10.42,0,0,0-1,1.8,5.83,5.83,0,0,0,.2,3.2,8.15,8.15,0,0,1,.6,3.1c-.1.8-.2,1.6-.4,2.5a47,47,0,0,1-1.2,5.1A6.63,6.63,0,0,1,54.2,28c-1.3,1-2.8,1.7-3.8,3-.6.8-.6,1.8-1.4,2.5-1.5,1.1-3.1.7-4.8.7a2.89,2.89,0,0,0-2.4,1.1,3.74,3.74,0,0,0-.5,1.8,5.94,5.94,0,0,1-1.6,3.8A5.3,5.3,0,0,1,35,42c-1.7-.3-3.6-1.1-5.3-.7a14.32,14.32,0,0,0-4.5,2.5c-1.6,1.1-3.1,2.3-4.8,3.3a54,54,0,0,1-4.9,2.3,16.61,16.61,0,0,0-5.1,3.1c-1,1-1.4,2.4-2.2,3.5C5.9,59,2.8,61.1,0,63.5a21.28,21.28,0,0,1,2.5,1.6,57.79,57.79,0,0,1,6,5.1A19.77,19.77,0,0,1,13,75.7a21.73,21.73,0,0,1,1.9,6.6,20.91,20.91,0,0,0,1.4,5.6,8.69,8.69,0,0,0,3.4,3.7c1.9,1.2,4,2.2,5.9,3.5a20.64,20.64,0,0,1,5.3,4.9,10.42,10.42,0,0,1,1.9,6.6c.1,2.4.1,5.2,1.8,7.1a14.34,14.34,0,0,0,2.3,2,12.28,12.28,0,0,1,2.5,2.6c1.5,2,2.5,4.2,4.4,5.8,2.1,1.7,4.7,2,7.2,2.8a21.51,21.51,0,0,1,6.6,4.1,34.57,34.57,0,0,0,3.1,2.2,20,20,0,0,1,2.4,1.6,7,7,0,0,1,1.7,2.5c.6,1.2,1.1,2.4,1.7,3.7,1,2.4,2.2,4.6,2.7,7.2s.6,5.1,1,7.6.8,5.3,2.6,7c1.6,1.5,3.8,2.1,5.7,3.1a9.06,9.06,0,0,1,1.6,1.1v-1.6h2.6v-2.3h2.6v-5.2h2.6v-2.6h2.6V153h2.3l2.6-2.6v-2.6H98v-5h2.3v-2.6h2.6v-2.6h2.6V135h2.6l2.3-2.3v-2.6l2.6-2.6v-3.2l2.6-2.6v-5h2.6v-2.6h2.3v-2.6h2.6v-2.6l2.6-2.3h2.6l2.3-2.6,7.9-7.6h5l2.6-2.6h5l2.6-5.2,2.6-2.3V83.7l2.1-4.2C154.3,76.2,152.3,70.7,150.3,66Z"
        />
      </svg>
    </div>
  )
}

export default Salazar