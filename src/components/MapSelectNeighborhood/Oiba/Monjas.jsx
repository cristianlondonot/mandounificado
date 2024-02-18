import React from 'react'
import UseCarenciasPorVereda from '../../UseCarenciasPorVereda/UseCarenciasPorVereda'

const Monjas = ({municipio, filterMap}) => {
  const { getColorByCarencias } = UseCarenciasPorVereda(filterMap.toUpperCase());
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 193.52 188.03"
      >
        <path
          fill={getColorByCarencias('MONJAS', municipio.toUpperCase())}
          className="cls-1"
          d="M190.7,89.93c-2.8-2.9-9.1-1.6-8.9-7.9.2-5.2-2.8-7.6-7.8-8.3-4.4-.6-8.2-2.5-10-7,.9-6.7-2.4-4.7-5.7-2.8-4.7-1.2-10.2-2.4-10.8-7.9-.4-3.8-2.2-6-4.4-8.3-1.4-1.4-3.1-2.9-2.1-5,1.5-3.3-1.3-5-3-5.1-7.5-.3-7.9-5-7.5-10.6.3-3.9-.4-6.2-5-8-4.9-1.8-10.8-3.5-13.9-8.2-4.3-6.4-9.8-9.1-17.2-10.6-5.7-1.1-7.7,1.9-9.2,5.4-1.3,3-2.5,6.2-3.5,9.3-1.7,5.2-6.4,9.9-12.2,7.3-7.2-3.1-10.7.8-14.8,4.9-5.6,5.7-13.1,11-19.7,12.1-8.8,1.4-9.2,4.9-8.7,11.3a9.09,9.09,0,0,1-.6,3.6c-4,14.3-11.7,27.3-13.9,42.3a27.86,27.86,0,0,1-7.1,15.3,20.11,20.11,0,0,0-4.7,8.2c3.3,2.3,9.2,0,10.3,5,1.7,7.8,5,5.2,8.9,2.2,4.4-3.4,9.7-3.5,13.3-.3,3.8,3.3-1,6.2-2.8,9.1a4.56,4.56,0,0,0-.2,2.1c5.3,1.3,10.2-3.2,15.6.1,4.7,2.9,10,4.6,12.7,10,.2.5,1.9.6,2.7.3,5.1-1.6,10.8-1.9,15.4-3.5,7.1-2.5,7,.5,7.8,5.1,1,6.3,3.5,11.5,11.2,10,6.2-1.2,8.8.7,7.7,7.1-.5,3,1.6,4.1,3.9,5.3,3.7,2,10,2.2,8,9.3-.1.2-.3,1.8,1.1,1.1,5.7-3.1,4.4,3.5,6.6,5.2,2.9-3.8,2.9-3.8,2.6-7-.8-9.6,2.5-13.1,11.4-15.2,4.4-1,11.9-4.8,10.5-8.1-1.9-4.7-2-9.7-4.2-14.2-4-8.1-.4-15.3,8.5-17.3,1.5,1.5,3,1.4,4.5,0,2-1.8,3.6-3.6,6.5-4.7,4.3-1.6,7.9-4.7,11.6-8.3,6.1-6,8.5-15.7,18.2-18.5C195.4,93.93,192.5,91.83,190.7,89.93Z"
        />
      </svg>
    </div>
  )
}

export default Monjas