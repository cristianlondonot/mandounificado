import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Gramalotico = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 172.03 172.38"
      >
        <path
          fill={getColorByCarencias('GRAMALOTICO', municipio.toUpperCase())}
          className="cls-1"
          d="M24.3,113.38l1.7,1.7,1.7,1.7,1.7,1.5h1.5l1.7,1.7h1.7l1.7,1.7h4.9l1.7,1.5h1.5l1.7,1.7h3.4l1.5,1.7v14.9H49.2v3.2l1.5,1.7v3.2h1.7V153h1.7l1.7,1.7h4.7v1.7h3.4v1.7h1.7v1.5h1.5l1.7,1.7h1.7V163h1.7v1.7h4.9l1.7,1.7h1.5v1.5H82v1.7h1.7v1.7h1.7l1,1.1A4.28,4.28,0,0,0,88,171a14.48,14.48,0,0,0,1.8-3.5,25.24,25.24,0,0,1,2.1-4,80.92,80.92,0,0,1,5.7-7.4,36.5,36.5,0,0,1,14.3-10.2c3.4-1.4,6.8-2.6,10.2-4.1a36.69,36.69,0,0,0,4.8-2.6,22.32,22.32,0,0,0,4-3.5,28.19,28.19,0,0,1,3.6-3.3,19.85,19.85,0,0,1,4.7-2.1,19,19,0,0,0,8-5.7,12.23,12.23,0,0,0,2.3-4.2c.4-1.3.5-2.6.9-3.9.9-2.8,3.3-4.3,5.4-6.1a8.07,8.07,0,0,0,2.5-3.3,18.32,18.32,0,0,0,.9-3.9,7.61,7.61,0,0,1,1-3,9.06,9.06,0,0,1,2.9-2.6c2.4-1.5,5.5-1.9,7.6-3.9a3.76,3.76,0,0,0,1.1-4.2c-.6-1.5-1.4-3-1.9-4.5a41.73,41.73,0,0,1-1.6-10.5c-.2-3.1-.6-6.2-.8-9.3-.1-2.7-.1-5.8-1.9-7.9-1.9-2.3-4.8-3.6-7.3-5.2-1.3-.9-2.6-1.9-3.9-2.7a55,55,0,0,0-4.8-2.8c-3.2-1.7-6.4-3.3-9.7-4.9l-.4.4a4.23,4.23,0,0,1-3.8.4c-3.1-1.1-5.9-3.6-8.1-6s-4.2-5.2-6.3-7.8a32.82,32.82,0,0,0-7.3-7.1,37.77,37.77,0,0,0-5.3-2.7,37.73,37.73,0,0,1-5.4-3.4c-3-2.1-6.2-4-9-6.4C91.8,7,89.2,4.38,86,3.28c-3.9-1.4-7.8.4-11.6,1.1a16.71,16.71,0,0,1-5.9.1,41.68,41.68,0,0,1-5.7-1.8C58.6,1.28,54.1.08,49.6,1c-3.9.9-8,3-12.1,2.3a10.88,10.88,0,0,1-4.2-2A11.25,11.25,0,0,0,31.2.08a1.32,1.32,0,0,0-1.2.2c-3.2,1.4-6.4,2.7-9.6,4.1a5.66,5.66,0,0,1,.3,1.8v3.4a37.71,37.71,0,0,0,1.1,7.5c.6,2.5,1.7,4.9,2.1,7.5.2,1.4.3,2.8.4,4.1a15,15,0,0,0,.4,4.2c.6,2.3,2,4.4,2.7,6.7,1.1,3.8,1.4,8.3-.5,11.9-2.1,3.8-6.8,5.2-10.8,6.2-2.1.5-4.3.9-6.4,1.2-1.7.3-3.6.1-5.3.6-2,.7-2.5,3.2-3,5A32.75,32.75,0,0,0,0,70.68H0v1.7H1.7v1.7H3.4l1.5,1.5v1.9H6.6V79H8.3l1.7,1.7v3.4l1.5,1.5v14.9l1.7,1.7v3.2h1.7l1.7,1.7,1.5,1.7,1.7,1.7h1.7V112h1.7v1.7h1.1Z"
        />
      </svg>
    </div>
  )
}

export default Gramalotico