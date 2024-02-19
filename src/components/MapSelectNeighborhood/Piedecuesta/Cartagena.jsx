import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Cartagena = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.51 52.12">
        <path
          fill={getColorByCarencias('CARTAGENA', municipio.toUpperCase())}
          className="cls-1"
          d="M118.5,34.62c-2-2.9-3.5-5.8-5.7-8-3.1-3.1-7.4-3.5-9.2.9a13.09,13.09,0,0,1-9.7,8.1c-6.5,1.6-11.3,5.6-15,10.4-5.2,6.6-12.1,6.8-18.7,5.4-7.4-1.5-14.4-.1-21.6.2-2.1.1-4.6,1-6.1-.4-4.5-4.3-9.8-8.3-12.6-13.6a17.11,17.11,0,0,0-7.7-8c-6.4-3.2-9.2-7.4-12.2-17,6.5-2.7,13.5-3.7,18.7-9.9C22-1.08,28.9.12,34.1.42s10,1,15.1.1c1.8-.3,4.4-.8,5.6.2,7,5.6,16.3,7.2,23,13.2,3.1,2.7,5.8,4.5,10.5,2.8,6.3-2.3,12.8-4.2,19.9-1.1,5.1,2.3,10.9.5,15.8-1.3,6.2-2.4,4.4.3,3.8,4.1C126.6,25.12,121.9,29.32,118.5,34.62Z"
        />
      </svg>
    </div>
  )
}

export default Cartagena