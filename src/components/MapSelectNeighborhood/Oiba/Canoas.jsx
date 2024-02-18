import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Canoas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 102.54 182.9"
      >
        <path
          fill={getColorByCarencias('CANOAS', municipio.toUpperCase())}
          className="cls-1"
          d="M24.6,182.9c1.6-1.9,2.6-4.3,4.3-5.2,11-5.7,20.3-13.4,28.9-22.1,3.6-3.7,8.6-4.7,13.2-6.5,8.6-3.3,11.1-11.2,11.8-19.9.5-7.2,1.8-13.7,9.2-18,5.6-3.3,8-9.7,9.9-16.1a13.25,13.25,0,0,0-3.6-13.9c-3-3-7-4.9-8.2-9.6-1.3-5.1-2.8-10.1-4.5-15.1-1.4-4-2.2-10-5.1-11.4-6.2-3-6.1-7.6-6.7-12.8-.8-6.1-6-13.2-9.5-13.8-6.9-1.3-8.9-10-16.4-8.9-.4.1-1.2-1.9-1.6-3-3.4-7.8-15.8-9-20.8-1.9-2.2,3.1-4.6,5.1-8.4,4.2C13.1,7.9,9.7,6,11,.2,4.5,3.7,3.8,9.8.6,14.1c-.7.9-.9,1.9,0,2.6,4,3,4.7,8.4,8.3,11.5,5.9,5,6.3,11.5,4.6,17.8C11.7,52.5,12,59.3,9.7,65.8c-1.4,4-.7,8.6,4.5,11,2.6,1.2,4.1,4,4.7,7.1.8,3.9-.4,9.4,6.5,9.4,1.3,0,1.4,2.2,1.6,3.7.7,5.5-2.8,9-6.1,12.5-2,2.1-4.9,4.8-3.7,7.2,3.3,6.5,2,12.3-.3,18.5-.9,2.6-1.3,6.7.1,8.6,3.4,4.5.1,6.3-2.4,8.4-4,3.3-2.8,8.6-4.8,12.7-.9,1.8,3.1,3.5,5.9,4a3,3,0,0,1,2.4,3.3C17.2,177.9,21.5,180,24.6,182.9Z"
        />
      </svg>
    </div>
  )
}

export default Canoas