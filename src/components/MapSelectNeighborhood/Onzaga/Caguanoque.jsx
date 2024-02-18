import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Caguanoque = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 174.18 199.33"
      >
        <path
          fill={getColorByCarencias('CAGUANOQUE', municipio.toUpperCase())}
          className="cls-1"
          d="M152.81,95c-1.3,4.3-4.4,9-3.6,13,1.6,8.3,2.4,16.8,4.6,25a.43.43,0,0,0,.4.4c7.8,2.4,4.7,8.7,4.9,13.8.2,7.2,1.9,8.6,8.9,6.9.8-.2,1.2-.6,1.6.4,1.3,3,4,5.2,4.5,8.5.3,1.8-.4,2.9-1.7,4.7-3.5,4.4-8.3,8.5-7.6,15.4.7,6.1-4.7,9.3-8.1,12.9-3.8,4.1-9.2,4.5-14.1.5a6.1,6.1,0,0,0-4.9-1.2c-3.6.4-6-1.4-8.1-4.1-4-5.2-9.6-7.7-15.5-10.2-4.4-1.9-9.7-2-13.3-4.3-4.8-3.1-9.5-7.8-11.7-13.3-1.9-4.6-5.8-5.6-9.2-6.5-7.8-2.2-9.3-4.3-8.7-12.7.4-5.5,0-10.9,1.7-16.3.6-2-2.4-3.8-4.5-3.8-3-.1-2.9-1.7-2.9-3.7,0-5.2-2-9.6-4.3-14.2-1-2,.1-5.6-2.7-7.8-.7-.6-1-1.8-1.7-2.2-4.3-1.8-3.1-6.8-2.2-8.1,3.1-4.5.8-7.4-1.9-10.1-3.9-4.1-6.7-8.3-6.1-14.5.7-7.6-5.8-12.3-8.9-18.4-.9-1.9-1.4-2.2-.3-4.5,3.2-6.3-2.9-9.4-6-13.5-2.4-3.3-6.7-3.4-9.8-5.7C16,17.34,12.21,11.34,6,8c-.5-.3-.8-.9-1.3-1.2-2.1-1.2-4.9-1.7-4.7-5A2.7,2.7,0,0,1,2.11.24c3.1.2,6.5-1.4,9.2,1.7,4.2,4.8,8.6,9.5,13.1,13.9a6.26,6.26,0,0,0,5.9,1.7c6.2-1.5,12.9.4,18.7-4.1,2.7-2.2,6.5-.3,8.9,2.2,7.3,7.7,13.9,15.3,14.6,27s6.8,21.5,12.9,31.4c4,6.4,9.1,9.4,15.6,11.3,1.1.3,2.1.1,2.9,1.4,4.3,8.1,12.3,8,19.2,6.4,6.5-1.5,11.7,1,17.2,2.5C144.91,96.64,148.61,97.94,152.81,95Z"
        />
      </svg>
    </div>
  )
}

export default Caguanoque