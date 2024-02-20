import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const PanamaSectorLasCruces = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 167.7 63.07"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill={getColorByCarencias('PANAMA SECTOR LAS CRUCES', municipio.toUpperCase())}
              className="cls-1"
              d="M85.6,46c-4.2.9-6.8,1.8-9.4,1.8-2,0-4.1-1.2-6.1-2.2a41.29,41.29,0,0,1-4.9-3.2c-.3,1.6-.3,3.5-1,4.9-1,1.9-2.3,4.5-4,4.9-5.9,1.5-10.2-.8-12.9-6.5-3.3-6.8-6.3-8.3-13.2-5.9-4.7,1.6-7.9.3-11.6-2.1-7.5-5-15.2-9.6-22.5-14.1,4.8-3.4,12.2-4.4,12.5-13.2,3.2,0,5.7-2.5,9.6.8s6.9-1.9,10.1-4c1.1-.7,2.3-1.2,3.4-1.9l1.2,3.3c.6,1.5,1,3.3,2.1,4.3.5.4,2.5-1,3.8-1.4,7.8-2.6,15.4-5.6,21.8-11.1.9-.7,2.8-.2,4.9-.3a23.5,23.5,0,0,0-1.8,3.5c-.8,3-.3,5.2,3.6,5.2,3.7,0,7.4.4,11.2.7a8.1,8.1,0,0,0,2.2,0C93,7,101.3,3.38,110,2.28c4.4-.6,9.3,3.2,14,5,.3.1.3.7.5,1,4.7,7.3,8.7,15.7,20.4,11.6-.3,4.1-1.2,7.2-.7,10a17.84,17.84,0,0,0,9.5,12.9,26,26,0,0,1,14,20.1c-5.6,1.2-7.7-3.5-10.7-6.7-2.7-2.9-5.5-5.8-8.4-8.5-4.7-4.3-10-3.5-15.8-2.5-4.6.8-9.4.3-14.1.2-2.3-.1-4.6-1.1-6.8-.9-6.6.5-12.5-.7-17-6-2.2-2.5-4.7-4.1-8-1.6C84.1,39,81.3,41.28,85.6,46Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default PanamaSectorLasCruces