import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Pitones = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 158.46 132.44"
      >
        <path
          fill={getColorByCarencias('PITONES', municipio.toUpperCase())}
          className="cls-1"
          d="M.36,90.14l-.3,4.5c-.2,3.1,0,6,1.8,8.7a15,15,0,0,0,6.2,5.2c6.1,2.9,13.3,2.6,19.8,3.5,1.8.2,3.6.6,5.5.9a45.33,45.33,0,0,0,5.2.3,96.1,96.1,0,0,0,10.7-.7c6.7-.6,13.6-1.5,19.8-4.5,2.1-1,3.6-2.7,5.2-4.4a9.62,9.62,0,0,1,5.3-3.3,12.75,12.75,0,0,1,7.7,1.2c2.4,1.2,4.6,2.8,7.2,3.7a14.19,14.19,0,0,1,2.9,1,4.06,4.06,0,0,1,1.5,2.3,18.65,18.65,0,0,1,.4,3.2,2.72,2.72,0,0,0,1.1,2,12.57,12.57,0,0,0,3.8,1.5,22.38,22.38,0,0,1,3.6,1.4,15.23,15.23,0,0,1,3.4,2.2c1.1.9,2.1,2,3.3,2.9a13,13,0,0,0,6.3,2.3c1.4.2,2.8.3,4.2.4a19.93,19.93,0,0,1,3.4.5c2.5.8,3.8,3,5.4,4.9a17,17,0,0,0,2.8,2.6,6.37,6.37,0,0,0,.2-.7,10.14,10.14,0,0,1,1.8-3.2,25,25,0,0,1,6.6-5c2.8-1.7,5.4-3.7,8.4-5.1a28.42,28.42,0,0,1,4.9-1.7h0a.1.1,0,0,0-.1-.1.1.1,0,0,1-.1-.1,6.3,6.3,0,0,1-1.9-4.1,25.3,25.3,0,0,1-.1-5.5c.1-2,.1-3.9.1-5.9a44.76,44.76,0,0,0-.6-6.3,46.7,46.7,0,0,0-1.8-6.4c-1.5-4.2-3-8.3-4.1-12.6a38.89,38.89,0,0,1-1.6-12.7,19,19,0,0,1,1.6-6.1c1-2.1,2.4-3.9,3.3-6a18.58,18.58,0,0,0,1-5.8c.1-1.9.5-3.8,0-5.7-.8-3.1-3.5-5.1-6.2-6.3a46.81,46.81,0,0,0-9.7-2.8,54.73,54.73,0,0,1-5.5-1.3,12.46,12.46,0,0,1-4.4-2.7c-1.3-1.2-2.3-2.6-3.9-3.5a22.53,22.53,0,0,0-4.4-1.4,7.7,7.7,0,0,1-4.3-2.4,3.81,3.81,0,0,1-.6-3.3c.6-2.7,2.6-4.9,3.3-7.7a4.19,4.19,0,0,0-.6-3.9,11.42,11.42,0,0,0-4.2-2.6A19.54,19.54,0,0,0,109,.14a9.66,9.66,0,0,0-2.4-.1,1.15,1.15,0,0,0-.9.6,6.53,6.53,0,0,0,0,1.4,13.4,13.4,0,0,1-.1,2,4.18,4.18,0,0,1-3.1,3.6c-1.7.4-3.4-.3-5.1-.6-2.4-.4-4.9.4-7.2,1.1a42.22,42.22,0,0,1-6.9,1.4c-2.1.2-4.2.2-6.3.2-4.3.2-8.7.7-12,3.5a23.55,23.55,0,0,0-4.1,5.2,18.67,18.67,0,0,1-4.4,4.9,6.65,6.65,0,0,1-4.7,1.5,10.24,10.24,0,0,1-3.4-1c-.2.4-.5.8-.7,1.2a45.5,45.5,0,0,1-6.5,8,43,43,0,0,0-6.8,8c-.9,1.6-1.6,3.3-2.4,4.9s-1.4,3-2.2,4.5a51.58,51.58,0,0,1-5.1,8c-2.2,2.8-5,5-7.3,7.6a67,67,0,0,0-5.9,8.1c-3.7,5.9-6.7,11.5-11.1,16Z"
        />
      </svg>
    </div>
  )
}

export default Pitones