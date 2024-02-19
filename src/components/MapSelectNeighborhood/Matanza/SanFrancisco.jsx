import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const SanFrancisco = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 79 107.1"
      >
        <path
          fill={getColorByCarencias('SAN FRANCISCO', municipio.toUpperCase())}
          className="cls-1"
          d="M78.3,5.5a35.65,35.65,0,0,0-7.3-1c-2.6-.1-5.2-.5-7.8-.5a9.08,9.08,0,0,0-3.3.4c-1,.3-1.8.9-2.8,1.3a8.92,8.92,0,0,1-3.2.5c-1.2.1-2.3.1-3.5.1-2.6,0-5.1.1-7.7,0s-5-.8-7.4-.4c-1.9.4-3.5,1.4-5.3,1.8a6,6,0,0,1-5.3-1.5,24.05,24.05,0,0,1-2.1-2.4,12.21,12.21,0,0,0-2.5-2A17.65,17.65,0,0,0,15.6,0V1.4L14,3V6.2H10.9V7.6H9.3L7.7,9.2v1.6l1.6,1.6,1.6,1.4v11L9.3,26.4v9.5L7.7,37.3V47L4.6,50.1v1.6L3,53.1v3.2H1.4v1.6L0,59.3a.1.1,0,0,1,.1.1,3,3,0,0,0,.7.5.52.52,0,0,0,.4.2h.3a.37.37,0,0,1,.3.1c1.2.7,1.8,1.9,2.9,2.8,1.2,1.1,2.8.8,4.3.5s2.9-.4,4,.6c1.3,1.3,1.2,3.3,1.5,4.9a15.15,15.15,0,0,0,2.1,4.9,19.52,19.52,0,0,0,1.7,2.3c.5.5,1.1,1,1.6,1.5a6.66,6.66,0,0,1,2.2,3.8c.3,1.7.5,3.4.8,5.1a8,8,0,0,0,1.8,4.7,10.61,10.61,0,0,0,2,1.7c.7.6,1.3,1.2,1.9,1.8A25.07,25.07,0,0,0,33,98.3c1.5.9,3.2,1.7,4.8,2.5,2.9,1.3,5.9,2.6,8.7,4.2a19.57,19.57,0,0,1,3,2l.1.1h0c1.4-.7,2.2-2.2,3-3.4s2.1-2.4,3-3.7c.5-.7.9-1.4,1.4-2l1.5-1.8A21,21,0,0,0,60.7,92c.6-1.4,1.1-2.8,1.7-4.2a22.47,22.47,0,0,1,1.2-2.1,5.55,5.55,0,0,0,.6-2.2,5.09,5.09,0,0,1,.6-2.1A7.55,7.55,0,0,1,65.9,80a12.22,12.22,0,0,0,2.5-4.1c1.4-2.8,3.6-5.1,5.2-7.8-.1-.4-.1-.9-.2-1.3-.3-2.3-.6-4.6-.7-6.8a41.06,41.06,0,0,1,.1-7c.2-2.1.4-4.2.4-6.3a.77.77,0,0,1-.2-.3c-.6-3.8,2-6.8,3.2-10.2,1.3-3.6.2-7.3.2-11a45.11,45.11,0,0,1,.7-5.3,26.44,26.44,0,0,1,1.1-5.6,13.82,13.82,0,0,0,.8-2.7,21.05,21.05,0,0,0-.2-2.5A4.57,4.57,0,0,1,78.3,5.5Z"
        />
      </svg>
    </div>
  )
}

export default SanFrancisco