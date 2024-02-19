import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElLeon = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 110.16 115.55"
      >
        <path
          fill={getColorByCarencias('EL LEON', municipio.toUpperCase())}
          className="cls-1"
          d="M83,67a23,23,0,0,0,2.7-2.7A26.62,26.62,0,0,1,91,59c2-1.3,4.3-2.3,6.1-3.9s2.8-3.9,4-6,2.5-4.4,3.6-6.7a21.9,21.9,0,0,0,1.2-3.3,16,16,0,0,0,.3-4.4c-.1-2.9-.5-5.8.1-8.7,1.1-4.7,4.1-9.2,3.8-14.2a5,5,0,0,0-2.5-4.3,18.67,18.67,0,0,0-5.2-1.7c-1.8-.4-3.6-.6-5.3-1.1a27.33,27.33,0,0,1-5.9-3c-2.2-1.2-4.5-2.1-7-1.4a10.17,10.17,0,0,0-5.1,3.8A45.13,45.13,0,0,0,76,9.75c-1,2-2.8,3.1-4.6,4.3a14,14,0,0,0-2.7,2.1,16.09,16.09,0,0,0-2.4,3.4c-1.4,2.4-2.5,4.8-4,7.1a7.41,7.41,0,0,1-4,3.2,16.78,16.78,0,0,1-4.5.4,10.15,10.15,0,0,0-1.9,2.7c-.6,1.3-1,2.6-1.7,3.8s-1.6,2.2-2.3,3.3a6.08,6.08,0,0,0-.9,1.8,7.43,7.43,0,0,0-.3,2.6,34,34,0,0,1-.3,4.5,24.3,24.3,0,0,1-1.3,3.8,20,20,0,0,1-2.2,3.7,29.77,29.77,0,0,1-2.3,2.7c-3.3,3.6-7.1,7.5-12.2,8a16,16,0,0,1-6.8-1.4c-2.3-.8-4.7-1.6-7.1-1a4.39,4.39,0,0,0-2.7,1.9,11.42,11.42,0,0,0-.9,2.6,15.46,15.46,0,0,0-.4,3.1,6.28,6.28,0,0,0,.3,1.9,8.16,8.16,0,0,1,1.4,2.6,13.75,13.75,0,0,1,.8,4.5,13.4,13.4,0,0,1-2.7,8.4,15.68,15.68,0,0,1-3.2,3.1c-1.3.9-2.6,1.7-3.8,2.7a9.91,9.91,0,0,0-2.9,3.8c-.5,1.1-.8,2.9.4,3.8a5.9,5.9,0,0,0,3.7.7,13.86,13.86,0,0,0,5.3-1c3.4-1.3,6.1-3.5,9-5.6,2.3-1.6,5.4-3.4,8.4-3a5.5,5.5,0,0,1,3.2,2,27,27,0,0,1,2.7,3.9c.8,1.3,1.6,2.6,2.3,4a26.24,26.24,0,0,0,3,5.1,23.41,23.41,0,0,1,2.9,3.5,3.7,3.7,0,0,1,.6,2.1,1.7,1.7,0,0,1-.1.7c.5-.3.9-.5,1.4-.8a14.28,14.28,0,0,0,2.6-2.3,128.67,128.67,0,0,1,11.4-10.7c1.8-1.6,3.8-3,5.2-4.9A38.69,38.69,0,0,0,66,91a55.1,55.1,0,0,1,3.4-5.8c1.3-1.7,2.9-3.3,4.4-4.9a26.59,26.59,0,0,0,3.9-5.4c.9-1.6,1.6-3.2,2.6-4.7a12.53,12.53,0,0,1,2.4-2.7A1.33,1.33,0,0,1,83,67Z"
        />
      </svg>
    </div>
  )
}

export default ElLeon