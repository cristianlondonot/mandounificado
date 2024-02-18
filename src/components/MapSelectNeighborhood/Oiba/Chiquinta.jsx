import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Chiquinta = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 139.56 133.73"
      >
        <path
          fill={getColorByCarencias('CHIQUINTA', municipio.toUpperCase())}
          className="cls-1"
          d="M139.29,33.63c-1-8.7-9.7-7.2-14.7-10.4-9.9-6.3-19-12.9-33-11.3-11.7,1.4-25.4,1.2-35.3-10.1-2.6-3-8.6-2.2-12.8,1.6-4.5,4.1,1.5,5.1,1.6,7.7a50.64,50.64,0,0,1-.3,8.7c-.8,5.4-5.6,9.3-6.9,13.7-3.3,11.9-10.7,13.9-21.2,13.3-9.6-.6-15,5.3-15.4,15C1,68.53,2.39,75.33.19,82c-.6,2.1.1,4.9,3.7,6.3A104.18,104.18,0,0,1,31,103.73c5.8,4.6,21.3,2.4,26.7-2.8,2.3-2.2,4.9-3.7,7.8-2.1,7.8,4.5,17.2,7.9,21.6,15.9,3.3,5.9,8.1,7.7,13.2,9.4,2.7.9,5.6,2.3,8.2,2.3,5.6,0,5.5,7.5,12,7.3-1.6-6.8,1.1-13.1.9-19.6s3.6-12.3,3.5-18.7c-.1-8.1,2.8-14.9,6.6-21.8,1.1-1.9,3.8-2.5,3.4-5.8-.7-5.1,1.3-9.9,2.5-14.8C139,46.73,140.09,40.23,139.29,33.63Z"
        />
      </svg>
    </div>
  )
}

export default Chiquinta