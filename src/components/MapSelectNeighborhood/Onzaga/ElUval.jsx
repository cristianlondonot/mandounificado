import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const ElUval = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92.45 100.69"
      >
        <path
          fill={getColorByCarencias('EL UVAL', municipio.toUpperCase())}
          className="cls-1"
          d="M55.55,94.73c-4.6-1.5-9.6-2.9-12.8-7.8-2.4-3.7-6.2-3.9-10.2-4.1-3.6-.2-5.2,1.8-6.5,4.7-1.5,3.5-4.4,6.4-5.9,9.7-1.9,4.1-5,3.8-7.6,2.9a25.91,25.91,0,0,1-9.7-5.8c-2.3-2.2-5.1-4.8.1-8.7,5.6-4.3,4.5-12.1,3.7-18.4-.7-5.2.5-9.7,1.8-14.3,1.7-6.3,2.9-12.3-2-17.9-1.8-2,.8-9.1,3.4-9.2,6.2-.2,11.4-2.2,15-7.3s9.2-4.2,14.1-5.4c1.9-.5,4.8,1.2,2.6-2.9-.6-1.1,1.3-.7,2.1-.9,4.6-1.1,9.1-2.3,12.6-5.8,5.1-5.2,11.5-3.2,17.6-2.9,1.6.1,1.1,1.5,1,2-1.6,7.4,3.6,10.6,8.6,13.9a13,13,0,0,1,2.2,1.9c10.2,10.3,7.9,10.8-.1,18.9a19,19,0,0,0-4.3,7c-3.2,8.6-5.2,17.3-4,26.7.3,2.8-1.5,6-3.3,8.7a19,19,0,0,0-2.3,3.9c-.9,1.9.9,5.1-1,6C65.85,91.63,61,92.93,55.55,94.73Z"
        />
      </svg>
    </div>
  )
}

export default ElUval